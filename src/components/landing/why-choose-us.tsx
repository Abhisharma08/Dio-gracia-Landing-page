import {
  Gem,
  Medal,
  Users,
  Timer,
  LifeBuoy,
  CheckCircle2,
} from 'lucide-react';

const benefits = [
  {
    icon: Gem,
    title: 'Customized & Budget-Friendly',
    description:
      'We tailor every design to your unique style and financial plan, ensuring a perfect fit without compromise.',
  },
  {
    icon: Medal,
    title: 'Unmatched Quality & Durability',
    description:
      'Using only the finest materials and expert craftsmanship, we build interiors that are made to last.',
  },
  {
    icon: Users,
    title: 'Transparent & Collaborative Process',
    description:
      'Our team works with you at every step, providing clear communication and a seamless project experience.',
  },
  {
    icon: Timer,
    title: 'On-Time Project Delivery',
    description:
      'We respect your time. Our efficient process ensures your project is completed within the promised timeframe.',
  },
  {
    icon: LifeBuoy,
    title: 'Dedicated Post-Project Support',
    description:
      'Our relationship doesn’t end at handover. We offer reliable support to ensure your long-term satisfaction.',
  },
  {
    icon: CheckCircle2,
    title: 'Warranty Included',
    description:
      'All our projects come with a warranty, giving you peace of mind and assurance in our quality.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Why Choose <span className="text-primary">Dio Gracia?</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 mb-12">
            We blend artistry with practicality to create spaces that are not
            only beautiful but also enhance your daily life. Here’s what sets us
            apart.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-background hover:bg-white/5 transition-all"
            >
              <div className="flex items-start gap-4">
                <benefit.icon className="h-8 w-8 shrink-0 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-bold font-headline mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/70">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
