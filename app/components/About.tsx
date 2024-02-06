"use client";
import Image from "next/image";
import styled from "styled-components"
import AboutPhoto from "@/public/about.png"
import ShapePhoto from '@/public/shape-about-two.png'

export default function About(){
    return (
        <>
        <Shape src={ShapePhoto} alt="Sul Minas" />
        <Container>
            <div className="description">
                <h2>Sobre nós</h2>
                <p> A Sul Minas Bebedouros, localizada no sul catarinense,
                    é uma empresa líder no fornecimento de soluções de
                    alta qualidade em bebedouros e equipamentos. Com
                    uma sede estratégica na região, a empresa atende de
                    forma abrangente diversas demandas, tornando-se
                    uma referência no setor. Seu compromisso com a
                    qualidade é evidente em todas as etapas do processo,
                    desde a escolha de modelos até a distribuição dos
                    bebedouros, oferecendo uma ampla gama de opções
                    para ambientes corporativos, educacionais, de saúde e
                    residenciais. Além disso, a Sul Minas Bebedouros
                    destaca-se por sua abordagem inovadora e
                    sustentável, priorizando tecnologias que promovem o
                    consumo consciente de água.
                </p>
            </div>
            <Img src={AboutPhoto} alt="Sul Minas - Sobre Nós"  />
        </Container>
        </>
    )
}

const Container = styled.section`
    display: flex;  
    justify-content: center;
    align-items: center;
    background-color: #00AFD0;
    color: #fff;
    flex-wrap: wrap;

    .description {
        max-width: 500px;
        margin-right: 40px;
        
        h2 {
            font-size: 62px;
            font-weight: 800;
        }

        p {
            font-size: 18px;
            font-weight: 500;
            padding-top: 25px;
        }
    }

    @media(max-width: 720px){
        padding-top: 40px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;

        .description {
            margin-right: 0px;
            padding-bottom: 10px;
        }

        h2 {
            font-size: 52px;
        }
    }
`

const Img = styled(Image)`
    width: 400px;
    height: auto;
    media(max-width: 720px){
        width: 90%;
    }
`

const Shape = styled(Image)`
    width: 100%;
    height: auto;
    display: flex;
`