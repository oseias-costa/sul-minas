"use client";
import Image from "next/image";
import styled from "styled-components"
import Termostato from '@/public/termostato.png'
import Economia from '@/public/economia.png'
import Resistencia from '@/public/resistencia.png'
import Garantia from '@/public/garantia.png'
import { useRef } from "react";

export default function Inovation(){
    
    return(
        <Container>
            <h2>Inovação</h2>
            <h3>Qualidade como você nunca viu!</h3>
            <div className="items">
                <Item>
                    <Icon src={Termostato} alt="Sul Minas - Termostato: Regulagem de temperatura" />
                    <h4>Termostato</h4>
                    <p>Regulagem de temperatura</p>
                </Item>
                <Item>
                    <Icon src={Economia} alt="Sul Minas - Economia: Baixo consumo de energia" />
                    <h4>Economia</h4>
                    <p>Baixo consumo de energia</p>
                </Item>
                <Item>
                    <Icon src={Resistencia} alt="Sul Minas - Resistência: Estrutura em Aço Inox 430" />
                    <h4>Resistência</h4>
                    <p>Regulagem de temperatura</p>
                </Item>
                <Item>
                    <Icon src={Garantia} alt="Sul Minas - Garantia: 12 meses em todo território nacional" />
                    <h4>Garantia</h4>
                    <p>12 meses em todo território nacional</p>
                </Item>
            </div>
   
        </Container>
    )
}

const Container = styled.section`
    text-align: center;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 20px;
    padding-right: 20px;

    h2 {
        color: #0992b0;
        font-weight: 800;
        font-size: 62px;
    }

    h3 {
        color: #0992b0;
        font-weight: 500;
        font-size: 30px;
    }

    .items {
        display: flex;
        justify-content: center;
        padding-top: 40px;
        flex-wrap: wrap;
    }

    @media(max-width: 740px){
        h2 {
            font-size: 52px;
        }

        h3 {
            font-size: 24px;
        }
    }

`

const Item = styled.div`
    padding: 30px;

    h4 {
        color: #0992b0;
        font-weight: 700;
        font-size: 30px;
    }
    p {
        color: #0992b0;
        font-weight: 500;
        font-size: 18px;
        width: 200px;
    }
`

const Icon = styled(Image)`
    width: 120px;
    height: auto;
    margin-bottom: 12px;

    @media(max-width: 740px){
        width: 100px;
    }
`

