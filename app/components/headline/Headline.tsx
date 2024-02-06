"use client";
import { ButtonHeadline, Content, Description, HeadlineContainer, Img, ImgHeadline, InputBox, InputText, TextDestack, Title } from "./headeline.styles";
import HeadlinePhoto from '@/public/headline.png'
import Background from '@/public/BACKGROUND.png'

export default function Headline(){
    return(
        <HeadlineContainer>
            <Img
                src={Background}
                alt="Leap Engenharia Química"
                fill={true}
                style={{ objectFit: "cover" }}
            />
            <Content>
                <Title>Excelência em Bebedouros</Title>
                <Description>Os melhores bebedouros industriais com as melhores condições você só encontra na Sul Minas Bebedouros</Description>
                <TextDestack>Preencha o formulário abaixo e garanta um atendimento personalizado</TextDestack>
                <InputBox>
                    <InputText placeholder="Seu primeiro nome" /><br />
                    <InputText placeholder="Seu whatsapp" /><br />
                </InputBox>
                <ButtonHeadline>Agendar Avaliação</ButtonHeadline>
            </Content>
            <ImgHeadline src={HeadlinePhoto} alt="" />
        </HeadlineContainer>
    )
}