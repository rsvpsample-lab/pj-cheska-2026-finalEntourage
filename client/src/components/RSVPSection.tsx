import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

const RSVPSection = () => {
  return (
    <section id="rsvp" className="py-20 px-4 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-[#333333] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#333333] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-script italic text-primary mb-8" data-testid="text-rsvp-title">
            Mangyaring Mag-RSVP
          </h2>
        </div>

        {/* Main RSVP Content */}
        <div className="animate-fade-up mb-12">
          <div className="border border-border rounded-2xl p-12 shadow-elegant bg-card">
            {/* RSVP Message */}
            <div className="space-y-6 mb-8">
              <p className="text-xl font-script italic text-primary leading-relaxed" data-testid="text-rsvp-message">
                Ang inyong presensya ay magpapabuo sa aming araw
              </p>
              <p className="text-xl font-script italic text-primary leading-relaxed" data-testid="text-rsvp-details">
                Mangyaring kumpirmahin ang inyong pagdalo sa pamamagitan ng pag-click sa button sa ibaba. 
                Excited kaming ipagdiwang ang espesyal na sandaling ito kasama ninyo!
              </p>
            </div>

            {/* RSVP Button */}
            <Button
              asChild
              size="lg"
              className="group relative px-16 py-6 text-lg font-script font-medium tracking-wide bg-primary hover:bg-accent text-primary-foreground shadow-lg transition-all duration-300 border-2 border-primary overflow-hidden rounded-lg"
              data-testid="button-rsvp"
            >
              <a 
                href="https://pj-cheska-rsvp.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-full h-full z-10"
              >
                <span className="relative z-10 font-script italic">Mag-RSVP Ngayon</span>
                <div className="absolute inset-0 from-transparent via-primary-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12 group-hover:animate-pulse"></div>
              </a>
            </Button>

            {/* RSVP Deadline */}
            <div className="mt-8 p-4 bg-[#4e403b]/5 border border-[#4e403b]/20 rounded-lg">
              <p className="text-primary font-semibold">
                RSVP Deadline: <span className="text-[#403326]">Disyembre 31, 2025</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Please respond by this date to help us finalize our arrangements
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default RSVPSection;