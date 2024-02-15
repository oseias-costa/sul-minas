"use client";
import { ButtonHeadline, Content, Description, HeadlineContainer, Img, ImgHeadline, InputBox, InputText, TextDestack, Title } from "./headeline.styles";
import HeadlinePhoto from '@/public/img/headline.png'
import Background from '@/public/img/BACKGROUND.png'
import { Slide, TextField } from "@mui/material";
import { useState } from "react";

export default function Headline(){
    const [state, setState] = useState({
        name: "",
        wpp: 0
    })
    const [error, setError] = useState({
        type: "",
        message: ""
    })
   
    var message = `Olá, vim do contato do site. Meu nome é ${state.name} e meu número é ${state.wpp}. Gostaria de mais informações.`
    
    const handleSend = () => {
        const phoneRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\s?\d|[2-9])\d{3})\-?(\d{4}))$/
        const phoneVerify = String(state.wpp).match(phoneRegex)

        if(state.name === ""){
            return setError({
                type: "name",
                message: "Preencha seu nome"
            })
        }
        if(state.name.length <= 3){
            return setError({
                type: "name",
                message: "O nome precisa ter no mínimo 3 caracteres"
            })
        }

        if(state.wpp === 0){
            return setError({
                type: "phone",
                message: "O número de telefone não é válido"
            })
        }

        if(!phoneVerify){
            return setError({
                type: "phone",
                message: "O número de telefone não é válido"
            })
        }

        return window.open(`https://api.whatsapp.com/send?phone=554891353109&text=${message}`, '_blank')
    }

    return(
            <Slide
                direction="up" 
                in={true} 
                {...(true ? { timeout: 1000 } : {})}
            >
        <HeadlineContainer>
            <Img
                src={Background}
                alt="Sul Minas Bebedouros"
                fill={true}
                style={{ objectFit: "cover" }}
            />
            <Content>
                <Title>Excelência em Bebedouros</Title>
                <Description>Os melhores bebedouros industriais com as melhores condições você só encontra na Sul Minas Bebedouros</Description>
                <TextDestack>Preencha o formulário abaixo e garanta um atendimento personalizado</TextDestack>
                <InputBox>
                    <TextField 
                        error={error.type === "name"}
                        helperText={error.type === "name" ? error.message : null}
                        style={{backgroundColor: "#fff", borderRadius: 5, width: 339, marginBottom: 5}} 
                        size="small" 
                        placeholder="Seu nome" 
                        onChange={(e) => {
                            setState({...state, name: e.target.value})
                            setError({message: "", type: ""})
                        }}
                    /><br />
                    <TextField 
                        error={error.type === "phone"}
                        helperText={error.type === "phone" ? error.message : null}
                        sx={{
                            backgroundColor: "#fff", 
                            borderRadius: 1.2, 
                            width: 339, 
                            marginBottom: 1,
                            "@media(maxWidth: 800px)": {
                                marginBottom: 0
                            }
                        }} 
                        size="small" 
                        type="number"
                        placeholder="Seu whatsapp" 
                        onChange={(e) => {
                            setError({message: "", type: ""})
                            setState({...state, wpp: Number(e.target.value)})}}
                    />
                </InputBox>
                <ButtonHeadline onClick={handleSend}>Solicitar orçamento</ButtonHeadline>
            </Content>
            <ImgHeadline src={HeadlinePhoto} alt="" />
        </HeadlineContainer>
        </Slide>
    )
}