"use client";
import Image from "next/image";
import styled from "styled-components";
import Bebedouros from '@/public/img/bebedouro.png'
import Filtro from '@/public/img/filtro.png'
import KF02B from '@/public/img/KF02B.png'
import KF02 from '@/public/img/KF02.png'
import KF05 from '@/public/img/KF05.png'
import KF10 from '@/public/img/KF10.png'
import Shape from '@/public/img/shape-works.png'
import CubaPhoto from '@/public/img/cuba.png'
import { useEffect, useRef, useState } from "react";
import { useScroll } from "./useScroll";
import SlideUp from "./SlideUp";
import { contact } from "./data";

export default function Products(){
    const { scrollPosition } = useScroll()
    const t = useRef<HTMLDivElement>(null)
    const [checked, setChecked] = useState(false)
    let positionY: number

    if (t.current !== null) {
        positionY = t.current.offsetTop
      }
     useEffect(() => {
        if(positionY < (scrollPosition + 600)){
            setChecked(true)
        }
     },[scrollPosition]) 

    return(
        <Container id="nosso-trabalho" ref={t}>
            <SlideUp checked={checked} timeout={2000}>
                <h2>Trabalhamos com</h2>
            </SlideUp>
            <SlideUp checked={checked} timeout={2000}>
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
            </SlideUp>
            <SlideUp checked={checked} timeout={3000}>
                <h2>Bebedouros</h2> 
            </SlideUp>
            <SlideUp checked={checked} timeout={3000}>
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
                    <p>100 Litros coluna</p>
                </Beb>
            </div>
            </SlideUp>
            <a href={contact.whatsapp} target="_blank">Solicitar orçamento</a>
            <Image style={{width: "100%", height: "auto"}} src={Shape} alt="Sul Minas - Orçamento" />
        </Container>
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

        @media(max-width: 800px){
            font-size: 42px;
        }
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
                padding-left: 0px;
                padding-right: 0px;
                width: 90%;
                position: relative;
                bottom: 30px;
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

    @media(max-width: 800px){
        padding-bottom: 30px;
        margin-bottom: 0;
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

    @media(max-width: 800px){
        padding-bottom: 30px;
    }
`

const CubaItem = styled(WorkItem)`
    position: relative;
    bottom: 90px;
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
    bottom: -55px;

    @media(max-width: 740px){
        width: 100%;
    }
`