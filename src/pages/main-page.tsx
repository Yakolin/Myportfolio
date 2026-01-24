
import { Button } from "../components/button";
import { Profile } from "../components/profile";
import { Avatar } from "../components/avatar";
import { linkButtons } from "../assets/constants/link-buttons"

import { Technologies } from "../components/technologies";
import Projects from "../components/projects";

import { useTheme } from "../hooks/useTheme"

function ThemeToggle() {
  const { theme, changeTheme } = useTheme();
  return (
    <button onClick={changeTheme} className="button-theme">
      {theme == "dark" ? "☀️" : "🌃"}
    </button>
  );
}

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
            <ThemeToggle></ThemeToggle>
            <h1 style={{ textShadow: "var(--bs-color1) 1px 0 5px", fontSize: "1.5rem" }}>Hola, Soy Yaco Santamarina!</h1>
            <br></br>
            <h2 style={{ textShadow: "var(--bs-color1) 1px 0 5px", fontSize: "0.8rem", color: "var(--fg)" }} className="subtitle">Estudiante de Ingenieria en Informatica y colaborador Ad Honorem</h2>
            <br></br>
            <p><Avatar userName="yakolin" /></p>
            <br></br>
            <h5 style={{ color: "var(--border-color1)", fontSize: "1rem" }}> Links Utiles </h5>
            <LinkButtonsPanel Array={linkButtons} />
            <div className="separator"></div>
            <Profile />
            <div className="separator"></div>

            <Technologies />
            <div className="separator"></div>

            <Projects />

            <p style={{ fontSize: "0.7rem", color: "var(--fg)" }}> - 2026 Yaco Santamarina -</p>
        </main>

    )
};

export { MainPage };