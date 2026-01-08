import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-bold text-orange-600/20 font-display">404</h1>
            <div className="space-y-6 relative -mt-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Oops! This dish isn&apos;t on the menu.</h2>
                <p className="text-slate-400 text-lg max-w-md mx-auto">
                    The page you are looking for might have been moved, deleted, or possibly eaten.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold transition-all hover:scale-105"
                >
                    <MoveLeft className="w-4 h-4" /> Return Home
                </Link>
            </div>
        </main>
    );
}
