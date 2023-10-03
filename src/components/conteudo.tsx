export default function Conteudo(props:any) {
    return(
      <>
        <section className={"flex flex-col text-3x-l p-0 flex-1"}>
            {props.children}
        </section>
      </>
    );
}