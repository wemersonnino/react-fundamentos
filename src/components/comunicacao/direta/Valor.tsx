
interface ValorProps {
    texto:string,
}
export default function Valor(props:ValorProps) {
    return(
        <>
            <div className={`text-8xl text-orange-700`}>
                {props.texto}
            </div>
        </>
    );
}