import { Button } from "@/components/ui/button";
import ResponsiveWrapper from "@/components/Wrapper";

export default function EsportsSection(){
    return(
        <section className="mt-[10rem] h-[700px]">
            <ResponsiveWrapper className="flex h-full">
                <div className="flex-1 flex-col space-y-8 justify-center flex mr-8">
                    <h1 className="text-5xl font-bold">Esports Tournament</h1>
                    <div  className="text-lg">
                        <p>Includes Esports games like pubg and freefire other stuffes pretty fun ahahahhaha hajskdfhjkldashfk Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis est Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe sapiente eveniet excepturi aut. </p>
                        <ul className="mt-6">
                            <li>✅ Pubg</li>
                            <li>✅ Free Fire</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <Button className="w-[200px]">Join Now</Button>
                    </div>
                </div>
                <div className="relative w-[800px] ">
                    <div className="absolute inset-0 bg-cover bg-center ml-10"style={{ backgroundImage: `url('/pubg.jpg')`, }}>
                        <div className="absolute inset-0 gradient-overlay-circle" />
                    </div>
                </div>
            </ResponsiveWrapper>
        </section>
    )
}