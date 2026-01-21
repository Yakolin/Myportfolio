
export type CardProps = {
    title?: string;
    content?: string;
    orientation?: "row" | "column";
    imgSrc?: string;
    animate?: string;
    width?: string;
    height?: string;
};

export default function Card({
    title,
    content,
    imgSrc,
    animate,
    width = "auto",
    height = "auto",
}: CardProps) {
    return (
        <div
            className={`card row ${animate ?? ""}`}
            style={{ width, height }}
        >
            {imgSrc && <img src={imgSrc} alt={title} className="card-image" />}
            <div className="card-body">
                {title && <h3 className="card-title">{title}</h3>}
                {content && <p className="card-description">{content}</p>}
            </div>
        </div>
    );
}

export {Card};