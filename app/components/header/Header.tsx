"use client";
import { BenefitsContainer, ButtonHeader, Icon, IconBox, Link, Logo, Menu, Nav, SocialMidia } from "./header.styles";
import LogoImage from "@/public/img/logo.png"
import Instagram from "@/public/img/instagram.svg"
import Whatsapp from "@/public/img/whatsapp.svg"
import { contact } from "../data";

export default function Header(){
    return(
        <BenefitsContainer>
            <Logo src={LogoImage} alt="Logo Emagecentro - Centro Especializado em Emagrecimento e Saúde" />
            <Menu>
                <Nav>
                    <Link href="#inovacao">Inovação</Link>
                    <Link href="#sobre-nos">sobre nós</Link>
                    <Link href="#nosso-trabalho">nosso trabalho</Link>
                    <Link href="#contato">contato</Link>
                </Nav>
                <ButtonHeader href={contact.whatsapp} target='_blanck'>Solicitar Orçamento</ButtonHeader>
                <SocialMidia>
                    <IconBox href="https://www.instagram.com/sulminasbebedouros/" target="_blank"> 
                        <Icon src={Instagram} alt="Instagram Emagrecentro" />
                    </IconBox>
                    <IconBox href={contact.whatsapp} target="_blank">
                        <Icon src={Whatsapp} alt="Whatsapp Emagrecentro" />
                    </IconBox>
                </SocialMidia>
            </Menu>
        </BenefitsContainer>
    )
}