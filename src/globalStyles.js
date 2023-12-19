import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --roboto: 'Roboto', sans-serif;
        --roboto-slab: 'Roboto Slab', serif;

        --gray-100: #CAC4CF;
        --gray-200: #948F99;

        --pink: #FF859B;

        --black-100: #262529;
        --black-200: #1C1B1E;
        --black-300: #0D0C0F;

        --white: #F4EDE8;

        font-size: 62.5%;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 0.8rem;
        background-color: var(--pink);
    }
    
    ::-webkit-scrollbar-thumb:hover{
        background-color:rgba(255, 133, 155, 0.8) ;
    }

    :-webkit-autofill,
    :-webkit-autofill:hover, 
    :-webkit-autofill:focus{
        border: 0;
        -webkit-text-fill-color: var(--white);
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
    }


    .sr-only{
        clip: rect(0 0 0 0); 
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap; 
        width: 1px;
        border: 0;
    }

    body{
        background-color: var(--black-200);
    }
    
    body, button, input, textarea{
        font-size: 1.6rem;
        font-family: var(--roboto-slab);
        color: var(--white);
    }

    button, a, input, textarea{
        outline: 0;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.3s ease-in-out;
    }

    button:hover, a:hover{
        filter: brightness(0.8);
    }

    a {
        text-decoration: none;
    }

    button:disabled{
        opacity: 0.5;
    }
`;
