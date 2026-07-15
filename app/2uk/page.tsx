import React from "react";
import Link from "next/link";
import messages from '../../messages/uk.json'; // Шлях тепер правильний

const t = messages.HomePage;

export default function Page() {

  return (
    <>
      <section id="main" className="text-center py-12">
        <h1 className="text-5xl font-bold text-center">
          {t.title}
        </h1>
      </section>

      <section id="blackouts" className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto text-center py-12" >
        <h2 className="text-4xl font-bold">{t.n1}</h2>
        <p className="text-lg">{t.t1}</p>
      </section>

      <section id="baseinfo" className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto text-center py-12" >
        <p className="text-lg">{t.t2}</p>
        <p className="text-lg">{t.t3}</p>
      </section>

      <section id="advices" className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto text-center py-12" >
        <h2 className="text-4xl font-bold">{t.n2}</h2>
        <p className="text-lg">{t.t4}</p>
      </section>

      <section id="nextPage" className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto text-center py-12" >
        <p className="text-lg">{t.t5}</p>
        <p className="text-lg">{t.t6}</p>
        <Link href="/2uk/archnet1" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition-colors font-semibold">
          {t.archLink}
        </Link>
      </section>

    </>
  );
}
