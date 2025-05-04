"use client";

import { Sale } from "@/domain/types";

interface Props {
    series: Sale[]
}

export default function TableSale({ series }: Props) {

    const cltTheadTrTd = `px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`;

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr className="border-b border-gray-400">
                    <td className={cltTheadTrTd}>Producto</td>
                    <td className={cltTheadTrTd}>Cantidad</td>
                    <td className={cltTheadTrTd}>Método de Pago</td>
                    <td className={cltTheadTrTd}>Precio Unitario</td>
                    <td className={cltTheadTrTd}>Precio Total</td>
                </tr>
            </thead>
            <tbody>
                {
                    series.map((item) => (
                        <tr key={`${item.id}`} className="">
                            <td className="px-6 py-3 text-center text-gray-500 text-xs">{item.product}</td>
                            <td className="px-6 py-3 text-center text-gray-500 text-xs">{item.quantity}</td>
                            <td className="px-6 py-3 text-center text-gray-500 text-xs">{item.paymentMethod}</td>
                            <td className="px-6 py-3 text-center text-gray-500 text-xs">{item.unitPrice}</td>
                            <td className="px-6 py-3 text-center text-gray-500 text-xs">{item.total}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
