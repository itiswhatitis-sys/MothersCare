import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA1 = () => (
 <div id="contact" className="w-full py-10 lg:py-20 transform scale-90">
  <div className="container mx-auto">
    <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
      <div>
        <Badge>Get Started</Badge>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          Enroll your child at Mothers-Care today!
        </h3>
        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
          Discover a nurturing and joyful learning environment where your child will grow, explore, and thrive. Schedule a visit or enroll now to become part of the Mother-Care family!
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <Button className="gap-4" variant="outline">
          Schedule a Visit <PhoneCall className="w-4 h-4" />
        </Button>
        <Button className="gap-4">
          Enroll Now <MoveRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
</div>
);