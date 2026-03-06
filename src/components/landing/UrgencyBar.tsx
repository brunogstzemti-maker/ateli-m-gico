import { useCountdown } from '@/hooks/useCountdown';

const UrgencyBar = () => {
  const timer = useCountdown(10);

  return (
    <div
      className="sticky top-0 z-50 bg-destructive text-destructive-foreground text-center py-2.5 px-4 font-body text-sm md:text-base font-medium"
      style={{ animation: 'slide-down-bar 0.5s ease-out' }}
    >
      Oferta exclusiva pós-compra — Esta página fecha em{' '}
      <span className="font-bold tabular-nums text-gold-light">{timer}</span>
    </div>
  );
};

export default UrgencyBar;
