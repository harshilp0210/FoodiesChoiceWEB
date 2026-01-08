import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reservations | Foodie's Choice",
    description: "Book a table at Foodie's Choice for an unforgettable dining experience in Wembley.",
};

export default function ReservationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
