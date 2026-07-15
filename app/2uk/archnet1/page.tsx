import React from "react";
import Link from "next/link";
import messages from '../../../messages/uk.json';

const t = messages.Archnet;

export default function Page() {
    return (
        <>
            <section id="main" className="text-center py-12">
                <h1 className="text-5xl font-bold text-center">{t.title}</h1>
            </section>
            
            <section id="ch1" className="text-center py-12">
                <p className="text-lg">{t.t1}</p>
            </section>

            <section id="ch2" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center">{t.n1}</h2>
                <p className="text-lg">{t.t2}</p>
                <p className="text-lg">{t.td2}</p>
            </section>

            <section id="ch3" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center">{t.n2}</h2>
                <p className="text-lg">{t.t3}</p>
                <p className="text-lg">{t.t4}</p>
                <ul className="list-disc list-inside text-lg">
                    <li>{t.t5}</li>
                    <li>{t.t6}</li>
                </ul>
            </section>

            <section id="ch4" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center">{t.n3}</h2>
                <p className="text-lg">{t.t7}</p>
                <p className="text-lg">{t.t8}</p>
            </section>

            <section id="ch5" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center">{t.n4}</h2>
                <ul className="list-disc list-inside text-lg">
                    <li>{t.t9}</li>
                    <li>{t.t10}</li>
                </ul>
            </section>

            <section id="ch6" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center">{t.n5}</h2>
                <ul className="list-disc list-inside text-lg">
                    <li>{t.t11}</li>
                    <li>{t.t12}</li>
                    <li>{t.t13}</li>
                </ul>
            </section>

            <section id="nextPage" className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto text-center py-12"></section>
        </>
    );
}