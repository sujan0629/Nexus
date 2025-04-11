import ResponsiveWrapper from "@/components/Wrapper";

export function LocationSection(){
    return(
        <section className="mt-10">
            <ResponsiveWrapper className="py-[8rem] px-[20rem] flex items-center flex-col space-y-8">
                <h4 className="text-gray-200">LOCATION</h4>
                <h1 className="text-4xl font-bold">Happening on Mahendranagar</h1>
                <p className="text-lg text-center">The event is taking place on Mahendranagar Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestias. Lorem ipsum dolor sit amet.</p>
            </ResponsiveWrapper>
        </section>
    )
}