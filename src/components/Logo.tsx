import {IconBrandReact} from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
    return(
        <>
            <Link href={'/'} className={`text-3xl font-black h-auto p-5`}>
                <h1 className={`flex items-center gap-2.5`}>
                    <span><IconBrandReact size={30} stroke={1}/></span> <span>Logo</span>
                </h1>
            </Link>
        </>
    )
}