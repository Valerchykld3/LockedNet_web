import React from "react";
import Image from "next/image";
import Link from "next/link";
import messagesUk from '../../../../messages/uk.json';

const t = messagesUk.Catalog;

export default function Page() {
    return (
        <div className="space-y-16 md:space-y-24">
            <section id="main" className="text-center pt-8 pb-4 space-y-6 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary whitespace-pre-wrap leading-tight">{t.eH}</h1>
            </section>

        </div>

    );
 }