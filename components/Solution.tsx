import React from 'react';
import { SparklesIcon, ArrowDownIcon } from '../constants';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            そのお悩み、
            <span className="text-cyan-600">AI Growth Partners</span>
            が解決します！
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            貴社特有の課題に寄り添い、手の届く価格で最大の成果を出す
            <br className="hidden md:block" />
            オーダーメイドAIソリューションをご提供します。
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border-2 border-red-300 border-dashed rounded-lg bg-red-50/50">
              <h3 className="text-xl font-bold text-red-600 mb-4">従来の方法では...</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start"><span className="text-red-500 mr-2 mt-1">✖</span><span>高額な初期投資が必要</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-2 mt-1">✖</span><span>専門知識を持つ人材の採用が困難</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-2 mt-1">✖</span><span>画一的なツールでは自社に合わない</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-2 mt-1">✖</span><span>導入後のサポートが不安</span></li>
              </ul>
            </div>
            <div className="p-8 border-2 border-cyan-400 rounded-lg bg-cyan-50/50 shadow-lg">
              <h3 className="text-xl font-bold text-cyan-700 mb-4 flex items-center"><SparklesIcon className="w-6 h-6 mr-2" />AI Growth Partnersなら！</h3>
               <ul className="space-y-3 text-slate-700">
                <li className="flex items-start"><span className="text-cyan-600 font-bold mr-2 mt-1">✔</span><span><strong>月額5万円〜</strong>の低リスクスタート</span></li>
                <li className="flex items-start"><span className="text-cyan-600 font-bold mr-2 mt-1">✔</span><span><strong>専門家チーム</strong>が企画から運用まで伴走</span></li>
                <li className="flex items-start"><span className="text-cyan-600 font-bold mr-2 mt-1">✔</span><span>貴社の課題に合わせた<strong>完全オーダーメイド</strong></span></li>
                <li className="flex items-start"><span className="text-cyan-600 font-bold mr-2 mt-1">✔</span><span>継続的な改善と<strong>手厚いサポート</strong></span></li>
              </ul>
            </div>
          </div>
            <ArrowDownIcon className="w-12 h-12 text-slate-400 my-8 hidden md:block transform -rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Solution;