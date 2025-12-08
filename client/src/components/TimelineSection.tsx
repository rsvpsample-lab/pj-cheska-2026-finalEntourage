import { Clock, Camera, Coffee, Utensils, Music } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      time: '3:30 PM',
      event: 'Pagtanggap at Pagpapaupo ng Bisita',
      icon: Clock,
      description: 'Pagtanggap at paupo ng mga bisita'
    },
    {
      time: '4:00 PM',
      event: 'Ceremony Proper',
      icon: Clock,
      description: 'Pagsisimula ng banal na seremonya'
    },
    {
      time: '5:30 PM',
      event: 'Pictorial',
      icon: Camera,
      description: 'Pagkuha ng mga precious moments'
    },
    {
      time: '6:00 PM',
      event: 'Cocktail',
      icon: Coffee,
      description: 'Oras para sa masasarap na inumin'
    },
    {
      time: '7:30 PM',
      event: 'Program Proper and Dinner',
      icon: Music,
      description: 'Simula ng programa at kasiyahan'
    },
    {
      time: '9:30 PM',
      event: 'End Of Program / Party Time',
      icon: Music,
      description: 'Wakas ng programa at simula ng party'
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#333333] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#333333] rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl font-script italic text-primary mb-8" 
            style={{ fontFamily: '"Great Vibes", "Dancing Script", "Brush Script MT", cursive', fontWeight: 400, letterSpacing: '0.05em' }}
            data-testid="text-timeline-title"
          >Tinatayang Takbo ng Selebrasyon</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary opacity-30"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'justify-start' : 'justify-end'
                  } animate-fade-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Event Card */}
                  <div className={`w-full max-w-md ${isEven ? 'pr-8' : 'pl-8'}`}>
                    <div className={`bg-card border border-border rounded-xl p-6 shadow-soft hover-elegant ${
                      isEven ? 'text-right' : 'text-left'
                    }`}>
                      <div className={`flex items-center gap-3 mb-3 ${
                        isEven ? 'justify-end' : 'justify-start'
                      }`}>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center order-2 bg-primary">
                          <IconComponent className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className={isEven ? 'order-1' : 'order-2'}>
                          <div className="text-2xl font-display font-semibold text-foreground">
                            {item.time}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-display font-semibold text-primary mb-2">
                        {item.event}
                      </h3>

                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decorative */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2">
            <div className="w-8 h-px bg-primary"></div>
            <div className="w-2 h-2 rounded-full animate-float bg-primary"></div>
            <div className="w-8 h-px bg-primary"></div>
          </div>
          <p className="mt-4 text-muted-foreground font-body italic">
            Pagdiriwang ng pag-ibig buong araw
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;