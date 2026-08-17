import React from "react";
import Image from "next/image";
import Link from "next/link";
import messagesUk from '../../../../messages/uk.json';

const t = messagesUk.Catalog;

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 space-y-20 md:space-y-28 animate-fade-in">
            
            <section id="main" className="text-center max-w-4xl mx-auto space-y-10">
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary whitespace-pre-wrap leading-tight tracking-tight">
                        {t.t3}
                    </h1>
                    <div className="w-24 h-1.5 bg-primary/20 mx-auto rounded-full"></div>
                </div>

                <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">
                    {t.q001}
                </p>

                <div className="group relative w-full h-96 sm:h-[30rem] rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-accent/50 p-6 md:p-10 transition-all duration-500 ease-out hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/20">
                    <Image 
                        src="/7-images/energyHub.png" 
                        alt="energyHub" 
                        fill 
                        priority
                        style={{ objectFit: 'contain' }} 
                        className="p-4 transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </section>

            <section id="ch1" className="max-w-4xl mx-auto space-y-8 bg-background p-8 rounded-3xl border border-border shadow-sm">
                <div className="space-y-3">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">{t.n001}</h2>
                    <div className="w-16 h-1 bg-primary/30 rounded-full"></div>
                </div>
                <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/95 font-light">
                    {t.q002}
                </p>
            </section>

            <section id="nextPage" className="py-20 sm:py-15 border-t border-border mt-6 container mx-auto">
                <div className="text-center pt-3">
                    <Link 
                        href="/2uk/catalog6" 
                        className="inline-block bg-primary text-background font-bold py-3 px-10 rounded-full hover:opacity-90 transition-all duration-300 transform hover:translate-x-1"
                    >
                        {t.linkCatalog}
                    </Link>
                </div>
            </section>

        </div>
    );
}