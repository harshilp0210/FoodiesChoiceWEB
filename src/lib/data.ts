export const MENU_CATEGORIES = [
    { id: "openings", label: "Openings" },
    { id: "combos", label: "Combos" },
    { id: "gujarati", label: "Gujarati" },
    { id: "punjabi", label: "Punjabi" },
    { id: "curries", label: "Curries" },
    { id: "rice", label: "Rice & Breads" },
    { id: "sides", label: "Sides" },
];

export const MENU_ITEMS: Record<string, MenuItem[]> = {
    openings: [
        {
            id: "op-1",
            name: "Crispy Corn & Spinach",
            description: "Fresh spinach leaves fried to perfection with sweet corn nibbles.",
            price: "£7.50",
            dietary: ["veg"],
        },
        {
            id: "op-2",
            name: "Truffle Fries",
            description: "Crispy fries tossed in truffle oil and parmesan dust.",
            price: "£5.95",
            dietary: ["veg"],
        },
        {
            id: "op-3",
            name: "Chilli Paneer",
            description: "Cottage cheese cubes tossed in a spicy Indo-Chinese sauce.",
            price: "£8.50",
            dietary: ["veg", "spicy"],
        }
    ],
    combos: [
        {
            id: "cb-1",
            name: "Lunch Combo A",
            description: "Choice of 1 Curry + Rice + Naan + Salad.",
            price: "£12.95",
            dietary: ["veg"],
        },
        {
            id: "cb-2",
            name: "Office Platter",
            description: "Assortment of starters and mains, perfect for sharing.",
            price: "£24.00",
            dietary: ["non-veg"],
        }
    ],
    gujarati: [
        {
            id: "gj-1",
            name: "Undhiyu",
            description: "Traditional mixed vegetable curry cooked with earthy spices.",
            price: "£9.50",
            dietary: ["veg"],
        },
        {
            id: "gj-2",
            name: "Sev Tameta",
            description: "Spicy tomato curry topped with crunchy sev.",
            price: "£8.00",
            dietary: ["veg", "spicy"],
        }
    ],
    punjabi: [
        {
            id: "pn-1",
            name: "Paneer Butter Masala",
            description: "Cottage cheese simmered in a rich tomato and cashew gravy.",
            price: "£9.95",
            dietary: ["veg"],
        },
        {
            id: "pn-2",
            name: "Dal Makhani",
            description: "Black lentils cooked overnight with cream and butter.",
            price: "£8.50",
            dietary: ["veg"],
        }
    ],
    curries: [
        { id: "cr-1", name: "Butter Chicken", description: "Tandoori chicken in a mild, creamy tomato sauce.", price: "£10.95", dietary: ["non-veg"] },
        { id: "cr-2", name: "Lamb Rogan Josh", description: "Tender lamb cooked in aromatic Kashmiri spices.", price: "£11.50", dietary: ["non-veg", "spicy"] }
    ],
    rice: [
        { id: "rb-1", name: "Jeera Rice", description: "Basmati rice tempered with cumin seeds.", price: "£3.50", dietary: ["veg"] },
        { id: "rb-2", name: "Garlic Naan", description: "Leavened bread topped with minced garlic and butter.", price: "£2.95", dietary: ["veg"] }
    ],
    sides: [
        { id: "sd-1", name: "Masala Papad", description: "Roasted papad topped with onions, tomatoes and spices.", price: "£1.50", dietary: ["veg"] },
        { id: "sd-2", name: "Raita", description: "Yogurt with cucumber and mint.", price: "£2.50", dietary: ["veg"] }
    ]
};

export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: string;
    dietary: ("veg" | "non-veg" | "spicy")[];
};
