import Pagina from "../../components/Pagina";
import {useState} from "react";

export default function PaginaComEstado() {
    // let estadoInicial = useState(0);//estado incial
    // const setEstadoInicial = estadoInicial[1];//function para alterar o estado inicial
    const [
        estadoInicial,//primeiro element returned pelo estado inicial
        // setEstadoInicial] = useState(0); //maneira do mercado fazer
        setEstadoInicial] = useState(0); //maneira do mercado fazer
    //o comum é chamar a function que altera o estado de setNomeDaFunction tipo setEstadoInicial

    function increment() {
        setEstadoInicial(estadoInicial + 1);
    }

    /**
     * Dessa forma o estado não reflete na ‘interface’ pro usuario
     */

    return (
        <>
            <Pagina titulo={"Com Estado"} subTitulo={"Pagina Com estado"}>
                <section className={`flex flex-col justify-center
                          content-center items-center`}>
                    <span>Valor: </span>
                    {/*<span>{estadoInicial[0]} </span>*/}
                    <span>{estadoInicial} </span> {/*maneira que o mercado usa*/}
                </section>
                <button onClick={increment} className={'botao'}>
                    Incrementar
                </button>
            </Pagina>
        </>
    );
}