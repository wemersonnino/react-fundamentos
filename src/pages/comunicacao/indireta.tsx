import Pagina from "@/components/Pagina";
import Botoes from "@/components/comunicacao/direta/Botoes";
import Valor from "@/components/comunicacao/indireta/Valor";



export default function Indireta() {
    return(
        <>
            <Pagina titulo={"Pagina Comunicacao Indireta"} subTitulo={"Pagina Exibir a comunicacao indireta"}>
                <Valor texto={"teste"}/>
            </Pagina>
        </>
    );
}