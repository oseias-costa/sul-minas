"use client";
import { ButtonHeadline, Content, Description, HeadlineContainer, Img, ImgHeadline, InputBox, InputText, TextDestack, Title } from "./headeline.styles";
import HeadlinePhoto from '@/public/headline.png'
import Background from '@/public/BACKGROUND.png'
import { Slide, TextField } from "@mui/material";
import { useState } from "react";

export default function Headline(){
    const [state, setState] = useState({
        name: "",
        wpp: 0
    })
    const message = `Olá, vim do contato do site. Meu nome é ${state.name} e meu número é ${state.wpp}. Gostaria de mais informações.`

    return(
        <HeadlineContainer>
            <Img
                src={Background}
                alt="Leap Engenharia Química"
                fill={true}
                style={{ objectFit: "cover" }}
            />
            <Slide
                direction="up" 
                in={true} 
                // style={{ transitionDelay: checked ? '500ms' : '0ms' }}
                {...(true ? { timeout: 1000 } : {})}
            >
            <div className="body">
            <Content>
                <Title>Excelência em Bebedouros</Title>
                <Description>Os melhores bebedouros industriais com as melhores condições você só encontra na Sul Minas Bebedouros</Description>
                <TextDestack>Preencha o formulário abaixo e garanta um atendimento personalizado</TextDestack>
                <InputBox>
                    <TextField 
                        style={{backgroundColor: "#fff", borderRadius: 5, width: 339, marginBottom: 5}} 
                        size="small" 
                        placeholder="Seu primeiro nome" 
                        onChange={(e) => setState({...state, name: e.target.value})}
                    /><br />
                    <TextField 
                        style={{backgroundColor: "#fff", borderRadius: 5, width: 339}} 
                        size="small" 
                        type="number"
                        placeholder="Seu whatsapp" 
                        onChange={(e) => setState({...state, wpp: Number(e.target.value)})}
                    />
                </InputBox>
                <ButtonHeadline href={`https://api.whatsapp.com/send?phone=554891353109&text=${message}`}>Solicitar orçamento</ButtonHeadline>
            </Content>
            <ImgHeadline src={HeadlinePhoto} alt="" />
            </div>
        </Slide>
        </HeadlineContainer>
    )
}