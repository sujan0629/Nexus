import { Button } from "@/components/ui/button";
import ResponsiveWrapper from "@/components/Wrapper";

export default function HackathonSection() {
    return (
        <section className="mt-[5rem] md:mt-[10rem] relative z-10"> 
            <div className="w-full">
             
                <div className="relative w-full aspect-video min-h-[400px]">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/hackathon.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                 
                    <div className="absolute inset-0 gradient-overlay-double"></div>

                  
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <ResponsiveWrapper className="text-center flex flex-col items-center px-4 sm:px-8 lg:px-20 py-12 space-y-6 md:space-y-8 text-white">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Hackathon</h1>
                            <p className="text-base md:text-lg max-w-3xl">
                            Join our thrilling hackathon—unleash creativity, win epic prizes, and code the future!
                            </p>
                            <ul className="text-left text-base md:text-lg space-y-2">
                                <li className="flex items-center">🗸 Collaboration</li>
                                <li className="flex items-center">🗸 Skill-building</li>
                                <li className="flex items-center">🗸 Rewards & Prizes</li>
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"><a href="/Form.html" className="w-full sm:w-auto">
  <Button size="lg">Join Hackathon</Button>
</a>

<a href="https://codelitsstudio.com/contact" className="w-full sm:w-auto">
  <Button size="lg" variant="outline">Contact Us</Button>
</a>

                            </div>
                        </ResponsiveWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}