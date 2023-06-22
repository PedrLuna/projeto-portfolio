import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Idiomas"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Avançado</span>
          <span>🇧🇷 PT-BR - Nativo</span>
        </div>
        <SectionTitle text="Educação"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Engenharia de Software - Universidade Federal do Ceará</span>
        </div>
      </div>
    )
}