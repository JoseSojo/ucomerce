import { ReactNode, RefObject } from "react";

interface Props {
    children: ReactNode;
    label: string;
    ref?: any;
}

export default function CardChartTemplate({ ref, children, label }: Props) {

    return (
        <div ref={ref} className="w-full rounded-lg shadow-sm border border-gray-300">
            <div className="p-5">
                {children}      
            </div>
            <footer className="px-5 py-3 border-t border-gray-300">
                <strong className="text-gray-600">{label}</strong>
            </footer>
        </div>
    )
}
