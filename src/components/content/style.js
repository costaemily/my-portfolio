import styled from "styled-components";

export const CirculosContainer = styled.div`
    width: auto;
    height: auto;

    @media (max-width: 576px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
    }
    @media (max-width: 320px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 0%;
        width: 80%;
        height: auto;
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
    @media (max-width: 320px) {
        width: 8rem;
        height: 6rem;

        margin-top: 0%;
        &:hover{
            transform: translateX(-30px);
        }
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
        width: 30%;
        height: 30%;

        margin-top: 70px;
        margin-left: 200px;
    }
    @media (max-width: 320px) {
        width: 11rem;
        height: 9rem;

        margin: 0%;
    }
`;
export const Prin = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;

    @media (max-width: 576px) {
        width: 100%;
        height: auto;
    }
    @media (max-width: 320px) {
        width: 100%;
        height: auto;
        flex-direction: column;
    }

`;
export const TextoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;

    margin-top: 30px;

    @media (max-width: 320px) {
        width: 100%;
        height: auto;
        align-items: center;
        justify-content: center;
        margin-top: 5%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const TextoPrin = styled.div`
    font-family: 'Inder', sans-serif;
    font-size: 40px;

    font-weight: 600;
    @media (max-width: 320px) {
        font-size: 1.7rem;
    }
`;
export const TextoSec = styled.div`
    font-family: 'Inder', sans-serif;
    font-size: 20px;
    color: gray;
    @media (max-width: 320px) {
        font-size: 1rem;
    }
`;
export const LogosContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 300px;
    height: 100px;
    
    gap: 20px;
    @media (max-width: 320px) {
        margin-top: 5%;
        width: 100%;
        height: auto;
        justify-content: space-around;
    }
`;
export const LogoRedes = styled.a`
    width: 40px;
    height: 40px;

    background-image: url(${((props) => props.src)});
    background-position: center;
    background-size: cover;
    @media (max-width: 320px) {
        width: 2rem;
        height: 2rem;
    }
`;
export const MySkills = styled.div`
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

    @media (max-width: 320px) {
        width: auto + 1px;
        height: auto + 0.1px;
        font-size: 1rem;
    }
    @media (max-width: 576px) {
        margin-top: 0px;
        margin-right: 0px;
    }
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
export const DivPrin = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: auto;
    height: auto;

    @media (max-width: 576px) {
        flex-direction: column;
    }
    @media (max-width: 320px) {
        flex-direction: row;
        justify-content: center;

        margin-top: 60px;
    }
`;
export const DivMySkills = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    width: auto;
    height: auto;

    gap: 30px;

    @media (max-width: 320px) {
        height: auto;
        margin-top: 5%;
    }
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

    @media (max-width: 320px) {
        width: 100%;
    }
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
    height: auto;

    margin-top: 100px;
    @media (max-width: 320px) {
        height: auto;
    }
`;
export const DivFundoProjetos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 99%;

    border-radius: 30px;
    background-color: #72FFCC;
    box-shadow: rgb(0 0 0 / 25%) 6px 6px 80px 8px;

    @media (max-width: 320px) {
        width: auto;
    }
`;
export const DivProjetoDisc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: auto;

    border-radius: 40px;
    background-color: white;

    @media (max-width: 320px) {
        height: auto;
    }
`;
export const TextoProjetos = styled.div`
    font-family: 'Inder';
    color: #72FFCC;
    font-weight: 1000;
    font-size: 40px;

    margin-top: 3%;
    @media (max-width: 320px) {
        margin-top: 5%;
        margin-bottom: 0%;
        text-align: center;
    }
`;
export const DivProjetosDescricao = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    gap: 30px;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 320px) {
        height: auto;
        gap: 0px;
    }
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

    @media (max-width: 320px) {
        flex-direction: column;
        width: 95%;
        height: auto;
        margin-top: 7px;
    }
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

    @media (max-width: 320px) {
        font-size: 1rem;
    }
`;
export const IMGLink = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${((props) => props.src)});
    background-position: center;
    background-size: cover;
    @media (max-width: 320px) {
        width: 1rem;
        height: 1rem;
    }
`;
export const TextoLink = styled.div`
    height: auto;
    margin-top: 5px;
    font-family: 'Inder';
    font-size: 20px;
    color: gray;

    @media (max-width: 320px) {
        font-size: 0.8rem;
    }
`;
export const DivTags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 100%;

    gap: 30px;
    @media (max-width: 320px) {
        margin-top: 5%;
        gap: 4%;
    }
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

    @media (max-width: 320px) {
        font-size: 0.7rem;
        width: 40%;
        height: 2rem;
    }
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

    @media (max-width: 320px) {
        flex-direction: column-reverse;
        margin-top: 5%;
        height: auto;
    }
`;
export const DivTextoSobreMin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;

    @media (max-width: 320px) {
        width: 80%;
        height: auto;
    }
`;
export const DivEu = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    height: 100%;

    @media (max-width: 320px) {
        width: 100%;
        height: 300px;
    }
`;
export const DivImagem = styled.div`
    width: 100%;
    height: 80%;

    background-image: url(${((props) => props.src)});
    background-position: center;
    background-size: cover;
    @media (max-width: 320px) {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
    }
`;
export const TituloSobreMin = styled.div`
    font-family: 'Inder';
    color: #72FFCC;
    font-weight: 1000;
    font-size: 40px;
    @media (max-width: 320px) {
        font-size: 2rem;
        text-align: center;
    }
`;
export const TextoSobreMin = styled.div`
    width: 100%;
    height: auto;

    font-family: 'Inder';
    font-size: 20px;
    text-align: justify;

    margin-top: 30px;
`;