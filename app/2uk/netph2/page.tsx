import React from "react";
import Link from "next/link";
import messages from '../../../messages/uk.json';

const t = messages.Netph;

export default function Page() {

    return (
        <>
            <section id="main" className="text-center py-12">
                <h1 className="text-5xl font-bold text-center">{t.title}</h1>
            </section>

            <section id="ch1" className="text-center py-12">
                <p className="text-lg text-center">{t.t1}</p>
                <p className="text-lg text-center">{t.t2}</p>
            </section>

            <section id="ch2" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center">{t.n1}</h2>
                <p className="text-lg text-center">{t.t3}</p>
                <p className="text-lg text-center">{t.t4}</p>
                <p className="text-lg text-center">{t.t5}</p>
                <p className="text-lg text-center">{t.t6}</p>
            </section>

            <section id="ch5" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center">{t.n2}</h2>
                <p className="text-lg text-center">{t.t7}</p>
                <p className="text-lg text-center">{t.t8}</p>
                <p className="text-lg text-center">{t.t9}</p>
                <ul className="list-disc list-inside text-left">
                    <li className="text-lg text-left">{t.t10}</li>
                    <li className="text-lg text-left">{t.t11}</li>
                    <li className="text-lg text-left">{t.t12}</li>
                </ul>
            </section>

            <section id="ch6" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center">{t.n3}</h2>
                <p className="text-lg text-center">{t.t13}</p>
                <ul className="list-disc list-inside text-left">
                    <li className="text-lg text-left">{t.t14}</li>
                    <li className="text-lg text-left">{t.t15}</li>
                    <li className="text-lg text-left">{t.t16}</li>
                    <li className="text-lg text-left">{t.t17}</li>
                    <li className="text-lg text-left">{t.t18}</li>
                    <li className="text-lg text-left">{t.t19}</li>
                </ul>
            </section>

            <section id="ch7" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center">{t.n4}</h2>
                <p className="text-lg text-center">{t.t20}</p>
                <p className="text-lg text-center">{t.t21}</p>
                <p className="text-lg text-center">{t.t22}</p>
            </section>

            <section id="nextPage" className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto text-center py-12"></section>
            
        </>
            )
}