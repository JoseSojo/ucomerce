"use client";

import { ReactNode } from "react";

interface Props {
    icon: ReactNode, 
    label: string, 
    value: string, 
    footer?: ReactNode
}

export function StatisticsCard({ icon, label, value, footer }: Props) {
    return (
        <div className="p-3 border border-gray-300 rounded shadow-sm">
            <div
                className="bg-[#72AFC1] text-white rounded-full absolute grid h-12 w-12 place-items-center"
            >
                {icon}
            </div>
            <div className="text-right font-mono">
                <span className="text-xs font-normal text-gray-600">
                    {label}
                </span>
                <br />
                <span className="text-3xl font-black">
                    {value}
                </span>
            </div>
            {footer && (
                <footer className="border-t border-blue-gray-50 p-4">
                    {footer}
                </footer>
            )}
        </div>
    );
}

export default StatisticsCard;
