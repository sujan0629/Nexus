import { Button } from "@/components/ui/button";
import ResponsiveWrapper from "@/components/Wrapper";

export default function RoboticsSection() {
    return (
        <section className="mt-[5rem] md:mt-[10rem] h-auto md:h-[700px] py-12 md:py-0">
            <ResponsiveWrapper className="flex flex-col md:flex-row-reverse h-full gap-8 md:gap-0">
             
                <div className="flex-1 flex flex-col space-y-6 md:space-y-8 justify-center md:ml-8 order-2 md:order-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Robotics</h1>
                    <div className="text-base md:text-lg">
                        <p>Compete in adrenaline-pumping Robot Wars Maze, precision-driven Solver Challenges, and high-speed Drone Races—where innovation meets battle! Design, program, and out-engineer rivals to win tech prizes, grants, and glory.</p>
                        <ul className="mt-4 md:mt-6 space-y-2">
                            <li className="flex items-center">🗸 Robot Wars Maze</li>
                            <li className="flex items-center">🗸 Solver Challenge</li>
                            <li className="flex items-center">🗸 Speedster Bots Race</li>
                            <li className="flex items-center">🗸 Drone Racing & Delivery Bots</li>
                            <li className="flex items-center">🗸 More competitions coming soon</li>
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
                        className="absolute inset-0 bg-cover bg-center md:mr-10 rounded-lg gradient-square"
                        style={{ backgroundImage: `url('/Robotics.png')` }}
                    ></div>
                </div>
            </ResponsiveWrapper>
        </section>
    )
}