export default function Avatar({url, className}) {
    return (
        <img 
        loading='lazy'
        src={url}
        className={`h-8 rounded-full hover:scale-110 transition-all cursor-pointer ${className}`}
        >
        </img>
    )
}

