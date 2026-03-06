import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const problems = [
  { icon: '📱', text: 'Pedido esquecido porque estava só no WhatsApp' },
  { icon: '🧮', text: 'Ingrediente que faltou porque não calculou direito' },
  { icon: '💸', text: 'Ovo vendido barato porque não sabia o custo real' },
  { icon: '😰', text: 'Estresse de última hora que tirou o prazer da temporada' },
];

const ProblemSection = () => {
  const ref = useScrollAnimation('scroll-fade-up', true);

  return (
    <section className="bg-gradient-to-br from-chocolate-deep via-chocolate-deep to-chocolate-medium/80 py-16 md:py-24 px-4">
      <div className="max-w-content mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-cream-warm mb-3">
          O maior inimigo da confeiteira não é a falta de receita.
        </h2>
        <p className="font-display font-medium text-xl text-gold-light mb-4 normal-case tracking-normal">É a falta de organização.</p>
        <p className="font-body text-cream-warm/80 text-base mb-12">Toda Páscoa é a mesma história:</p>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <div
              key={i}
              className="scroll-fade-up bg-cream-warm/5 rounded-xl p-6 text-cream-warm font-body text-base hover:-translate-y-1 hover:shadow-warm-md transition-all duration-300"
            >
              <span className="text-4xl block mb-3">{p.icon}</span>
              {p.text}
            </div>
          ))}
        </div>

        <p className="font-body text-cream-warm/80 text-base mt-10">Não é falta de talento. É falta de uma ferramenta feita pra você.</p>
      </div>
    </section>
  );
};

export default ProblemSection;
