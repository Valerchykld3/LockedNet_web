import React from "react";
import Image from "next/image";
import Link from "next/link";
import messagesUk from '../../../messages/uk.json';

const t = messagesUk.Bascon;

export default function Page() {
    return (
        <div className="space-y-16 md:space-y-24">
            {/* Головний заголовок */}
            <section id="main" className="text-center pt-8 pb-4 space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary whitespace-pre-wrap leading-tight">{t.title}</h1>
                <p className="text-lg md:text-xl text-center leading-relaxed text-foreground/90 font-light max-w-4xl mx-auto">{t.t1}</p>
            </section>

            <section id="ch1" className="space-y-8">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n1}</h2>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t2}</p>
                </div>
                {/* ОНОВЛЕНО: Додано transform, hover:scale, hover:shadow, змінено hover:border */}
                <div className="p-6 bg-foreground/5 rounded-2xl border border-border transition-all duration-300 transform hover:scale-[1.02] hover:border-primary hover:bg-foreground/10 hover:shadow-lg">
                    <p className="text-lg md:text-xl text-center leading-relaxed text-foreground/90 font-light font-mono tracking-tight">{t.t200}</p>
                </div>
            </section>

            {/* ОНОВЛЕНО: Додано transform, hover:scale, hover:shadow, змінено hover:border */}
            <section id="ch2" className="p-8 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 transform hover:scale-[1.01] hover:border-primary hover:bg-foreground/10 hover:shadow-lg">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n2}</h2>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t3}</p>
                </div>
            </section>

            <section id="ch3" className="space-y-8">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n3}</h2>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t4}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    {/* Тут анімація вже була */}
                    <div className="p-6 bg-foreground/5 rounded-2xl border border-border transition-all duration-300 transform hover:scale-105 hover:border-primary hover:bg-foreground/10 hover:shadow-lg">
                        <h3 className="font-semibold text-xl mb-2 text-primary/90">Front-end</h3>
                        <p className="text-lg leading-relaxed text-foreground/90 font-light">{t.t40}</p>
                    </div>
                    <div className="p-6 bg-foreground/5 rounded-2xl border border-border transition-all duration-300 transform hover:scale-105 hover:border-primary hover:bg-foreground/10 hover:shadow-lg">
                        <h3 className="font-semibold text-xl mb-2 text-primary/90">Back-end</h3>
                        <p className="text-lg leading-relaxed text-foreground/90 font-light">{t.t41}</p>
                    </div>
                    <div className="p-6 bg-foreground/5 rounded-2xl border border-border transition-all duration-300 transform hover:scale-105 hover:border-primary hover:bg-foreground/10 hover:shadow-lg">
                        <h3 className="font-semibold text-xl mb-2 text-primary/90">Зв'язок</h3>
                        <p className="text-lg leading-relaxed text-foreground/90 font-light">{t.t42}</p>
                    </div>
                </div>
            </section>

            {/* ОНОВЛЕНО: Додано transform, hover:scale, hover:shadow, змінено hover:border */}
            <section id="ch4" className="p-8 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 transform hover:scale-[1.01] hover:border-primary hover:bg-foreground/10 hover:shadow-lg">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n4}</h2>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t5}</p>
                </div>
            </section>

            <section id="ch5" className="space-y-12">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n5}</h2>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t6}</p>
                </div>
                {/* ОНОВЛЕНО: Додано transform, hover:scale (тінь і border вже були через group) */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 transform group hover:scale-[1.02] hover:border-primary hover:shadow-lg hover:bg-foreground/10">
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t600}</p>
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t601}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative w-full h-96 sm:h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image src="/4-images/login.jpg" alt="login" fill style={{ objectFit: 'contain' }} className="p-4 transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="relative w-full h-96 sm:h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image src="/4-images/menu.jpg" alt="menu" fill style={{ objectFit: 'contain' }} className="p-4 transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ОНОВЛЕНО: Додано transform, hover:scale, hover:shadow, змінено hover:border */}
            <section id="ch6" className="p-8 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 transform hover:scale-[1.01] hover:border-primary hover:bg-foreground/10 hover:shadow-lg">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n6}</h2>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t7}</p>
                </div>
            </section>

            <section id="ch7" className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">{t.n7}</h2>
                {/* ОНОВЛЕНО: Додано transform, hover:scale (тінь і border вже були через group) */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 transform group hover:scale-[1.02] hover:border-primary hover:shadow-lg hover:bg-foreground/10">
                    <div className="space-y-4">
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t8}</p>
                        <ul className="list-disc list-inside text-left pl-4 space-y-2">
                            <li className="text-lg">{t.t9}</li>
                            <li className="text-lg">{t.t10}</li>
                            <li className="text-lg">{t.t11}</li>
                            <li className="text-lg">{t.t12}
                                <ul className="list-['-_'] list-inside text-left pl-6 pt-2 space-y-1">
                                    <li className="text-lg">{t.t13}</li>
                                    <li className="text-lg">{t.t14}</li>
                                    <li className="text-lg">{t.t15}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="relative w-full h-[30rem] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image src="/4-images/devices.jpg" alt="devices" fill style={{ objectFit: 'contain' }} className="p-4 transition-transform duration-500 group-hover:scale-105" />
                    </div>
                </div>
            </section>

            <section id="ch8" className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">{t.n8}</h2>
                {/* ОНОВЛЕНО: Додано transform, hover:scale (тінь і border вже були через group) */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 transform group hover:scale-[1.02] hover:border-primary hover:shadow-lg hover:bg-foreground/10">
                    <div className="relative w-full h-[30rem] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] md:order-last">
                        <Image src="/4-images/hub.jpg" alt="hub" fill style={{ objectFit: 'contain' }} className="p-4 transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t19}</p>
                        <ul className="list-disc list-inside text-left pl-4 space-y-2">
                            <li className="text-lg">{t.t20}</li>
                            <li className="text-lg">{t.t21}</li>
                            <li className="text-lg">{t.t22}</li>
                            <li className="text-lg">{t.t23}</li>
                            <li className="text-lg">{t.t24}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="ch9" className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">{t.n9}</h2>
                {/* ОНОВЛЕНО: Додано transform, hover:scale (тінь і border вже були через group) */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 transform group hover:scale-[1.02] hover:border-primary hover:shadow-lg hover:bg-foreground/10">
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground/90 font-light">{t.t25}</p>
                    <div className="relative w-full h-[30rem] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image src="/4-images/log.jpg" alt="log" fill style={{ objectFit: 'contain' }} className="p-4 transition-transform duration-500 group-hover:scale-105" />
                    </div>
                </div>
            </section>

            <section id="nextPage" className="py-20 sm:py-15 border-t border-border mt-6 container mx-auto">
                <div className="text-center pt-3">
                    <Link 
                        href="/2uk/netbrain4" 
                        className="inline-block bg-primary text-background font-bold py-3 px-10 rounded-full hover:opacity-90 transition-all duration-300 transform hover:translate-x-1"
                    >
                        {t.link}
                    </Link>
                </div>
            </section>
        </div>
    )
 }