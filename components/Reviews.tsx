"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    Star,
    Quote,
    PenLine,
    X,
    Upload,
    Loader2,
    ImagePlus,
    CheckCircle2,
} from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

type Review = {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    photos?: string[];
    status?: "pending" | "approved" | "rejected";
    createdAt?: { toDate?: () => Date } | null;
    source?: "static" | "live";
};

const FALLBACK_REVIEWS: Review[] = [
    {
        id: "static-1",
        name: "John Kamau",
        role: "Poultry Farmer, Kitui",
        content:
            "The mortality rate of chicks from KukuConnect is widely low. I bought 200 chicks and raised 198 to maturity. Their vaccination schedule advice is spot on!",
        rating: 5,
        source: "static",
    },
    {
        id: "static-2",
        name: "Sarah Ochieng",
        role: "Small Scale Farmer",
        content:
            "I love the delivery service. They call you to confirm everything. The 3-week old chicks saved me so much brooding stress.",
        rating: 5,
        source: "static",
    },
    {
        id: "static-3",
        name: "David Njoroge",
        role: "Agri-Business Owner",
        content:
            "Professional team. The success schedule on the site helped me plan my bird management accurately. Highly recommend for serious farmers.",
        rating: 4,
        source: "static",
    },
];

const MAX_PHOTOS = 3;
const MAX_PHOTO_BYTES = 5 * 1024 * 1024; // 5MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

function StarRatingInput({
    value,
    onChange,
}: {
    value: number;
    onChange: (n: number) => void;
}) {
    const [hover, setHover] = useState(0);
    return (
        <div className="flex gap-1" role="radiogroup" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((n) => {
                const filled = n <= (hover || value);
                return (
                    <button
                        key={n}
                        type="button"
                        role="radio"
                        aria-checked={value === n}
                        aria-label={`${n} star${n > 1 ? "s" : ""}`}
                        onMouseEnter={() => setHover(n)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => onChange(n)}
                        className="p-0.5 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded"
                    >
                        <Star
                            className={`w-8 h-8 ${
                                filled
                                    ? "text-[#FFD54F] fill-[#FFD54F]"
                                    : "text-slate-300"
                            }`}
                        />
                    </button>
                );
            })}
        </div>
    );
}

function ReviewCard({ review, idx }: { review: Review; idx: number }) {
    const [lightbox, setLightbox] = useState<string | null>(null);

    return (
        <>
            <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(idx * 0.08, 0.4), duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-yellow/20 transition-all duration-300 border border-slate-200 relative group overflow-hidden hover:-translate-y-2 flex flex-col"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-8 right-8 text-slate-200 group-hover:text-brand-yellow/20 transition-colors">
                    <Quote className="w-12 h-12" />
                </div>

                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${
                                i < review.rating
                                    ? "text-[#FFD54F] fill-[#FFD54F]"
                                    : "text-slate-200"
                            }`}
                        />
                    ))}
                </div>

                <p className="text-surface-dark/80 mb-6 leading-relaxed relative z-10 font-medium flex-1">
                    &ldquo;{review.content}&rdquo;
                </p>

                {review.photos && review.photos.length > 0 && (
                    <div className="flex gap-2 mb-6 relative z-10 flex-wrap">
                        {review.photos.map((url, i) => (
                            <button
                                key={`${review.id}-photo-${i}`}
                                type="button"
                                onClick={() => setLightbox(url)}
                                className="relative w-16 h-16 rounded-xl overflow-hidden border border-slate-200 hover:border-brand-yellow transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={url}
                                    alt={`Photo from ${review.name}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </button>
                        ))}
                    </div>
                )}

                <div className="flex items-center gap-4 mt-auto relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-dark to-brand-hover rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                        {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                        <h3 className="font-bold text-surface-dark truncate">{review.name}</h3>
                        <p className="text-xs text-slate-600 font-bold uppercase tracking-wide truncate">
                            {review.role}
                        </p>
                    </div>
                </div>
            </m.div>

            <AnimatePresence>
                {lightbox && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
                        onClick={() => setLightbox(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Photo preview"
                    >
                        <button
                            type="button"
                            onClick={() => setLightbox(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={lightbox}
                            alt="Review photo full size"
                            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default function Reviews() {
    const [liveReviews, setLiveReviews] = useState<Review[]>([]);
    const [loadingList, setLoadingList] = useState(true);
    const [formOpen, setFormOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [form, setForm] = useState({
        name: "",
        role: "",
        content: "",
        rating: 5,
        phone: "",
    });
    const [photoFiles, setPhotoFiles] = useState<File[]>([]);
    const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Load approved reviews from Firestore
    useEffect(() => {
        let unsub: (() => void) | undefined;

        (async () => {
            try {
                const { db, getPublicCollectionPath } = await import("@/lib/firebase/client");
                const { collection, query, where, onSnapshot, orderBy, limit } = await import(
                    "firebase/firestore"
                );

                if (!db) {
                    setLoadingList(false);
                    return;
                }

                // Prefer ordered approved reviews; fall back if composite index missing
                try {
                    const q = query(
                        collection(db, getPublicCollectionPath("reviews")),
                        where("status", "==", "approved"),
                        orderBy("createdAt", "desc"),
                        limit(24)
                    );
                    unsub = onSnapshot(
                        q,
                        (snap) => {
                            setLiveReviews(
                                snap.docs.map((d) => ({
                                    id: d.id,
                                    ...(d.data() as Omit<Review, "id">),
                                    source: "live" as const,
                                }))
                            );
                            setLoadingList(false);
                        },
                        async () => {
                            // Fallback without orderBy (no index required)
                            const simple = query(
                                collection(db, getPublicCollectionPath("reviews")),
                                where("status", "==", "approved"),
                                limit(24)
                            );
                            unsub = onSnapshot(simple, (snap) => {
                                const rows = snap.docs.map((d) => ({
                                    id: d.id,
                                    ...(d.data() as Omit<Review, "id">),
                                    source: "live" as const,
                                }));
                                rows.sort((a, b) => {
                                    const ta = a.createdAt?.toDate?.()?.getTime?.() ?? 0;
                                    const tb = b.createdAt?.toDate?.()?.getTime?.() ?? 0;
                                    return tb - ta;
                                });
                                setLiveReviews(rows);
                                setLoadingList(false);
                            });
                        }
                    );
                } catch {
                    setLoadingList(false);
                }
            } catch (err) {
                console.error("Failed to load reviews:", err);
                setLoadingList(false);
            }
        })();

        return () => {
            if (unsub) unsub();
        };
    }, []);

    const displayed = useMemo(() => {
        if (liveReviews.length > 0) return liveReviews;
        return FALLBACK_REVIEWS;
    }, [liveReviews]);

    const averageRating = useMemo(() => {
        if (displayed.length === 0) return 0;
        const sum = displayed.reduce((acc, r) => acc + (Number(r.rating) || 0), 0);
        return Math.round((sum / displayed.length) * 10) / 10;
    }, [displayed]);

    // Cleanup object URLs
    useEffect(() => {
        return () => {
            photoPreviews.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [photoPreviews]);

    const resetForm = () => {
        setForm({ name: "", role: "", content: "", rating: 5, phone: "" });
        photoPreviews.forEach((url) => URL.revokeObjectURL(url));
        setPhotoFiles([]);
        setPhotoPreviews([]);
        setSubmitStatus("idle");
        setErrorMsg("");
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const closeForm = () => {
        setFormOpen(false);
        // Keep success state briefly visible if just submitted; otherwise reset
        if (submitStatus !== "success") resetForm();
        else setTimeout(resetForm, 300);
    };

    const handlePhotosSelected = (files: FileList | null) => {
        if (!files?.length) return;
        setErrorMsg("");

        const incoming = Array.from(files);
        const next: File[] = [...photoFiles];
        const nextPreviews: string[] = [...photoPreviews];

        for (const file of incoming) {
            if (next.length >= MAX_PHOTOS) {
                setErrorMsg(`You can upload up to ${MAX_PHOTOS} photos.`);
                break;
            }
            if (!ACCEPTED_TYPES.includes(file.type) && !file.type.startsWith("image/")) {
                setErrorMsg("Please upload image files only (JPG, PNG, or WebP).");
                continue;
            }
            if (file.size > MAX_PHOTO_BYTES) {
                setErrorMsg("Each photo must be under 5MB.");
                continue;
            }
            next.push(file);
            nextPreviews.push(URL.createObjectURL(file));
        }

        setPhotoFiles(next);
        setPhotoPreviews(nextPreviews);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const removePhoto = (index: number) => {
        URL.revokeObjectURL(photoPreviews[index]);
        setPhotoFiles((prev) => prev.filter((_, i) => i !== index));
        setPhotoPreviews((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name.trim() || !form.content.trim() || form.rating < 1) return;

        setSubmitting(true);
        setSubmitStatus("idle");
        setErrorMsg("");

        try {
            const { db, storage, getPublicCollectionPath } = await import(
                "@/lib/firebase/client"
            );
            const { addDoc, collection, serverTimestamp } = await import("firebase/firestore");
            const { ref, uploadBytes, getDownloadURL } = await import("firebase/storage");
            const { signInAnonymously } = await import("firebase/auth");
            const { auth } = await import("@/lib/firebase/client");

            // Anonymous auth helps Storage rules that require auth
            if (auth && !auth.currentUser) {
                try {
                    await signInAnonymously(auth);
                } catch (authErr) {
                    console.warn("Anonymous auth skipped:", authErr);
                }
            }

            const photoUrls: string[] = [];
            for (const file of photoFiles) {
                const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
                const path = `reviews/${Date.now()}_${Math.random().toString(36).slice(2, 8)}_${safeName}`;
                const storageRef = ref(storage, path);
                const snap = await uploadBytes(storageRef, file, {
                    contentType: file.type || "image/jpeg",
                    customMetadata: { uploadedBy: "customer-review" },
                });
                const url = await getDownloadURL(snap.ref);
                photoUrls.push(url);
            }

            await addDoc(collection(db, getPublicCollectionPath("reviews")), {
                name: form.name.trim().slice(0, 80),
                role: (form.role.trim() || "KukuConnect Customer").slice(0, 100),
                content: form.content.trim().slice(0, 1000),
                rating: form.rating,
                phone: form.phone.trim().slice(0, 30) || null,
                photos: photoUrls,
                status: "pending",
                createdAt: serverTimestamp(),
            });

            setSubmitStatus("success");
            photoPreviews.forEach((url) => URL.revokeObjectURL(url));
            setPhotoFiles([]);
            setPhotoPreviews([]);
            setForm({ name: "", role: "", content: "", rating: 5, phone: "" });
        } catch (err) {
            console.error("Review submit failed:", err);
            setSubmitStatus("error");
            setErrorMsg(
                "Could not submit your review. Please check your connection and try again, or WhatsApp us."
            );
        } finally {
            setSubmitting(false);
        }
    };

    // Escape to close modal
    useEffect(() => {
        if (!formOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeForm();
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formOpen]);

    return (
        <section id="reviews" className="py-24 px-4 bg-surface-light">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-brand-dark font-bold tracking-wider uppercase text-sm">
                        Flock Feedback
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-surface-dark mt-2 mb-4">
                        Happy Farmers
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium mb-6">
                        Don&apos;t just take our word for it. Hear from successful farmers in our
                        community, and share your own story.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {!loadingList && displayed.length > 0 && (
                            <div className="flex items-center gap-2 text-slate-700 font-semibold">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${
                                                i < Math.round(averageRating)
                                                    ? "text-[#FFD54F] fill-[#FFD54F]"
                                                    : "text-slate-200"
                                            }`}
                                        />
                                    ))}
                                </div>
                                <span>
                                    {averageRating}/5 · {displayed.length} review
                                    {displayed.length !== 1 ? "s" : ""}
                                </span>
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={() => {
                                resetForm();
                                setFormOpen(true);
                            }}
                            className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-hover text-white px-7 py-3.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:shadow-brand-dark/25 hover:-translate-y-0.5"
                        >
                            <PenLine className="w-4 h-4" />
                            Review Us
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayed.map((review, idx) => (
                        <ReviewCard key={review.id} review={review} idx={idx} />
                    ))}
                </div>

                {liveReviews.length === 0 && !loadingList && (
                    <p className="text-center text-slate-500 text-sm mt-10 font-medium">
                        Be the next farmer to leave a review and tap{" "}
                        <button
                            type="button"
                            onClick={() => {
                                resetForm();
                                setFormOpen(true);
                            }}
                            className="text-brand-dark font-bold underline underline-offset-2"
                        >
                            Review Us
                        </button>
                        .
                    </p>
                )}
            </div>

            {/* Review form modal */}
            <AnimatePresence>
                {formOpen && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-4"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="review-form-title"
                    >
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={closeForm}
                        />
                        <m.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 40, opacity: 0 }}
                            transition={{ type: "spring", damping: 28, stiffness: 320 }}
                            className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-100"
                        >
                            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
                                <div>
                                    <h3
                                        id="review-form-title"
                                        className="text-xl font-extrabold text-surface-dark"
                                    >
                                        Leave a Review
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium">
                                        Share your KukuConnect experience
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={closeForm}
                                    className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
                                    aria-label="Close form"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-6">
                                {submitStatus === "success" ? (
                                    <div className="text-center py-10 px-4">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
                                            <CheckCircle2 className="w-9 h-9 text-green-600" />
                                        </div>
                                        <h4 className="text-2xl font-extrabold text-surface-dark mb-2">
                                            Asante!
                                        </h4>
                                        <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                                            Your review was submitted. It will appear on the site
                                            after our team verifies it. This usually happens within a day.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={closeForm}
                                            className="px-8 py-3 bg-brand-dark text-white rounded-full font-bold hover:bg-brand-hover transition"
                                        >
                                            Done
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                                                Your rating
                                            </label>
                                            <StarRatingInput
                                                value={form.rating}
                                                onChange={(rating) =>
                                                    setForm((f) => ({ ...f, rating }))
                                                }
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="review-name"
                                                className="text-sm font-bold text-slate-600 uppercase tracking-wider"
                                            >
                                                Your name
                                            </label>
                                            <input
                                                id="review-name"
                                                required
                                                maxLength={80}
                                                value={form.name}
                                                onChange={(e) =>
                                                    setForm((f) => ({
                                                        ...f,
                                                        name: e.target.value,
                                                    }))
                                                }
                                                className="w-full px-4 py-3.5 bg-surface-light border-2 border-slate-200 rounded-2xl focus:border-brand-dark outline-none text-surface-dark font-medium transition placeholder-slate-400"
                                                placeholder="e.g. Jane Mwikali"
                                                autoComplete="name"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="review-role"
                                                className="text-sm font-bold text-slate-600 uppercase tracking-wider"
                                            >
                                                Location / farm type{" "}
                                                <span className="text-slate-400 normal-case font-medium">
                                                    (optional)
                                                </span>
                                            </label>
                                            <input
                                                id="review-role"
                                                maxLength={100}
                                                value={form.role}
                                                onChange={(e) =>
                                                    setForm((f) => ({
                                                        ...f,
                                                        role: e.target.value,
                                                    }))
                                                }
                                                className="w-full px-4 py-3.5 bg-surface-light border-2 border-slate-200 rounded-2xl focus:border-brand-dark outline-none text-surface-dark font-medium transition placeholder-slate-400"
                                                placeholder="e.g. Poultry Farmer, Kitui"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="review-content"
                                                className="text-sm font-bold text-slate-600 uppercase tracking-wider"
                                            >
                                                Your review
                                            </label>
                                            <textarea
                                                id="review-content"
                                                required
                                                rows={4}
                                                maxLength={1000}
                                                value={form.content}
                                                onChange={(e) =>
                                                    setForm((f) => ({
                                                        ...f,
                                                        content: e.target.value,
                                                    }))
                                                }
                                                className="w-full px-4 py-3.5 bg-surface-light border-2 border-slate-200 rounded-2xl focus:border-brand-dark outline-none text-surface-dark font-medium transition resize-none placeholder-slate-400"
                                                placeholder="Tell others about the chicks, delivery, support…"
                                            />
                                            <p className="text-xs text-slate-400 text-right">
                                                {form.content.length}/1000
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="review-phone"
                                                className="text-sm font-bold text-slate-600 uppercase tracking-wider"
                                            >
                                                Phone{" "}
                                                <span className="text-slate-400 normal-case font-medium">
                                                    (optional, not shown publicly)
                                                </span>
                                            </label>
                                            <input
                                                id="review-phone"
                                                type="tel"
                                                maxLength={30}
                                                value={form.phone}
                                                onChange={(e) =>
                                                    setForm((f) => ({
                                                        ...f,
                                                        phone: e.target.value,
                                                    }))
                                                }
                                                className="w-full px-4 py-3.5 bg-surface-light border-2 border-slate-200 rounded-2xl focus:border-brand-dark outline-none text-surface-dark font-medium transition placeholder-slate-400"
                                                placeholder="07XX XXX XXX"
                                                autoComplete="tel"
                                            />
                                        </div>

                                        {/* Photo upload */}
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                                                Photos{" "}
                                                <span className="text-slate-400 normal-case font-medium">
                                                    (optional, up to {MAX_PHOTOS})
                                                </span>
                                            </label>

                                            {photoPreviews.length > 0 && (
                                                <div className="flex flex-wrap gap-3">
                                                    {photoPreviews.map((src, i) => (
                                                        <div
                                                            key={src}
                                                            className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 group"
                                                        >
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img
                                                                src={src}
                                                                alt={`Upload preview ${i + 1}`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => removePhoto(i)}
                                                                className="absolute top-1 right-1 p-0.5 bg-black/60 rounded-full text-white opacity-90 hover:bg-red-600"
                                                                aria-label={`Remove photo ${i + 1}`}
                                                            >
                                                                <X className="w-3.5 h-3.5" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {photoFiles.length < MAX_PHOTOS && (
                                                <button
                                                    type="button"
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className="w-full flex flex-col items-center justify-center gap-2 py-6 px-4 border-2 border-dashed border-slate-200 rounded-2xl hover:border-brand-dark hover:bg-brand-dark/5 transition text-slate-500 hover:text-brand-dark"
                                                >
                                                    <ImagePlus className="w-7 h-7" />
                                                    <span className="text-sm font-bold">
                                                        Add photos of your flock
                                                    </span>
                                                    <span className="text-xs">
                                                        JPG, PNG or WebP · max 5MB each
                                                    </span>
                                                </button>
                                            )}
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept="image/jpeg,image/png,image/webp,image/*"
                                                multiple
                                                className="hidden"
                                                onChange={(e) =>
                                                    handlePhotosSelected(e.target.files)
                                                }
                                            />
                                        </div>

                                        {(errorMsg || submitStatus === "error") && (
                                            <p className="text-red-600 text-sm font-bold bg-red-50 py-3 px-4 rounded-xl border border-red-100">
                                                {errorMsg ||
                                                    "Something went wrong. Please try again."}
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="w-full py-4 bg-brand-dark text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-brand-dark/20 transition flex items-center justify-center gap-3 disabled:opacity-70 hover:-translate-y-0.5"
                                        >
                                            {submitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    {photoFiles.length > 0
                                                        ? "Uploading photos…"
                                                        : "Submitting…"}
                                                </>
                                            ) : (
                                                <>
                                                    <Upload className="w-5 h-5" />
                                                    Submit review
                                                </>
                                            )}
                                        </button>

                                        <p className="text-xs text-slate-400 text-center leading-relaxed">
                                            Reviews are checked before publishing. Photos help other
                                            farmers see real results.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
        </section>
    );
}
