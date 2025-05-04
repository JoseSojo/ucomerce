"use client";

import { ColorsList } from '@/components/colors';
import dynamic from 'next/dynamic';
// Importación dinámica para evitar problemas de SSR (Next.js)
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
    w: number;
    series: number[];
}

const BarChart = ({ w, series }: Props) => {

    return (
        <div style={{ width: `${w}px`, maxWidth: 500, minWidth: 100, margin: '0 auto' }}>
            <Chart
                options={{
                    chart: {
                        type: 'line',
                        height: 350,
                        zoom: {
                            enabled: true, // Permite zoom
                        },
                        toolbar: {
                            show: true, // Mostrar herramientas de exportación
                        },
                    },
                    colors: ColorsList,
                    stroke: {
                        curve: 'smooth', // Líneas suaves
                        width: 3,
                    },
                    markers: {
                        size: 5,
                        hover: {
                            size: 7,
                        },
                    },
                    xaxis: {
                        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', ''],
                    },
                    tooltip: {
                        enabled: true,
                        theme: 'dark', // Tooltip oscuro
                    },
                    responsive: [
                        {
                            breakpoint: 768,
                            options: {
                                chart: {
                                    width: '100%',
                                },
                            },
                        },
                    ],
                }}
                series={series}
                type="line"
                height={350}
            />
        </div>
    );
};

export default BarChart;