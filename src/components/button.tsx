type ButtonProps = {
    style:string
    content?: string;
    imgSrc?: string;
    onClick?: () => void;
    buttonBody?: string;
}

export default function Button({style,content ,imgSrc, buttonBody, onClick}: ButtonProps) {

  return (
        <div className={style} onClick={onClick ? onClick : undefined}>
            {imgSrc && <img src={imgSrc ? imgSrc : ''} className="button-image" />}
            <div className={buttonBody ?? ""}>
                {content}
            </div>
        </div>
  )
}

export { Button };