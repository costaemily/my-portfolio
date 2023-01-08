import { HeaderContainer, DivQualquer, ImagemLogo, DivLogo, DivNav, Items } from "./style"
import Logo from "../../imgs/M.png";

export default function Header() {
    return (
        <HeaderContainer>
            <DivLogo>
                <ImagemLogo/>
            </DivLogo>
            <DivNav>
                <Items href="#Home">Sobre mim</Items>
                <Items href="#Experiencia">Experiência</Items>
                <Items href="#Projetos">Projetos</Items>
            </DivNav>
        </HeaderContainer>
    )
}