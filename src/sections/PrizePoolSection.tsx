import ResponsiveWrapper from "@/components/Wrapper";

export function PrizePoolSection(){
    return(
        <section>
            <ResponsiveWrapper className="py-[8rem] px-[20rem] flex items-center flex-col space-y-8">
                <h4 className="text-gray-200">PRIZE POOL</h4>
                <h1 className="text-4xl font-bold">Total Prize Pool of Rs 6,00,000</h1>
                <p className="text-lg text-center">The event has amazing prize pool of Rs 6,00,000 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestias. Lorem ipsum dolor sit amet.</p>
            </ResponsiveWrapper>
        </section>
    )
}