import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import noticiaImage from '@/assets/noticia-diario-regiao.png';

const MediaProofSection = () => {
  const ref = useScrollAnimation('scroll-fade-up', true);

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-cream-dark/30">
      <div ref={ref} className="max-w-content mx-auto">
        <div className="scroll-fade-up text-center mb-8">
          <p className="font-body font-medium text-sm uppercase tracking-widest text-primary mb-2">
            📰 Saiu na mídia
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
            A Páscoa é a maior oportunidade do ano para confeiteiras
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-lg mx-auto">
            Não somos nós que estamos dizendo. <strong className="text-foreground">A imprensa confirma:</strong> quem se organiza, fatura até <strong className="text-foreground">200% a mais</strong>.
          </p>
        </div>

        <div className="scroll-fade-up relative max-w-md mx-auto">
          <div className="bg-background rounded-2xl p-3 shadow-warm-md border border-border/50 hover:shadow-warm-lg transition-shadow duration-300">
            <img
              src={noticiaImage}
              alt="Notícia do Diário da Região: Confeiteiras autônomas têm na Páscoa o melhor faturamento do ano"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="font-body text-xs text-muted-foreground">
              Fonte: Diário da Região · 25 de fevereiro de 2026
            </p>
          </div>
        </div>

        <div className="scroll-fade-up mt-10 bg-chocolate-deep/95 rounded-2xl p-6 md:p-8 text-center max-w-lg mx-auto">
          <p className="font-display font-extrabold text-3xl md:text-4xl text-gold-light mb-2">
            +200%
          </p>
          <p className="font-body text-cream-warm/90 text-sm md:text-base">
            de aumento no faturamento durante a Páscoa para quem <strong className="text-gold-light">organiza produção, custos e atendimento</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaProofSection;
