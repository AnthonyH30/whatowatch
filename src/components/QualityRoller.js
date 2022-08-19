import styled from "styled-components";


export const QualityRoller = styled.div`
    position: absolute;
    top: 20px;
    left: 5%;
    background-color: red;
    width: 80px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span{
        font-size: 16px;
        font-weight: bold;
    }
`

export default QualityRoller;