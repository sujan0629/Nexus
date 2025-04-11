import { Button } from "@/components/ui/button";
import ResponsiveWrapper from "@/components/Wrapper";

export default function RoboticsSection(){
    return(
        <section className="mt-[10rem] h-[700px]">
            <ResponsiveWrapper className="flex h-full flex-row-reverse">
                <div className="flex-1 flex-col space-y-8 justify-center flex ml-8">
                    <h1 className="text-5xl font-bold">Robotics</h1>
                    <div  className="text-lg">
                        <p>Includes Robotidcs  like competitioon and shits stuffes pretty fun ahahahhaha hajskdfhjkldashfk Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis est Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe sapiente eveniet excepturi aut. </p>
                        <ul className="mt-6">
                            <li>✅ Robot Wars Maze </li>
                            <li>✅ Solver Challenge </li>
                            <li>✅ Speedster Bots Race</li>
                            <li>✅ Drone Racing & Delivery Bots and others coming soon</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <Button className="w-[200px]">Join Now</Button>
                    </div>
                </div>
                <div className="relative w-[800px] ">
                    <div className="absolute inset-0 bg-cover bg-center mr-10 gradient-square"style={{ backgroundImage: `url('/Robotics.png')`, }}>
                        {/* <div className="absolute inset-0 gradient-overlay-sq" /> */}
                    </div>
                </div>
            </ResponsiveWrapper>
        </section>
    )
}