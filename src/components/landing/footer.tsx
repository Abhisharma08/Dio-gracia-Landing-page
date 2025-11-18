import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h3 className="text-3xl md:text-4xl font-headline font-bold">
          Ready to Experience the{' '}
          <span className="text-primary">Dio Gracia Difference?</span>
        </h3>
        <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
          Let's create a practical, long-lasting interior that you'll love for
          years to come. Get started with your free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#consultation-form">REQUEST A PERSONALIZED QUOTE</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#consultation-form">SCHEDULE A SITE VISIT</Link>
          </Button>
        </div>
      </div>
    <div className="w-full mt-16 flex justify-center">
  <p className="text-sm text-foreground/50 text-center">
    © 2025 Dio Gracia Interiors. All Rights Reserved.
  </p>
</div>


    </footer>
  );
}
