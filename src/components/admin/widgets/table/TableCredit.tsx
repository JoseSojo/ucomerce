"use client";

import { ActiveCredit } from "@/domain/types";

interface Props {
    series: ActiveCredit[]
}

export default function TableCredit({ series }: Props) {

    const cltTheadTrTd = `px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`;

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr className="border-b border-gray-400">
                    <td className={cltTheadTrTd}>Usuario</td>
                    <td className={cltTheadTrTd}>Estado</td>
                    <td className={cltTheadTrTd}>Proximo</td>
                    <td className={cltTheadTrTd}>Pagado</td>
                    <td className={cltTheadTrTd}>Total</td>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {
                    series.map((item) => (
                        <tr key={`${item.id}`} className="">
                            <td className={`px-6 py-3 text-center text-gray-500 text-xs`}>{item.user.email}</td>
                            <td className={`px-6 py-3 text-center text-gray-500 text-xs`}>{item.status}</td>
                            <td className={`px-6 py-3 text-center text-gray-500 text-xs`}>{item.nextPaymentDate.getDate()}/{item.nextPaymentDate.getMonth()+1}/{item.nextPaymentDate.getFullYear()}</td>
                            <td className={`px-6 py-3 text-center text-gray-500 text-xs`}>{Math.round(item.paidAmount)}</td>
                            <td className={`px-6 py-3 text-center text-gray-500 text-xs`}>{Math.round(item.totalAmount)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
