import React from "react";
import {
  BoxProjetos,
  CirculoPrin,
  CirculosContainer,
  CirculoSec,
  DescricaoExp,
  DivEu,
  DivExperiencia,
  DivExperienciaDesc,
  DivFundoExperiencia,
  DivFundoProjetos,
  DivImagem,
  DivMySkills,
  DivPrin,
  DivProjetoDisc,
  DivProjetos,
  DivProjetosDescricao,
  DivSobreMim,
  DivTags,
  DivTextoExp,
  DivTextoSobreMin,
  DivTituloExp,
  ExperienciaDesc,
  HeaderProjetos,
  IMGLink,
  LogoRedes,
  LogosContainer,
  MySkills,
  Prin,
  Tags,
  Texto,
  TextoContainer,
  TextoExp,
  TextoLink,
  TextoPrin,
  TextoProjetos,
  TextoSec,
  TextoSobreMin,
  TextoSubTituloExp,
  TextoTituloExp,
  TituloSobreMin,
} from "./style";
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
            <CirculoSec />
            <CirculoPrin src={Logo} />
          </CirculosContainer>
        </DivPrin>
        <TextoContainer>
          <TextoPrin>Emily da Silva Costa</TextoPrin>
          <TextoSec>Desenvolvedora de Software</TextoSec>
          <LogosContainer>
            <LogoRedes
              src={Github}
              href={"https://github.com/costaemily"}
              target="_blank"
            />
            <LogoRedes
              src={Linkedin}
              href={"https://www.linkedin.com/in/costa-emily/"}
              target="_blank"
            />
            <LogoRedes
              src={Instagram}
              href={"https://www.instagram.com/costa.emilys/"}
              target="_blank"
            />
            <LogoRedes src={Email} href={"mailto:costa.emily@outlook.com"} />
          </LogosContainer>
          <DivMySkills>
            <MySkills width={"70px"}>HTML</MySkills>
            <MySkills width={"70px"}>CSS</MySkills>
            <MySkills width={"120px"}>JavaScript</MySkills>
            <MySkills width={"70px"}>REACT</MySkills>
            <MySkills width={"90px"}>PYTHON</MySkills>
            <MySkills width={"70px"}>C#</MySkills>
          </DivMySkills>
        </TextoContainer>
      </Prin>
      <DivSobreMim id="SobreMim">
        <DivTextoSobreMin>
          <TituloSobreMin>Ol??! Eu sou a Emily</TituloSobreMin>
          <TextoSobreMin>
            Estudante de Engenharia da Computa????o no Instituto Federal de
            Educa????o, Ci??ncia e Tecnologia de S??o Paulo no Campus Birigui e
            Estagi??ria na Gorila Invest. Descobri a paix??o por programa????o na
            ETEC onde cursei T??cnico em Inform??rica e desde ent??o o estudo se
            tornou constante. Adoro desafios complexos, em especial aqueles que
            me tiram da zona de conforto. Nas horas vagas adoro ver um filme ou
            uma s??rie.
          </TextoSobreMin>
        </DivTextoSobreMin>
        <DivEu>
          <DivImagem src={Emily} />
        </DivEu>
      </DivSobreMim>
      <DivExperiencia id="Experiencia">
        <DivFundoExperiencia>
          <DivExperienciaDesc>
            <DivTituloExp>
              <Texto>Minha Experi??ncia</Texto>
            </DivTituloExp>
            <ExperienciaDesc>
              <DescricaoExp>
                <TextoTituloExp>
                  Estagi??ria em desenvolvimento de software - Gorila Invest
                </TextoTituloExp>
                <TextoSubTituloExp>Outubro de 2022 - Hoje</TextoSubTituloExp>
                <DivTextoExp>
                  <TextoExp>
                    O Gorila organiza as informa????es do mercado de investimentos
                    para trazer clareza e te ajudar na tomada de decis??es. Atuo
                    na squad de Platform Ops, onde fazemos Onboarding de novos
                    clientes B2Bs (Business-to-business) na plataforma do
                    Gorila. Atualmente atuo em automatiza????es de tarefas e
                    desenvolvimento de novas ferramentas internas. Trabalho com
                    tecnologias como: <b>Python</b> e <b>Node</b>.
                  </TextoExp>
                </DivTextoExp>
              </DescricaoExp>
            </ExperienciaDesc>
            <ExperienciaDesc>
              <DescricaoExp>
                <TextoTituloExp>
                  Estagi??ria em T.I. - IFSP - Birigui
                </TextoTituloExp>
                <TextoSubTituloExp>
                  Agosto de 2022 - Outubro de 2022
                </TextoSubTituloExp>
                <DivTextoExp>
                  <TextoExp>
                    O Instituto Federal de Educa????o, Ci??ncia e Tecnologia de S??o
                    Paulo ??? IFSP ??? ?? uma autarquia federal de ensino. Fundada em
                    1909, como Escola de Aprendizes Art??fices, ?? reconhecida
                    pela sociedade paulista por sua excel??ncia no ensino p??blico
                    gratuito de qualidade. As atividades desenvolvidas no
                    est??gio envolveram: Publica????es de not??cias e assuntos no
                    site institucional; Atendimento de chamados de usu??rios
                    Docentes e Administrativos; Aux??lio na constru????o da
                    infraestrutura de rede do novo laborat??rio IFMaker da
                    institui????o; Aux??lio na montagem de cabos de rede para as
                    novas catracas; Manuten????es simples de laborat??rios de
                    inform??tica e Instala????es de softwares nos computadores dos
                    laborat??rios de inform??tica.
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
              <BoxProjetos
                href="https://github.com/costaemily/SPIS-Project"
                target="_blank"
              >
                <HeaderProjetos>
                  SPIS - Inventory
                  <IMGLink src={Link} />
                </HeaderProjetos>
                <TextoLink>
                  Este reposit??rio contem o projeto de controle de estoque de
                  pe??as.
                </TextoLink>
                <DivTags>
                  <Tags>REACT</Tags>
                  <Tags>NATIVE</Tags>
                </DivTags>
              </BoxProjetos>
              <BoxProjetos
                href="https://github.com/costaemily/todo-list"
                target="_blank"
              >
                <HeaderProjetos>
                  todo-list
                  <IMGLink src={Link} />
                </HeaderProjetos>
                <TextoLink>
                  Este reposit??rio contem o projeto de uma lista de tarefas
                  utilizando REACT, JavaScript, CSS e Firebase.
                </TextoLink>
                <DivTags>
                  <Tags>HTML</Tags>
                  <Tags>CSS</Tags>
                  <Tags>JS</Tags>
                </DivTags>
              </BoxProjetos>
              <BoxProjetos
                href="https://github.com/costaemily/simulador-paginacao"
                target="_blank"
              >
                <HeaderProjetos>
                  simulador-paginacao
                  <IMGLink src={Link} />
                </HeaderProjetos>
                <TextoLink>
                  Este reposit??rio possui um simulador de algoritmos de
                  pagina????o.
                </TextoLink>
                <DivTags>
                  <Tags>C#</Tags>
                </DivTags>
              </BoxProjetos>
              <BoxProjetos
                href="https://github.com/costaemily/simulador-sistemas-de-arquivos"
                target="_blank"
              >
                <HeaderProjetos>
                  simulador-sistemas-de-arquivo
                  <IMGLink src={Link} />
                </HeaderProjetos>
                <TextoLink>
                  Este reposit??rio cont??m um projeto que simula Sistemas de
                  Arquivos por Texto e Record.
                </TextoLink>
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
