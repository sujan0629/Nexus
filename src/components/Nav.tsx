"use client"
import Image from "next/image"
import Logo from "../../public/logo.png"
import Link from "next/link"
import ResponsiveWrapper from "./Wrapper";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export default function Nav(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <nav className={cn("flex  fixed w-full z-20 transition-colors duration-200", {"bg-[#1a1a1af6]": scrolled})}>
            <ResponsiveWrapper className="flex">
                <div className="flex-1">
                    <Image src = {Logo} alt = "Logo" height={100}/>
                </div>
                <div className="flex space-x-10 justify-center items-center">
                    <NavItem label="Home" to = "#" />
                    <NavItem label="Form" to = "#" />
                    <NavItem label="CodeLits" to = "#" />
                    <NavItem label="Prizes" to = "#" />
                </div>
            </ResponsiveWrapper>
           
        </nav>
    )
}

interface Props {
    to: string;
    label: string;
}
function NavItem({to, label}: Props){
    return(
        <Link href={to} className="uppercase text-white">
            {label}
        </Link>
    )
}