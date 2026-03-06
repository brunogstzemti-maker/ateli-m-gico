import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const benefits = [
  { icon: '📦', title: 'Gestão de Pedidos', desc: 'Cadastre clientes, quantidades, datas e status em segundos' },
  { icon: '💰', title: 'Calculadora de Precificação', desc: 'Descubra o preço exato para lucrar de verdade em cada ovo' },
  { icon: '🛒', title: 'Lista de Compras Inteligente', desc: 'Gerada automaticamente pelos seus pedidos em aberto' },
  { icon: '🍫', title: 'Coleção de Receitas', desc: 'Suas receitas organizadas e acessíveis em um clique' },
  { icon: '📊', title: 'Dashboard de Vendas', desc: 'Acompanhe sua meta da Páscoa em tempo real' },
];

const ProductSection = () => {
  const ref = useScrollAnimation('scroll-fade-up', true);

  return (
    <section className="py-16 md:py-24 px-4 relative noise-bg">
      <div className="relative z-10 max-w-content mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          Apresentando o Ateliê de Páscoa 🍫
        </h2>
        <p className="font-body font-medium text-lg text-muted-foreground mb-12">
          O app que organiza seu negócio de ovos na palma da mão.
        </p>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`scroll-fade-up bg-background rounded-xl p-6 shadow-warm-sm border border-transparent hover:border-primary hover:-translate-y-1 hover:shadow-warm-md transition-all duration-300 text-left ${
                i === benefits.length - 1 ? 'sm:col-span-2 sm:max-w-[calc(50%-0.625rem)] sm:mx-auto' : ''
              }`}
            >
              <span className="text-5xl block mb-3">{b.icon}</span>
              <h3 className="font-display font-bold text-lg text-foreground mb-1">{b.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
