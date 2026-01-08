import React, { act } from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import { CartProvider, useCart } from '../CartContext';

// Mock localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
            store[key] = value.toString();
        },
        removeItem: (key: string) => {
            delete store[key];
        },
        clear: () => {
            store = {};
        }
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
});

describe('CartContext', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <CartProvider>{children}</CartProvider>
    );

    it('provides initial empty cart state', () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        expect(result.current.items).toEqual([]);
        expect(result.current.cartTotal).toBe(0);
        expect(result.current.cartCount).toBe(0);
    });

    it('adds items to cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        const item = {
            id: 1,
            name: 'Test Burger',
            price: 10,
            image: '/test.jpg',
            description: 'Delicious'
        };

        act(() => {
            result.current.addToCart(item);
        });

        expect(result.current.items).toHaveLength(1);
        expect(result.current.items[0]).toMatchObject({ ...item, quantity: 1 });
        expect(result.current.cartCount).toBe(1);
        expect(result.current.cartTotal).toBe(10);
    });

    it('increments quantity when adding existing item', () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        const item = {
            id: 1,
            name: 'Test Burger',
            price: 10,
            image: '/test.jpg',
            description: 'Delicious'
        };

        act(() => {
            result.current.addToCart(item);
            result.current.addToCart(item);
        });

        expect(result.current.items).toHaveLength(1);
        expect(result.current.items[0].quantity).toBe(2);
        expect(result.current.cartCount).toBe(2);
        expect(result.current.cartTotal).toBe(20);
    });

    it('removes item from cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        const item = {
            id: 1,
            name: 'Test Burger',
            price: 10,
            image: '/test.jpg',
            description: 'Delicious'
        };

        act(() => {
            result.current.addToCart(item);
            result.current.removeFromCart(1);
        });

        expect(result.current.items).toHaveLength(0);
        expect(result.current.cartCount).toBe(0);
    });

    it('updates item quantity', () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        const item = {
            id: 1,
            name: 'Test Burger',
            price: 10,
            image: '/test.jpg',
            description: 'Delicious'
        };

        act(() => {
            result.current.addToCart(item);
            result.current.updateQuantity(1, 1); // +1
        });

        expect(result.current.items[0].quantity).toBe(2);

        act(() => {
            result.current.updateQuantity(1, -1); // -1
        });

        expect(result.current.items[0].quantity).toBe(1);
    });

    it('clears cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        const item = {
            id: 1,
            name: 'Test Burger',
            price: 10,
            image: '/test.jpg',
            description: 'Delicious'
        };

        act(() => {
            result.current.addToCart(item);
            result.current.clearCart();
        });

        expect(result.current.items).toHaveLength(0);
    });
});
