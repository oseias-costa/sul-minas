"use client";
import Image from "next/image";
import { styled } from "styled-components";
import LogoImg from '@/public/logo.png';
import Instagram from "@/public/instagram.svg";
import Whatsapp from '@/public/whatsapp.svg';

export default function Footer(){
    return(
        <FooterContainer>
            <div className='Footer__Item'>
                <Logo src={LogoImg} alt="Logo Sul Minas" />
                <p>email@sulminas.com.br</p>
                <p>(xx) x xxxx-xxxx</p>
                <div className="social">
                    <IconBox>
                    <a href='#' target='_blank'>
                        <Icon src={Instagram} alt='Instagram Sul Minas' className='Footer__Item-social' />
                    </a>
                    </IconBox>
                    <IconBox>
                    <a href='#' target='_blanck'>
                        <Icon src={Whatsapp} alt='Instagram Sul Minas' className='Footer__Item-social' />
                    </a>
                    </IconBox>
                </div>
            </div>
            <div className='Footer__Item-nav'>
                <a href='#'>Início</a>
                <a href='#Como-Funciona'>Como Funciona</a>
                <a href='#Nossos-Serviços'>Serviços</a>
                <a href='#Resultados'>Clientes</a>
            </div>
            <div className='Footer__Item'>
                <div className='Footer__Item-adress'>
                    <p>Unidade 1</p>
                    <p>R. Gustavo Barroso, 195. Passo Fundo-RS</p>
                </div>
                <div className='Footer__Item-adress'>
                    <p>Unidade 2</p>
                    <p>Vila Moema. Tubarão-SC</p>
                </div>
            </div>
        </FooterContainer>
    )
}

export const FooterContainer = styled.footer`
    display: flex;
    background-color: #00AFD0;
    color: #fff;
    display: flex;
    padding: 3em;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 60px;

    p {
        color: #fff;
    }

    .Footer__Item-nav{
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        padding-bottom: 1em;
    
}
.Footer__Item-nav > a{
    padding-bottom: .7em;
    font-weight: 700;
    color: #fff;
    transition: .1s linear;

    &:hover {
        color: #794efe;
    }
}

.Footer__Item-adress{
    padding-bottom: 2em;
}

.Footer__Item-adress > p:first-of-type{
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
}

.Footer__Item {
    .social {
        display: flex;

        media(max-width: 800px){
            justify-content: center;
        }
    }
}

@media (max-width: 740px){
        text-align: center;
        flex-direction: column;

    .Footer__Item-nav{
        padding-top: 2em;
        padding-bottom: 2em;
    }

}
`

export const Logo = styled(Image)`
  height: 100px;
  width: auto;
  margin-bottom: 15px;
`;

export const Icon = styled(Image)`
`;

export const IconBox = styled.div`
    border-radius: 120px;
    background-color: #07333d;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;

    img {
        position: relative;
        top: 1.5px;
    }
`