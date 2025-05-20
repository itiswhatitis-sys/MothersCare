// components/Hero3.tsx or wherever it is
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EnrollForm } from "./Enroll";


export const Hero3 = () => {
  return (
    <div className="w-full py-20 lg:py-16 transform scale-90">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Now Enrolling!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                A joyful start to lifelong learning!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                At Mother-Care, we nurture young minds in a safe, colorful, and loving environment. With our beautiful campus, caring teachers, and engaging field trips, your child’s early years will be full of wonder and growth.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Book a Visit <PhoneCall className="w-4 h-4" />
              </Button>

              {/* 🔔 Trigger EnrollForm here */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="gap-4">
                    Enroll Now <MoveRight className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Enrollment Form</DialogTitle>
                  </DialogHeader>
                  <EnrollForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  );
};
