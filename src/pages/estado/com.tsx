import Pagina from "@/components/Pagina";
import '../../app/globals.css'

export default function PaginaSemEstado() {
    let numero = 0;

    function increment() {
        numero += 1;
        console.log(numero)
    }

    /**
     * Dessa forma o estado não reflete na ‘interface’ pro usuario
     */

    return (
        <>
            <Pagina titulo={"Sem Estado"} subTitulo={"Pagina sem estado"}>
                <section className={`flex flex-col justify-center
                          content-center items-center`}>
                    <span>Valor: </span>
                    <span>{numero} </span>
                </section>
                <button onClick={increment} className={'bg-blue-500 p-2 w-32 text-slate-50'}>
                    Incrementar
                </button>
            </Pagina>
        </>
    );
}