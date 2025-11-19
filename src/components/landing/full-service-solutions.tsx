import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const solutions = [
  {
    id: 'living-room',
    title: 'Living Rooms',
    description:
      'Create welcoming spaces with custom TV units, entertainment centers, and seating arrangements that blend comfort with sophistication.',
  },
  {
    id: 'bedroom',
    title: 'Bedrooms',
    description:
      "Peaceful sanctuaries with built-in storage, elegant headboards, and personalized touches that make every night's rest luxurious.",
  },
  {
    id: 'wardrobe',
    title: 'Wardrobes',
    description:
      'Walk-in closets and sliding wardrobes with intelligent compartments for jewelry, shoes, and accessories – everything in its place.',
  },
  {
    id: 'entertainment-unit',
    title: 'Entertainment Units',
    description:
      "Dramatic panel structures, integrated ambient lighting, and bold architectural elements that redefine the visual impact of your entertainment unit.",
  },
  {
    id: 'bathroom-vanity',
    title: 'Bathroom Vanity',
    description:
      'Spa-like bathrooms with waterproof vanities, modern fixtures, and smart storage that combines hygiene with style.',
  },
  {
    id: 'complete-home',
    title: 'Complete Home Solutions',
    description:
      'End-to-end interior design for your entire home with cohesive design language and seamless execution.',
  },
];

export function FullServiceSolutions() {
  const solutionImages = solutions.map((solution) => {
    const placeholder = PlaceHolderImages.find((img) => img.id === solution.id);
    return { ...solution, ...placeholder };
  });

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Our Full-Service{' '}
            <span className="text-primary">Interior Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 mb-12">
            A complete design journey, from floors to ceilings. We manage
            everything to deliver your dream home, hassle-free.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionImages.map((solution) => (
            <div
              key={solution.title}
              className="group rounded-lg border border-border bg-background overflow-hidden"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                {solution.imageUrl && (
                  <Image
                    src={solution.imageUrl}
                    alt={solution.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={solution.imageHint}
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-headline mb-2 text-foreground">
                  {solution.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/70">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
