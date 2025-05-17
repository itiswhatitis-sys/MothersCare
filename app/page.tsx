import Image from "next/image";
import Header from "./components/Header";
import { Hero3 } from "./components/Hero";
import { Case1 } from "./components/Gallery";
import { Feature6 } from "./components/WhatWeDo";
import { CTA1 } from "./components/Cta";
import { Footer1 } from "./components/Footer";


export default function Home() {
  return (
   <>
   <Header/>
   <Hero3 />
   <Case1 />
   <Feature6 />
   <CTA1 />
   <Footer1 />
   </>
  );
}
