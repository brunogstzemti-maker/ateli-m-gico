import { useEffect, useRef } from 'react';

export function useScrollAnimation(animationClass = 'scroll-fade-up', stagger = false) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stagger) {
              const children = el.querySelectorAll(`.${animationClass}`);
              children.forEach((child, i) => {
                setTimeout(() => child.classList.add('visible'), i * 100);
              });
            } else {
              el.classList.add('visible');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animationClass, stagger]);

  return ref;
}
