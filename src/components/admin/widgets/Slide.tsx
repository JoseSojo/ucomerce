"use client";

import { BarChart2, Box, LogOut, TableProperties, User2, UsersIcon } from "lucide-react";
import ItemSlide from "./ItemSlide";
import Link from "next/link";

export function Slide({ active }: { active: boolean }) {
    const openSidenav = active;

    return (
        <aside
            className={`
            ${openSidenav ? "translate-x-0" : "-translate-x-80"} 
            fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform
             duration-300 border border-blue-gray-100
        `}>
            <h2 className="w-full text-center pt-3 text-2xl font-black text-gray-700">Grupo<strong className="text-[#72AFC1]">Kasama</strong></h2>
            <ul className="grid gap-y-2 mt-3">
                <ItemSlide ico={<BarChart2 className="w-6 h-6" />} label="Dashboard" path="/dashboard" />
                <ItemSlide ico={<TableProperties className="w-6 h-6" />} label="Productos" path="/dashboard/products" />
                <ItemSlide ico={<UsersIcon className="w-6 h-6" />} label="Usuarios" path="/dashboard/users" />
                <ItemSlide ico={<Box className="w-6 h-6" />} label="Categorías" path="/dashboard/categories" />
                <ItemSlide ico={<User2 className="w-6 h-6" />} label="Perfil" path="/dashboard/profile" />

                <li>
                    <Link href={`/`} className={`w-full flex items-center gap-3 px-4 py-2 text-xs hover:bg-red-600 hover:text-white border border-red-600 text-red-600 duration-200`}>
                        <LogOut />
                        <span className="h-full flex items-center font-bold">Salir</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}