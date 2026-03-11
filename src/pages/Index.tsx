import UrgencyBar from '@/components/landing/UrgencyBar';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import ProductSection from '@/components/landing/ProductSection';
import SocialProofSection from '@/components/landing/SocialProofSection';
import PricingSection from '@/components/landing/PricingSection';
import FaqSection from '@/components/landing/FaqSection';
import FinalUrgencySection from '@/components/landing/FinalUrgencySection';
import DecisionSection from '@/components/landing/DecisionSection';
import FooterSection from '@/components/landing/FooterSection';


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <HeroSection />
      <ProblemSection />
      <div className="separator-gold max-w-content mx-auto px-4">
        <span className="text-primary text-sm">✦</span>
      </div>
      <MediaProofSection />
      <ProductSection />
      <SocialProofSection />
      <PricingSection />
      <FaqSection />
      <FinalUrgencySection />
      <DecisionSection />
      <FooterSection />
    </div>
  );
};

export default Index;
