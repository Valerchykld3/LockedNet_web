import React from "react";
import Image from "next/image";
import Link from "next/link";
import messagesUk from '../../../messages/en.json';

const t = messagesUk.Catalog;

export default function Page() { 
    return (
        <div className="space-y-16 md:space-y-24">
            <section id="main" className="text-center pt-8 pb-4 space-y-6 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary whitespace-pre-wrap leading-tight">
                    {t.title}
                </h1>
            </section>

            


            <section id="nextPage" className="py-20 sm:py-15 border-t border-border mt-6 container mx-auto">
                <div className="text-center pt-3">
                    <Link 
                        href="/1en/antibl7" 
                        className="inline-block bg-primary text-background font-bold py-3 px-10 rounded-full hover:opacity-90 transition-all duration-300 transform hover:translate-x-1"
                    >
                        {t.link}
                    </Link>
                </div>
            </section>

        </div>
    );
}