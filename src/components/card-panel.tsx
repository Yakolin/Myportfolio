import Card , {type CardProps} from "./card";
type CardPanelProps = {
    orientation?: 'row' | 'column';
    cards: Array<CardProps>;
    cardsWidth?: string;
    cardsHeight?: string;
}

export default function CardPanel({orientation, cards, cardsWidth, cardsHeight}: CardPanelProps) {
    return (
        <div className={`card-panel ${orientation}`}>
            {cards.map(({title, content, imgSrc, animate}, index) => (
                <Card key={index}
                orientation={orientation} 
                title={title}
                content={content}
                imgSrc={imgSrc}
                animate={animate}
                width={cardsWidth}
                height={cardsHeight}
                />
            ))}
        </div>
    )
}

export { CardPanel };