import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ordersImage from '@/assets/orders-interface.png';
import calculatorImage from '@/assets/calculator-interface.png';
import shoppingListImage from '@/assets/shopping-list-interface.png';
import recipesImage from '@/assets/recipes-collection-interface.png';
import dashboardImage from '@/assets/dashboard-interface.png';
import clientsImage from '@/assets/clients-management-interface.png';

const benefits = [];

const ProductSection = () => {
  const ref = useScrollAnimation('scroll-fade-up', true);

  return (
    <section className="py-16 md:py-24 px-4 relative noise-bg bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="relative z-10 max-w-content mx-auto text-center">
        <p className="font-body font-medium text-lg text-muted-foreground mb-2">
          Apresentando:
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          Ateliê de Páscoa 🍫
        </h2>
        <p className="font-body font-medium text-lg text-muted-foreground mb-4">
          O app que organiza seu negócio de ovos na palma da mão.
        </p>
        <p className="font-body text-muted-foreground text-base mb-12">
          Com o Ateliê de Páscoa, você vai ter acesso a:
        </p>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
           {/* Recipes Collection Image */}
           <div className="scroll-fade-up bg-background rounded-xl p-6 shadow-warm-sm border border-transparent hover:border-primary hover:-translate-y-1 hover:shadow-warm-md transition-all duration-300">
             <h3 className="font-display font-bold text-lg text-foreground mb-3">Sua coleção de receitas</h3>
             <img src={recipesImage} alt="Sua coleção de receitas" className="w-full h-auto rounded-lg" />
           </div>

           {/* Orders Interface Image */}
           <div className="scroll-fade-up bg-background rounded-xl p-6 shadow-warm-sm border border-transparent hover:border-primary hover:-translate-y-1 hover:shadow-warm-md transition-all duration-300">
             <h3 className="font-display font-bold text-lg text-foreground mb-3">Gestão de pedidos</h3>
             <img src={ordersImage} alt="Gestão de pedidos" className="w-full h-auto rounded-lg" />
           </div>

           {/* Calculator Interface Image */}
           <div className="scroll-fade-up bg-background rounded-xl p-6 shadow-warm-sm border border-transparent hover:border-primary hover:-translate-y-1 hover:shadow-warm-md transition-all duration-300">
             <h3 className="font-display font-bold text-lg text-foreground mb-3">Calculadora de precificação</h3>
             <img src={calculatorImage} alt="Calculadora de precificação" className="w-full h-auto rounded-lg" />
           </div>

           {/* Shopping List Interface Image */}
           <div className="scroll-fade-up bg-background rounded-xl p-6 shadow-warm-sm border border-transparent hover:border-primary hover:-translate-y-1 hover:shadow-warm-md transition-all duration-300">
             <h3 className="font-display font-bold text-lg text-foreground mb-3">Lista de compras inteligente</h3>
             <img src={shoppingListImage} alt="Lista de compras inteligente" className="w-full h-auto rounded-lg" />
           </div>

            {/* Dashboard Interface Image */}
            <div className="scroll-fade-up bg-background rounded-xl p-6 shadow-warm-sm border border-transparent hover:border-primary hover:-translate-y-1 hover:shadow-warm-md transition-all duration-300">
              <h3 className="font-display font-bold text-lg text-foreground mb-3">Dashboard de vendas</h3>
              <img src={dashboardImage} alt="Dashboard de vendas" className="w-full h-auto rounded-lg" />
            </div>

            {/* Clients Management Interface Image */}
            <div className="scroll-fade-up bg-background rounded-xl p-6 shadow-warm-sm border border-transparent hover:border-primary hover:-translate-y-1 hover:shadow-warm-md transition-all duration-300">
              <h3 className="font-display font-bold text-lg text-foreground mb-3">Gestão de clientes</h3>
              <img src={clientsImage} alt="Gestão de clientes" className="w-full h-auto rounded-lg" />
            </div>
         </div>

        <p className="font-body text-muted-foreground text-base mt-10">
          Tudo isso funciona direto no celular, sem instalar nada, sem complicação.
        </p>
      </div>
    </section>
  );
};

export default ProductSection;
