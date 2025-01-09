'use client'

import { Brain, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href={'/'} className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-teal-900/50">
                            <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
                        </div>
                        <span className="text-xl sm:text-2xl font-bold text-white">Engagelytics</span>
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-400 hover:text-white"
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/dashboard"
                            className="px-4 sm:px-6 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors">
                            Dashboard
                        </Link>
                        <Link href="/tableau"
                            className="px-4 sm:px-6 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors">
                            Tableau
                        </Link>
                        <Link href={'https://github.com/Niikkk8/engagelytics'} className="px-8 py-3 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors w-full sm:w-auto font-medium">
                            View Dashboard
                        </Link>
                        <Link href="#demo"
                            className="px-4 sm:px-6 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors">
                            View Demo
                        </Link>
                    </div>
                </div>

                {/* Mobile navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-8 pb-4">
                        <div className="flex flex-col space-y-4">
                            <Link href="/dashboard"
                                className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors text-center">
                                Dashboard
                            </Link>
                            <Link href={'https://github.com/Niikkk8/engagelytics'} className="px-8 py-3 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors w-full sm:w-auto font-medium">
                                View Dashboard
                            </Link>
                            <Link href="/tableau"
                                className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors text-center">
                                Tableau
                            </Link>
                            <Link href="#demo"
                                className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors text-center">
                                View Demo
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}