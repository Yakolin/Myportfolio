import { useState } from "react";
export type ProjectCardProps = {
    header?: string;
    imgSrc?: string;
    url: string;
}

import defaultProjectImg from "../assets/img/default-project.jpg";

export default function ProjectCard({header, imgSrc, url }: ProjectCardProps) {

    const onClickGoLink = () => {
        window.open(url, "_blank");
    }
    return (
        <div className="project-card" onClick={onClickGoLink}>
            {header && <p className="header">{header}</p>}
            <img src={imgSrc ?? defaultProjectImg} className="image" />
        </div>
    )
}

export { ProjectCard }