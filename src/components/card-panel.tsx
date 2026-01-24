import Card , {type CardProps} from "./card";
type CardPanelProps = {
    cards: Array<CardProps>;
    cardsWidth?: string;
    cardsHeight?: string;
}

export default function CardPanel({cards, cardsWidth, cardsHeight}: CardPanelProps) {
    return (
        <div className={`card-panel`}>
            {cards.map(({title, content, imgSrc}, index) => (
                <Card key={index}
                title={title}
                content={content}
                imgSrc={imgSrc}
                width={cardsWidth}
                height={cardsHeight}
                />
            ))}
        </div>
    )
}

export { CardPanel };