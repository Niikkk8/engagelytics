import { Brain } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-900 border-b border-gray-800">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href={'/'} className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-teal-900/50">
                            <Brain className="w-8 h-8 text-teal-400" />
                        </div>
                        <span className="text-2xl font-bold text-white">Engagelytics</span>
                    </Link>
                    <div className="flex items-center space-x-6">
                        <Link href="/dashboard"
                            className="px-6 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors">
                            Dashboard
                        </Link>
                        <Link href="#demo"
                            className="px-6 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors">
                            View Demo
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}