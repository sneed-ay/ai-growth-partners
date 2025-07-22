import React from 'react';

// --- Icons ---

export const BrainCircuitIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.9-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.9 1.52 2.34 1.08 2.91.83c.1-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.94c0-1.1.39-1.99 1.03-2.69c-.1-.25-.45-1.27.1-2.64c0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.37.2 2.39.1 2.64c.64.7 1.03 1.6 1.03 2.69c0 3.84-2.34 4.68-4.57 4.93c.36.31.68.92.68 1.85v2.73c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    <path d="M14.5 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M12 13v2.5" />
    <path d="M9.5 10.5h-2" />
    <path d="M16.5 10.5h-2" />
    <path d="M12 8V5.5" />
    <path d="m9 15.5 1.5-2.5" />
    <path d="m15 15.5-1.5-2.5" />
  </svg>
);

export const ArrowRightIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

export const ArrowDownIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
  </svg>
);


export const ProblemIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const SparklesIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293M17.707 5.293L19.5 3.5M21 12h-4m2.293 6.707L19.5 20.5M12 5V1M4.5 19.5l2.293-2.293M3.5 14.5L5.293 12.707" />
    </svg>
);

export const MeritCostIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8v2m0 4v2"></path>
        <path d="M10 12h4m-4 4h4"></path>
        <path d="M15 10s-1-2-3-2-3 2-3 2"></path>
        <circle cx="12" cy="12" r="10"></circle>
    </svg>
);

export const MeritCustomIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.5.5 0 0 0 .12-.61l-1.92-3.32a.5.5 0 0 0-.58-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.5.5 0 0 0-.5-.44H9.74a.5.5 0 0 0-.5.44l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.5.5 0 0 0-.58.22L2.01 9.81a.5.5 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.5.5 0 0 0-.12.61l1.92 3.32a.5.5 0 0 0 .58.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54a.5.5 0 0 0 .5.44h4.52a.5.5 0 0 0 .5-.44l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96a.5.5 0 0 0 .58-.22l1.92-3.32a.5.5 0 0 0-.12-.61l-2.01-1.58z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

export const MeritSupportIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    </svg>
);

export const FlowHearingIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 8C40 3.58172 43.5817 0 48 0H56C60.4183 0 64 3.58172 64 8V24C64 28.4183 60.4183 32 56 32H52L44 40V32H40V8Z" fill="#E0F7FA"/>
    <path d="M4 16C4 11.5817 7.58172 8 12 8H32C36.4183 8 40 11.5817 40 16V32C40 36.4183 36.4183 40 32 40H28L20 48V40H12C7.58172 40 4 36.4183 4 32V16Z" fill="#26C6DA"/>
    <path d="M12 22H32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 28H24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const FlowProposalIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="4" width="40" height="56" rx="4" fill="#E0F7FA"/>
    <rect x="8" y="0" width="48" height="60" rx="4" fill="#26C6DA"/>
    <path d="M20 20H44" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M20 30H44" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M20 40H32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="42" cy="48" r="7" fill="#00838F"/>
    <path d="M39 48L41 50L45 46" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FlowDevelopmentIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="48" rx="4" fill="#26C6DA"/>
    <path d="M0 12H64" stroke="#0097A7" strokeWidth="2"/>
    <circle cx="8" cy="6" r="2" fill="#0097A7"/>
    <circle cx="14" cy="6" r="2" fill="#0097A7"/>
    <circle cx="20" cy="6" r="2" fill="#0097A7"/>
    <path d="M22 24L16 30L22 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 24L48 30L42 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M34 22L30 38" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FlowSupportIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="#E0F7FA"/>
    <path d="M52.18 42.18C47.3739 48.9806 39.9881 53.0039 32 53C22.0588 53 14 44.9411 14 35C14 25.0588 22.0588 17 32 17C37.3876 17 42.1931 19.3291 45.42 23" stroke="#26C6DA" strokeWidth="4" strokeLinecap="round"/>
    <path d="M46 16V24H54" stroke="#26C6DA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 35L30 41L42 29" stroke="#0097A7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


type ServiceIconType = 'automation' | 'marketing' | 'analysis';

export const ServiceIcon: React.FC<{ type: ServiceIconType }> = ({ type }) => {
    const icons: Record<ServiceIconType, React.ReactNode> = {
        automation: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
            </svg>
        ),
        marketing: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
        ),
        analysis: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    };
    return <>{icons[type]}</>;
};

// --- Content ---

export const SERVICES_CONTENT = [
  {
    icon: 'automation' as ServiceIconType,
    title: '業務プロセスの自動化',
    description: '日々の定型業務やバックオフィス作業をAIで自動化し、従業員がより創造的な仕事に集中できる環境を構築します。',
    gif: 'https://res.cloudinary.com/dnapaymby/image/upload/v1753179203/202507221802_1_apwypi.gif',
    examples: [
      '問い合わせ対応チャットボット',
      '各種書類の自動作成・分類',
      '契約書雛形自動作成',
      '議事録の自動文字起こし＆要約',
      '受発注データの自動入力',
    ],
  },
  {
    icon: 'marketing' as ServiceIconType,
    title: 'マーケティング・営業支援',
    description: 'AIを活用してマーケティング活動を効率化し、顧客エンゲージメントと売上向上を支援します。',
    gif: 'https://res.cloudinary.com/dnapaymby/image/upload/v1753179519/202507221802_%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC_mqvvb9.gif',
    examples: [
      'SNS投稿・ブログ記事の自動生成',
      '顧客に合わせたメールマガジンの作成',
      '市場調査・競合分析レポート',
      '営業向けトークスクリプトの提案',
    ],
  },
  {
    icon: 'analysis' as ServiceIconType,
    title: 'データ分析・経営判断サポート',
    description: '社内に蓄積されたデータをAIが分析し、経営戦略や意思決定に役立つインサイトを抽出します。',
    gif: 'https://res.cloudinary.com/dnapaymby/image/upload/v1753179770/202507221802_%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC_1_occ3ah.gif',
    examples: [
      '売上データに基づく需要予測',
      '顧客アンケートの感情分析',
      '採用候補者のスキルマッチング',
      '財務データの分析と経営指標の可視化',
    ],
  },
];

export const MERITS_CONTENT = [
    {
        title: '圧倒的な低コスト',
        description: '月額5万円からという、事業規模を問わず無理なく始められる価格設定。高額な初期投資は不要です。コストを抑えながら、大手企業レベルのAI技術の恩恵を受けられます。',
        icon: MeritCostIcon,
    },
    {
        title: '完全オーダーメイド',
        description: '画一的なツールではなく、貴社のビジネスモデルや業務フロー、文化に合わせてAIをカスタム開発。現場で本当に「使える」ソリューションを、ゼロから一緒に創り上げます。',
        icon: MeritCustomIcon,
    },
    {
        title: '手厚い伴走サポート',
        description: '「AIをどう使えばいいか分からない」という段階から、専門家チームが企画、開発、導入、そして運用まで一気通貫でサポート。導入後も継続的に成果が出るまで伴走します。',
        icon: MeritSupportIcon,
    }
];

export const FLOW_CONTENT = [
    {
        step: 1,
        title: '無料相談・ヒアリング',
        description: 'まずは貴社のビジネス課題やAIで実現したいことをお聞かせください。専門家が丁寧にヒアリングし、AI活用の可能性を探ります。',
        icon: FlowHearingIcon,
    },
    {
        step: 2,
        title: 'ご提案・お見積もり',
        description: 'ヒアリング内容に基づき、貴社に最適なAI活用プランと詳細なお見積もりをご提案します。ご納得いただけるまで何度でも調整いたします。',
        icon: FlowProposalIcon,
    },
    {
        step: 3,
        title: '開発・導入',
        description: 'ご契約後、貴社専用のAIツールの開発に着手します。定期的な進捗共有を行いながら、現場でスムーズにご利用いただけるよう導入支援まで行います。',
        icon: FlowDevelopmentIcon,
    },
    {
        step: 4,
        title: '運用・改善サポート',
        description: '導入して終わりではありません。AIツールの利用状況を分析し、より効果が高まるよう継続的な改善提案や、新たな活用方法のご相談など、手厚くサポートします。',
        icon: FlowSupportIcon,
    },
];

export const FAQ_CONTENT = [
    {
        question: 'AIに関する知識が全くありませんが、大丈夫ですか？',
        answer: 'はい、全く問題ありません。AI Growth Partnersは、AIの専門知識がないお客様を対象としています。お客様のビジネス課題をヒアリングし、弊社専門家が最適なAI活用法をわかりやすくご提案いたします。企画から開発、導入、運用まで全てお任せいただけます。',
    },
    {
        question: '月額5万円のプランには何が含まれていますか？',
        answer: '月額5万円のプランは、比較的小規模な業務自動化AIツールのご提供を想定しております。具体的には、課題のヒアリング、一つのシンプルなAIツールの開発・提供、そして運用サポートが含まれます。より複雑なご要望の場合は、別途お見積もりさせていただきます。まずは無料相談にてお気軽にご要望をお聞かせください。',
    },
    {
        question: 'どのくらいの期間で導入できますか？',
        answer: 'ご相談いただく内容によりますが、初回のお打ち合わせから最短で1週間程度で最初のAIツールをご利用開始いただけます。より複雑なシステムの開発の場合は、3ヶ月〜半年ほどお時間をいただくこともございます。',
    },
    {
        question: '途中で解約することはできますか？',
        answer: 'はい、可能です。ただし、最低契約期間を設けさせていただいております。詳細については、ご契約時にご説明いたしますのでご安心ください。',
    },
    {
        question: '対応できる業種に制限はありますか？',
        answer: 'いいえ、特に業種の制限はございません。小売、飲食、製造、不動産、IT、士業など、これまで様々な業種のお客様をご支援してまいりました。どのような業種・業界でも、まずは一度お気軽にご相談ください。',
    }
];