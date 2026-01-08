import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Menu | Foodie's Choice",
    description: "Explore our extensive menu of authentic Indian dishes, from spicy curries to delicious street food.",
};

export default function OrdersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
