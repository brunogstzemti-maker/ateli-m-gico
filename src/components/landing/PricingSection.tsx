import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PricingSection = () => {
  const ref = useScrollAnimation('scroll-scale-in');

  return (
    <section className="bg-gradient-to-br from-chocolate-deep via-chocolate-deep to-chocolate-medium/70 py-16 md:py-24 px-4">
      <div className="max-w-content mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-cream-warm mb-6">
          Quanto vale organizar sua Páscoa de uma vez por todas?
        </h2>
        <p className="font-body text-cream-warm/80 text-base md:text-lg mb-4 max-w-lg mx-auto">
          Se você vender apenas <strong className="text-gold-light">1 ovo a mais</strong> por semana porque organizou seus pedidos,
          em 4 semanas de Páscoa você já pagou o app. <strong className="text-gold-light">Com troco.</strong>
        </p>
        <p className="font-body font-bold text-cream-warm/90 text-base md:text-lg mb-12 max-w-lg mx-auto">
          Se a calculadora te mostrar que você pode cobrar R$5 a mais por ovo, em 10 ovos vendidos você já recuperou o investimento.
        </p>

        <div
          ref={ref}
          className="scroll-scale-in max-w-pricing mx-auto bg-cream-warm/5 border-2 border-primary rounded-2xl p-8 md:p-10"
        >
          <div className="inline-block bg-primary/20 text-gold-light font-body text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            🍫 OFERTA ESPECIAL — SÓ AGORA
          </div>

          <p className="font-body text-cream-warm/60 line-through text-lg mb-1">De R$ 47 por apenas</p>
          <p className="font-display font-extrabold text-6xl md:text-7xl text-gold-light mb-2 tracking-wide">R$ 37<span className="text-3xl">,00</span></p>
          <p className="font-body text-cream-warm/70 text-sm mb-8">
            Acesso vitalício · Sem mensalidade · Funciona pelo celular
          </p>

          <a
            href="#"
            className="shimmer-btn block w-full bg-success hover:bg-success/90 text-success-foreground font-body font-bold text-base md:text-lg py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            ▶ SIM! QUERO O ATELIÊ DE PÁSCOA POR R$ 27
          </a>

          <p className="font-body text-cream-warm/60 text-xs mt-4">
            Acesso liberado imediatamente após a confirmação.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4 text-cream-warm/60 font-body text-xs">
            <span>🔒 Compra segura</span>
            <span>✅ Acesso imediato</span>
            <span>💳 Parcelamento disponível</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
