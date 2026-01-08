import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story | Foodie's Choice",
    description: "Discover the heritage and passion behind Foodie's Choice, bringing authentic Indian flavors to Wembley.",
};

export default function StoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
