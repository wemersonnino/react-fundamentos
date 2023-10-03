import {useState} from "react";
import Botoes from "@/components/comunicacao/indireta/Botoes";

interface ValorProps {
    texto:string,
}
export default function Valor(props:ValorProps) {
    const [nome, setNome] = useState('');
    function alterar(nome:string) {
        setNome(nome);
        console.log(`function alterar execultada por ${nome}`);
    }
    return(
        <>
            <div className={`flex flex-col gap-5 text-2xl text-orange-700 `}>
                <Botoes setNome={alterar}/>
                <span>{nome}</span>
            </div>
        </>
    );
}