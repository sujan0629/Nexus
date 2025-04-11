import { Button } from "@/components/ui/button";
import ResponsiveWrapper from "@/components/Wrapper";

export default function HackathonSection() {
    return (
        <section className="relative mt-[10rem]">
            {/* Relative wrapper for video and content */}
            <div className="relative inline-block w-full">
                {/* Video */}
                <video
                    className="w-full h-auto"
                    src="/hackathon.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Overlay */}
                <div className="absolute inset-0 gradient-overlay-double"></div>

                {/* Content centered in video */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <ResponsiveWrapper className="text-center flex flex-col items-center px-[20rem] space-y-8 text-white">
                        {/* <h4 className="text-gray-200">MAIN EVENT</h4> */}
                        <h1 className="text-6xl font-bold">Hackathon</h1>
                        <p className="text-lg">
                            The hackathon has this and that aand this and that. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Repellat, molestias. Lorem ipsum dolor sit amet. Prize:
                        </p>
                         <ul className="text-left">
                            <li>✅ Winner: Rs10000</li>
                            <li>✅ Second: Rs10000</li>
                            <li>✅ THird: Rs10000</li>
                        </ul>
                        <div className="flex space-x-4">
                            <Button size={"lg"}>Join Hackathon</Button>
                            <Button size={"lg"} variant={"outline"}>Contact Us</Button>
                        </div>
                       
                    </ResponsiveWrapper>
                </div>
            </div>
        </section>
    );
}
