import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/pedr_luna/" target="_blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/pedro-lucas-luna-araujo-vieira-6678b6216/" target="_blank">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/pedr_luna" target="_blank">
                <GitHubIcon/>
            </a>

        </div>
    )
}