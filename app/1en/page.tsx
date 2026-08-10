import React from "react";
import Link from "next/link";
import Image from "next/image";
import messagesUk from '../../messages/en.json'; 

const t = messagesUk.HomePage;

export default function Page() {
  return (
    <div className="space-y-10 md:space-y-16 pb-16">
      <section
        id="main"
        className="relative flex items-center justify-start -mx-4 sm:-mx-8 md:-mx-12 -mt-4 sm:-mt-8 md:-mt-12 aspect-[16/9] w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] md:w-[calc(100%+6rem)] bg-contain bg-center bg-no-repeat transition-all duration-500 bg-hero-pattern border-b border-border"
      >
        
        <div className="container mx-auto px-6 sm:px-12 relative z-10 text-left">
          <h1 className="
            text-2xl md:text-5xl 
            lg:text-7xl font-bold text-primary -mt-5
            [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]
            whitespace-pre-wrap lg:whitespace-pre-line leading-tight">
            {t.title}
          </h1>
        </div>
      </section>

      <section id="blackouts" className="py-6 sm:py-8 container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6 sm:mb-8">{t.n1}</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <p className="text-lg text-left leading-relaxed text-foreground/90 font-light px-6">{t.t1}</p>
          <div className="relative w-full h-64 md:h-full rounded-2xl overflow-hidden border-4 border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]">
            <Image 
              src="/images/blackout.webp" 
              alt="Відключення світла" 
              fill 
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </div>
      </section>

      <section id="baseinfo" className="py-6 sm:py-8 bg-foreground/5 rounded-3xl container mx-auto">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 md:gap-12 items-center px-6 sm:px-12">
          <div className="space-y-6 sm:space-y-8 text-left">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/95 font-light">{t.t2}</p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/95 font-light">{t.t3}</p>
          </div>
          <div className="flex justify-center md:justify-end transition-transform duration-300 hover:rotate-3 py-4 md:py-0">
            <Image 
              src="/images/logo.png" 
              alt="LockedNet Logo" 
              width={400}
              height={400} 
              className="filter dark:invert transition-all"
            />
          </div>
        </div>
      </section>

      <section id="advices" className="py-6 sm:py-8 container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6 sm:mb-8">{t.n2}</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden bg-background border-4 border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]">
            <Image 
              src="/images/alroom-light.png" 
              alt="Стратегія тривожної кімнатки (Light mode)" 
              fill 
              style={{ objectFit: 'cover' }}
              className="block dark:hidden" 
            />
            <Image 
              src="/images/alroom-black.png" 
              alt="Стратегія тривожної кімнатки (Dark mode)" 
              fill 
              style={{ objectFit: 'cover' }}
              className="hidden dark:block filter dark:brightness-110" 
            />
          </div>
          <p className="text-lg text-left leading-relaxed text-foreground/90 font-light px-6">{t.t4}</p>
        </div>
      </section>

      <section id="nextPage" className="py-6 sm:py-8 border-t border-border mt-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-left space-y-4">
          <p className="text-lg leading-relaxed text-foreground/90 font-light">{t.t5}</p>
          <p className="text-lg leading-relaxed text-foreground/90 font-light">{t.t6}</p>
          <div className="pt-3">
            <Link 
              href="/1en/archnet1" 
              className="inline-block bg-primary text-background font-bold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 transform hover:translate-x-1"
            >
              {t.archLink}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}