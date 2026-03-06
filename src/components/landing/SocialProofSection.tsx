import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import testimonialFernanda from '@/assets/testimonial-fernanda.jpg';
import testimonialClaudia from '@/assets/testimonial-claudia.jpg';

const testimonials = [
  { name: 'Fernanda Souza', image: testimonialFernanda },
  { name: 'Cláudia Maria', image: testimonialClaudia },
];

const SocialProofSection = () => {
  const ref = useScrollAnimation('scroll-fade-up', true);

  return (
    <section className="bg-gradient-to-b from-cream-dark via-cream-dark to-background py-16 md:py-24 px-4">
      <div className="max-w-content mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-12">
          O que outras confeiteiras estão dizendo:
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="scroll-fade-up rounded-2xl overflow-hidden shadow-warm-lg"
            >
              <img
                src={t.image}
                alt={`Depoimento de ${t.name}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
