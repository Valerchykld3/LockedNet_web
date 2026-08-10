import React from "react";
import Image from "next/image";
import Link from "next/link";
import messagesUk from '../../../messages/uk.json';

const t = messagesUk.Works;

export default function Page() {
    return (
        <div className="space-y-16 md:space-y-24">
            <section id="main" className="text-center pt-8 pb-4 space-y-6 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary whitespace-pre-wrap leading-tight">{t.title}</h1>
                <p className="text-lg md:text-xl text-center leading-relaxed text-foreground/90 font-light">{t.t1}</p>
                <div className="relative w-full h-96 sm:h-[30rem] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                                    <Image 
                                        src="/images/logo.png" 
                                        alt="Logo" 
                                        fill 
                                        style={{ objectFit: 'contain' }} 
                                        className="p-4 transition-transform duration-500 group-hover:scale-105" 
                                    />
                </div>
                </section>
        </div>
    );
}