import { Button } from '@/components/ui/button';
import heroBackground from "@assets/hero-section_1762530974913.jpg";

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

const HeroSection = ({ onOpenInvitation }: HeroSectionProps) => {
  return (
    <section 
      className="hero-section relative min-h-[100svh] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      {/* Content */}
      <div className="relative z-10 min-h-[100svh] w-full flex flex-col justify-between px-4 sm:px-8 lg:px-12 py-6 md:py-8" style={{ paddingBottom: 'calc(3rem + env(safe-area-inset-bottom))' }}>
        {/* Date on the right - top position */}
        <div className="absolute right-4 sm:right-8 lg:right-12 top-6 md:top-8 animate-fade-up opacity-0 [animation-delay:0.6s]">
          <div className="text-right text-white drop-shadow-lg" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            <p className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" data-testid="text-date">
              15<br />
              02<br />
              26
            </p>
          </div>
        </div>

        {/* Spacer to center names vertically */}
        <div className="flex-grow flex items-center">
          {/* Names on the left - vertically centered */}
          <div className="animate-fade-up opacity-0 [animation-delay:0.3s]">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight drop-shadow-lg text-left" 
              style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400, letterSpacing: '0.05em' }}
              data-testid="text-main-invitation"
            >
              Phil John<br />
              <span className="text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: '"Great Vibes", "Dancing Script", "Brush Script MT", cursive' }}>&</span><br />
              Cheska
            </h1>
          </div>
        </div>

        {/* Button at the bottom center */}
        <div className="animate-fade-scale opacity-0 [animation-delay:1s] flex justify-center mt-auto shrink-0">
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('HeroSection button clicked');
              onOpenInvitation();
            }}
            className="bg-primary hover:bg-accent text-primary-foreground font-display font-medium px-8 py-3 text-base shadow-lg border-0 rounded-lg relative overflow-hidden transform transition-all duration-300 hover:scale-105 z-20"
            aria-label="Buksan ang Wedding Invitation"
            data-testid="button-open-invitation"
          >
            <span className="relative z-10 font-display font-medium">
              Buksan ang Imbitasyon
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
        </div>
      </div>
      {/* Improved mobile responsiveness */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll !important;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .hero-section h1 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }
          .hero-section .bg-white\\/10 {
            padding: 1.5rem !important;
            margin-bottom: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
