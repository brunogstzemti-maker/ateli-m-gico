import PhoneMockup from './PhoneMockup';

const HeroSection = () => {
  return (
    <section className="relative noise-bg overflow-hidden bg-[hsl(0,0%,100%)]">
      <div className="relative z-10 max-w-content mx-auto px-4 py-16 md:py-24 text-center">



        {/* Headline */}
        <h1
          className="font-display font-extrabold text-4xl md:text-[52px] md:leading-[1.1] leading-tight tracking-wide text-foreground mb-6 uppercase"
          style={{ animation: 'hero-headline 0.6s ease-out' }}
        >
          Espera! Tem um detalhe que pode{' '}
          <span className="text-primary">triplicar o seu lucro</span> nessa Páscoa.
        </h1>

        {/* Subheadline */}
        <p
          className="font-body font-medium text-lg text-foreground max-w-xl mx-auto mb-12"
          style={{ animation: 'hero-headline 0.6s ease-out 0.2s both' }}
        >
          Você tem as receitas agora.Mais vai ter muito trabalho para ter tudo organizado, com esse Aplicativo você organiza seu pedidos, calcula seus preços e acompanha sua meta- tudo na palma da sua mão.
        </p>

        {/* Phone Mockup with animated screens */}
        <PhoneMockup />

        {/* Scroll arrow */}
        <div className="mt-12 text-primary text-2xl" style={{ animation: 'bounce-arrow 2s ease-in-out infinite' }}>
          ↓
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
