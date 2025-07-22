import React from 'react';

const Pricing: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">料金プラン</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            ビジネスの規模を問わず、導入しやすい料金体系をご用意しました。
          </p>
        </div>
        <div className="max-w-md mx-auto bg-slate-50 rounded-xl shadow-2xl overflow-hidden border-2 border-cyan-500">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-center text-slate-800">カスタムプラン</h3>
            <div className="text-center my-6">
              <p className="text-slate-600">月額</p>
              <p className="text-6xl font-extrabold text-slate-900">
                5<span className="text-3xl font-bold">万円〜</span>
              </p>
              <p className="text-slate-600">(税別)</p>
            </div>
            <p className="text-center text-slate-600 mb-8">
              貴社の課題とご予算に合わせ、最適なプランをオーダーメイドでご提案します。
            </p>
            <ul className="space-y-4">
              {[
                '無料カウンセリングによる課題特定',
                '貴社専用のAIツール開発・提供',
                '業務への導入・定着支援',
                '継続的なアップデート・保守',
                'チャット・ビデオ通話によるサポート',
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a href="#cta" onClick={handleSmoothScroll} className="w-full block text-center bg-cyan-600 text-white font-bold py-4 px-6 rounded-full text-lg hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                まずは無料で見積もり相談
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;