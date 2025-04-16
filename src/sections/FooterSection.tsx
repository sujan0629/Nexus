import ResponsiveWrapper from "@/components/Wrapper";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";
import { IconType } from "react-icons";
import Image from "next/image";
import Logo from "../../public/litslogo.png";
import { TbWorld } from "react-icons/tb";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from 'next/link';

export default function FooterSection() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a1a1a] text-gray-300">
            <ResponsiveWrapper>
                <div className="flex flex-col md:flex-row justify-between py-8 gap-8">
                  
                    <div className="flex flex-col items-start md:items-start  flex-1">
                        <div className="flex items-center">
                        <Link href="/">
  <Image 
    className="w-[120px] object-contain" 
    src={Logo} 
    alt="CodeLits" 
  />
</Link>


                            
                        </div>
                        <p className="text-sm text-start md:text-left max-w-md">
                            We build innovative digital solutions to help businesses grow in the modern world.
                        </p>
                        
                        
                        <div className="flex gap-4 mt-2">
                            <SocialLink 
                                Icon={FaFacebook} 
                                href="https://www.facebook.com/profile.php?id=61571620992662" 
                                ariaLabel="Facebook" 
                            />
                            <SocialLink 
                                Icon={FaInstagram} 
                                href="https://www.instagram.com/codelits.studio/" 
                                ariaLabel="Instagram" 
                            />
                            <SocialLink 
                                Icon={FaLinkedin} 
                                href="https://linkedin.com/company/codelitsstudio" 
                                ariaLabel="LinkedIn" 
                            />
                            <SocialLink 
                                Icon={FaGithub} 
                                href="https://github.com/codelitsstudio" 
                                ariaLabel="GitHub" 
                            />
                        </div>
                    </div>

                   
<div className="mt-8 pt-8 border-t border-gray-700">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        <Item 
            Icon={IoLocationSharp} 
            title="Location" 
            body="Dhangadi, Nepal" 
            align="left"
        />
        <Item 
            Icon={FiPhone} 
            title="Phone" 
            body={<><a href="tel:+9779709045674">+977 9709045674</a>, <br /> {' '}
            <a href="tel:+9779864534427">+977 9864534427</a>, <br /> {' '}
            <a href="tel:+9779768718423">+977 9768718423</a>
            
            </>} 
            align="left"
        />
        <Item 
            Icon={FiMail} 
            title="Email" 
            body={
                <>
                  <a href="mailto:info@codelitsstudio.com">info@codelitsstudio.com</a>, <br />{' '}
                  <a href="mailto:codelitsstudio@gmail.com">codelitsstudio@gmail.com</a>
                </>
              }
              
            align="left"
        />
        <Item 
            Icon={TbWorld} 
            title="Website" 
            body={<a target="_blank" rel="noopener noreferrer" href="https://codelitsstudio.com">www.codelitsstudio.com</a>} 
            align="left"
        />
    </div>
</div>
                </div>

            
                <div className="border-t border-gray-700 py-4 text-center text-sm">
                    <p>
                        &copy; {currentYear} CodeLits Studio. All rights reserved. | 
                        <a href="/privacy" className="hover:text-white ml-2">Privacy Policy</a> | 
                        <a href="/terms" className="hover:text-white ml-2">Terms of Service</a>
                    </p>
                </div>
            </ResponsiveWrapper>
        </footer>
    );
}

interface ItemProps {
    Icon: IconType;
    title: string;
    body: React.ReactNode;
}

function Item({ Icon, title, body, align = "center" }: ItemProps & { align?: "left" | "center" }) {
    return (
        <div className={`flex flex-col gap-2 items-${align} md:items-start`}>
            <div className="p-2  rounded-full">
                <Icon size={20} className="text-gray-300" />
            </div>
            <div>
                <h4 className={`text-${align} md:text-left font-medium text-white`}>{title}</h4>
                <p className={`text-${align} md:text-left text-sm hover:text-white transition-colors`}>
                    {body}
                </p>
            </div>
        </div>
    )
}

interface SocialLinkProps {
    Icon: IconType;
    href: string;
    ariaLabel: string;
}

function SocialLink({ Icon, href, ariaLabel }: SocialLinkProps) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
        >
            <Icon size={16} className="text-gray-300" />
        </a>
    );
}