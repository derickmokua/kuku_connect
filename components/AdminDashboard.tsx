"use client";

import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { Users, Shield, Phone, BarChart } from 'lucide-react';
import { auth, db, appId } from '@/lib/firebase';

// Reuse the colors or import if strict consistency needed, 
// for now defining locally to be self-contained or could export from a constants file.
const customColors = {
    golden: '#F4B400',
    charcoal: '#1A1A1A',
    cream: '#FFF7E6',
    eggBg: '#FFF8F0',
    muted: '#6B6B6B',
    leaf: '#6CAF50',
    accent: '#F57C00'
};

// Mock products needed for calculation, or fetch them. 
// Ideally we fetch them just like KukuApp, but for now we'll fetch them.
// We can duplicate the fetch logic for products to be accurate.

const getPublicCollectionPath = (collectionName: string) => `/artifacts/${appId}/public/data/${collectionName}`;
const getLeadsCollectionPath = () => `/artifacts/${appId}/public/data/leads`;

export default function AdminDashboard() {
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const [leads, setLeads] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]); // Need products for live stock count

    useEffect(() => {
        if (!auth) {
            setIsAuthReady(true); // Offline mode
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                try {
                    await signInAnonymously(auth);
                } catch (error) {
                    console.error("Authentication failed:", error);
                }
            }
            setIsAuthReady(true);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!isAuthReady || !db) return;

        // Fetch Leads
        const leadsQuery = query(collection(db, getLeadsCollectionPath()));
        const unsubscribeLeads = onSnapshot(leadsQuery, (snapshot) => {
            const fetchedLeads = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            // @ts-ignore
            setLeads(fetchedLeads.sort((a, b) => b.createdAt?.toDate().getTime() - a.createdAt?.toDate().getTime()));
        }, (error) => {
            console.error("Error fetching leads:", error);
        });

        // Fetch Products for stats
        const productsQuery = query(collection(db, getPublicCollectionPath('products')));
        const unsubscribeProducts = onSnapshot(productsQuery, (snapshot) => {
            const fetchedProducts = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            setProducts(fetchedProducts);
        });

        return () => {
            unsubscribeLeads();
            unsubscribeProducts();
        };
    }, [isAuthReady]);

    const canView = userId && isAuthReady;

    if (!isAuthReady) return <div className="text-center p-12 text-gray-500">Loading authentication status...</div>;
    // In a real app we might redirect, but for now show access denied message
    if (!canView && auth) return <div className="text-center p-12 text-red-600 font-bold">Access Denied. Please ensure you are authenticated.</div>;

    const totalChicks = products.reduce((acc, p) => p.age !== 'Full-grown' ? acc + (p.stock || 0) : acc, 0);

    return (
        <section id="admin" className="py-20 px-4 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-4xl font-extrabold text-[#1A1A1A] flex items-center">
                        <BarChart className="w-8 h-8 mr-3" style={{ color: customColors.golden }} /> Admin Dashboard
                    </h1>
                    <a href="/" className="text-[#F4B400] hover:underline">Return to Home</a>
                </div>
                <p className="text-sm text-gray-500 mb-6">User ID: {userId || 'Offline'}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <StatCard title="Total Leads" value={leads.length} icon={<Users />} color="bg-amber-100" />
                    <StatCard title="Live Stock (Chicks)" value={totalChicks.toLocaleString('en-KE')} icon={<Shield />} color="bg-green-100" />
                    <StatCard title="WhatsApp/Call Link" value="Active" icon={<Phone />} color="bg-red-100" />
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl overflow-x-auto">
                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 border-b pb-3">Recent Inquiries ({leads.length})</h2>
                    {leads.length === 0 ? (
                        <p className="text-gray-500">No recent leads found.</p>
                    ) : (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name / Phone</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product / Quantity</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {leads.slice(0, 10).map(lead => (
                                    <tr key={lead.id} className="hover:bg-amber-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {lead.createdAt?.toDate ? (
                                                <>
                                                    {lead.createdAt.toDate().toLocaleDateString()}
                                                    <div className="text-xs">{lead.createdAt.toDate().toLocaleTimeString()}</div>
                                                </>
                                            ) : 'Pending...'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                                            <div className="text-sm text-gray-500">{lead.phone}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {lead.productName} ({lead.quantity || 'N/A'})
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {lead.source}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </section>
    );
}

const StatCard = ({ title, value, icon, color }: any) => (
    <div className={`p-6 rounded-2xl shadow-lg flex items-center justify-between transition-transform duration-300 hover:scale-[1.03] ${color}`}>
        <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-extrabold text-[#1A1A1A] mt-1">{value}</p>
        </div>
        <div className="p-3 rounded-full bg-[#F4B400] text-white">
            {React.cloneElement(icon, { className: "w-6 h-6" })}
        </div>
    </div>
);
