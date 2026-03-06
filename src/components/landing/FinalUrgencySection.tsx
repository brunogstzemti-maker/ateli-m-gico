import { useCountdown } from '@/hooks/useCountdown';

const FinalUrgencySection = () => {
  const timer = useCountdown(10);

  return (
    <section className="bg-gradient-to-br from-destructive via-destructive to-rose-alert/80 py-16 md:py-20 px-4 text-center">
      <div className="max-w-content mx-auto">
        <span className="text-5xl block mb-4">⚠️</span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-destructive-foreground mb-3">
          Esta oferta desaparece quando você fechar esta página.
        </h2>
        <p className="font-body text-destructive-foreground/80 mb-6">
          Ao sair, o valor volta para R$ 47.
        </p>
        <p className="font-display font-extrabold text-5xl text-gold-light tabular-nums mb-8">{timer}</p>
        <a
          href="#"
          className="shimmer-btn inline-block bg-success hover:bg-success/90 text-success-foreground font-body font-bold text-base md:text-lg py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          ▶ SIM! QUERO O ATELIÊ DE PÁSCOA POR R$ 37,00
        </a>
      </div>
    </section>
  );
};

export default FinalUrgencySection;
