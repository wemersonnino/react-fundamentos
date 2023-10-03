interface FooterProps{
    textoOne:string;
    textoTwo:string;
}

export default function Footer(prop:FooterProps) {
    return(
        <>
            <footer className={`flex justify-around 
            justify-items-center
             items-center bg-slate-900
              h-16 p-8 border-t border-zinc-800 text-xl text-zinc-500`}>
                <h3 className={"p-1"}>{prop.textoOne}</h3>
                <h3 className={"p-1"}>{prop.textoTwo}</h3>
            </footer>
        </>
    );
}