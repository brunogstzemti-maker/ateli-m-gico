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
        <p className="font-display font-extrabold text-5xl text-destructive-foreground tabular-nums mb-8">{timer}</p>
        <a
          href="#"
          className="shimmer-btn inline-block bg-primary hover:bg-gold-light text-primary-foreground font-body font-bold text-base md:text-lg py-4 px-10 rounded-xl transition-colors duration-300"
        >
          ▶ SIM! QUERO O ATELIÊ DE PÁSCOA POR R$ 27
        </a>
      </div>
    </section>
  );
};

export default FinalUrgencySection;
