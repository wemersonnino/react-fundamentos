import Valor from "@/components/comunicacao/direta/Valor";
import {useState} from "react";

export default function Botoes() {
    const [nome, setNome] = useState('');
    return(
        <>
            <div className={`bg-zinc-800 p-4`}>
                <div className={`flex gap-5`}>
                    <button type="button" className={'btn-info'} onClick={()=> setNome('Wemerson')}>Wemerson</button>
                    <button type="button" className={'btn-info'} onClick={()=> setNome('Nino')}>Nino</button>
                    <button type="button" className={'btn-info'} onClick={()=> setNome('Pereira')}>Pereira</button>
                </div>
                <Valor texto={nome}/>
            </div>
        </>
    );
}