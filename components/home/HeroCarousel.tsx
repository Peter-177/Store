import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";

const carouselImages = [hero1, hero2, hero3, hero4];

function HeroCarousel() {
  return (
    <div className='relative'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className='relative h-72 sm:h-96 lg:h-112 w-full overflow-hidden rounded-3xl group shadow-2xl'>
                <Image
                  src={image}
                  alt='hero'
                  fill
                  priority
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/20 to-transparent' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-4 bg-white/30 backdrop-blur-md hover:bg-white/60 border-none transition-all duration-300' />
        <CarouselNext className='right-4 bg-white/30 backdrop-blur-md hover:bg-white/60 border-none transition-all duration-300' />
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
