"use client";

import CardChartTemplate from '@/components/admin/template/CardChartTemplate';
import CardTableTemplate from '@/components/admin/template/CardTableTemplate';
import StatisticsCard from '@/components/admin/widgets/card/CardDashboard';
import LineChart from '@/components/admin/widgets/chart/LineChart';
import TableCredit from '@/components/admin/widgets/table/TableCredit';
import TableSale from '@/components/admin/widgets/table/TableSale';
import TableUserActive from '@/components/admin/widgets/table/TableUserActive';
import { generateMockActiveCredits, generateMockActiveUsers, generateMockSales, ventasGraphic } from '@/domain/data';
import { CreditCard, MessageCircle, TableProperties, Users2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const DashboardPage: React.FC = () => {
  const [openSidenav, setOpenSidenav] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [w, setW] = useState(200);

  useEffect(() => {
    if (containerRef.current) setW(openSidenav ? containerRef.current.scrollWidth - (containerRef.current.scrollWidth / 3) : containerRef.current.scrollWidth + 100);
  }, [openSidenav])

  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5'>
        <StatisticsCard icon={<TableProperties />} label='Productos' value='350' />
        <StatisticsCard icon={<Users2 />} label='Usuarios' value='1024' />
        <StatisticsCard icon={<CreditCard />} label='Creditos Activos' value='820' />
        <StatisticsCard icon={<MessageCircle />} label='Blog' value='150' />
      </section>

      <section className='grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5'>
        <CardTableTemplate label='Créditos Activos'>
          <TableCredit series={generateMockActiveCredits(10)} />
        </CardTableTemplate>
        <CardTableTemplate label={`Usuarios Activos`}>
          <TableUserActive series={generateMockActiveUsers(10)} />
        </CardTableTemplate>
        <CardTableTemplate cols='col-span-2' label='Últimas Ventas'>
          <TableSale series={generateMockSales(10)} />
        </CardTableTemplate>
      </section>

      <section className='grid grid-cols-1 gap-3 mt-5'>
        <CardChartTemplate ref={containerRef} label={`Ventas Por Años`}>
          <LineChart w={w} series={ventasGraphic[0].data} />
        </CardChartTemplate>
      </section>
    </>
  );
};

export default DashboardPage;