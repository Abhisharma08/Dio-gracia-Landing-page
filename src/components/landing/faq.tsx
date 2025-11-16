import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does a typical interior project take?',
    answer:
      'Project timelines vary based on scope and complexity. A single room might take 4-6 weeks, while a full home interior can take 3-4 months. We provide a detailed schedule after our initial consultation.',
  },
  {
    question: 'Can you work with small homes and apartments?',
    answer:
      'Absolutely. We specialize in space-saving solutions and smart designs that make compact homes feel more spacious and functional. Our modular furniture is perfect for maximizing utility in smaller areas.',
  },
  {
    question: 'What about maintenance and after-sales support?',
    answer:
      'We use high-quality, low-maintenance materials. Additionally, all our projects come with a standard warranty, and our team is always available for post-project support to address any concerns.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-headline font-bold">
            Quick Answers to <span className="text-primary">Your Questions</span>
          </h3>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-headline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
