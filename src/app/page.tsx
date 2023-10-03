import Pagina from "@/components/Pagina";
import {IconBrandReact} from "@tabler/icons-react";

export default function Home() {
  return (
      <>
          <Pagina titulo={"Fundamentos React"} subTitulo={"Boas vindas ao mundo do React"}>
              <section className={`flex flex-col justify-center
               items-center h-full w-full text-zinc-500`}>
                <IconBrandReact size={200} stroke={1}/>
                  <p className={`text-gray-300 text-3xl`}>Curso de Fundamentos React</p>
                  <p className={`text-sm`}>Aprendendo os fundamentos de React</p>
              </section>
          </Pagina>
      </>
  )
}
