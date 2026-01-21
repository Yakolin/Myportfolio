
import {Button} from "../components/button";
import {Profile} from "../components/profile";
import {Avatar} from "../components/avatar";
import { linkButtons } from "../assets/constants/link-buttons"

import { Technologies } from "../components/technologies";

type ButtonLinkProps = {
    title: string;
    imgSrc?: string;
    url?: string;
    animate?: string;
}
function LinkButtonsPanel({Array}: {Array: Array<ButtonLinkProps>}) {
    return (
        <div className="button-panel"> 
            {Array.map(({title, imgSrc, url, animate}, index) => (
                <Button key={index}
                content={title}
                imgSrc={imgSrc}
                onClick={() => { if (url) window.open(url, "_blank"); }}
                animate={animate}
                />
            ))}
        </div>
    )
}
export default function MainPage() {

    return (
        <main className="main-page">
            <h1 style={{fontSize: "1.5rem"}}>Hola, Soy Yaco Santamarina!</h1>
            <br></br>
            <h2 style={{fontSize: "0.8rem", color: "gray"}} className="subtitle">Estudiante de Ingenieria en Informatica y colaborador Ad Honorem</h2>
            <p><Avatar userName="yakolin"/></p>
            <br></br>
            <h5 style={{ color: "#fffb00ff" , fontSize: "1rem"}}> Links Utiles </h5>
            <LinkButtonsPanel Array={linkButtons} />
            <div className="separator"></div>
            <Profile />
            <div className="separator"></div>

            <Technologies />
            <div className="separator"></div>
            <Button content="¡Tocamelaa!" animate="hover:animate-bounce" />
        </main>
        
    )
};

export {MainPage};