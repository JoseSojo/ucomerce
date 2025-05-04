"use client";

import { ActiveUser } from "@/domain/types";

interface Props {
    series: ActiveUser[]
}

export default function TableUserActive({ series }: Props) {

    const cltTheadTrTd = `px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`;

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr className="border-b border-gray-400">
                    <td className={cltTheadTrTd}>Nombre</td>
                    <td className={cltTheadTrTd}>Correo</td>
                    <td className={cltTheadTrTd}>Rol</td>
                </tr>
            </thead>
            <tbody>
                {
                    series.map((item, i) => (
                        <tr key={`${item.name}-${i}-`} className="">
                            <td className={`px-6 py-3 text-center text-gray-500 text-xs`}>
                                { 
                                    item.isActive 
                                    ? <span className="py-[0.5] px-[7]  rounded-full bg-green-400 mr-4"></span>
                                    : <span className="py-[0.5] px-[7]  rounded-full bg-gray-400 mr-4"></span>
                                }
                                {item.name}
                            </td>
                            <td className={`px-6 py-3 text-center text-gray-500 text-xs`}>{item.email}</td>
                            <td className={`px-6 py-3 text-center text-gray-500 text-xs`}>{item.role}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
