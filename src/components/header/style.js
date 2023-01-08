import styled from "styled-components";
import Logo from '../../imgs/E.png';

export const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 50px;
    background-color: white;
    justify-content: space-around;
    
    flex-direction: row;
    flex-wrap: nowrap;

    box-shadow: 0px 3px 0px lightgray;

    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;
export const ImagemLogo = styled.div`
    width: 100px;
    height: 100%;
    background-image: url(${Logo});

    background-position: center;
    background-size: cover;
`;
export const DivLogo = styled.div`
    width: 20%;
    height: 100%;
`;
export const DivNav = styled.div`
    width: 60%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    gap: 35px;

    @media (max-width: 576px) {
        gap: 20px;
        font-size: small;
    }
`;
export const Items = styled.a`
    font-family: 'Inder', sans-serif;
    font-weight: 500;
    text-decoration: none;
    color: black;

    &:hover{
        color: #72FFCC;
        font-size: 20px;
    }

    @media (max-width: 576px) {
        &:hover{
            font-size: 15px;
        }
    }
`;