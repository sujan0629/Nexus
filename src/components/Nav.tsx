"use client"
import Image from "next/image"
import Logo from "../../public/logo.png"
import Link from "next/link"
import ResponsiveWrapper from "./Wrapper";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; 
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const marqueeText = "░░ Codelits Nexus — May 2025 — The Future of Esports & Tech — Stay Tuned!";
    const marqueeItems = Array(8).fill(marqueeText);

    return (
        <nav className={cn("fixed w-full z-20 transition-colors duration-200", { "bg-[#1a1a1af6]": scrolled })}>



            {/* Marquee*/}



            <div className="absolute top-0 left-0 w-full bg-yellow-400 overflow-hidden whitespace-nowrap py-1 z-30">
                <div className="inline-block whitespace-nowrap animate-perfect-marquee">
                    {marqueeItems.map((text, index) => (
                        <span key={index} className="inline-block px-4 text-sm text-black font-medium">
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            <ResponsiveWrapper className="flex items-center justify-between mt-8 relative">
             


                <div className="flex-1">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" height={100} />
                    </Link>
                </div>





                {/* Desktop Navigation */}

                <div className="hidden md:flex space-x-10 justify-center items-center backdrop-blur bg-white/5 rounded-xl px-4 py-2">
                    <NavItem label="Home" to="/" />
                    <NavItem label="Codelits Studio" to="https://codelitsstudio.com/" />
                    <NavItem label="Form Entry" to="/Form.html" />
                    <NavItem label="Prize Pools" to="/Prizepool.html" />
                    <NavItem label="Contact" to="https://codelitsstudio.com/contact" />
                </div>


                {/* Mobile hamburger icon */}


                <div className="md:hidden z-40">
                    <button 
                        onClick={() => setMobileMenuOpen(true)} 
                        aria-label="Open Mobile Menu"
                        className="text-white text-3xl focus:outline-none"
                    >
                        <HiOutlineMenuAlt3 />
                    </button>
                </div>
            </ResponsiveWrapper>




            {/* Mobile menu full-screen */}




            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col justify-center items-center"
                    >
                        <button 
                            onClick={() => setMobileMenuOpen(false)} 
                            aria-label="Close Mobile Menu"
                            className="absolute top-8 right-8 text-white text-3xl focus:outline-none"
                        >
                            <HiOutlineX />
                        </button>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}
                            className="space-y-8 text-center"
                        >
                            {["Home", "Codelits Studio", "Form Entry", "Prize Pools", "Contact"].map((label) => (
                                <motion.div
                                    key={label}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <MobileNavItem
                                        label={label}
                                        to={getNavLink(label)}  
                                        onClick={() => setMobileMenuOpen(false)}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

const getNavLink = (label: string) => {
    switch (label) {
        case "Home":
            return "/";
        case "Codelits Studio":
            return "https://codelitsstudio.com/";
        case "Form Entry":
            return "/Form.html";
        case "Prize Pools":
            return "/Prizepool.html";
        case "Contact":
            return "https://codelitsstudio.com/contact";
        default:
            return "#";
    }
}

interface Props {
    to: string;
    label: string;
}

function NavItem({ to, label }: Props) {
    return (
        <Link href={to} className="uppercase text-white hover:text-yellow-400 transition-colors">
            {label}
        </Link>
    );
}

interface MobileProps extends Props {
    onClick: () => void;
}

function MobileNavItem({ to, label, onClick }: MobileProps) {
    return (
        <Link 
            href={to} 
            onClick={onClick}
            className="uppercase text-2xl text-white hover:text-yellow-400 transition-colors"
        >
            {label}
        </Link>
    );
}
