
import React from 'react';
import { ProblemIcon } from '../constants';

const Problems: React.FC = () => {
  const problems = [
    '人手不足で業務が回らない…',
    '単純作業に時間がとられ、コア業務に集中できない…',
    '競合と差をつけたいが、何から手をつければいいか…',
    'AIに興味はあるが、高額な投資は難しい…',
    '社内にITやAIに詳しい人材がいない…',
    'データはあるが、どう活用すれば良いかわからない…',
  ];

  return (
    <section id="problems" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            こんな
            <span className="text-cyan-600">お悩み</span>
            ありませんか？
          </h2>
          <p className="mt-4 text-slate-600">一つでも当てはまったら、ぜひご相談ください。</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex-shrink-0">
                <ProblemIcon className="h-8 w-8 text-cyan-500" />
              </div>
              <p className="font-medium text-slate-700">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
