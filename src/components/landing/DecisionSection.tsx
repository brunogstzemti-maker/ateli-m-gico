import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DecisionSection = () => {
  const ref = useScrollAnimation('scroll-scale-in', true);

  return (
    <section className="py-16 md:py-24 px-4 relative noise-bg bg-gradient-to-b from-cream-dark/30 via-background to-primary/5">
      <div className="relative z-10 max-w-content mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-12">
          Você decide agora:
        </h2>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Yes */}
          <div className="scroll-scale-in border-2 border-success rounded-xl bg-success/5 p-8">
            <span className="text-4xl block mb-4">✅</span>
            <p className="font-body font-medium text-foreground mb-6">
              Sim, quero organizar minha Páscoa e maximizar meu lucro
            </p>
            <a
              href="#"
              className="shimmer-btn block bg-success hover:bg-success/90 text-success-foreground font-body font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Quero o Ateliê de Páscoa
            </a>
          </div>

          {/* No */}
          <div className="scroll-scale-in border-2 border-muted rounded-xl bg-muted/30 p-8 flex flex-col items-center justify-center">
            <span className="text-4xl block mb-4 opacity-40">✗</span>
            <p className="font-body text-muted-foreground text-sm mb-4">
              Não, prefiro continuar anotando no papel
            </p>
            <a href="#" className="font-body text-muted-foreground/60 text-xs underline hover:text-muted-foreground transition-colors">
              Dispensar oferta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionSection;
