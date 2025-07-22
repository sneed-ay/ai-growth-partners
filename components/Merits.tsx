
import React from 'react';
import { MERITS_CONTENT } from '../constants';

const Merits: React.FC = () => {
  return (
    <section id="merits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            AI Growth Partnersが選ばれる
            <span className="text-cyan-600">3</span>つの理由
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {MERITS_CONTENT.map((merit, index) => {
            const Icon = merit.icon;
            return (
              <div key={index} className="p-8 flex flex-col items-center">
                <div className="flex justify-center items-center mb-6 h-28 w-28 mx-auto bg-cyan-50 rounded-full shadow-lg border-2 border-cyan-100">
                  <Icon className="h-14 w-14 text-cyan-600"/>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-cyan-600 mb-2">0{index + 1}</h3>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{merit.title}</h4>
                  <p className="text-slate-600 text-left">{merit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Merits;
