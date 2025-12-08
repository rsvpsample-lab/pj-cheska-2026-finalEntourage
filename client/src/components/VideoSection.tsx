const VideoSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Section Header */}
      <div className="text-center py-8 px-4 bg-background">
        <h2
          className="text-5xl font-script italic text-primary mb-8"
          style={{ fontFamily: '"Great Vibes", "Dancing Script", "Brush Script MT", cursive', fontWeight: 400, letterSpacing: '0.05em' }}
          data-testid="text-video-title"
        >
          Bidyo ng Pagmamahalan bago ang Kasal
        </h2>
      </div>
      {/* Video Container */}
      <div className="relative w-full overflow-hidden bg-background">
        <div className="aspect-video w-full max-w-5xl mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/sPYJa8vlaEc"
            title="Save the Date Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-testid="video-youtube-embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
