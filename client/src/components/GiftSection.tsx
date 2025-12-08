import { Heart, Gift, Home } from 'lucide-react';
import bdoQR from "@assets/gift-section_1762526627226.jpg";
import gcashQR from "@assets/gift-section2_1762526627226.jpg";

import gift22 from "@assets/gift22.jpg";

const GiftSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#333333] rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#333333] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 border border-[#333333] rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 
            className="text-5xl font-script italic text-primary mb-8" 
            style={{ fontFamily: '"Great Vibes", "Dancing Script", "Brush Script MT", cursive', fontWeight: 400, letterSpacing: '0.05em' }}
            data-testid="text-gifts-title"
          >
            Simula ng Bagong Kabanata
          </h2>
        </div>

        {/* Main Gift Message */}
        <div className="animate-fade-up mb-12">
          <div className="border border-border rounded-2xl p-12 shadow-elegant bg-card">
            {/* Icon */}
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-primary" />
            </div>

            {/* Main Message */}
            <div className="space-y-6">
              <p className="text-xl font-body text-foreground leading-relaxed">
                Ang inyong presensya sa aming kasal ay sapat na at isa nang malaking regalo para sa amin. Ngunit kung nais ninyong magbahagi ng biyaya, mas magiging kapaki-pakinabang po para sa amin ang cash gift upang makatulong sa pagbuo ng aming bagong pamilya.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-primary/30"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-float"></div>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* GCash Payment */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-border rounded-xl p-8 shadow-soft hover-elegant">
              <h3 className="text-lg font-display font-semibold text-primary mb-4 text-center">GCash</h3>
              <div className="text-center mb-4">
                <img 
                  src={gcashQR}
                  alt="GCash QR Code"
                  className="w-full h-auto mx-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                I-scan ang QR code sa itaas para magpadala ng regalo sa GCash
              </p>
            </div>
          </div>

          {/* BDO Payment */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-card border border-border rounded-xl p-8 shadow-soft hover-elegant">
              <h3 className="text-lg font-display font-semibold text-primary mb-4 text-center">BDO</h3>
              <div className="text-center mb-4">
                <img 
                  src={gift22}
                  alt="BDO Account Details"
                  className="w-full h-auto mx-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                I-scan ang QR code o gamitin ang account details sa itaas para sa BDO transfer
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default GiftSection;