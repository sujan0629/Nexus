import ResponsiveWrapper from "@/components/Wrapper";
import Image from "next/image";
import Robot from "../../public/robot.svg";
import Gaming from "../../public/gaming.png";
import Programmer from "../../public/Programmer.png";
import Exhibition from "../../public/exhibition.png"
export default function ActivityListSection(){
    return(
        <section>
            <ResponsiveWrapper className="flex flex-col mt-10 space-y-8">
                <div className="w-full space-y-2">
                    <h4 className="text-center text-gray-200">ACTIVITIES</h4>
                    <h1 className="text-center text-4xl font-bold">What it includes?</h1>
                </div>
                <div className="flex space-x-10">
                    <ActivityCard img={Gaming} title="Esports" content="Esports blah blah pubg and all free fire ipsum lorem sulfate ion" />
                    <ActivityCard img={Robot} title="Robotics" content="Join robotics for awesome stuff lorem ajsdklakdjaljdlkajii iiiiasijad" />
                    <ActivityCard img={Programmer} title="Hackathon" content="Hackathon coding competition ahdashdakjhj afjkioioqksk lsls" />
                    <ActivityCard img={Exhibition} title="Science Exhibition" content="Show case science exhibition and stuffs and more stuffs and stuffs" />
                </div>
            </ResponsiveWrapper>
        </section>
    )
}

interface Props {
    img: any;
    title: string;
    content: string;
}
function ActivityCard({img, title, content}: Props){
    return(
        <div className="flex flex-1 flex-col bg-[#1a1a1a] p-8 rounded-2xl space-y-2 min-h-[300px]">
            <Image className="h-[150px] object-contain" src={img} alt={title} />
            <h4 className="text-center text-2xl font-bold">{title}</h4>
            <p className="text-gray-200 text-center">{content}</p>
        </div>
    )
}