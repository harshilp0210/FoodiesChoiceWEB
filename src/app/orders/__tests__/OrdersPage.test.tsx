import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import OrdersPage from '../page';
import { CartProvider } from '@/context/CartContext';

// Mock dependencies
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
        const { fill, ...rest } = props;
        // eslint-disable-next-line @next/next/no-img-element
        return <img {...rest} alt={props.alt} />
    },
}));

jest.mock('sonner', () => ({
    toast: {
        success: jest.fn(),
    }
}));

// Provide context wrapper
const renderWithProviders = (ui: React.ReactElement) => {
    return render(
        <CartProvider>
            {ui}
        </CartProvider>
    );
};

describe('OrdersPage', () => {
    it('renders menu items', () => {
        renderWithProviders(<OrdersPage />);
        // Check for header
        expect(screen.getByText('Our Menu')).toBeInTheDocument();
        // Check for specific items (from mock data in page.tsx)
        expect(screen.getByText('Artisan Truffle Burger')).toBeInTheDocument();
        expect(screen.getByText('Spicy Miso Ramen')).toBeInTheDocument();
    });

    it('filters items by category', async () => {
        renderWithProviders(<OrdersPage />);

        // Find categories
        const startersBtn = screen.getByRole('button', { name: 'Starters' });

        // Initial state (All) should show Mains
        expect(screen.getByText('Artisan Truffle Burger')).toBeInTheDocument();

        // Click Starters category
        fireEvent.click(startersBtn);

        // Should show Starters
        await waitFor(() => {
            expect(screen.getByText('Crispy Calamari')).toBeInTheDocument();
        });
        // Should NOT show Mains
        expect(screen.queryByText('Artisan Truffle Burger')).not.toBeInTheDocument();
    });

    it('filters items by search query', () => {
        renderWithProviders(<OrdersPage />);

        const searchInput = screen.getByPlaceholderText('Search dishes...');

        // Search for "Ramen"
        fireEvent.change(searchInput, { target: { value: 'Ramen' } });

        expect(screen.getByText('Spicy Miso Ramen')).toBeInTheDocument();
        expect(screen.queryByText('Artisan Truffle Burger')).not.toBeInTheDocument();
    });

    it('displays no items found message when search yields no results', () => {
        renderWithProviders(<OrdersPage />);

        const searchInput = screen.getByPlaceholderText('Search dishes...');

        // Search for non-existent item
        fireEvent.change(searchInput, { target: { value: 'NonExistentDish123' } });

        expect(screen.getByText('No items found matching your criteria.')).toBeInTheDocument();
    });

    it('allows clearing filters', () => {
        renderWithProviders(<OrdersPage />);

        const searchInput = screen.getByPlaceholderText('Search dishes...');
        fireEvent.change(searchInput, { target: { value: 'NonExistentDish123' } });

        const clearBtn = screen.getByText('Clear filters');
        fireEvent.click(clearBtn);

        // Should be back to normal
        expect(screen.getByText('Artisan Truffle Burger')).toBeInTheDocument();
    });
});
