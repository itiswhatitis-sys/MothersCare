import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Feature6 = () => (
  <div id="features" className="w-full py-10 lg:py-20 transform scale-90">
  <div className="container mx-auto">
    <div className="flex flex-col gap-10">
      <div className="flex gap-4 flex-col items-start">
        <div>
          <Badge>Features</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
            Everything your little one needs to thrive 🌟
          </h2>
          <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
            At Mother-Care, we offer more than just childcare — we provide a joyful and safe space where children explore, learn, and grow with love.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
          <User className="w-8 h-8 stroke-1" />
          <div className="flex flex-col">
            <h3 className="text-xl tracking-tight">Beautiful Campus</h3>
            <p className="text-muted-foreground max-w-xs text-base">
              A safe, colorful, and child-friendly environment where imaginations bloom and friendships grow.
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
          <User className="w-8 h-8 stroke-1" />
          <div className="flex flex-col">
            <h3 className="text-xl tracking-tight">Safe Bus Facility</h3>
            <p className="text-muted-foreground max-w-xs text-base">
              Reliable, GPS-enabled transportation with trained staff for secure pick-up and drop-off.
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
          <User className="w-8 h-8 stroke-1" />
          <div className="flex flex-col">
            <h3 className="text-xl tracking-tight">Fun Field Trips</h3>
            <p className="text-muted-foreground max-w-xs text-base">
              Exciting and educational outings that spark curiosity and broaden horizons.
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
          <User className="w-8 h-8 stroke-1" />
          <div className="flex flex-col">
            <h3 className="text-xl tracking-tight">Caring Teachers & School App</h3>
            <p className="text-muted-foreground max-w-xs text-base">
              Experienced teachers who nurture young minds, supported by a school app that keeps parents connected every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

);