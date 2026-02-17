import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden bg-background text-foreground font-sans antialiased selection:bg-primary/30">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <Navbar />

            <main className="relative container mx-auto px-4 py-8 max-w-7xl animate-accordion-down z-10">
                {children}
            </main>

            <footer className="relative border-t border-white/10 py-6 text-center text-sm text-muted-foreground z-10 bg-background/50 backdrop-blur-md">
                © {new Date().getFullYear()} Resource Hub. All rights reserved.
            </footer>
        </div>
    );
}
