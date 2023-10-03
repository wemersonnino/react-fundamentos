import Logo from "@/components/Logo";
import Menu from "@/components/menu";

export default function AreaLateral() {
    return(
        <>
            <section className={`flex flex-col flex-none`}>
                <Logo/>
                <Menu/>
            </section>
        </>
    )
}