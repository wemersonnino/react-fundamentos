import Pagina from "@/components/Pagina";
export default function ConteudoMain() {
    const ano = new Date().getFullYear();

    function executar(){
        console.log('Botao precionado')
    }
    return(
        <>
            <div className={"flex flex-col w-full"}>
                <Pagina
                    titulo={"Estou na pagina de conteudo_main"}
                    subTitulo={"Subtitle da Pagina de ConteudoMain"}>
                    <section className={`flex flex-col justify-center items-center`}>
                        <h1 className={`mt-5`}>Pagina 2 - conteudo main</h1><br/>
                        <button
                         type="button"
                         className={`botao`}
                         onClick={executar}>
                            Teste
                        </button>
                    </section>
                </Pagina>
            </div>
        </>
    );
}