"use client";

import { ProductCrud } from "@/domain/types";

interface Props {
    series: ProductCrud[]
}

export default function TableProduct({ series }: Props) {

    const cltTheadTrTd = `px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`;

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr className="border-b border-gray-400">
                    <td className={cltTheadTrTd}>Categoría</td>
                    <td className={cltTheadTrTd}>Nombre</td>
                    <td className={cltTheadTrTd}>Precio</td>
                    <td className={cltTheadTrTd}>Stock</td>
                </tr>
            </thead>
            <tbody>
                {
                    series.map((item) => (
                        <tr key={`${item.id}`} className="">
                            <td className="px-6 py-3 text-center text-gray-500 text-xs">{item.category}</td>
                            <td className="px-6 py-3 text-center text-gray-500 text-xs">{item.name}</td>
                            <td className="px-6 py-3 text-center text-gray-500 text-xs">{item.price}</td>
                            <td className="px-6 py-3 text-center text-gray-500 text-xs">{item.stock}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
