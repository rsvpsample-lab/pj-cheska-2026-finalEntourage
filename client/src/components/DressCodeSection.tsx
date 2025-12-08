import dressCodeImage from "@assets/dree_1762576793975.png";

const DressCodeSection = () => {
  const dressCodeColors = [
    { color: '#9CAF88', hex: '#9CAF88', name: 'Sage Green' },
    { color: '#E5C4BA', hex: '#E5C4BA', name: 'Peachy Beige' },
    { color: '#D9A889', hex: '#D9A889', name: 'Peach' },
    { color: '#C89968', hex: '#C89968', name: 'Tan' },
    { color: '#A0654F', hex: '#A0654F', name: 'Rust' },
    { color: '#6B4423', hex: '#6B4423', name: 'Brown' }
  ];

  return (
    <section id="dresscode" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-[#333333] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-[#333333] rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-[#333333]/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-[#333333]/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-[#333333]/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-[#333333]/30 rounded-full"></div>

          <h2 className="font-script italic text-primary mb-8 text-[48px]" data-testid="text-dresscode-title">
            Gabay sa Kasuotan
          </h2>
        </div>

        {/* Dress Code Requirements */}
        <div className="space-y-16 mb-16">
          {/* For Guests and Visitors */}
          <div className="animate-fade-up">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover-elegant">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-display font-semibold text-primary mb-6">
                  PARA SA MGA BISITA
                </h3>
                <p className="text-lg font-medium text-foreground mb-4">
                  Mangyaring magsuot ng <span className="font-semibold text-primary">formal attire</span>.
                </p>
                <p className="text-lg font-medium text-foreground mb-4">
                  Hinihikayat ang mga bisita na magsuot ng kulay mula sa aming wedding palette: Sage Green, Peachy Beige, Peach, Tan, Rust, at Brown
                </p>
                <p className="text-base text-red-600 dark:text-red-500 mb-6 font-semibold">
                  Pakiusap na iwasan ang kasuotan na puti. Ilaan po natin ang kulay na ito para sa bride at groom.
                </p>
                <img 
                  src={dressCodeImage}
                  alt="Dress code guide for guests and visitors"
                  className="w-full max-w-3xl mx-auto object-contain rounded-lg"
                  data-testid="img-dresscode-guide"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="animate-fade-up mb-16" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover-elegant">
            <h3 className="text-2xl font-display font-semibold text-primary mb-6 text-center">
              Mga Inirerekomendang Kulay
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              Isaalang-alang ang mga magagandang kulay na ito sa pagpili ng kasuotan
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {dressCodeColors.map((colorItem, index) => (
                <div key={index} className="text-center group">
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-lg border-4 border-primary shadow-soft group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: colorItem.color }}
                  ></div>
                  <p className="text-xs text-muted-foreground font-mono mt-2">
                    {colorItem.hex}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
