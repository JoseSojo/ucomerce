"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
    path: string;
    ico: ReactNode;
    label: string;
}

export default function ItemComponent({ ico, label, path }: Props) {

    const pathName = usePathname();
    const clsButton = pathName === path
        ? `w-full flex items-center gap-3 px-4 py-2 text-xs hover:bg-[#FFEA00] bg-[#FFDB58] text-white duration-200`
        : `w-full flex items-center gap-3 px-4 py-2 text-xs hover:bg-[#FFDB58] hover:text-white duration-200`;

    return (

        <li>
            <Link href={path} className={clsButton}>
                {ico}
                <span className="h-full flex items-center font-bold">{label}</span>
            </Link>
        </li>
    );
}

