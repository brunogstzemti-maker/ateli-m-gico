import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  { q: 'Preciso instalar alguma coisa?', a: 'Não. Funciona direto no navegador do celular.' },
  { q: 'Preciso pagar mensalidade?', a: 'Não. Uma única vez, acesso vitalício.' },
  { q: 'É difícil de usar?', a: 'Se você usa WhatsApp, você usa o Ateliê de Páscoa.' },
  { q: 'Já tenho as receitas, preciso do app?', a: 'As receitas ensinam a fazer. O app ajuda a vender, organizar e lucrar.' },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useScrollAnimation('scroll-fade-up', true);

  return (
    <section className="py-16 md:py-24 px-4 relative noise-bg">
      <div className="relative z-10 max-w-content mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
          Suas dúvidas, respondidas:
        </h2>

        <div ref={ref} className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="scroll-fade-up bg-background rounded-xl shadow-warm-sm border border-primary/10 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 font-body font-medium text-foreground text-left text-base"
              >
                {faq.q}
                <span className="text-primary text-xl ml-4 transition-transform duration-300" style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '200px' : '0' }}
              >
                <p className="px-5 pb-5 font-body text-muted-foreground text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
