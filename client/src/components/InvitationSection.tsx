import { Button } from '@/components/ui/button';

import { Calendar, Clock, MapPin } from 'lucide-react';

const InvitationSection = () => {
  return (
    <section id="invitation" className="py-20 px-4 pt-[0px] pb-[0px] bg-background dark:bg-background min-h-screen">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Names */}
        <div className="space-y-4 mb-12">
          <h1 
            className="text-7xl md:text-8xl lg:text-9xl font-script italic leading-tight pt-[0px] pb-[0px] mt-[25px] mb-[25px] text-foreground tracking-wider" 
            style={{ fontFamily: '"Great Vibes", "Dancing Script", "Brush Script MT", cursive', fontWeight: 400, letterSpacing: '0.05em' }} 
            data-testid="text-couple-names"
          >
            Phil John <span className="text-foreground/80">&</span> Cheska
          </h1>
        </div>

        {/* Main Invitation Text */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-display leading-tight tracking-wider text-foreground" data-testid="text-invitation-title">
            AT SA WAKAS<br />
            MASASAMBIT NA ANG "<em className="font-script italic">OPO, TINATANGGAP KO</em>"
          </h2>
          
          {/* Date, Time, Location */}
          <div className="space-y-4 max-w-lg mx-auto mb-8">
            <div className="text-center space-y-2">
              <p className="text-3xl md:text-4xl lg:text-5xl font-script italic font-normal text-foreground" data-testid="text-wedding-date-detail">February 15, 2026 | 3:30 PM</p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-script italic font-normal text-foreground" data-testid="text-wedding-location">Alfonso, Cavite</p>
            </div>
          </div>

          <div className="space-y-6 max-w-lg mx-auto">
            <p className="text-lg leading-relaxed text-foreground" style={{ fontFamily: '"Times New Roman", serif' }} data-testid="text-invitation-question">
              Tatanggapin mo ba ang aming imbitasyon?
            </p>
            <p className="text-base text-foreground" style={{ fontFamily: '"Times New Roman", serif' }} data-testid="text-invitation-deadline">
              Mangyaring tumugon sa o bago pa ang
            </p>
            <p className="text-lg font-normal text-foreground" style={{ fontFamily: '"Times New Roman", serif' }} data-testid="text-rsvp-date">December 31, 2025</p>
          </div>
        </div>

        {/* Additional Wedding Details */}
        <div className="space-y-8 max-w-lg mx-auto mt-16">
          <div className="text-center space-y-4">
            
            <p className="text-foreground/80 text-[17px]" style={{ fontFamily: '"Times New Roman", serif' }}>#FinallySiCheskaKayPhilNa</p>
          </div>
        </div>

        {/* Navigation Arrow to RSVP */}
        <div className="py-4 mt-12">
          <a 
            href="#rsvp" 
            className="inline-flex items-center justify-center text-primary hover:text-primary/80 transition-colors duration-300"
            data-testid="link-navigate-rsvp"
          >
            <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;