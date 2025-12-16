'use client';

import Link from "next/link";
import Offcanvas from "./Offcanvas";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { id: 1, label: "Home", url: "/" },
        { id: 2, label: "About", url: "/about" },
        { id: 3, label: "Projects", url: "/projects" },
        { id: 4, label: "Contact", url: "/contact" },
    ];

    return (
        <>
            <header className="w-full px-5">
                <div className="max-w-large mx-auto">
                    <div className="flex items-center justify-between py-6">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-raleway">
                            <Link href={'/'}>
                                <span className="text-accent">&lt;</span>Tayyab<span className="text-accent">.</span>dev<span className="text-accent">/&gt;</span>
                            </Link>
                        </div>
                        <nav>
                            <ul className="hidden md:flex gap-2 text-sm md:text-base font-raleway font-semibold">
                                {menuItems.map((item) => (
                                    <li key={item.id} className="menu-item">
                                        <Link className="menu-link" href={item.url}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Toggle */}
                            <button
                                className="md:hidden text-2xl"
                                onClick={() => setIsOpen(true)}
                                aria-label="Open Menu"
                            >
                                <HiMenuAlt3 />
                            </button>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="block md:hidden">
                <Offcanvas
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    menuItems={menuItems}
                />
            </div>
        </>
    );
}

