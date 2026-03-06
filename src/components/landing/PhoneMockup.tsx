import { useState, useEffect } from 'react';

const screens = [
  // Screen 0: Dashboard home
  {
    label: 'Dashboard',
    render: () => (
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 bg-primary/40 rounded-full" />
          <span className="text-xs">👋</span>
        </div>
        <p className="font-body text-[9px] text-muted-foreground font-medium">Olá, Fernanda!</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-primary/10 rounded-lg p-2 text-center">
            <p className="text-lg leading-none">📦</p>
            <p className="font-body text-[8px] font-medium text-foreground mt-1">12 Pedidos</p>
          </div>
          <div className="bg-accent/15 rounded-lg p-2 text-center">
            <p className="text-lg leading-none">💰</p>
            <p className="font-body text-[8px] font-medium text-foreground mt-1">R$ 1.840</p>
          </div>
          <div className="bg-success/10 rounded-lg p-2 text-center">
            <p className="text-lg leading-none">🛒</p>
            <p className="font-body text-[8px] font-medium text-foreground mt-1">3 Compras</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-2 text-center">
            <p className="text-lg leading-none">📊</p>
            <p className="font-body text-[8px] font-medium text-foreground mt-1">Meta: 78%</p>
          </div>
        </div>
        <div className="h-7 bg-primary rounded-lg flex items-center justify-center">
          <span className="font-body text-[8px] font-medium text-cream-warm">+ Novo Pedido</span>
        </div>
      </div>
    ),
  },
  // Screen 1: Order list
  {
    label: 'Pedidos',
    render: () => (
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between mb-2">
          <p className="font-body text-[10px] font-bold text-foreground uppercase tracking-wider">Pedidos</p>
          <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-[8px]">+</div>
        </div>
        {[
          { name: 'Maria Silva', qty: '3 ovos', status: '✅', color: 'bg-success/10' },
          { name: 'João Santos', qty: '5 ovos', status: '⏳', color: 'bg-accent/15' },
          { name: 'Ana Costa', qty: '2 ovos', status: '⏳', color: 'bg-accent/15' },
          { name: 'Paula Lima', qty: '4 ovos', status: '🆕', color: 'bg-primary/10' },
        ].map((o, i) => (
          <div key={i} className={`${o.color} rounded-lg p-2 flex items-center justify-between mockup-list-item`} style={{ animationDelay: `${i * 0.15}s` }}>
            <div>
              <p className="font-body text-[9px] font-medium text-foreground">{o.name}</p>
              <p className="font-body text-[7px] text-muted-foreground">{o.qty}</p>
            </div>
            <span className="text-xs">{o.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  // Screen 2: Pricing calculator
  {
    label: 'Precificação',
    render: () => (
      <div className="p-4 space-y-2">
        <p className="font-body text-[10px] font-bold text-foreground uppercase tracking-wider mb-2">Calculadora</p>
        <div className="bg-muted/50 rounded-lg p-2 space-y-1.5">
          <div className="flex justify-between">
            <span className="font-body text-[8px] text-muted-foreground">Ingredientes</span>
            <span className="font-body text-[8px] font-medium text-foreground">R$ 18,50</span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-[8px] text-muted-foreground">Embalagem</span>
            <span className="font-body text-[8px] font-medium text-foreground">R$ 4,00</span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-[8px] text-muted-foreground">Mão de obra</span>
            <span className="font-body text-[8px] font-medium text-foreground">R$ 12,00</span>
          </div>
          <div className="border-t border-primary/20 pt-1.5 flex justify-between">
            <span className="font-body text-[8px] font-medium text-foreground">Custo total</span>
            <span className="font-body text-[8px] font-bold text-foreground">R$ 34,50</span>
          </div>
        </div>
        <div className="bg-success/10 rounded-lg p-3 text-center">
          <p className="font-body text-[7px] text-muted-foreground">Preço sugerido (margem 60%)</p>
          <p className="font-body text-[16px] font-bold text-success leading-tight">R$ 55,20</p>
        </div>
        <div className="bg-primary/10 rounded-lg p-2 text-center">
          <p className="font-body text-[7px] text-primary font-medium">💰 Lucro por ovo: R$ 20,70</p>
        </div>
      </div>
    ),
  },
  // Screen 3: Shopping list
  {
    label: 'Lista de Compras',
    render: () => (
      <div className="p-4 space-y-2">
        <p className="font-body text-[10px] font-bold text-foreground uppercase tracking-wider mb-2">🛒 Lista de Compras</p>
        {[
          { item: 'Chocolate ao leite', qty: '2,4 kg', checked: true },
          { item: 'Leite condensado', qty: '6 latas', checked: true },
          { item: 'Creme de leite', qty: '4 cx', checked: false },
          { item: 'Embalagem acetato', qty: '14 un', checked: false },
          { item: 'Fita decorativa', qty: '3 rolos', checked: false },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 bg-muted/30 rounded-lg p-2 mockup-list-item" style={{ animationDelay: `${i * 0.12}s` }}>
            <div className={`w-3.5 h-3.5 rounded border-2 flex items-center justify-center ${item.checked ? 'bg-success border-success' : 'border-primary/30'}`}>
              {item.checked && <span className="text-[6px] text-cream-warm">✓</span>}
            </div>
            <div className="flex-1">
              <p className={`font-body text-[8px] ${item.checked ? 'line-through text-muted-foreground' : 'text-foreground font-medium'}`}>{item.item}</p>
            </div>
            <span className="font-body text-[7px] text-muted-foreground">{item.qty}</span>
          </div>
        ))}
      </div>
    ),
  },
  // Screen 4: Sales dashboard
  {
    label: 'Vendas',
    render: () => (
      <div className="p-4 space-y-2">
        <p className="font-body text-[10px] font-bold text-foreground uppercase tracking-wider mb-1">📊 Meta de Páscoa</p>
        <div className="bg-muted/30 rounded-lg p-3 text-center">
          <p className="font-body text-[20px] font-bold text-primary leading-none">78%</p>
          <div className="w-full bg-muted rounded-full h-2 mt-2 overflow-hidden">
            <div className="bg-primary h-full rounded-full mockup-progress-bar" style={{ width: '78%' }} />
          </div>
          <p className="font-body text-[7px] text-muted-foreground mt-1">R$ 1.840 de R$ 2.350</p>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="bg-success/10 rounded-lg p-1.5 text-center">
            <p className="text-sm leading-none">✅</p>
            <p className="font-body text-[7px] font-medium text-foreground">8</p>
            <p className="font-body text-[6px] text-muted-foreground">Entregues</p>
          </div>
          <div className="bg-accent/15 rounded-lg p-1.5 text-center">
            <p className="text-sm leading-none">⏳</p>
            <p className="font-body text-[7px] font-medium text-foreground">3</p>
            <p className="font-body text-[6px] text-muted-foreground">Produzindo</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-1.5 text-center">
            <p className="text-sm leading-none">🆕</p>
            <p className="font-body text-[7px] font-medium text-foreground">1</p>
            <p className="font-body text-[6px] text-muted-foreground">Novo</p>
          </div>
        </div>
        <div className="bg-primary/5 rounded-lg p-2">
          <p className="font-body text-[7px] text-primary font-medium text-center">🎯 Faltam R$ 510 para bater sua meta!</p>
        </div>
      </div>
    ),
  },
];

const PhoneMockup = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentScreen((prev) => (prev + 1) % screens.length);
        setTransitioning(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="mx-auto w-[260px] md:w-[300px] rounded-[2.2rem] border-[6px] border-chocolate-deep bg-chocolate-deep p-1 shadow-warm-lg"
      style={{ animation: 'hero-headline 0.8s ease-out 0.3s both' }}
    >
      {/* Notch */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-chocolate-deep rounded-b-2xl z-20" />
      </div>

      <div className="rounded-[1.8rem] overflow-hidden bg-background relative">
        {/* Status bar */}
        <div className="bg-background pt-2 pb-1 px-5 flex items-center justify-between relative z-10">
          <span className="font-body text-[7px] text-muted-foreground font-medium">9:41</span>
          <div className="flex gap-0.5 items-center">
            <div className="w-3 h-1.5 border border-muted-foreground/40 rounded-[1px] relative">
              <div className="absolute inset-[1px] right-[2px] bg-success rounded-[0.5px]" />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div
          className="min-h-[320px] transition-all duration-300"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? 'scale(0.96)' : 'scale(1)',
          }}
        >
          {screens[currentScreen].render()}
        </div>

        {/* Bottom nav */}
        <div className="bg-muted/30 border-t border-primary/5 px-3 py-2 flex justify-around">
          {['🏠', '📦', '💰', '🛒', '📊'].map((icon, i) => (
            <div
              key={i}
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                i === currentScreen ? 'bg-primary/15 scale-110' : 'opacity-50'
              }`}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
