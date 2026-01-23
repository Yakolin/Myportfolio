import React, {useState, useEffect} from "react";
import Button from "../button";
type CarouselProps = {
    children: React.ReactNode;
    orientation: "row" | "column"
    separation?: number;
    scale?: number;
    panelMinWidth?: number;
    panelMinHeight?: number;
}

export default function Carousel({children, orientation, separation = 100, scale = 0.5, 
        panelMinWidth = 450, panelMinHeight = 250}: CarouselProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const childrenArray = React.Children.toArray(children);
    childrenArray.sort();
    const childrenLength = childrenArray.length;

    const nextIndex = (currentIndex - 1 + childrenLength) % childrenLength;
    const prevIndex = (currentIndex + 1) % childrenLength;

    const goNext = () => setCurrentIndex(
        (currentIndex - 1 + childrenLength) % childrenLength
    );
    const goPrev = () => setCurrentIndex(
        (currentIndex + 1) % childrenLength
    );

    //El Efecto del carrousel debe ejecutarse cada que cambie currentIndex
    const arrowNext = orientation == "row" ? "→" : "↓";
    const arrowPrev = orientation == "row" ? "←" : "↑";
    
    const transformPrev = orientation == "row" ? `translateX(-${separation}%) scale(${scale})` : `translateY(-${separation}%) scale(${scale})`;
    const transformNext = orientation == "row" ? `translateX(${separation}%) scale(${scale})` : `translateY(${separation}%) scale(${scale})`;
    return (
        <div className={`carousel ${orientation}`}>
            <Button style="carousel-button" onClick={goPrev} content={arrowPrev} />
            <div className={`panel ${orientation} `} style={{minWidth: panelMinWidth, minHeight: panelMinHeight}}>

                {childrenArray.map((children, indx) => (
                    <div key={indx} 
                    className={`carousel-children ${indx === currentIndex ? 'current' : 
                        (indx === prevIndex || indx === nextIndex) ? 'adjacent' : 'leaving'}`}
                    style={{
                        transform: indx === prevIndex ? transformPrev : indx === nextIndex ? transformNext : undefined
                    }}>
                        {children}
                    </div>
                ))}
            </div>
            <Button style="carousel-button" onClick={goNext} content={arrowNext}/>
        </div>
    )
}

export { Carousel }