import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { LayoutTemplate, Archive, Gem, Sparkles } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: LayoutTemplate,
    name: 'Flexible Layouts',
    description:
      'L-shaped, U-shaped, island, or parallel - designed for your space',
  },
  {
    icon: Gem,
    name: 'Premium Materials',
    description: 'Waterproof, termite-proof finishes that last decades',
  },
  {
    icon: Archive,
    name: 'Smart Storage',
    description: 'Pull-out drawers, corner solutions, and vertical optimizers',
  },
  {
    icon: Sparkles,
    name: 'Easy Maintenance',
    description: 'Stain-resistant surfaces that clean in minutes',
  },
];

export function ModularKitchens() {
  const kitchenImages = [
    PlaceHolderImages.find((img) => img.id === 'kitchen-1'),
    PlaceHolderImages.find((img) => img.id === 'kitchen-2'),
    PlaceHolderImages.find((img) => img.id === 'kitchen-3'),
  ].filter(Boolean);

  return (
    <section id="kitchens" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-left">
                Modular Kitchens: <br />
                <span className="text-primary">
                  Smart Design for Everyday Use
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 text-left">
                Your kitchen is the heart of your home. Our modular kitchens
                combine innovative layouts, premium materials, and intelligent
                storage solutions to create a space that's not just beautiful,
                but effortlessly functional for your daily needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-start gap-3">
                  <feature.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">
                      {feature.name}
                    </h4>
                    <p className="text-sm text-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-left">
              <Button size="lg" className="mt-4" asChild>
                <Link href="#consultation-form">GET A FREE KITCHEN QUOTE</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {kitchenImages[0] && (
              <div className="aspect-[4/3] relative col-span-2">
                <Image
                  src={kitchenImages[0].imageUrl}
                  alt={kitchenImages[0].description}
                  fill
                  className="rounded-lg object-cover"
                  data-ai-hint={kitchenImages[0].imageHint}
                />
              </div>
            )}
            {kitchenImages[1] && (
              <div className="aspect-square relative">
                <Image
                  src={kitchenImages[1].imageUrl}
                  alt={kitchenImages[1].description}
                  fill
                  className="rounded-lg object-cover"
                  data-ai-hint={kitchenImages[1].imageHint}
                />
              </div>
            )}
            {kitchenImages[2] && (
              <div className="aspect-square relative">
                <Image
                  src={kitchenImages[2].imageUrl}
                  alt={kitchenImages[2].description}
                  fill
                  className="rounded-lg object-cover"
                  data-ai-hint={kitchenImages[2].imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
