import Pagina from "@/components/Pagina";
import {useState} from "react";
import {IconMinus, IconPlus} from "@tabler/icons-react";

export default function DesafioEstado() {
    const [valorNum, setValorNum] = useState(0);

    function increment() {
        setValorNum(valorNum + 1);
    }
    function decrement() {
        (valorNum <= 0)? setValorNum(valorNum): setValorNum(valorNum - 1);
    }
    return(
        <>
            <Pagina titulo={"Desafio Com Estado"} subTitulo={"Incrementar e Decrementar"}>
                <section className={`flex flex-col gap-5 justify-center
                          content-center items-center w-full h-full`}>
                    <span className={`text-3xl mt-5 mb-3 font-medium text-slate-500`}>Valor: </span>
                    <span className={`font-bold text-4xl leading-6 text-red-900`}>{valorNum} </span> {/*maneira que o mercado usa*/}
                    <section className={`flex mt-5 space-x-5 justify-center items-center`}>
                        <button onClick={increment} className={'bg-blue-500 p-2 rounded-full text-neutral-200'}>
                            <IconPlus/>
                        </button>
                        <br/>
                        <button onClick={decrement} className={'bg-blue-500 p-2 rounded-full text-neutral-200'}>
                            <IconMinus/>
                        </button>
                    </section>
                </section>
            </Pagina>
        </>
    );
}