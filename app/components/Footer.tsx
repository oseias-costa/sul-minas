"use client";
import Image from "next/image";
import { styled } from "styled-components";
import LogoImg from '@/public/logo.png';
import Instagram from "@/public/instagram.svg";
import Whatsapp from '@/public/whatsapp.svg';
import { contact } from "./data";

export default function Footer(){
    return(
        <FooterContainer>
            <div className='Footer__Item'>
                <Logo src={LogoImg} alt="Logo Sul Minas" />
            </div>
            <div className='Footer__Item-nav'>
                <a href='#inovacao'>Inovação</a>
                <a href='#sobre-nos'>Sobre nós</a>
                <a href='#nossos-trabalho'>Nosso trabalho</a>
                <a href='#contato'>Contato</a>
            </div>
            <div className='Footer__Item'>
            <p>sulminasbebedouros@gmail.com</p>
                <p>(48) 9 9135-3109</p>
                <div className="social">
                    <IconBox>
                    <a href='#' target='_blank'>
                        <Icon src={Instagram} alt='Instagram Sul Minas' className='Footer__Item-social' />
                    </a>
                    </IconBox>
                    <IconBox>
                    <a href={contact.whatsapp} target='_blanck'>
                        <Icon src={Whatsapp} alt='Instagram Sul Minas' className='Footer__Item-social' />
                    </a>
                    </IconBox>
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
        color: #006E84;
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
  height: 110px;
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