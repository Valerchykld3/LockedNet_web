import React from "react";
import Image from "next/image";
import Link from "next/link";
import messagesUk from '../../../messages/en.json';

const t = messagesUk.Netph;

export default function Page() {

    return (
        <div className="space-y-10 md:space-y-16 pb-16">
            <section id="main" className="text-center pt-8 pb-4">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary whitespace-pre-wrap leading-tight">{t.title}</h1>
            </section>

            <section id="ch1" className="container mx-auto p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-4 px-6 md:px-0">
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t1}</p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t2}</p>
                    </div>
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/3-images/mc-rm.jpg"
                            alt="microcontoller + radiomodule"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            <section id="ch02" className="space-y-10 container mx-auto">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n0}</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">{t.t01}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="p-6 bg-foreground/5 rounded-2xl border border-border transition-all duration-300 transform hover:scale-105 hover:border-primary hover:bg-foreground/10 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)]">
                        <h3 className="font-semibold text-xl mb-2 text-primary/90">Фаза сну (4.85с)</h3>
                        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">{t.t02}</p>
                    </div>
                    <div className="p-6 bg-foreground/5 rounded-2xl border border-border transition-all duration-300 transform hover:scale-105 hover:border-primary hover:bg-foreground/10 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)]">
                        <h3 className="font-semibold text-xl mb-2 text-primary/90">Активна фаза (0.15с)</h3>
                        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">{t.t03}</p>
                    </div>
                </div>
                <p className="text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed text-foreground/90 font-light">{t.t04}</p>
                <div className="max-w-4xl mx-auto pt-6 border-t border-border/50">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">{t.n01}</h3>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t05}</p>
                </div>
            </section>

            <section id="ch2" className="space-y-12 container mx-auto px-6 md:px-0">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">{t.n1}</h2>
                <div id="q1" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                    <div className="space-y-4 font-light">
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90">{t.t3}</p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90">{t.t30}</p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90">{t.t31}</p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90">{t.t32}</p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90">{t.t33}</p>
                    </div>
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/3-images/accumulators.jpg"
                            alt="Живлення від акумуляторів 18650"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div id="q1.5" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/3-images/tp-ht.jpg"
                            alt="Модулі заряду та стабілізації"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t34}</p>
                </div>

                <div id="q2" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t4}</p>
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/3-images/resistance_divider.png"
                            alt="Дільник напруги для моніторингу заряду"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div id="q3" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                    <div className="relative w-full h-72 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/3-images/mosfets-res.jpg"
                            alt="MOSFET транзистори та резистори"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t6}</p>
                </div>
            </section>







            <section id="ch3" className="space-y-12 container mx-auto">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n2}</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">{t.t7}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                    <div className="space-y-3">
                        <h3 className="font-semibold text-2xl text-primary/90">SPI</h3>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t8}</p>
                    </div>
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/3-images/antena-ssd.jpg"
                            alt="spi modules"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div className="p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 transform hover:scale-105 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                    <h3 className="font-semibold text-2xl text-primary/90 mb-3">I²C</h3>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t9}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start text-center">
                    <div className="p-6 bg-foreground/5 rounded-2xl border border-border space-y-4 transition-all duration-300 transform hover:scale-105 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] hover:bg-foreground/10 group">
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t10}</p>
                        <div className="relative w-full h-64 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                            src="/3-images/scd40.png"
                            alt="SCD40"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                        </div>
                    </div>
                    <div className="p-6 bg-foreground/5 rounded-2xl border border-border space-y-4 transition-all duration-300 transform hover:scale-105 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] hover:bg-foreground/10 group">
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t11}</p>
                        <div className="relative w-full h-64 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                            src="/3-images/oled.jpg"
                            alt="OLED"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                        </div>
                    </div>
                    <div className="p-6 bg-foreground/5 rounded-2xl border border-border space-y-4 transition-all duration-300 transform hover:scale-105 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] hover:bg-foreground/10 group">
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t12}</p>
                        <div className="relative w-full h-64 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                            src="/3-images/rtc.jpg"
                            alt="DS3231"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                        </div>
                    </div>
                </div>
            </section>





            <section id="ch4" className="space-y-12 container mx-auto">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n3}</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">{t.t13}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t14}</p>
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/3-images/zmpt101b.png"
                            alt="ZMPT101B"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/3-images/hlk-pm01.jpg"
                            alt="HLK-PM01"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t15}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t16}</p>
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/3-images/mt3608.jpg"
                            alt="MT3608"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/3-images/lm2596.jpg"
                            alt="LM2596"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t17}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:bg-foreground/10">
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t19}</p>
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/3-images/rele.jpg"
                            alt="rele"
                            fill 
                            style={{ objectFit: 'contain' }}
                            className="p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>






            <section id="ch5" className="space-y-12 container mx-auto">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n4}</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">{t.t20}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="p-6 bg-foreground/5 rounded-2xl border border-border space-y-3 transition-all duration-300 transform hover:scale-105 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] hover:bg-foreground/10">
                        <h3 className="font-semibold text-2xl text-primary/90">Справжня децентралізація</h3>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t21}</p>
                    </div>
                    <div className="p-6 bg-foreground/5 rounded-2xl border border-border space-y-3 transition-all duration-300 transform hover:scale-105 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] hover:bg-foreground/10">
                        <h3 className="font-semibold text-2xl text-primary/90">Енергоефективність</h3>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t22}</p>
                    </div>
                </div>
            </section>

            <section id="nextPage" className="py-20 sm:py-15 border-t border-border mt-6 container mx-auto">
                <div className="text-center pt-3">
                    <Link 
                        href="/1en/bascon3" 
                        className="inline-block bg-primary text-background font-bold py-3 px-10 rounded-full hover:opacity-90 transition-all duration-300 transform hover:translate-x-1"
                    >
                        {t.link}
                    </Link>
                </div>
            </section>
        </div>
    )
}