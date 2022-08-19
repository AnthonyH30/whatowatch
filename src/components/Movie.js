import styled from "styled-components";

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all ease-in 0.2s;
    position: relative;

    :hover{
        transform: scale(1.05);
    }

    img{
        width: 270px;
        border-radius: 1rem;
        margin-bottom: 5px;
    }

    /* span{
        font-weight: bold;
        font-size: 120%;
    } */
`