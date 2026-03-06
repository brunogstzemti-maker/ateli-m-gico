import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PricingSection = () => {
  const ref = useScrollAnimation('scroll-scale-in');

  return (
    <section className="bg-chocolate-deep py-16 md:py-24 px-4">
      <div className="max-w-content mx-auto text-center">
        <p className="font-body text-cream-warm/80 text-base md:text-lg mb-12 max-w-lg mx-auto">
          Se você vender apenas <strong className="text-gold-light">1 ovo a mais</strong> por ter organizado seus pedidos,
          em 4 semanas você já pagou o app. <strong className="text-gold-light">Com troco.</strong>
        </p>

        <div
          ref={ref}
          className="scroll-scale-in max-w-pricing mx-auto bg-cream-warm/5 border-2 border-primary rounded-2xl p-8 md:p-10"
        >
          <div className="inline-block bg-primary/20 text-gold-light font-body text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            🍫 Oferta Exclusiva Pós-Compra
          </div>

          <p className="font-body text-cream-warm/60 line-through text-lg mb-1">De R$ 47</p>
          <p className="font-display font-extrabold text-6xl md:text-7xl text-gold-light mb-2 tracking-wide">R$ 27<span className="text-3xl">,00</span></p>
          <p className="font-body text-cream-warm/70 text-sm mb-8">
            Acesso vitalício · Sem mensalidade · Funciona pelo celular
          </p>

          <a
            href="#"
            className="shimmer-btn block w-full bg-primary hover:bg-gold-light text-primary-foreground font-body font-bold text-base md:text-lg py-4 rounded-xl transition-colors duration-300"
          >
            ▶ SIM! QUERO O ATELIÊ DE PÁSCOA POR R$ 27
          </a>

          <div className="flex flex-wrap justify-center gap-4 mt-6 text-cream-warm/60 font-body text-xs">
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
