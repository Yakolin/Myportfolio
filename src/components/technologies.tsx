import CardPanel from "./card-panel";
import {technologiesCards} from "../assets/constants/technologies-cards";

export function Technologies() {
    return (
        <div className="technologies">
            <h2 style={{textShadow: "red 1px 0 10px"}}> Tecnologias que manejo </h2>
            <CardPanel cards={technologiesCards} cardsHeight="100px"/>
        </div>
    )
}
export default {Technologies};