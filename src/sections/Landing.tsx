import { Button } from "@/components/ui/button";
import ResponsiveWrapper from "@/components/Wrapper";

export default function LandingSection() {
    return (
        <section className="relative h-screen">
            {/* background image */}
            <div className="absolute inset-0 bg-cover bg-center"style={{ backgroundImage: `url('/bg.png')` }}>
                <div className="absolute inset-0 gradient-overlay"></div>
            </div>

            {/* Content */}
            <ResponsiveWrapper className="relative z-10  justify-center h-full text-white flex flex-col">
                <div className="w-[50%] flex flex-col space-y-4">
                    <h1 className="text-6xl font-bold"><span className="text-primary">Nexus</span> Hackfest</h1>
                    <p className=" text-lg">Join Nexus Hackathon ipsum Lorem ipsum dolor sit amet consecteturad odio reiciendis mollitia hic voluptas dolorem nulla, suscipit impedit modi?</p>
                    <Button variant={"outline"} className="w-50">Register Now</Button>
                </div>
            </ResponsiveWrapper>
        </section>
    );
}