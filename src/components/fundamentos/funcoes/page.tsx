export default function Page() {

    function titulo() {
        return(
            <>
                <div>
                    <h1>Titulo</h1>
                    <h2>subtitle</h2>
                </div>
            </>
        )
    }//title function

    function renderizarConteudo() {
        return(
            <>
                <ul>
                    <li>Nino</li>
                    <li>Wemerson</li>
                    <li>Ana</li>
                </ul>
            </>
        )
    }
    return(
        <section>
            {titulo()}
            <hr/>
            {renderizarConteudo()}
        </section>
    );
}