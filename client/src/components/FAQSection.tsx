import { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Clock, Smile } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "CAN I BRING PLUS ONE?",
      answer: "We're sorry, but our guest list is limited. Only those who have confirmed their RSVP will be accommodated and included in the invitation. We truly appreciate your understanding."
    },
    {
      question: "CAN I BRING MY KID(S) WITH ME?",
      answer: "As much as we love your kiddos, our wedding will be ADULTS ONLY with the exception of our immediate family's kids."
    },
    {
      question: "UNPLUGGED CEREMONY",
      answer: "We kindly request that guests refrain from taking photos or videos during the entourage and bridal march. Please allow our professional photographers and videographers to capture these once-in-a-lifetime moments."
    }
  ];

  const reminders = [
    {
      icon: Clock,
      title: "Be On Time",
      description: "Please arrive 30 minutes before the ceremony starts"
    },
    {
      icon: Camera,
      title: "Stay For The Event",
      description: "Join us throughout the entire celebration"
    },
    {
      icon: Smile,
      title: "Have Fun!",
      description: "Relax, enjoy, and celebrate with us"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* FAQs Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-script italic text-primary mb-8" data-testid="text-faq-title">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4 mb-24">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl shadow-soft overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors"
                data-testid={`button-faq-toggle-${index}`}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4" data-testid={`text-faq-question-${index}`}>
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" data-testid={`icon-chevron-up-${index}`} />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" data-testid={`icon-chevron-down-${index}`} />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6 animate-fade-in" data-testid={`text-faq-answer-${index}`}>
                  <p className="text-base text-foreground/85 leading-relaxed font-body">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reminders Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-script italic text-primary mb-8" data-testid="text-reminders-title">Reminders</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reminders.map((reminder, index) => {
            const Icon = reminder.icon;
            return (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl shadow-soft overflow-hidden animate-fade-up text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
                data-testid={`reminder-item-${index}`}
              >
                <div className="w-full px-8 py-8 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" data-testid={`icon-reminder-${index}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`text-reminder-title-${index}`}>
                    {reminder.title}
                  </h3>
                  <p className="text-base text-foreground/85 leading-relaxed font-body" data-testid={`text-reminder-description-${index}`}>
                    {reminder.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
