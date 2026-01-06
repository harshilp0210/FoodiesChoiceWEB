"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Plus, ShoppingBag, Filter } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

// Mock Data
const CATEGORIES = ["All", "Starters", "Mains", "Sides", "Desserts", "Drinks"];

const MENU_ITEMS = [
    {
        id: 1,
        name: "Artisan Truffle Burger",
        description: "Wagyu beef patty, black truffle aioli, brie cheese, and caramelized onions on brioche.",
        price: "$18.00",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1500&auto=format&fit=crop",
        category: "Mains"
    },
    {
        id: 2,
        name: "Spicy Miso Ramen",
        description: "Rich pork broth, chashu, soft-boiled egg, corn, and chili oil.",
        price: "$16.50",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1500&auto=format&fit=crop",
        category: "Mains"
    },
    {
        id: 3,
        name: "Wild Mushroom Risotto",
        description: "Arborio rice, porcini mushrooms, parmesan crisp, and truffle oil.",
        price: "$22.00",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1500&auto=format&fit=crop",
        category: "Mains"
    },
    {
        id: 4,
        name: "Crispy Calamari",
        description: "Served with lemon aioli and marinara sauce.",
        price: "$12.00",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1500&auto=format&fit=crop",
        category: "Starters"
    },
    {
        id: 5,
        name: "Tandoori Chicken Wings",
        description: "Marinated in yogurt and spices, grilled to perfection.",
        price: "$14.00",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=1500&auto=format&fit=crop",
        category: "Starters"
    },
    {
        id: 6,
        name: "Lobster Mac & Cheese",
        description: "Creamy three-cheese blend with chunks of fresh lobster.",
        price: "$24.00",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1500&auto=format&fit=crop",
        category: "Sides"
    },
    {
        id: 7,
        name: "Chocolate Lava Cake",
        description: "Warm molten center, served with vanilla bean ice cream.",
        price: "$10.00",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1500&auto=format&fit=crop",
        category: "Desserts"
    },
    {
        id: 8,
        name: "Matcha Latte",
        description: "Premium ceremonial grade matcha with steamed oat milk.",
        price: "$6.50",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1500&auto=format&fit=crop",
        category: "Drinks"
    }
];

export default function OrdersPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const { addToCart } = useCart();

    const filteredItems = MENU_ITEMS.filter(item => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-black pt-24 pb-12">

            {/* Header */}
            <div className="container mx-auto px-4 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Our Menu
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Explore our wide selection of authentic dishes, handcrafted with fresh ingredients.
                    </p>
                </motion.div>
            </div>

            {/* Filters */}
            <div className="container mx-auto px-4 mb-8 sticky top-20 z-40 bg-black/80 backdrop-blur-md py-4 -mx-4">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    {/* Categories */}
                    <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto scrollbar-hide">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                                    selectedCategory === cat
                                        ? "bg-orange-600 text-white shadow-lg shadow-orange-500/25"
                                        : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search (Optional) */}
                    <div className="relative w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Search dishes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-4">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/10"
                            >
                                {/* Image content */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-yellow-500 text-xs font-bold border border-white/10">
                                        <Star className="w-3 h-3 fill-current" /> {item.rating}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{item.name}</h3>
                                            <p className="text-xs text-orange-500 uppercase tracking-wide font-medium mt-1">{item.category}</p>
                                        </div>
                                        <span className="text-lg font-semibold text-white">{item.price}</span>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{item.description}</p>

                                    <button
                                        onClick={() => {
                                            addToCart({
                                                id: item.id,
                                                name: item.name,
                                                price: parseFloat(item.price.replace("$", "")),
                                                image: item.image,
                                                description: item.description
                                            });
                                        }}
                                        className="w-full py-2.5 bg-white/5 hover:bg-orange-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        Add to Order <ShoppingBag className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">No items found matching your criteria.</p>
                        <button
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="mt-4 text-orange-500 hover:text-orange-400 underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
