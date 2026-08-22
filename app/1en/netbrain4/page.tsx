import React from "react";
import Image from "next/image";
import Link from "next/link";
import messagesUk from '../../../messages/en.json';

const t = messagesUk.Netbrain;

export default function Page() {
    return (
        <div className="space-y-16 md:space-y-24">
            <section id="main" className="text-center pt-8 pb-4 space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary whitespace-pre-wrap leading-tight">
                    {t.title}
                </h1>
                <p className="text-lg md:text-xl text-center leading-relaxed text-foreground/90 font-light max-w-4xl mx-auto">
                    {t.t1}
                </p>
                <div className="relative w-full h-96 sm:h-[30rem] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                                                                        <Image 
                                                                            src="/images/hub.png" 
                                                                            alt="concept hub" 
                                                                            fill 
                                                                            style={{ objectFit: 'contain' }} 
                                                                            className="p-4 transition-transform duration-500 group-hover:scale-105" 
                                                                        />
                                                                    </div>
            </section>

            <section id="ch1" className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
                    {t.n1}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 transform group hover:scale-[1.02] hover:border-primary hover:shadow-lg hover:bg-foreground/10">
                    
                    <div className="relative w-full h-96 sm:h-[30rem] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                                            <Image 
                                                src="/5-images/Hub.png" 
                                                alt="hub architecture" 
                                                fill 
                                                style={{ objectFit: 'contain' }} 
                                                className="p-4 transition-transform duration-500 group-hover:scale-105" 
                                            />
                                        </div>

                    <div className="space-y-4">
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">
                            {t.t2}
                        </p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">
                            {t.t3}
                        </p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">
                            {t.t4}
                        </p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">
                            {t.t5}
                        </p>
                    </div>
                </div>
            </section>

            <section id="ch2" className="p-8 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 transform hover:scale-[1.01] hover:border-primary hover:bg-foreground/10 hover:shadow-lg">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n2}</h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">
                            {t.t6}
                        </p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">
                            {t.t7}
                        </p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">
                            {t.t8}
                        </p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">
                            {t.t9}
                        </p>
                    </div>
                </div>
            </section>

            <section id="ch3" className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
                    {t.n3}
                </h2>
                
                <div className="p-8 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 transform group hover:scale-[1.02] hover:border-primary hover:shadow-lg hover:bg-foreground/10">
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">
                            {t.t10}
                        </p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">
                            {t.t11}
                        </p>
                        
                        {/* Стилізація списку як у референсі */}
                        <ul className="list-disc list-inside text-left pl-4 space-y-3 text-foreground/90 font-light">
                            <li className="text-lg md:text-xl leading-relaxed">{t.t12}</li>
                            <li className="text-lg md:text-xl leading-relaxed">{t.t13}</li>
                            <li className="text-lg md:text-xl leading-relaxed">{t.t14}</li>
                            <li className="text-lg md:text-xl leading-relaxed">{t.t15}</li>
                            <li className="text-lg md:text-xl leading-relaxed">{t.t16}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="nextPage" className="py-20 sm:py-15 border-t border-border mt-6 container mx-auto">
                <div className="text-center pt-3">
                    <Link 
                        href="/1en/helpbeac5" 
                        className="inline-block bg-primary text-background font-bold py-3 px-10 rounded-full hover:opacity-90 transition-all duration-300 transform hover:translate-x-1"
                    >
                        {t.link}
                    </Link>
                </div>
            </section>
        </div>
    )
}