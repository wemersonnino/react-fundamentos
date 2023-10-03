import {useState} from "react";

interface BotoesProps {
    setNome(nome: string): void,
}
export default function Botoes(props:BotoesProps) {
    const [nome, setNome] = useState('');
    return(
        <>
            <div className={`flex flex-col bg-zinc-800 p-4`}>
                <div className={`flex gap-5`}>
                    <button type="button" className={'btn-info'}
                            onClick={()=> props.setNome('Wemerson')}>Wemerson</button>
                    <button type="button" className={'btn-info'}
                            onClick={()=> props.setNome('Nino')}>Nino</button>
                    <button type="button" className={'btn-info'}
                            onClick={()=> props.setNome('Pereira')}>Pereira</button>
                </div>
            </div>
        </>
    );
}