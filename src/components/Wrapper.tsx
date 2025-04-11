import { cn } from "@/lib/cn";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function ResponsiveWrapper(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>){
    return(
        <div {...props} className={cn("container px-4 mx-auto ", props.className)} >
            {props.children}
        </div>
    )
}