import Link from "next/link";

interface MenuItemProps {
    nameLink:string
    tagTitle:string;
    url:string;
    icon:any;
    texto:string;
}

export default function MenuItem(props:MenuItemProps) {
    return(
        <>
            <Link
                title={props.tagTitle}
                href={props.url}
                className={`flex items-center gap-2 px-2
                 py-2 bg-zinc-900 p-1 rounded-lg w-full
                 hover:bg-zinc-800`}
                aria-valuetext={props.texto}
            >
                {props.icon}{props.nameLink}
            </Link>
        </>
    );
}