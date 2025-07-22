import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              無料相談・お問い合わせ
            </h2>
            <p className="mt-4 text-slate-600">
              AI活用に関するご相談やお見積もりなど、お気軽にお問い合わせください。
              <br className="hidden sm:block" />
              専門家が貴社の状況を丁寧にヒアリングし、最適なAI活用法を無料でご提案いたします。
            </p>
          </div>
          <form
            action="https://formspree.io/f/myzpekdl"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                お名前<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 bg-slate-200 text-slate-900 placeholder:text-slate-500 rounded-lg border-transparent focus:bg-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-300 ease-in-out"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                メールアドレス<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-slate-200 text-slate-900 placeholder:text-slate-500 rounded-lg border-transparent focus:bg-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-300 ease-in-out"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                ご相談内容<span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-200 text-slate-900 placeholder:text-slate-500 rounded-lg border-transparent focus:bg-slate-800 focus:text-white focus:placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 ease-in-out"
                placeholder="AIで自動化したい業務内容や、お困りのことなどをご記入ください。"
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-cyan-600 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;