import React from "react";
import Link from "next/link";
import messages from '../../../messages/en.json';

const t = messages.Netph;

export default function Page() {

    return (
        <>
            <section id="main" className="text-center py-12">
                <h1 className="text-5xl font-bold text-center text-primary">{t.title}</h1>
            </section>

            <section id="ch1" className="text-center py-12">
                <p className="text-lg text-center">{t.t1}</p>
                <p className="text-lg text-center">{t.t2}</p>
            </section>

            <section id="ch02" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n0}</h2>
                <p className="text-lg text-center">{t.t01}</p>
                <p className="text-lg text-center">{t.t02}</p>
                <p className="text-lg text-center">{t.t03}</p>
                <p className="text-lg text-center">{t.t04}</p>
                <h2 className="text-4xl font-bold text-center text-primary">{t.n01}</h2>
                <p className="text-lg text-center">{t.t05}</p>
            </section>

            <section id="ch2" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n1}</h2>
                <p className="text-lg text-center">{t.t3}</p>
                <p className="text-lg text-center">{t.t4}</p>
                <p className="text-lg text-center">{t.t6}</p>
            </section>

            <section id="ch5" className="text-center py-12">
                <h2 className="text-4xl font-bold text-center text-primary">{t.n2}</h2>
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
                <h2 className="text-4xl font-bold text-center text-primary">{t.n3}</h2>
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
                <h2 className="text-4xl font-bold text-center text-primary">{t.n4}</h2>
                <p className="text-lg text-center">{t.t20}</p>
                <p className="text-lg text-center">{t.t21}</p>
                <p className="text-lg text-center">{t.t22}</p>
            </section>

            <section id="nextPage" className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto text-center py-12"></section>
            
        </>
            )
}