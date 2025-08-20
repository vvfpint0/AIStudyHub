import React from "react";

// Simple single-file landing page for AI Study Hub
// TailwindCSS classes are used for styling (no external deps required in this preview)

const features = [
  {
    title: "Consultoria rápida",
    desc: "Sessões de 30–60 min para estruturar trabalhos, criar planos de estudo e dominar prompts.",
  },
  {
    title: "Apoio a trabalhos",
    desc: "Estrutura, bibliografia inicial, resumos de artigos e revisão final humano + IA.",
  },
  {
    title: "Estudo assistido",
    desc: "Flashcards, quizzes e mapas mentais gerados a partir dos apontamentos do aluno.",
  },
  {
    title: "Workshops & Guias",
    desc: "Formações práticas e kits de prompts para estudar e escrever de forma ética.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "30€",
    items: [
      "Estrutura do trabalho (índice + tópicos)",
      "Bibliografia inicial (3–5 fontes)",
      "Checklist anti-plágio",
    ],
  },
  {
    name: "Standard",
    price: "60€",
    highlight: true,
    items: [
      "Tudo do Starter",
      "Resumos de artigos (até 3)",
      "Sugestões de escrita académica",
    ],
  },
  {
    name: "Premium",
    price: "100€",
    items: [
      "Acompanhamento até à versão final",
      "Revisão humano + IA",
      "1 reunião de 45 min",
    ],
  },
];

const faqs = [
  {
    q: "Vocês fazem o trabalho por mim?",
    a: "Não. Apoiamos de forma ética: estrutura, orientação, revisão e ensino de ferramentas de IA.",
  },
  {
    q: "Como é feita a revisão com IA?",
    a: "Usamos modelos para sugerir melhorias (clareza, coerência, referências) e depois validamos manualmente.",
  },
  {
    q: "Quais as áreas cobridas?",
    a: "Engenharia, Educação, Saúde, Gestão e mais. Adaptamos os materiais ao teu curso.",
  },
  {
    q: "Como marcamos uma sessão?",
    a: "Clica em Agendar sessão e escolhe horário. Também podes enviar email ou WhatsApp.",
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Simple SVG logo using your color palette */}
      <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <defs>
          <linearGradient id="brain" x1="0" x2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="#f8fafc" stroke="#e2e8f0" />
        <path d="M22 20c-4 0-6 3-6 7v10c0 4 2 7 6 7 2 0 4 1 5 3 1-2 3-3 5-3 4 0 6-3 6-7V27c0-4-2-7-6-7-2 0-4-1-5-3-1 2-3 3-5 3z" fill="url(#brain)"/>
        <rect x="40" y="12" width="18" height="10" rx="2" fill="#fbbf24"/>
        <rect x="42" y="22" width="4" height="6" fill="#0ea5e9"/>
      </svg>
      <span className="font-extrabold text-2xl tracking-tight text-slate-900">AI Study Hub</span>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      {/* Nav */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicos" className="hover:text-slate-950">Serviços</a>
            <a href="#planos" className="hover:text-slate-950">Planos</a>
            <a href="#processo" className="hover:text-slate-950">Como funciona</a>
            <a href="#faq" className="hover:text-slate-950">FAQ</a>
          </nav>
          <a href="#contacto" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700">
            Agendar sessão
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-100 via-blue-100 to-green-100"/>
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Apoio académico com IA, <span className="text-blue-700">ético</span>, <span className="text-emerald-600">rápido</span> e <span className="text-red-600">personalizado</span>.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Estruturas de trabalhos, resumos de artigos, revisão humano + IA e métodos de estudo práticos. Feito para quem quer ganhar tempo e qualidade.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#planos" className="rounded-2xl px-5 py-3 bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">Ver planos</a>
              <a href="#contacto" className="rounded-2xl px-5 py-3 bg-white border border-slate-300 font-semibold hover:bg-slate-50">Contactar</a>
            </div>
            <p className="mt-4 text-sm text-slate-500">pt‑PT • Online • Horários flexíveis</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <h3 className="font-bold text-xl mb-4">O que entregamos</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="text-green-600">●</span> Índice e estrutura lógica para o teu trabalho</li>
              <li className="flex gap-3"><span className="text-blue-600">●</span> Resumos de artigos com referências</li>
              <li className="flex gap-3"><span className="text-yellow-500">●</span> Sugestões de escrita académica</li>
              <li className="flex gap-3"><span className="text-red-600">●</span> Revisão final humano + IA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="servicos" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold text-slate-900">Serviços</h2>
        <p className="mt-2 text-slate-600">Combina o melhor da inteligência artificial com acompanhamento humano.</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-lg text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Planos e preços</h2>
          <p className="mt-2 text-slate-600">Transparência total. Escolhe o nível de apoio que precisas.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-3xl border p-6 shadow-sm ${p.highlight ? 'border-blue-600 shadow-md' : 'border-slate-200'}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-bold text-xl text-slate-900">{p.name}</h3>
                  <span className="text-2xl font-extrabold text-blue-700">{p.price}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2"><span>✓</span>{it}</li>
                  ))}
                </ul>
                <a href="#contacto" className={`mt-6 inline-flex w-full justify-center rounded-2xl px-4 py-2 font-semibold ${p.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white border border-slate-300 hover:bg-slate-50'}`}>Escolher</a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">Subscrição mensal disponível (50€/mês): 2 revisões/mês + 1 mapa mental/quiz + prompts exclusivos.</p>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold text-slate-900">Como funciona</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6 text-sm">
          {[
            { n: 1, t: 'Briefing', d: 'Envias objetivos, prazos, normas e materiais.' },
            { n: 2, t: 'Plano', d: 'Propomos estrutura e referências iniciais.' },
            { n: 3, t: 'Produção', d: 'Geramos resumos/flashcards e iteramos contigo.' },
            { n: 4, t: 'Revisão final', d: 'Ajustes de estilo, coerência e checklist anti-plágio.' },
          ].map((s) => (
            <div key={s.n} className="rounded-3xl border border-slate-200 p-5">
              <div className="text-3xl font-black text-blue-700">{s.n}</div>
              <div className="mt-2 font-bold text-slate-900">{s.t}</div>
              <div className="text-slate-600 mt-1">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ethics */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Compromisso ético</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Valorizamos a integridade académica. Não fazemos trabalhos por ti. Ensinamos a usar IA como ferramenta de apoio: pesquisa, estruturação, síntese e revisão, sempre com validação humana e referências adequadas.
          </p>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold text-slate-900">O que dizem</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
          {["Ganhei tempo e clareza no meu relatório.", "Os mapas mentais foram chave para o exame.", "Adorei as dicas de escrita — muito práticas!"].map((t, i) => (
            <figure key={i} className="rounded-3xl border border-slate-200 p-5 bg-white shadow-sm">
              <blockquote>“{t}”</blockquote>
              <figcaption className="mt-3 text-slate-500">Estudante universitário</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Perguntas frequentes</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-slate-200 p-6 bg-white">
                <div className="font-bold text-slate-900">{f.q}</div>
                <div className="mt-2 text-sm">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm">
          <h2 className="text-3xl font-extrabold text-slate-900">Marca a tua sessão</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Escolhe o plano ideal e envia-nos os detalhes do teu trabalho. Respondemos no próprio dia útil.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <a href="mailto:contacto@aistudyhub.pt" className="rounded-2xl px-4 py-3 border border-slate-300 hover:bg-slate-50 font-semibold">Email: contacto@aistudyhub.pt</a>
            <a href="https://wa.me/" className="rounded-2xl px-4 py-3 border border-slate-300 hover:bg-slate-50 font-semibold">WhatsApp</a>
            <a href="#" className="rounded-2xl px-4 py-3 bg-emerald-600 text-white font-semibold hover:bg-emerald-700 text-center">Agendar sessão</a>
          </div>
          <p className="mt-3 text-xs text-slate-500">Horário Europa/Lisboa · Online</p>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2"><Logo /><span className="text-slate-400">© {new Date().getFullYear()} AI Study Hub</span></div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Termos</a>
            <a href="#" className="hover:text-slate-700">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
