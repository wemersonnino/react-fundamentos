import Pagina from "@/components/Pagina";
import {useState} from "react";

export default function CampoTExto() {
    let [valor, setValor] = useState('');

    function setValorText() {
        setValor(valor = '');
    }

    const t = function alterarValor(e:any) {
        setValor(e.target.value);
        console.log(e.target.value);
    }

    return (
        <Pagina titulo={"Capitulo Estado Texto"} subTitulo={"Alterando o Estado do Texto"}>
            <section className={'boxContent'}>
                <div className={'formDiv'}>
                    <form>
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome"
                                   placeholder="Digite seu nome"
                                   value={valor}
                            onChange={t}/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <button type="button"
                                    className="botao">
                                {valor}
                            </button>
                        </div>
                    </form>

                </div>
            </section>
        </Pagina>
    );
}