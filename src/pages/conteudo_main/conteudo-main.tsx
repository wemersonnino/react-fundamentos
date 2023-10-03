import '../../app/globals.css'
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Conteudo() {
    const ano = new Date().getFullYear();
    return(
        <>
            <Header
                titulo={"Estou na pagina de conteudo"}
                subTtile={"Subtitle da Pagina de Conteudo"}
            />
            <main className={"flex flex-col justify-center justify-items-center items-center h-screen p-0 gap-5"}>
                <section className={"flex justify-center item-center text-3x-l p-8 flex-1"}>
                    <h1>Pagina de conteudos</h1>
                </section>
            </main>
            <Footer
                textoOne={`Feito com 💗 por Wemerson Nino`}
                textoTwo={`Desenvolvido em ${ano}`}
            />
        </>
    );
}