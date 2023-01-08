import styled from "styled-components";
import Logo from '../../imgs/instagram.png';
import Fonte from '../../fonts/Inder-Regular.ttf'

export const CirculosContainer = styled.div`
    width: 40%;
    height: 100%;

    @media (max-width: 576px) {
        width: 100%;
        height: 80%;
    }
`;
export const CirculoPrin = styled.div`
    width: 500px;
    height: 500px;

    border-radius: 50%;

    margin-top: -500px;
    margin-left: -20px;

    background-color: #72FFCC;

    &:hover{
        transform: translateX(30px);
    }
    @media (max-width: 576px) {
        width: 200px;
        height: 200px;

        margin-top: -250px;
        margin-left: 10px;
    }
`;
export const CirculoSec = styled.div`
    width: 500px;
    height: 500px;

    margin-left: -50px;
    margin-top: 80px;

    border-radius: 50%;

    background-color: #D9D9D9;

    @media (max-width: 576px) {
        width: 300px;
        height: 300px;

        margin-top: 70px;
        margin-left: 200px;
    }
`;
export const Prin = styled.div`
    width: 100%;
    height: 570px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
        width: 100%;
        height: 570px;
    }

`;
export const TextoContainer = styled.div`
    width: 37%;
    height: 200px;

    padding-left: 50px;
    margin-top: 30px;

    @media (max-width: 576px) {
        width: 100%;
        margin-top: -360px;
    }
`;
export const TextoPrin = styled.div`
    font-family: 'Inder', sans-serif;
    font-size: 40px;

    font-weight: 600;
`;
export const TextoSec = styled.div`
    font-family: 'Inder', sans-serif;
    font-size: 20px;
    color: gray;
`;
export const LogosContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 300px;
    height: 100px;
    
    gap: 20px;
`;
export const LogoRedes = styled.a`
    width: 40px;
    height: 40px;

    background-image: url(${((props) => props.src)});
    background-position: center;
    background-size: cover;
`;
export const MySkills = styled.div`
    margin-top: ${((props) => props.top)};
    margin-right: ${((props) => props.right)};

    display: flex;
    align-items: center;
    justify-content: center;
    width: ${((props) => props.width)};
    height: 50px;

    border-radius: 10px;
    background-color: #72FFCC;

    font-family: 'Inder';
    font-size: 20px;
    font-weight: 1000;

    @media (max-width: 576px) {
        margin-top: 0px;
        margin-right: 0px;
    }
`;
export const ExperienciaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;
`;
export const FundoExp = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    width: 70%;
    height: 90%;

    border-radius: 30px;

    margin-top: 40px;

    background-color: #D9D9D9;
`;
export const LinhaVertical = styled.div`
    width: 5px;
    height: 100%;

    background-color: #72FFCC;
`;
export const TextoExperiencia = styled.div`
    font-family: 'Inder';
    color: #72FFCC;
    font-weight: 900;
    font-size: 40px;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 0.1px;

    margin-top: -430px;
    margin-left: 70px;
    &::before{
        content: '';
        height: 5px;
        width: 50px;
        background-color: #72FFCC;

        position: absolute;
        top: 673px; right: 973px;
    }
    &::after{
        content: '';
        height: 30px;
        width: 30px;
        background-color: #72FFCC;
        border-radius: 50%;

        position: absolute;
        top: 800px; right: 1007px;
    }
`;
export const BoxExp = styled.div`
    width: 400px;
    height: 200px;

    border-radius: 30px;

    background-color: gray;
`;
export const DivExp = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 5%;
    height: 100%;
`;
export const DivDesc = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
export const DivDescExp = styled.div`
    position: relative;
    right: 1.5%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 40%;

    margin-top: 10px;
`;
export const CirculoExp = styled.div`
    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: #72FFCC;
`;
export const DivD = styled.div`
    width: 100%;
    height: 100%;
    background-color: green;
`;
export const TextoTituloExp = styled.div`
    margin-left: 10px;
    font-family: 'Inder';
    font-weight: 600;
    font-size: 20px;
`;
export const TextoSubTituloExp = styled.div`
    margin-left: 10px;
    font-family: 'Inder';
    font-weight: 400;

    color: gray;
`;
export const TextoExp = styled.div`

`;
export const DivTextoExp = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 5px;
    margin-left: 10px;
    width: 95%;
    height: 50%;

    background-color: rosybrown;
    border: 30px;
    border-radius: 15px;

    padding: 10px;

    font-size: 18px;
`;
export const DivMinhaExp = styled.div`
    width: 100%;
    height: 20%;

    background-color: green;
`;
export const DivBarra = styled.div`
    width: 5%;
    height: 5px;

    background-color: #72FFCC;

    margin-top: 4%;
`;
export const DivPrin = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100%;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;
export const DivMySkills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 20%;
    height: 100%;

    @media (max-width: 576px) {
        width: 100%;
        height: 20%;
        flex-direction: row;
        justify-content: space-around;
    }
`;