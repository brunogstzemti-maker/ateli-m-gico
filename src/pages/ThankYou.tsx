const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[560px] mx-auto px-4 py-16 md:py-24 text-center">
        {/* Emoji */}
        <div className="text-7xl mb-8" style={{ animation: 'pulse-gentle 2s ease-in-out infinite' }}>
          🍫
        </div>

        {/* Título */}
        <h1
          className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4 uppercase"
          style={{ animation: 'hero-headline 0.6s ease-out' }}
        >
          Tudo bem! Sua compra está confirmada. 🎉
        </h1>

        {/* Subtítulo */}
        <p
          className="font-body font-medium text-lg text-foreground mb-8"
          style={{ animation: 'hero-headline 0.6s ease-out 0.2s both' }}
        >
          Suas receitas de ovos de páscoa já estão disponíveis no seu acesso.
        </p>

        {/* Divisor dourado */}
        <div
          className="separator-gold mx-auto mb-8"
          style={{ animation: 'hero-headline 0.6s ease-out 0.3s both' }}
        >
          <span className="text-primary text-sm">✦</span>
        </div>

        {/* Texto de reforço */}
        <p
          className="font-body text-base md:text-lg text-muted-foreground mb-12 leading-relaxed"
          style={{ animation: 'hero-headline 0.6s ease-out 0.4s both' }}
        >
          Você tomou um ótimo primeiro passo. Com dedicação e as receitas certas, essa pode ser sua Páscoa mais lucrativa até hoje.
        </p>

        {/* Box de acesso */}
        <div
          className="border-2 border-primary rounded-2xl bg-card p-8 text-left mb-12 shadow-warm-md"
          style={{ animation: 'hero-headline 0.6s ease-out 0.5s both' }}
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-6 text-center normal-case">
            📩 Como acessar seu produto:
          </h2>
          <ul className="font-body text-foreground space-y-4 text-base">
            <li>✅ Verifique seu e-mail — o seu produto ja foi enviado</li>
            <li>🔒 Seu acesso é vitalício — seu produto estará sempre disponível para você</li>
          </ul>
        </div>

        {/* Fechamento */}
        <div style={{ animation: 'hero-headline 0.6s ease-out 0.6s both' }}>
          <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
            Qualquer dúvida, entre em contato com nosso suporte.
            <br />
            Estamos aqui para te ajudar a arrasar nessa Páscoa! 🐣
          </p>
          <p className="font-body text-sm text-muted-foreground font-medium">
            Com carinho, equipe Ateliê de Páscoa 🍫
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
