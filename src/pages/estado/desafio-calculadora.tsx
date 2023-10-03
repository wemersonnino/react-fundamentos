import Pagina from "@/components/Pagina";
import {useState} from "react";
import {IconMinus, IconPlus} from "@tabler/icons-react";

export default function DesafioCalculadora() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function somaNum() {
        const soma = number1 + number2;
        setResultado(soma);
    }

    function subNum() {
        const subtrair = number1 - number2;
        setResultado(subtrair);
    }

    return (
        <>
            <Pagina titulo={"Desafio Calculadora"} subTitulo={"Criando soma usando alteracao de estados"}>
                <section className={'boxContent'}>
                    <div className={'formDiv'}>
                        <form>
                            <div>
                                <label htmlFor="valor1">Primeiro valor</label>
                                <input type="text" id="valor1" name="valor1"
                                       placeholder="Digite um numero"
                                       onChange={e =>
                                           setNumber1(parseFloat(e.target.value))
                                       }
                                />
                            </div>
                            <div>
                                <label htmlFor="valor2">Segundo valor</label>
                                <input type="text" id="valor2" name="valor2"
                                       placeholder="Digite um numero"
                                       onChange={event => {
                                           setNumber2(parseFloat(event.target.value))
                                       }}
                                />
                            </div>
                            <div className="flex gap-3 justify-center items-center">
                                <button onClick={somaNum}
                                        type={'button'}
                                        className={'bg-blue-500 p-2 rounded-full text-neutral-200'}>
                                    <IconPlus/>
                                </button>
                                <br/>
                                <button onClick={subNum}
                                        type={'button'}
                                        className={'bg-blue-500 p-2 rounded-full text-neutral-200'}>
                                    <IconMinus/>
                                </button>
                            </div>
                        </form>
                        <h2 className={`text-white text-center mt-5 text-3xl font-bold`}>Resultado: {resultado}</h2>
                    </div>
                </section>
            </Pagina>
        </>
    );
}