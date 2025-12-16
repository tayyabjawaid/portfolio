"use client";

import Link from "next/link";
import { useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";

function Offcanvas({ isOpen, onClose, menuItems }) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [isOpen]);

    return (
        <>
            {/* Offcanvas */}
            <div
                className={`mobile-menu ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-end py-5">
                    {/* <span className="font-bold text-lg">Menu</span> */}
                    <button onClick={onClose} className="text-2xl">
                        <HiOutlineX />
                    </button>
                </div>

                <div className="max-w-large mx-auto">
                    <nav className="py-6">
                        <ul className="flex flex-col gap-5 font-semibold">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.url}
                                        onClick={onClose}
                                        className="block text-lg"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Offcanvas;
