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
    background-image: url(${((props) => props.src)});
    background-position: center;
    background-size: cover;

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
    width: 25px;
    height: 25px;

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
    margin-top: 5px;
`;
export const TextoExp = styled.div`
    font-family: 'Inder';
    text-align: justify;
`;
export const DivTextoExp = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    margin-left: 10px;
    width: auto;
    height: auto;

    background-color: #D6FFE9;
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
export const DivExperiencia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: auto;

    margin-top: 80px;
`;
export const DivFundoExperiencia = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    width: 70%;
    height: auto;

    background-color: white;
    box-shadow: rgb(0 0 0 / 25%) 6px 6px 80px 8px;

    border-radius: 30px;
`;
export const DivLinha = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    height: 100%;
`;
export const DivExperienciaDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    height: 80%;

    border-left: 5px solid #72FFCC;

    margin: 60px;
`;
export const ExperienciaDesc = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: auto;

    margin-top: 20px;
    margin-left: -15px;
    &::before{
        content: '';
        width: 25px;
        height: 25px;

        border-radius: 50%;
        background-color: #72FFCC;
    }
`;
export const DescricaoExp = styled.div`
    width: 100%;
    height: auto;
`;
export const DivTituloExp = styled.div`
    display: flex;
    width: 100%;
    height: auto;

    margin-left: -5px;

    &::before{
        content: '';
        width: 60px;
        height: 5px;

        background-color: #72FFCC;
    }
`;
export const Texto = styled.div`
    font-family: 'Inder';
    color: #72FFCC;
    font-weight: 900;
    font-size: 40px;
    
    margin-top: -25px;
    margin-left: 20px;
`;
export const DivProjetos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;

    margin-top: 100px;
`;
export const DivFundoProjetos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 100%;

    border-radius: 30px;
    background-color: #72FFCC;
`;
export const DivProjetoDisc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 99%;

    border-radius: 40px;
    background-color: white;
`;
export const TextoProjetos = styled.div`
    font-family: 'Inder';
    color: #72FFCC;
    font-weight: 1000;
    font-size: 40px;

    margin-top: 50px;
    margin-bottom: -40px;
`;
export const DivProjetosDescricao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    gap: 30px;
`;
export const BoxProjetos = styled.a`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    box-sizing: border-box;

    width: 45%;
    height: 37%;

    border-radius: 6px;
    background-color: white;

    box-shadow: rgb(0 0 0 / 20%) 0px 4px 4px 0px;

    padding: 16px;

    text-decoration: none;
`;
export const HeaderProjetos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;

    font-family: 'Inder';
    font-size: 22px;
    color: black;
`;
export const IMGLink = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${((props) => props.src)});
    background-position: center;
    background-size: cover;
`;
export const TextoLink = styled.div`
    height: auto;
    margin-top: 5px;
    font-family: 'Inder';
    font-size: 20px;
    color: gray;
`;
export const DivTags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 100%;

    gap: 30px;
`;
export const Tags = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    color: black;
    font-weight: 600;
    width: 60px;
    height: 40px;

    background-color: #72FFCC;
    border-radius: 10px;
`;
export const DivSobreMim = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;

    margin-top: 50px;

    gap: 30px;
`;
export const DivTextoSobreMin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
`;
export const DivEu = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    height: 100%;
`;
export const DivImagem = styled.div`
    width: 100%;
    height: 80%;

    background-image: url(${((props) => props.src)});
    background-position: center;
    background-size: cover;
`;
export const TituloSobreMin = styled.div`
    font-family: 'Inder';
    color: #72FFCC;
    font-weight: 1000;
    font-size: 40px;
`;
export const TextoSobreMin = styled.div`
    width: 100%;
    height: auto;

    font-family: 'Inder';
    font-size: 20px;
    text-align: justify;

    margin-top: 30px;
`;