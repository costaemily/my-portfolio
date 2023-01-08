import React from "react";
import { BoxExp, CirculoExp, CirculoPrin, CirculosContainer, CirculoSec, DivBarra, DivD, DivDesc, DivDescExp, DivExp, DivMinhaExp, DivMySkills, DivPrin, DivTextoExp, ExperienciaContainer, FundoExp, LinhaVertical, LogoRedes, LogosContainer, MySkills, Prin, TextoContainer, TextoExperiencia, TextoPrin, TextoSec, TextoSubTituloExp, TextoTituloExp } from "./style";
import Github from "../../imgs/github.png";
import Instagram from "../../imgs/instagram.png";
import Linkedin from "../../imgs/linkedin.png";
import Emily from "../../imgs/emily.png"

function Main() {
  return (
        <div>
            <Prin>
                <DivPrin>
                    <CirculosContainer>
                        <CirculoSec/>
                        <CirculoPrin/>
                    </CirculosContainer>
                    <TextoContainer>
                        <TextoPrin>Emily da Silva Costa</TextoPrin>
                        <TextoSec>Desenvolvedora de Software</TextoSec>
                        <LogosContainer>
                            <LogoRedes src={Github} href={'https://github.com/costaemily'}/>
                            <LogoRedes src={Linkedin} href={'https://www.linkedin.com/in/costa-emily/'}/>
                            <LogoRedes src={Instagram} href={'https://www.instagram.com/costa.emilys/'}/>
                        </LogosContainer>
                    </TextoContainer>
                    <DivMySkills>
                        <MySkills top={'150px'} right={'210px'} width={'70px'}>HTML</MySkills>
                        <MySkills top={'20px'} right={'-140px'} width={'70px'}>CSS</MySkills>
                        <MySkills top={'20px'} right={'150px'} width={'70px'}>JS</MySkills>
                        <MySkills top={'20px'} right={'-140px'} width={'70px'}>REACT</MySkills>
                        <MySkills top={'0%'} right={'300px'} width={'90px'}>PYTHON</MySkills>
                    </DivMySkills>
                </DivPrin>
                
                
            </Prin> 
        </div>
        
        
  );
}

export default Main;