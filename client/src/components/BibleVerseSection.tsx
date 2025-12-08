import { Card, CardContent } from '@/components/ui/card';
import mgaSandalingImage from "@assets/Mga Sandaling Hindi Malilimutan_1762531220332.jpg";
import simulaImage from "@assets/Simula ng Bagong Kabanata_1762531225181.jpg";
import isangPangakoImage from "@assets/Isang Pangakong Habambuhay_1762531220331.jpg";

const BibleVerseSection = () => {
  const storyImages = [
    mgaSandalingImage,
    simulaImage,
    isangPangakoImage
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-section-title text-foreground mb-6" 
            style={{ fontFamily: '"Great Vibes", "Dancing Script", "Brush Script MT", cursive', fontWeight: 400, letterSpacing: '0.05em' }}
            data-testid="text-bible-verse-title"
          >
            Salita ng Panginoon
          </h2>

          {/* Bible Verse Card */}
          <Card className="max-w-4xl mx-auto mb-12 bg-card border-primary/20 shadow-soft">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground font-script italic leading-relaxed">
                  "When I found the one I love"
                </blockquote>
                <cite className="text-base md:text-lg text-muted-foreground font-display">
                  — Song of Solomon 3:4
                </cite>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Story Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {storyImages.map((image, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-soft hover-elegant">
                {/* Polaroid Frame Effect */}
                <div className="bg-white p-4 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={image}
                    alt={`Larawan ${index + 1}`}
                    className="w-full h-64 md:h-80 rounded-sm"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                    data-testid={`img-story-${index + 1}`}
                  />

                  {/* Polaroid Caption */}
                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-600 font-handwriting">
                      {index === 0 && "Mga Sandaling Hindi Malilimutan"}
                      {index === 1 && "Simula ng Bagong Kabanata"}
                      {index === 2 && "Isang Pangakong Habambuhay"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BibleVerseSection;