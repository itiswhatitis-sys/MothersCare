"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Case1 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
   <div id="gallery" className="w-full py-10 lg:py-20 transform scale-90">
  <div className="container mx-auto">
    <div className="flex flex-col gap-10">
      <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-2xl font-regular text-left">
        A glimpse into life at <span className="font-bold">Mothers-Care </span>
      </h2>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6" key={index}>
              <div className="flex overflow-hidden rounded-md aspect-square bg-muted items-center justify-center p-1">
                <img
                  src={`/images/gallery/image${index + 1}.jpg`}
                  alt={`Mother-Care School Image ${index + 1}`}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </div>
</div>
  );
};