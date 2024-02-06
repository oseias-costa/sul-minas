"use client";
import styled from "styled-components"
import ImageBrasil from "@/public/mapa.png"
import Image from "next/image"

export default function Contact(){
    return(
        <Container>
            <div className="description">
                <h2>Enviamos para todo o Brasil!</h2>
                <h3>email@sulminas.com.br</h3>
                <p>(XX) X XXXX-XXXX</p>
                <a>Solicitar orçamento</a>
            </div>
            <Img src={ImageBrasil} alt="Sul Minas - Contato" />
        </Container>
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
        }
        
        h3{
            padding-top: 20px;
            color: #0599B4;
            font-size: 28px;
        }

        P{
            color: #0599B4;
            font-weight: 600;
            font-size: 28px;
            padding-bottom: 40px;
        }

        a {
            
            background-color: #006E84;
            position: relative;
            color: #fff;
            font-size: 28px;
            font-weight: 700;
            border-bottom: 1px solid #006E84;
            border-radius: 70px;
            padding-left: 60px;
            padding-right: 60px;
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: center;
            position: relative;
            transitio: 0.2s linear;
    
            @media(max-width: 800px){
                padding-left: 40px;
                padding-right: 40px;
                margin-left: 20px;
                margin-right: 20px;
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