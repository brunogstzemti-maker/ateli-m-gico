const HeroSection = () => {
  return (
    <section className="relative noise-bg overflow-hidden">
      <div className="relative z-10 max-w-content mx-auto px-4 py-16 md:py-24 text-center">
        {/* Badge */}
        <div
          className="inline-block bg-primary/15 border border-primary/30 rounded-full px-5 py-2 mb-8 font-body text-sm font-medium text-primary"
          style={{ animation: 'hero-headline 0.5s ease-out' }}
        >
          <span style={{ animation: 'pulse-gentle 2s ease-in-out infinite', display: 'inline-block' }}>🎉</span>{' '}
          Sua compra foi confirmada!
        </div>

        {/* Headline */}
        <h1
          className="font-display font-black text-4xl md:text-[56px] md:leading-[1.1] leading-tight text-foreground mb-6"
          style={{ animation: 'hero-headline 0.6s ease-out' }}
        >
          Espera! Tem um detalhe que pode{' '}
          <span className="text-primary">triplicar o seu lucro</span> nessa Páscoa.
        </h1>

        {/* Subheadline */}
        <p
          className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12"
          style={{ animation: 'hero-headline 0.6s ease-out 0.2s both' }}
        >
          Você tem as receitas. Agora organize seus pedidos, calcule seus preços e acompanhe sua meta
          — tudo na palma da mão.
        </p>

        {/* Phone Mockup */}
        <div
          className="mx-auto w-[240px] md:w-[280px] rounded-[2rem] border-[6px] border-chocolate-deep bg-cream-dark p-3 shadow-warm-lg"
          style={{ animation: 'hero-headline 0.8s ease-out 0.3s both' }}
        >
          <div className="rounded-[1.4rem] overflow-hidden bg-background">
            <div className="p-4 space-y-3">
              <div className="h-3 w-20 bg-primary/30 rounded-full" />
              <div className="h-2 w-full bg-muted rounded-full" />
              <div className="h-2 w-3/4 bg-muted rounded-full" />
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="h-16 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">📦</div>
                <div className="h-16 bg-accent/20 rounded-lg flex items-center justify-center text-2xl">💰</div>
                <div className="h-16 bg-success/10 rounded-lg flex items-center justify-center text-2xl">🛒</div>
                <div className="h-16 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">📊</div>
              </div>
              <div className="h-8 bg-primary rounded-lg mt-2" />
            </div>
          </div>
        </div>

        {/* Scroll arrow */}
        <div className="mt-12 text-primary text-2xl" style={{ animation: 'bounce-arrow 2s ease-in-out infinite' }}>
          ↓
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
