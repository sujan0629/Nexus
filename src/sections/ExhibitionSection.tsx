import { Button } from "@/components/ui/button";
import ResponsiveWrapper from "@/components/Wrapper";

export default function ExhibitionSection() {
    return (
        <section className="mt-[5rem] md:mt-[10rem] h-auto md:h-[700px] py-12 md:py-0">
            <ResponsiveWrapper className="flex flex-col md:flex-row h-full gap-8 md:gap-0">
            
                <div className="flex-1 flex flex-col space-y-6 md:space-y-8 justify-center md:mr-8 order-2 md:order-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Science Exhibition</h1>
                    <div className="text-base md:text-lg">
                        <p>Showcase your groundbreaking projects in STEM, AI, and sustainable tech—compete for awards, funding, and global recognition! From robotics demos to renewable energy solutions, this is your stage to shine.</p>
                        <ul className="mt-4 md:mt-6 space-y-2">
                            <li className="flex items-center">🗸 Autonomous Drones</li>
                            <li className="flex items-center">🗸 Smart IoT Systems</li>
                            <li className="flex items-center">🗸 Sustainable technology innovations</li>
                            <li className="flex items-center">🗸 Custom Projects</li>
                        </ul>
                    </div>
                    <div className="mt-2 md:mt-4">
                    <a href="/Form.html" className="w-full sm:w-[200px]">
  <Button>Join Now</Button>
</a>

                    </div>
                </div>

              
                <div className="relative w-full md:w-[800px] h-[300px] sm:h-[400px] md:h-full order-1 md:order-2">
                    <div 
                        className="absolute inset-0 bg-cover bg-center md:ml-10 rounded-lg"
                        style={{ backgroundImage: "url('/invention.png')" }}
                    ></div>
                </div>
            </ResponsiveWrapper>
        </section>
    )
}