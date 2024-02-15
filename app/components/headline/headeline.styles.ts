import Image from "next/image";
import { styled } from "styled-components";

export const HeadlineContainer = styled.section`
        padding-bottom: 60px;
        display: flex;
        justify-content: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 153.36px;
        position: relative;
        z-index: 1;
        
        @media(max-width: 800px){
            flex-wrap: wrap-reverse;
            text-align: center;
        }
        `

export const Content = styled.div`
   max-width: 600px;
   position: relative;
   left: 60px;

   @media(max-width: 800px){
    left: 0px;
   }
`

export const Img = styled(Image)`
  background-size: 100%;
`;

export const Title = styled.h1`
    color: #07333d;
    font-size: 64px;
    font-weight: 900;

    @media(max-width: 800px){
        font-size: 40px;
    }
`

export const Description = styled.h3`
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    max-width: 430px;
`

export const TextDestack = styled.p`
    background-color: #07333d;
    color: #fff;
    font-size: 14px;
    padding: 2px;
    margin-top: 30px;
    margin-bottom: 10px;
`

export const InputText = styled.input`
    border-radius: 3px;
    height: 30px;
    width: 250px;
    margin-bottom: 10px;
    padding-left: 10px;
`

export const ButtonHeadline = styled.button`
    background-color: #07333d;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 70px;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 10px;
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    border: 3px solid #07333d;
    transition: 0.2s linear;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 50px;
    font-size: 20px;

    &:hover {
        color: #07333d;
        background-color: transparent;
    }

    @media(max-width: 800px){
        padding-left: 0px;
        padding-right: 0px;
        width: 100%;
    }
`

export const ImgHeadline = styled(Image)`
    width: 600px;
    height: auto;
    position: relative;
    right: 60px;

    @media(max-width: 1100px){
        width: 400px;

    }

    @media(max-width: 800px){
        width: 100%;
        height: auto;
        right: 0px;
    }
`

export const InputBox = styled.div`
    padding-bottom: 20px;
    // margin-bottom: 40px;
`