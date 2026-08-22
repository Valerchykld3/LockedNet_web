import React from "react";
import Image from "next/image";
import Link from "next/link";
import messagesUk from '../../../messages/uk.json';

const t = messagesUk.Antibl;

export default function Page() {
    return (
        <div className="space-y-16 md:space-y-24 max-w-7xl mx-auto px-4">
            <section id="main" className="text-center pt-8 pb-4 space-y-6 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary whitespace-pre-wrap leading-tight">
                    {t.title}
                </h1>
                <p className="text-lg md:text-xl text-center leading-relaxed text-foreground/90 font-light">
                    {t.t1}
                </p>
            </section>

            <section id="ch1" className="space-y-12">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">{t.n1}</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">{t.t2}</p>
                </div>
                
                <div className="relative w-full h-96 sm:h-[30rem] rounded-2xl overflow-hidden group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 border border-neutral-800 bg-neutral-900 p-4">
                    <Image 
                        src="/8-images/antibl.jpg" 
                        alt="antiblackout interface" 
                        fill 
                        style={{ objectFit: 'contain' }} 
                        className="p-6 transition-transform duration-700 group-hover:scale-105 group-hover:blur-[1px] group-hover:contrast-110" 
                    />
                </div>
            </section>

            <section id="ch2" className="space-y-12">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">{t.t3}</p>
                    <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">{t.t4}</p>
                </div>

                <ul className="list-none list-inside text-left pl-0 space-y-6 text-foreground/90 font-light max-w-3xl mx-auto">
                    <li className="flex items-start bg-muted/20 p-6 rounded-xl group hover:bg-muted/40 transition-colors border border-muted-foreground/10 hover:border-muted-foreground/20">
                        <div className="w-5 h-5 flex-shrink-0 bg-primary rounded mr-4 mt-1"></div>
                        <span className="text-xl leading-relaxed">{t.q1}</span>
                    </li>
                    <li className="flex items-start bg-muted/20 p-6 rounded-xl group hover:bg-muted/40 transition-colors border border-muted-foreground/10 hover:border-muted-foreground/20">
                        <div className="w-5 h-5 flex-shrink-0 bg-primary rounded mr-4 mt-1"></div>
                        <span className="text-xl leading-relaxed">{t.q2}</span>
                    </li>
                    <li className="flex items-start bg-muted/20 p-6 rounded-xl group hover:bg-muted/40 transition-colors border border-muted-foreground/10 hover:border-muted-foreground/20">
                        <div className="w-5 h-5 flex-shrink-0 bg-primary rounded mr-4 mt-1"></div>
                        <span className="text-xl leading-relaxed">{t.q3}</span>
                    </li>
                </ul>
                <p className="text-xl md:text-2xl text-center leading-relaxed text-foreground/90 font-light max-w-3xl mx-auto">{t.t5}</p>
            </section>

            <section id="nextPage" className="py-20 sm:py-15 border-t border-border mt-6 container mx-auto">
                <div className="text-center pt-3">
                    <Link 
                        href="/2uk" 
                        className="inline-block bg-primary text-background font-bold py-3 px-10 rounded-full hover:opacity-90 transition-all duration-300 transform hover:translate-x-1"
                    >
                        {t.link}
                    </Link>
                </div>
            </section>
        </div>
    );
 }