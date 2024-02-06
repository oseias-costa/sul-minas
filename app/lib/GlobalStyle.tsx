"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    list-style: none;
}

:root {
    --color-purple: #491023;
    --color-gold: #A1793C;
    --color-text: #4F4A4A;
}
`