import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  { name: 'Fernanda S.', city: 'São Paulo', color: 'bg-primary', text: 'Finalmente parei de usar papel e WhatsApp. Minha Páscoa foi muito mais tranquila!' },
  { name: 'Cláudia M.', city: 'Curitiba', color: 'bg-accent', text: 'A calculadora me mostrou que estava vendendo barato há 3 anos. Aumentei meu preço e não perdi nenhum cliente.' },
  { name: 'Ana Paula R.', city: 'Belo Horizonte', color: 'bg-success', text: 'Organizei 47 pedidos pelo app e não esqueci nenhum. Foi minha Páscoa mais lucrativa!' },
];

const SocialProofSection = () => {
  const ref = useScrollAnimation('scroll-fade-up', true);

  return (
    <section className="bg-gradient-to-b from-cream-dark via-cream-dark to-background py-16 md:py-24 px-4">
      <div className="max-w-content mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-12">
          O que outras confeiteiras estão dizendo:
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="scroll-fade-up relative bg-background rounded-xl p-6 shadow-warm-sm text-left overflow-hidden"
            >
              {/* Decorative quote */}
              <span className="absolute top-2 right-4 font-display text-8xl text-primary/10 leading-none select-none">"</span>

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className={`${t.color} w-10 h-10 rounded-full flex items-center justify-center text-cream-warm font-display font-bold text-sm`}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-body font-medium text-foreground text-sm">{t.name}</p>
                  <p className="font-body text-muted-foreground text-xs">{t.city}</p>
                </div>
              </div>
              <p className="font-body text-foreground text-sm italic relative z-10">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
