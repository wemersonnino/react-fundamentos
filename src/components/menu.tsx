import MenuItem from "@/components/menuItem";
import {
    IconArrowDownSquare,
    IconArrowsDiagonal,
    IconArrowUp, IconArrowUpSquare,
    IconBrandJavascript, IconCalculator,
    IconCode,
    IconFileCheck,
    IconFunction,
    IconH1,
    IconHome, IconHomeStats, IconTextCaption
} from "@tabler/icons-react";

export default function Menu() {
    return(
        <>
            <section className={`flex flex-justify flex-1
             item-center w-52 bg-zinc-700 round-lg py-2 overflow-auto`}>
                <nav className={"text-gray-300 flex flex-col justify-start items-center" +
                    " gap-2 text-sm text-center" +
                    " w-52 p-4"}>
                    <MenuItem tagTitle={'pagina 1'} icon={<IconHome/>}
                              texto={"Home Projeto"} nameLink={"Fundamentos React"} url={"/"}/>
                    <MenuItem tagTitle={'pagina 2'} icon={<IconFunction/>}
                              texto={"JSX: Chamando Functions"} nameLink={"Chamando Funções"}
                              url={"/conteudo_main/conteudo-main"}/>
                    <MenuItem nameLink={"Fundamentos Pagina JSX"} tagTitle={"Pagina #1"}
                              url={""} icon={<IconFileCheck/>} texto={"Pagina #1"}/>

                    <span className={`text-sm text-zinc-500 pl-3 pt-4`}>Componentes</span>
                    <MenuItem nameLink={"Componente Básico"} tagTitle={"Componete Básico"}
                              url={""} icon={<IconCode/>} texto={"Componente Básico"}/>
                    <MenuItem nameLink={"Componente Titulo"} tagTitle={"Componente Titulo"}
                              url={""} icon={<IconH1/>} texto={"Componente Titulo"}/>
                    <MenuItem nameLink={"Js com JSX"} tagTitle={"Js com JSX"}
                              url={""} icon={<IconBrandJavascript/>} texto={"Js com JSX"}/>
                    <span className={`text-sm text-zinc-500 pl-3 pt-4`}>Estados</span>
                    <MenuItem tagTitle={'pagina sem estado'} icon={<IconCode/>}
                              texto={"Pagina sem Estado"} nameLink={"Página sem estado"} url={"/estado/sem"}/>
                    <MenuItem tagTitle={'pagina com estado'} icon={<IconCode/>}
                              texto={"Pagina com Estado"} nameLink={"Página com estado"} url={"/estado/com"}/>
                    <MenuItem tagTitle={'Desafio estado'} icon={<IconCode/>}
                              texto={"Pagina Desafio com Estado"}
                              nameLink={"Página Desafio com estado"} url={"/estado/desafio-estado"}/>
                    <MenuItem nameLink={"Pagina Alterar Estado do Texto"} tagTitle={"pagina com estado de texto"}
                              url={"/estado/campoTExto"} icon={<IconTextCaption/>} texto={"Texto com Estado"}/>
                    <MenuItem nameLink={"Pagina Desafio Calculadora"} tagTitle={"pagina Desafio Calculadora"}
                              url={"/estado/desafio-calculadora"}
                              icon={<IconCalculator/>} texto={"Desafio calculadora"}/>
                    <span className={`text-sm text-zinc-500 pl-3 pt-4`}>Comunicação</span>
                    <MenuItem nameLink={"Pagina de Comunicação"} tagTitle={"Comunicação Direta"}
                              url={"/comunicacao/direta"} icon={<IconArrowDownSquare/>}
                              texto={"Pagina de Comunicação Direta"}/>
                    <MenuItem nameLink={"Pagina de Comunicação Indireta"} tagTitle={"Comunicação Indireta"}
                              url={"/comunicacao/indireta"} icon={<IconArrowUpSquare/>}
                              texto={"Pagina de Comunicação Indireta"}/>
                </nav>
            </section>
        </>
    );
}