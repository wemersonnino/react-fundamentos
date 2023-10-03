interface CabecalhoProps{
    titulo:string;
    subtitulo:string;
    className?:string;
}

export default function Header(prop:CabecalhoProps) {

    return(
        <header className={`flex flex-col justify-center justify-items-center items-center 
        bg-gradient-to-r from-purple-500 to-purple-950 h-auto p-5 text-slate-50`}>
            <h1 className={"text-slate-50"}>{prop.titulo}</h1>
            <h2>{prop.subtitulo}</h2>
        </header>
    )
}