import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import ceremonyImage from "@assets/ceremony_1762526627222.jpg";
import receptionImage from "@assets/reception_1762526639108.jpg";
import qrMapImage from "@assets/Untitled design_1762576346666.png";

const VenueSection = () => {
  const venues = [
    {
      title: 'Seremonya',
      name: 'Jardin De Amor Events Place',
      address: 'Jardin De Amor Events Place',
      image: ceremonyImage,
      mapUrl: 'https://maps.app.goo.gl/KQsz8hMLq2MbrAJN8',
      description: 'Dito namin ipapangako ang aming pagmamahal sa harap ng Panginoon.',
      details: 'Mangyaring dumating ng maaga upang makaupo bago magsimula ang seremonya.',
      additionalInfo: 'UNPLUGGED CEREMONY - Huwag po kayong gumamit ng camera sa seremonya para maging present tayong lahat.',
      startTime: '3:30 PM',
      locationGuide: 'Gabay sa Lokasyon →'
    },
    {
      title: 'Resepsyon',
      name: 'Jardin De Amor Events Place',
      address: 'Jardin De Amor Events Place',
      image: receptionImage,
      mapUrl: 'https://maps.app.goo.gl/KQsz8hMLq2MbrAJN8',
      description: 'Samahan ninyo kami sa hapunan, inumin at sayawan!',
      details: 'Pagkatapos ng seremonya, lilipat tayo sa venue ng resepsyon para sa pagdiriwang.',
      website: '',
      startTime: '5:00 PM',
      locationGuide: 'Gabay sa Lokasyon →'
    }
  ];

  return (
    <section id="venue" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.3}s` }}>
              {/* Venue Title */}
              <div className="text-center mb-12">
                <h2 className="text-5xl font-script italic text-primary mb-8" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                  {venue.title}
                </h2>
              </div>

              {/* Venue Content */}
              <div className="max-w-lg mx-auto text-center space-y-6">
                {/* Venue Image */}
                <div className="mb-8">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                    loading="lazy"
                    data-testid={`img-${venue.title.toLowerCase()}-venue`}
                  />
                </div>

                {/* Venue Name */}
                <h3 className="text-3xl font-script italic text-primary mb-4" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                  {venue.name}
                </h3>

                {/* Description */}
                <div className="space-y-3 mb-8">
                  {venue.description.split('\n').map((line, i) => (
                    <p key={i} className="text-base font-body text-foreground/85 leading-relaxed" data-testid={`text-${venue.title.toLowerCase()}-description-${i + 1}`}>
                      {line}
                    </p>
                  ))}
                </div>

                {/* Details */}
                <p className="text-base font-body text-foreground/85" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>

                {venue.website && (
                  <p className="text-base font-body text-foreground/85" data-testid={`text-${venue.title.toLowerCase()}-website`}>
                    {venue.website}
                  </p>
                )}

                {/* Time */}
                <div className="pt-6 border-t border-foreground/10">
                  <p className="text-lg font-semibold text-foreground mb-4" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                    {venue.startTime}
                  </p>
                </div>

                {/* QR Code Map */}
                <div className="bg-white p-6 rounded-lg inline-block">
                  <img
                    src={qrMapImage}
                    alt="QR Code for Map"
                    className="w-48 h-48 mx-auto"
                    data-testid={`img-${venue.title.toLowerCase()}-qr-code`}
                  />
                  <p className="text-sm text-gray-600 mt-3 font-body">Scan para sa Google Maps</p>
                </div>

                {/* Location Guide Button */}
                <div className="pt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="font-body hover:bg-primary hover:text-white transition-colors"
                    data-testid={`button-${venue.title.toLowerCase()}-location`}
                  >
                    <a href={venue.mapUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="w-4 h-4 mr-2" />
                      {venue.locationGuide}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Unplugged Ceremony Note */}
        <div className="mt-16 text-center bg-card/30 border border-border rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-display font-semibold text-primary mb-4">Walang Camera sa Seremonya</h3>
          <p className="text-base font-body text-foreground/85 leading-relaxed mb-4">
            Pakisuyo po namin na huwag munang gumamit ng camera sa seremonya para maging present tayong lahat sa sandaling ito. Pagdating natin sa resepsyon, libre po kayong magpicture at mag-video—gusto namin na tulungan ninyo kaming makakuha ng maraming alaala!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
