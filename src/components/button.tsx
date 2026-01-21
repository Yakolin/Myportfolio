type ButtonProps = {
    content: string;
    imgSrc?: string;
    onClick?: () => void;
    animate?: string;
}

export default function Button({content ,imgSrc, onClick ,animate}: ButtonProps) {

  return (
        <div className={`button ${animate ?? ''}`} onClick={onClick ? onClick : undefined}>
            {imgSrc && <img src={imgSrc ? imgSrc : ''} className="button-image" />}
            <div className="button-body">
                {content}
            </div>
        </div>
  )
}

export { Button };