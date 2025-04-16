import { Button } from "@/components/ui/button";
import ResponsiveWrapper from "@/components/Wrapper";

export default function LandingSection() {
    return (
        <section className="relative h-screen">
          
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url('/bg.png')` }}
            >
                <div className="absolute inset-0 gradient-overlay"></div>
            </div>

          
            <ResponsiveWrapper className="relative z-10 h-full flex flex-col justify-center text-white">
                <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col space-y-6 md:space-y-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-20 leading-tight">
                        <span className="text-primary">NeXus: </span>
                        Esports & Innovation Championship 2025
                    </h1>
                    <p className="text-base mt-5 sm:text-lg md:text-lg">
                    Join NeXus 2025 — where elite gamers and cutting-edge tech collide. Witness the future of play, compete with the best, and experience innovation like never before.


                    </p>
                    
                    <a href="/Form.html" className="w-fit mt-10 px-6 py-3 text-sm sm:text-base">
  <Button variant="outline">
    Register Now
  </Button>
</a>

                </div>
            </ResponsiveWrapper>
        </section>
    );
}
