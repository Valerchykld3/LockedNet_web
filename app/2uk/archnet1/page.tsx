import React from "react";
import Image from "next/image";
import Link from "next/link";
import messagesUk from '../../../messages/uk.json';

const t = messagesUk.Archnet;

export default function Page() {
    return (
        <div className="space-y-6 md:space-y-14">
            {/* Головний заголовок */}
            <section id="main" className="text-center pt-8 pb-4">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary whitespace-pre-wrap leading-tight">{t.title}</h1>
            </section>

            {/* Вступний текст */}
            <section id="ch1" className="text-center max-w-4xl mx-auto">
                <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">{t.t1}</p>
            </section>

            {/* Мозок операцій: Головний Хаб */}
            <section id="ch2" className="space-y-8 pt-0 container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">{t.n1}</h2>
                {/* РІШЕННЯ: Секція грида перетворена на картку (p-6, bg, rounded, border, shadow). Контур зображення прибрано. Додано ефект на картку при наведенні. overflow-hidden. */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-8 bg-foreground/5 rounded-3xl border border-border transition-all duration-300 hover:bg-foreground/10 group hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)]">
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground font-light px-6 md:px-0">{t.t2}</p>
                    {/* Прибрали HARD border border-primary та shadow. rounding, overflow-hidden, bg-background/50 залишили */}
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-background/50">
                        <Image 
                            src="/images/hub.png" 
                            alt="Головний Хаб" 
                            fill 
                            style={{ objectFit: 'contain' }} 
                            // Анімація зображенняImage наближається при ховері на батьківську картку (group)
                            className="p-6 transition-all duration-300 group-hover:scale-105" 
                        />
                     </div>
                </div>
            </section>

            {/* Точки входу: Як керувати системою */}
            <section id="ch3" className="space-y-12 container mx-auto">
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n2}</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">{t.t3}</p>
                    <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">{t.t4}</p>
                </div>
                {/* Картка 1: Локальний ПК */}
                {/* Картка має hover ефекти. Зображення p-serv має transition hover:scale-105. */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl transition-all duration-300 hover:shadow-xl hover:bg-foreground/10 group border border-border hover:border-primary">
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground font-light px-4 md:px-6">{t.t5}</p>
                    {/* РІШЕННЯ: Прибрали border border-border/50. grounding, overflow, bg-background, transition hover:scale-105, duration-300. transform group-hover:scale-105. OBJECT-FIT CONTAIN. */}
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-background transition-all duration-300 transform group-hover:scale-105">
                        <Image src="/images/py-serv.png" alt="Python сервер" fill style={{ objectFit: 'contain' }} className="p-4 "/>
                    </div>
                </div>
                {/* Картка 2: Help-Брелок */}
                {/* Картка має hover ефекти. Зображення beacon має transition hover:scale-105. OBJECT-FIT CONTAIN для правильного масштабування. */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 bg-foreground/5 rounded-3xl transition-all duration-300 hover:shadow-xl hover:bg-foreground/10 group border border-border hover:border-primary">
                    {/* rounded. overflow-hidden. grounding. border-border group-hover:border-primary. md:grid-cols-2. items-center. justify-center. transition-all duração-300. transform hover:scale-105. OBJECT-FIT CONTAIN. */}
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-background/50 transition-all duration-300 transform hover:scale-105">
                        <Image src="/images/beacon.png" alt="Help-Брелок" fill style={{ objectFit: 'contain' }} className="p-4 transition-all duration-300 group-hover:scale-105"/>
                    </div>
                    <p className="text-lg md:text-xl text-left leading-relaxed text-foreground font-light px-4 md:px-6">{t.t6}</p>
                </div>
            </section>

            {/* Виконавчі модулі */}
            <section id="ch4" className="text-center space-y-4 max-w-4xl mx-auto container">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.n3}</h2>
                <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">{t.t7}</p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">{t.t8}</p>
            </section>

            {/* Аналітичні модулі (Сенсори) */}
            <section id="ch5" className="space-y-6 container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">{t.n4}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* РІШЕННЯ: Додано анімацію наближення та забарвлення при наведенні transition-all transform hover:scale-105 hover:border-primary hover:bg-foreground/10 hover:shadow-lg */}
                    <div className="p-6 border border-border rounded-2xl bg-background transition-all duration-300 transform hover:scale-105 hover:border-primary hover:bg-foreground/10 hover:shadow-lg border-opacity-50">
                        <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">{t.t9}</p>
                    </div>
                    {/* РІШЕННЯ: Додано анімацію наближення та забарвлення при наведенні. */}
                    <div className="p-6 border border-border rounded-2xl bg-background/50 transition-all duration-300 transform hover:scale-105 hover:border-primary hover:bg-foreground/10 hover:shadow-lg border-opacity-50">
                        <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">{t.t10}</p>
                    </div>
                </div>
            </section>

            {/* Модулі дії (Маніпулятори середовищем) */}
            <section id="ch6" className="space-y-6 container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">{t.n5}</h2>
                <div className="space-y-6">
                    {/* РІШЕННЯ: Додано анімацію наближення та забарвлення при наведенні transition-all transform hover:scale-105 hover:border-primary hover:bg-foreground/10 hover:shadow-lg */}
                    <div className="p-6 border border-border rounded-2xl bg-background/50 transition-all duration-300 transform hover:scale-105 hover:border-primary hover:bg-foreground/10 hover:shadow-lg border-opacity-50">
                        <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">{t.t11}</p>
                    </div>
                    {/* РІШЕННЯ: Додано анімацію наближення та забарвлення при наведенні. */}
                    <div className="p-6 border border-border rounded-2xl bg-background/50 transition-all duration-300 transform hover:scale-105 hover:border-primary hover:bg-foreground/10 hover:shadow-lg border-opacity-50">
                        <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">{t.t12}</p>
                    </div>
                </div>
            </section>

            <section id="nextPage" className="py-20 sm:py-15 border-t border-border mt-6 container mx-auto">
                <div className="text-center pt-3">
                    <Link 
                        href="/2uk/netph2" 
                        className="inline-block bg-primary text-background font-bold py-3 px-10 rounded-full hover:opacity-90 transition-all duration-300 transform hover:translate-x-1"
                    >
                        {t.link}
                    </Link>
                </div>
            </section>
        </div>
    );
}