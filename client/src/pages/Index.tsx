import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SlideshowSection from '@/components/SlideshowSection';
import InvitationSection from '@/components/InvitationSection';
import CountdownSection from '@/components/CountdownSection';
import CoverImageSection from '@/components/CoverImageSection';
import BibleVerseSection from '@/components/BibleVerseSection';
import VideoSection from '@/components/VideoSection';
import TimelineSection from '@/components/TimelineSection';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import EntourageSection from '@/components/EntourageSection';
import GiftSection from '@/components/GiftSection';
import RSVPSection from '@/components/RSVPSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

import cover1 from '@assets/cover1_1762528293037.jpg';
import cover2 from '@assets/cover2_1762528293038.jpg';
import cover3 from '@assets/cover3_1762528293038.jpg';
import cover4 from '@assets/cover4_1762528293038.jpg';
import cover5 from '@assets/cover5_1762528293039.jpg';
import cover6 from '@assets/cover6_1762528293039.jpg';

const Index = () => {
  const [showInvitation, setShowInvitation] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    console.log('handleOpenInvitation called');
    setShowInvitation(true);
    
    // Start background music immediately
    setTimeout(() => {
      if (audioRef.current) {
        const audio = audioRef.current;
        audio.volume = 0.3;
        audio.loop = true;
        
        console.log('Attempting to play background music...');
        audio.play().then(() => {
          console.log('Background music started successfully');
        }).catch((error) => {
          console.log('Music play error:', error);
          console.log('Adding fallback listeners for user interaction');
          
          // Fallback for autoplay restrictions
          const playOnInteraction = () => {
            console.log('Trying to play music on user interaction...');
            audio.play().then(() => {
              console.log('Music started on user interaction');
            }).catch((err) => {
              console.error('Failed to play music on interaction:', err);
            });
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
          };
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
        });
      } else {
        console.log('Audio element not found');
      }
    }, 100);
  };

  return (
    <>
      {/* Background Music - Always present */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://res.cloudinary.com/djjjvyrxi/video/upload/v1762574528/ytmp3free.cc_dilaw-maki-fingerstyle-guitar-youtubemp3free.org_id45xd.mp3"
        style={{ display: 'none' }}
        data-testid="background-audio"
      />

      {!showInvitation ? (
        <HeroSection onOpenInvitation={handleOpenInvitation} />
      ) : (
        <div className="min-h-screen bg-background">
          <Navigation />
          
          {/* Main Content Sections */}
          <main>
            <SlideshowSection />
            <InvitationSection />
            <CountdownSection />
            <CoverImageSection imageUrl={cover1} alt="Cover Image 1" />
            <BibleVerseSection />
            <VideoSection />
            <TimelineSection />
            <CoverImageSection imageUrl={cover2} alt="Cover Image 2" />
            <VenueSection />
            <DressCodeSection />
            <CoverImageSection imageUrl={cover3} alt="Cover Image 3" />
            <EntourageSection />
            <CoverImageSection imageUrl={cover4} alt="Cover Image 4" />
            <GiftSection />
            <CoverImageSection imageUrl={cover5} alt="Cover Image 5" />
            <RSVPSection />
            <CoverImageSection imageUrl={cover6} alt="Cover Image 6" />
            <FAQSection />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};

export default Index;