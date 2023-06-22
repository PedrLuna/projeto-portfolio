import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experiência"/>
          <p>Fundador Startup <a href="https://bmo.dev.br">BMO</a> | <br></br>Gerente de projetos <a href="https://bit.ly/progete">PROGETE!</a> |</p>
          <div className="experience-time">

            <Skill image="/python.png" measure={3} years="3 anos"/>
            <Skill image="/react.png" measure={1} years="1 ano"/>
            <Skill image="/ts.png" measure={1} years="1 ano"/>
            <Skill image="/js.png" measure={1} years="1 ano"/>
          </div>
        </div>
    )
}