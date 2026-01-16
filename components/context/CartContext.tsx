"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: any, quantity?: number) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("kuku-cart");
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("kuku-cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: any, quantity = 1) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            // Handle cases where product price might be a string range or number
            // We'll assume for the cart we use the base price or a fixed number if it's a range for now
            // This logic handles the existing "mockProducts" structure where price is a number
            let price = typeof product.price === 'number' ? product.price : 0;

            return [...prev, {
                id: product.id,
                title: product.title,
                price,
                image: product.image,
                quantity
            }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, qty: number) => {
        if (qty < 1) return;
        setCart((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
        );
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
                cartCount,
                isCartOpen,
                setIsCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};
