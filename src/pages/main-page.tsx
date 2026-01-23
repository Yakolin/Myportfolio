
import { Button } from "../components/button";
import { Profile } from "../components/profile";
import { Avatar } from "../components/avatar";
import { linkButtons } from "../assets/constants/link-buttons"

import { Technologies } from "../components/technologies";
import Projects from "../components/projects";

type ButtonLinkProps = {
    title: string;
    imgSrc?: string;
    url?: string;
    animate?: string;
}
function LinkButtonsPanel({ Array }: { Array: Array<ButtonLinkProps> }) {
    return (
        <div className="button-panel">
            {Array.map(({ title, imgSrc, url}, index) => (
                <Button key={index}
                    style="button"
                    buttonBody="button-body"
                    content={title}
                    imgSrc={imgSrc}
                    onClick={() => { if (url) window.open(url, "_blank"); }}
                />
            ))}
        </div>
    )
}
export default function MainPage() {

    return (
        <main className="main-page">
            <h1 style={{ textShadow: "orange 1px 0 5px", fontSize: "1.5rem" }}>Hola, Soy Yaco Santamarina!</h1>
            <br></br>
            <h2 style={{ textShadow: "rgb(255, 196, 0) 1px 0 5px", fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.68)" }} className="subtitle">Estudiante de Ingenieria en Informatica y colaborador Ad Honorem</h2>
            <p><Avatar userName="yakolin" /></p>
            <br></br>
            <h5 style={{ color: "rgb(255, 145, 0)", fontSize: "1rem" }}> Links Utiles </h5>
            <LinkButtonsPanel Array={linkButtons} />
            <div className="separator"></div>
            <Profile />
            <div className="separator"></div>

            <Technologies />
            <div className="separator"></div>

            <Projects />

            <p style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)" }}> - 2026 Yaco Santamarina -</p>
        </main>

    )
};

export { MainPage };