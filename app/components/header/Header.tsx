"use client";
import { BenefitsContainer, ButtonHeader, Icon, IconBox, Link, Logo, Menu, Nav, SocialMidia } from "./header.styles";
import LogoImage from "@/public/logo.png"
import Instagram from "@/public/instagram.svg"
import Whatsapp from "@/public/whatsapp.svg"

export default function Header(){
    return(
        <BenefitsContainer>
            <Logo src={LogoImage} alt="Logo Emagecentro - Centro Especializado em Emagrecimento e Saúde" />
            <Menu>
                <Nav>
                    <Link>Inovação</Link>
                    <Link>sobre nós</Link>
                    <Link>nosso trabalho</Link>
                    <Link>contanto</Link>
                </Nav>
                <ButtonHeader>Solicitar Orçamento</ButtonHeader>
                <SocialMidia>
                    <IconBox>
                        <Icon src={Instagram} alt="Instagram Emagrecentro" />
                    </IconBox>
                    <IconBox>
                        <Icon src={Whatsapp} alt="Whatsapp Emagrecentro" />
                    </IconBox>
                </SocialMidia>
            </Menu>
        </BenefitsContainer>
    )
}