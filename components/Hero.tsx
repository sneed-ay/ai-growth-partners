import React from 'react';
import { ArrowRightIcon } from '../constants';

const Hero: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-white pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="absolute inset-0 bg-grid-slate-200/[0.4] [mask-image:linear-gradient(to_bottom,white_30%,transparent_100%)]"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          <span className="block">貴社の未来を拓く、</span>
          <span className="block text-cyan-600">オーダーメイドAI</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          月額5万円から始める業務効率化・売上向上。
          <br />
          貴社専任のパートナーがAI活用をゼロから成功に導きます。
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#cta"
            onClick={handleSmoothScroll}
            className="w-full sm:w-auto flex items-center justify-center bg-cyan-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            まずは無料で相談する
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#services"
            onClick={handleSmoothScroll}
            className="w-full sm:w-auto text-slate-700 font-bold py-4 px-10 rounded-full hover:bg-slate-200 transition-colors"
          >
            サービス詳細を見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;