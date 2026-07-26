import React from "react";
import Link from "next/link";
import messages from '../../../messages/uk.json';

const t = messages.Bascon;

export default function Page() {
    return (
        <>
            <section id="main0" className="text-center py-12">
                <h1 className="text-5xl font-bold text-center text-primary">{t.title}</h1>
            </section>

            <section id="main" className="text-center py-12">
                <p className="text-lg text-center">{t.t1}</p>
            </section>

            <section id="ch1" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n1}</h2>
                <p className="text-lg text-center">{t.t2}</p>
            </section>

            <section id="ch2" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n2}</h2>
                <p className="text-lg text-center">{t.t3}</p>
            </section>

            <section id="ch3" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n3}</h2>
                <p className="text-lg text-center">{t.t4}</p>
                <ul className="list-disc list-inside text-left">
                    <li className="text-lg text-left">{t.t40}</li>
                    <li className="text-lg text-left">{t.t41}</li>
                    <li className="text-lg text-left">{t.t42}</li>
                </ul>
            </section>

            <section id="ch4" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n4}</h2>
                <p className="text-lg text-center">{t.t5}</p>
            </section>

            <section id="ch5" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n5}</h2>
                <p className="text-lg text-center">{t.t6}</p>
            </section>

            <section id="ch6" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n6}</h2>
                <p className="text-lg text-center">{t.t7}</p>
            </section>

            <section id="ch7" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n7}</h2>
                <p className="text-lg text-center">{t.t8}</p>
                <ul className="list-disc list-inside text-left">
                    <li className="text-lg text-left">{t.t9}</li>
                    <li className="text-lg text-left">{t.t10}</li>
                    <li className="text-lg text-left">{t.t11}</li>
                    <li className="text-lg text-left">{t.t12}</li>
                    <ul className="list-disc list-inside text-left">
                        <li className="text-lg text-left">{t.t13}</li>
                        <li className="text-lg text-left">{t.t14}</li>
                        <li className="text-lg text-left">{t.t15}</li>
                    </ul>
                </ul>
            </section>

            <section id="ch8" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n8}</h2>
                <p className="text-lg text-center">{t.t19}</p>
                <ul className="list-disc list-inside text-left">
                    <li className="text-lg text-left">{t.t20}</li>
                    <li className="text-lg text-left">{t.t21}</li>
                    <li className="text-lg text-left">{t.t22}</li>
                    <li className="text-lg text-left">{t.t23}</li>
                    <li className="text-lg text-left">{t.t24}</li>
                </ul>
            </section>

            <section id="ch9" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n9}</h2>
                <p className="text-lg text-center">{t.t25}</p>
            </section>

            <section id="ch10" className="text-center py-12"></section>
        </>
    )
 }