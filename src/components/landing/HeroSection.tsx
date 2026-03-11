

const HeroSection = () => {
  return (
    <section className="relative noise-bg overflow-hidden bg-[hsl(0,0%,100%)]">
      <div className="relative z-10 max-w-content mx-auto px-4 py-6 md:py-12 text-center">



        {/* Headline */}
        <h1
          className="font-display font-extrabold text-2xl sm:text-3xl md:text-[52px] md:leading-[1.1] leading-tight tracking-wide text-foreground mb-6 uppercase"
          style={{ animation: 'hero-headline 0.6s ease-out' }}
        >
          Sua compra foi confirmada. 🎉
          <br />
          <span style={{ color: 'hsl(38, 39%, 65%)' }}>ANTES DE SAIR</span> Espere um pouco.
          <br />
          <br />
          Tenho algo pra te mostrar que vai{' '}
          <span style={{ color: 'hsl(38, 39%, 65%)' }}>triplicar o seu lucro</span> nessa Páscoa.
        </h1>

        {/* Subheadline */}
        <p
          className="font-body font-medium text-lg text-foreground max-w-xl mx-auto mb-4"
          style={{ animation: 'hero-headline 0.6s ease-out 0.2s both' }}
        >
          Você acabou de dar o primeiro passo: agora você tem as receitas.
          <br />
          Mas deixa eu te fazer uma pergunta rápida...
        </p>

        <p
          className="font-body font-medium text-lg text-foreground max-w-xl mx-auto mb-4 underline decoration-primary decoration-2 underline-offset-4"
          style={{ animation: 'hero-headline 0.6s ease-out 0.3s both' }}
        >
          Quando os pedidos começarem a chegar, como você vai controlar tudo?
        </p>

        <p
          className="font-body font-medium text-lg text-foreground max-w-xl mx-auto mb-4"
          style={{ animation: 'hero-headline 0.6s ease-out 0.4s both' }}
        >
          Quantos ovos prometeu pra cada cliente? Em qual data entrega o pedido da Ana? Qual receita tem o maior lucro? Quanto falta pra bater sua meta?
        </p>

        <p
          className="font-body font-bold text-lg text-foreground max-w-xl mx-auto mb-12"
          style={{ animation: 'hero-headline 0.6s ease-out 0.5s both' }}
        >
          Se você respondeu "ainda não sei" ou "vou anotar num papel"... você está prestes a deixar dinheiro na mesa.
        </p>


        {/* Scroll arrow */}
        <div className="mt-12 text-primary text-2xl" style={{ animation: 'bounce-arrow 2s ease-in-out infinite' }}>
          ↓
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
