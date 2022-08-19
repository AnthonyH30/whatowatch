import styled from "styled-components";


export const HeaderStyle = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2%;
    position: fixed;
    top: 0;
    background-color: black;
    z-index: 10000;


    img{
        width: 220px;
    }

    div{
        display: flex;
        flex-wrap: nowrap;
    }

    div input{
        height: 25px;
        border-radius: 16px 0px 0px 16px;
        border: 1px solid #6521ff;
        background-color: black;
        columns: white;
        outline: none;
        border-right: none;
        color: white;
        padding-left: 10px;
    }

    div input::placeholder{
        color: #6521ff;
    }

    div button{
        height: 25px;
        width: 35px;
        border: 1px solid #6521ff;
        border-radius: 0px 16px 16px 0px;
        background-color: black;
        color: white;
        border-left: none;
        cursor: pointer;
        color: #6521ff;
    }

    @media(max-width: 768px){
        img{
            width: 150px;
        }

        div input{
            width: 150px;
        }
    }
`

export default HeaderStyle;