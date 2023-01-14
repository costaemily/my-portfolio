import React from "react";
import { BoxExp, BoxProjetos, CirculoExp, CirculoPrin, CirculosContainer, CirculoSec, DescricaoExp, DivBarra, DivD, DivDesc, DivDescExp, DivEu, DivExp, DivExperiencia, DivExperienciaDesc, DivFundoExperiencia, DivFundoProjetos, DivImagem, DivLinha, DivMinhaExp, DivMySkills, DivPrin, DivProjetoDisc, DivProjetos, DivProjetosDescricao, DivSobreMim, DivTags, DivTextoExp, DivTextoSobreMin, DivTituloExp, ExperienciaContainer, ExperienciaDesc, FundoExp, HeaderProjetos, IMGLink, LinhaVertical, LogoRedes, LogosContainer, MySkills, Prin, Tags, Texto, TextoContainer, TextoExp, TextoExperiencia, TextoLink, TextoPrin, TextoProjetos, TextoSec, TextoSobreMin, TextoSubTituloExp, TextoTituloExp, TituloSobreMin } from "./style";
import Github from "../../imgs/github.png";
import Instagram from "../../imgs/instagram.png";
import Linkedin from "../../imgs/linkedin.png";
import Emily from "../../imgs/emily.png";
import Link from "../../imgs/simbolo-de-link-externo.png";
import Logo from "../../imgs/E.png";
import Email from "../../imgs/o-email.png";

function Main() {
  return (
        <div>
            <Prin>
                <DivPrin>
                    <CirculosContainer>
                        <CirculoSec/>
                        <CirculoPrin src={Logo}/>
                    </CirculosContainer>
                </DivPrin>
                <TextoContainer>
                <TextoPrin>Emily da Silva Costa</TextoPrin>
                    <TextoSec>Desenvolvedora de Software</TextoSec>
                    <LogosContainer>
                        <LogoRedes src={Github} href={'https://github.com/costaemily'}/>
                        <LogoRedes src={Linkedin} href={'https://www.linkedin.com/in/costa-emily/'}/>
                        <LogoRedes src={Instagram} href={'https://www.instagram.com/costa.emilys/'}/>
                        <LogoRedes src={Email} href={"mailto:costa.emily@outlook.com"}/>
                    </LogosContainer>
                    <DivMySkills>
                        <MySkills width={'70px'}>HTML</MySkills>
                        <MySkills width={'70px'}>CSS</MySkills>
                        <MySkills width={'120px'}>JavaScript</MySkills>
                        <MySkills width={'70px'}>REACT</MySkills>
                        <MySkills width={'90px'}>PYTHON</MySkills>
                        <MySkills width={'70px'}>C#</MySkills>
                    </DivMySkills>
                </TextoContainer>
            </Prin> 
            <DivSobreMim id="SobreMim">
                <DivTextoSobreMin>
                    <TituloSobreMin>Olá! Eu sou a Emily</TituloSobreMin>
                    <TextoSobreMin>
                        Estudante de Engenharia da Computação no Instituto Federal de Educação, 
                        Ciência e Tecnologia de São Paulo no Campus Birigui e Estagiária na Gorila Invest.
                        Descobri a paixão por programação na ETEC onde cursei Técnico em Informárica e desde
                        então o estudo se tornou constante.
                        Adoro desafios complexos, em especial aqueles que me tiram da zona de conforto.
                        Nas horas vagas adoro ver um filme ou uma série.
                    </TextoSobreMin>
                </DivTextoSobreMin>
                <DivEu>
                    <DivImagem src={Emily}/>
                </DivEu>
            </DivSobreMim>
            <DivExperiencia id="Experiencia">
                <DivFundoExperiencia>
                    <DivExperienciaDesc>
                    <DivTituloExp>
                        <Texto>Minha Experiência</Texto>
                        </DivTituloExp>
                        <ExperienciaDesc>
                            <DescricaoExp>
                                <TextoTituloExp>Estagiária em desenvolvimento de software - Gorila Invest</TextoTituloExp>
                                <TextoSubTituloExp>Outubro de 2022 - Hoje</TextoSubTituloExp>
                                <DivTextoExp>
                                    <TextoExp>O Gorila organiza as informações do mercado de investimentos para trazer clareza e te ajudar na tomada de decisões.
                                        Atuo na squad de Platform Ops, onde fazemos Onboarding de novos clientes B2Bs (Business-to-business) na plataforma do Gorila.
                                    Atualmente atuo em automatizações de tarefas e desenvolvimento de novas ferramentas internas. Trabalho com tecnologias como: <b>Python</b> e <b>Node</b>.</TextoExp>
                                </DivTextoExp>
                            </DescricaoExp>
                        </ExperienciaDesc>
                        <ExperienciaDesc>
                            <DescricaoExp>
                                <TextoTituloExp>Estagiária em T.I. - IFSP - Birigui</TextoTituloExp>
                                <TextoSubTituloExp>Agosto de 2022 - Outubro de 2022</TextoSubTituloExp>
                                <DivTextoExp>
                                    <TextoExp>O Instituto Federal de Educação, Ciência e Tecnologia de São Paulo – IFSP – é uma autarquia federal de ensino.
                                    Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade.
                                    As atividades desenvolvidas no estágio envolveram: Publicações de notícias e assuntos no site institucional; 
                                    Atendimento de chamados de usuários Docentes e Administrativos;
                                    Auxílio na construção da infraestrutura de rede do novo laboratório IFMaker da instituição;
                                    Auxílio na montagem de cabos de rede para as novas catracas;
                                    Manutenções simples de laboratórios de informática e
                                    Instalações de softwares nos computadores dos laboratórios de informática.
                                    </TextoExp>
                                </DivTextoExp>
                            </DescricaoExp>
                        </ExperienciaDesc>
                    </DivExperienciaDesc>
                </DivFundoExperiencia>
            </DivExperiencia>
            <DivProjetos id="Projetos">
                <DivFundoProjetos>
                    <DivProjetoDisc>
                        <TextoProjetos>Meus Projetos</TextoProjetos>
                        <DivProjetosDescricao>
                            <BoxProjetos href="https://github.com/costaemily/SPIS-Project">
                                <HeaderProjetos>
                                    SPIS - Inventory
                                    <IMGLink src={Link}/>
                                </HeaderProjetos>
                                <TextoLink>Este repositório contem o projeto de controle de estoque de peças.</TextoLink>
                                <DivTags>
                                    <Tags>REACT</Tags>
                                    <Tags>NATIVE</Tags> 
                                </DivTags>
                            </BoxProjetos>
                            <BoxProjetos href="https://github.com/costaemily/todo-list">
                                <HeaderProjetos>
                                    todo-list
                                    <IMGLink src={Link}/>
                                </HeaderProjetos>
                                <TextoLink>Este repositório contem o projeto de uma lista de tarefas utilizando REACT, JavaScript, CSS e Firebase.</TextoLink>
                                <DivTags>
                                    <Tags>HTML</Tags>
                                    <Tags>CSS</Tags>
                                    <Tags>JS</Tags>
                                </DivTags>
                            </BoxProjetos>
                            <BoxProjetos href="https://github.com/costaemily/simulador-paginacao">
                                <HeaderProjetos>
                                    simulador-paginacao
                                    <IMGLink src={Link}/>
                                </HeaderProjetos>
                                <TextoLink>Este repositório possui um simulador de algoritmos de paginação.</TextoLink>
                                <DivTags>
                                    <Tags>C#</Tags>
                                </DivTags>
                            </BoxProjetos>
                            <BoxProjetos href="https://github.com/costaemily/simulador-sistemas-de-arquivos">
                                <HeaderProjetos>
                                    simulador-sistemas-de-arquivo
                                    <IMGLink src={Link}/>
                                </HeaderProjetos>
                                <TextoLink>Este repositório contém um projeto que simula Sistemas de Arquivos por Texto e Record.</TextoLink>
                                <DivTags>
                                    <Tags>C#</Tags>
                                </DivTags>
                            </BoxProjetos>
                        </DivProjetosDescricao>
                    </DivProjetoDisc>
                </DivFundoProjetos>
            </DivProjetos>
        </div>
  );
}
export default Main;