import ResponsiveWrapper from "@/components/Wrapper";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { IconType } from "react-icons";
import Image from "next/image";
import Logo from "../../public/litslogo.png"
import { TbWorld } from "react-icons/tb";
export default function FooterSection(){
    return(
        <section className="bg-[#1a1a1a]">
            <ResponsiveWrapper className="flex py-8">
                <div className="flex items-center flex-1">
                    <Image className="w-[80px] object-contain" src = {Logo} alt = "codelits" />
                    <h1>Developed by <b>CodeLits Studio</b></h1>
                </div>
                <div className="flex space-x-12">

                    <Item Icon={IoLocationSharp} title="Location" body="Dhangadi, Nepal" />
                    <Item Icon={FiPhone} title="Phone" body="9876543210" />
                    <Item Icon={FiMail} title="Location" body="codelitsstudio@gmail.com" />
                    <Item Icon={TbWorld} title="Website" body={<a target = "_blank" href = "https://codelitsstudio.com/">www.codelitsstudio.com</a>} />
                </div>
            </ResponsiveWrapper>
        </section>
    )
}

interface Props {
    Icon: IconType;
    title: string;
    body: any;
}
function Item({Icon, title, body}: Props){
    return(
        <div className="flex flex-col items-center space-y-4">
            <Icon size={30}/>
            <div>
                <h4 className="text-center">{title}</h4>
                <p className="text-center">{body}</p>
            </div>
        </div>
    )
}