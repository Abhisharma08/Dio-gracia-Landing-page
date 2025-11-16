import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ConsultationForm } from './consultation-form';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center text-center text-white overflow-hidden py-20 sm:py-24 md:py-32"
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container max-w-6xl grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4">
        <div className="text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold tracking-tight text-shadow-lg">
            Transform Your Space, Elevate Your Life.
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-body text-white/90 text-shadow">
            Bespoke Interiors Designed for Your Lifestyle. Built to Last.
          </h2>
          <p className="font-body text-white/80 text-base sm:text-lg">
            From stunning kitchens to serene bedrooms, we create organized,
            smarter homes that reflect your personality and stand the test of
            time.
          </p>
        </div>
        <div
          id="consultation-form"
          className="backdrop-blur-sm bg-black/30 p-4 sm:p-6 rounded-lg border border-primary/20 shadow-2xl scroll-mt-24"
        >
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
