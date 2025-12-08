interface CoverImageSectionProps {
  imageUrl: string;
  alt?: string;
}

const CoverImageSection = ({ imageUrl, alt = "Cover Image" }: CoverImageSectionProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <img
        src={imageUrl}
        alt={alt}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          objectPosition: 'center',
          margin: 0,
          padding: 0
        }}
        data-testid="img-cover"
      />
    </section>
  );
};

export default CoverImageSection;