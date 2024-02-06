"use client";
import Image from "next/image";
import styled from "styled-components";
import Bebedouros from '@/public/bebedouro.png'
import Filtro from '@/public/filtro.png'
import KF02B from '@/public/KF02B.png'
import KF02 from '@/public/KF02.png'
import KF05 from '@/public/KF05.png'
import KF10 from '@/public/KF10.png'
import Shape from '@/public/shape-works.png'
import CubaPhoto from '@/public/cuba.png'
import { useEffect, useRef, useState } from "react";
import { useScroll } from "./useScroll";
import { Slide } from "@mui/material";

export default function Products(){
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
        <Container id="nosso-trabalho" ref={t}>
            <h2>Trabalhamos com</h2>
            <div className="block">
                <WorkItem>
                    <Img src={Bebedouros} alt="Sul Minas - Bebedouros" />
                    <h3>Bebedouros</h3>
                    <p>Modelos de 25L, 50L, 100L, e 200L.</p>
                </WorkItem>
                <WorkItem>
                    <Img src={Filtro} alt="Sul Minas - Filtros" />
                    <h3>Filtros</h3>
                    <p>Filtros de alta qualidade para bebedouros</p>
                </WorkItem>
                <CubaItem>
                    <Cuba src={CubaPhoto} alt="Sul Minas - Instalação" />
                    <h3>Cuba</h3>
                    <p>Produtos resistentes de alta durabilidade!</p>
                </CubaItem>
            </div>
            <h2>Bebedouros</h2>
            <div className="block">
                <Beb>
                    <Img src={KF02B} alt="Sul Minas - KF02B" />
                    <h3>KF02B</h3>
                    <p>25 Litros bancada</p>
                </Beb>
                <Beb>
                    <Img src={KF02} alt="Sul Minas - KF02" />
                    <h3>KF02</h3>
                    <p>25 Litros coluna</p>
                </Beb>
                <Beb>
                    <Img src={KF05} alt="Sul Minas - KF05" />
                    <h3>KF05</h3>
                    <p>50 Litros coluna</p>
                </Beb>
                <Beb>
                    <Img src={KF10} alt="Sul Minas - KF10" />
                    <h3>KF10</h3>
                    <p>50 Litros coluna</p>
                </Beb>
            </div>
            <a>Solicitar orçamento</a>
            <Image style={{width: "100%", height: "auto"}} src={Shape} alt="Sul Minas - Orçamento" />
        </Container>
        </Slide>
    )
}

const Container = styled.section`
    background-color: #00AFD0;
    color: #FFF;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        text-align: center;
        font-size: 58px;
        padding-bottom: 20px;
    }

    .block {
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 20px;
        padding-bottom: 20px;
        flex-wrap: wrap;

        @media(max-width: 740px){
            flex-wrap: wrap;
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
                color: #fff;
                background-color: transparent;
            }
    
            @media(max-width: 800px){
                padding-left: 40px;
                padding-right: 40px;
                margin-left: 20px;
                margin-right: 20px;
            }
        }
    }

    @media(max-width: 740px){
        
        h2 {
            padding-left: 20px;
            padding-right: 20px;
            font-size: 52px;
        }
    }
`

const WorkItem = styled.div`
    margin: 20px;

    h3 {
        font-size: 32px;
        padding-bottom: 8px;
    }
    p {
        max-width: 200px;
        margin: 0 auto;
        font-size: 18px;
    }
    img {
        aspect-ratio: 3/3;
        object-fit: contain;
    }
`

const Beb = styled.div`
    margin: 20px;

    h3 {
        font-size: 46px;
        padding-bottom: 8px;
    }
    p {
        max-width: 200px;
        margin: 0 auto;
        font-size: 18px;
    }

    img {
        aspect-ratio: 3/3;
        object-fit: contain;
    }
`

const CubaItem = styled(WorkItem)`
    position: relative;
    bottom: 80px;
`


const Img = styled(Image)`
    width: ${props => props.width ? props.width : "250px"};
    height: auto;
    margin-bottom: 12px;

    @media(max-width: 740px){
        width: 100%;
    }
`

const Cuba = styled(Image)`
    width: 350px;
    height: auto;
    position: relative;
    bottom: 40px;

    @media(max-width: 740px){
        width: 100%;
    }
`