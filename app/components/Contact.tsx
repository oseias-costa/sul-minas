"use client";
import styled from "styled-components"
import ImageBrasil from "@/public/img/mapa.png"
import Image from "next/image"
import { useScroll } from "./useScroll";
import { useEffect, useRef, useState } from "react";
import { Slide } from "@mui/material";
import { contact } from "./data";

export default function Contact(){
    const { scrollPosition } = useScroll()
    const t = useRef<HTMLDivElement>(null)
    const [checked, setChecked] = useState(false)
    let positionY: number

    if (t.current !== null) {
        positionY = t.current.offsetTop
      }
     useEffect(() => {
        if(positionY < (scrollPosition + 400)){
            setChecked(true)
        }
     },[scrollPosition]) 

    return(
        <Slide 
            direction="up" 
            in={checked} 
            {...(checked ? { timeout: 1000 } : {})}
        >
        <Container id="contato" ref={t}>
            <div className="description">
                <h2>Enviamos para todo o Brasil!</h2>
                <h3>sulminasbebedouros@gmail.com</h3>
                <p>(48) 9 9135-3109</p>
                <a href={contact.whatsapp} target="_blank">Solicitar orçamento</a>
            </div>
            <Img src={ImageBrasil} alt="Sul Minas - Contato" />
        </Container>
        </Slide>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    .description {
        padding-bottom: 40px;
        
        h2 {
            color: #006E84;
            font-size: 52px;
            font-weight: 800;
            max-width: 400px;

            @media(max-width: 800px){
                font-size: 42px;
                text-align: center;
            }
        }
        
        h3{
            padding-top: 20px;
            color: #0599B4;
            font-size: 28px;

            @media(max-width: 800px){
                font-size: 16px;
                text-align: center;
            }
        }

        P{
            color: #0599B4;
            font-weight: 600;
            font-size: 28px;
            padding-bottom: 40px;

            @media(max-width: 800px){
                text-align: center;
            }
        }

        a { 
            background-color: #006E84;
            position: relative;
            color: #fff;
            font-size: 28px;
            font-weight: 700;
            border: 4px solid #006E84;
            border-radius: 70px;
            padding-left: 60px;
            padding-right: 60px;
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: center;
            position: relative;
            transition: 0.2s linear;
            cursor: pointer;

            &:hover {
                color: #006E84;
                background-color: transparent;
            }
    
            @media(max-width: 800px){
                padding-left: 0px;
                padding-right: 0px;
                width: 100%;
                display: block;
            }
        }

    }

    @media(max-width: 720px){
        padding-top: 60px;
        flex-wrap: wrap;
        padding-left: 20px;
        padding-right: 20px;
    }
`

const Img = styled(Image)`
    max-width: 450px;
    height: auto;

    @media(max-width: 720px){
        max-width: 100%;
    }
`