
import React from 'react';
import { FLOW_CONTENT, ArrowDownIcon } from '../constants';

const Flow: React.FC = () => {
  return (
    <section id="flow" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">導入までの流れ</h2>
          <p className="mt-4 text-slate-600">
            お問い合わせから最短1週間で、貴社専用のAIツールをご利用いただけます。
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-1/2 -ml-0.5 w-1 h-full bg-cyan-200" aria-hidden="true"></div>
          <div className="max-w-3xl mx-auto">
            {FLOW_CONTENT.map((step, index) => {
              const Icon = step.icon;
              return (
              <div key={index} className="mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 text-center md:text-right">
                    <div className="bg-cyan-600 text-white w-24 mx-auto md:mr-0 md:ml-auto p-3 rounded-lg mb-4 shadow-lg">
                      <span className="text-lg font-bold">STEP {step.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 flex justify-center items-center">
                    <div className="rounded-lg shadow-xl w-full max-w-sm bg-white p-6 border border-slate-200">
                        <Icon className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flow;