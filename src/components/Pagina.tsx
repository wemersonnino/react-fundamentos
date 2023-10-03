import Header from "@/components/header";
import Conteudo from "@/components/conteudo";
import Footer from "@/components/footer";
import AreaLateral from "@/components/AreaLateral";

interface PaginaProps {
    titulo:string,
    subTitulo:string,
    children:any
}
export default function Pagina(props:PaginaProps) {
    let ano = new Date().getFullYear();
    return (
        <>
        <div className="flex h-screen">
            <AreaLateral/>
            <main className="flex flex-col flex-1">
                <Header
                    titulo={props.titulo}
                    subtitulo={props.subTitulo}
                />
                    <div className={`flex flex-1`}>
                        <Conteudo>
                            {props.children}
                        </Conteudo>
                    </div>
                <Footer
                    textoOne={"Feito com 💗 por Wemerson Nino"}
                    textoTwo={`Desenvolvido em ${ano}`}
                />
            </main>
        </div>
        </>
    );
}