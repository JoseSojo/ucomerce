import React from 'react';
import { Truck, ShieldCheck, CreditCard, MessageSquare } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="w-10 h-10 text-[#72AFC1]" />,
      title: 'Pedidos vía WhatsApp',
      description: 'Ordena de forma rápida y sencilla a través de WhatsApp.'
    },
    {
      icon: <CreditCard className="w-10 h-10 text-[#72AFC1]" />,
      title: 'Compras Seguras',
      description: '100% seguridad garantizada en nuestra pasarela de pago.'
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#72AFC1]" />,
      title: 'Garantía Extendida',
      description: 'Todos nuestros productos incluyen garantía por 1 año.'
    },
    {
      icon: <Truck className="w-10 h-10 text-[#72AFC1]" />,
      title: 'Entrega Flexible',
      description: 'Entrega a domicilio o retiro en local, tú decides.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#0A082D] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;