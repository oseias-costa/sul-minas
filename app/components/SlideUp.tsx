import { Slide } from "@mui/material";
import React, { ReactNode } from "react";

export default function SlideUp({checked, timeout, children}: {
    checked: boolean, 
    timeout: number,
    children: JSX.Element
}){
    return(
        <Slide 
            direction="up" 
            in={checked} 
            {...(checked ? { timeout: timeout } : {})}
        >{children}
        </Slide>
    )
}