import React from 'react';
import { SERVICES_CONTENT, ServiceIcon } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">提供サービス</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            貴社の課題に合わせて、生成AIを活用した最適なソリューションを開発・提供します。
            <br />
            実際のデモ画面をご覧ください。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES_CONTENT.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="flex-grow">
                <div className="mb-4 text-cyan-600">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <div className="my-4 rounded-lg overflow-hidden border border-slate-200 shadow-inner bg-slate-50">
                  <img 
                    src={service.gif} 
                    alt={`${service.title} デモ`} 
                    className="w-full h-auto object-cover" 
                    loading="lazy" 
                  />
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-slate-200">
                 <h4 className="font-semibold text-slate-700 mb-2">【具体例】</h4>
                <ul className="space-y-2 text-sm">
                 {service.examples.map((example, i) => (
                    <li key={i} className="flex items-center text-slate-600">
                        <svg className="w-4 h-4 mr-2 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        {example}
                    </li>
                 ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;