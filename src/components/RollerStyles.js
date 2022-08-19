import styled from "styled-components";


export const RollerStyles = styled.section`
    max-width: 85vw;
    margin: 0 auto;


    .carrosel{
        display: flex;
        gap: 15px;
        overflow-x: auto;
        scroll-behavior: smooth;
    }

    @media(max-width: 768px){
        max-width: 95vw;
    }
`

export default RollerStyles;