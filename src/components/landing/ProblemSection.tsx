import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const problems = [
  { icon: '📱', text: 'Pedido esquecido no WhatsApp' },
  { icon: '🧮', text: 'Ingrediente que faltou por falta de cálculo' },
  { icon: '💸', text: 'Ovo vendido barato por não saber o custo real' },
  { icon: '😰', text: 'Estresse de última hora que tirou o prazer' },
];

const ProblemSection = () => {
  const ref = useScrollAnimation('scroll-fade-up', true);

  return (
    <section className="bg-chocolate-deep py-16 md:py-24 px-4">
      <div className="max-w-content mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-cream-warm mb-3">
          O maior inimigo da confeiteira não é a falta de receita.
        </h2>
        <p className="font-display text-xl text-gold-light mb-12">É a falta de organização.</p>

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
      </div>
    </section>
  );
};

export default ProblemSection;
