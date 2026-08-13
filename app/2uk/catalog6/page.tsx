import React from "react";
import Image from "next/image";
import Link from "next/link";
import messagesUk from '../../../messages/uk.json';

const t = messagesUk.Catalog;

// Допоміжний компонент для картки товару, щоб уникнути дублювання коду
interface ProductCardProps {
    id: string;
    title: string;
    imgSrc: string;
    imgAlt: string;
    href: string; // Шлях, куди веде клік на блок
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, imgSrc, imgAlt, href }) => {
    return (
        <Link href={href} className="group block h-full">
            <section 
                id={id} 
                className="bg-background/40 p-6 md:p-8 rounded-3xl border border-border h-full flex flex-col justify-between
                           transition-all duration-300 ease-in-out shadow-md
                           hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6 group-hover:text-primary transition-colors">
                    {title}
                </h2>
                
                {/* Контейнер для зображення з фіксованою висотою для коректної роботи fill */}
                <div className="relative h-60 md:h-72 w-full mt-auto">
                    <Image 
                        src={imgSrc} 
                        alt={imgAlt} 
                        fill 
                        sizes="(max-w-768px) 100vw, 50vw" // Оптимізація завантаження
                        style={{ objectFit: 'contain' }} 
                        className="p-2 transition-transform duration-500 ease-out group-hover:scale-105" 
                    />
                </div>
            </section>
        </Link>
    );
};

export default function Page() { 
    return (
        <div className="container mx-auto px-4 pb-16 space-y-12 md:space-y-16">
            
            {/* Заголовок сторінки - залишаємо як є, він добрий */}
            <section id="main" className="text-center pt-12 pb-4 space-y-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary whitespace-pre-wrap leading-tight">
                    {t.title}
                </h1>
            </section>

            {/* Основна сітка каталогу (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
                
                {/* ПАРА 1: РЯД 1 */}
                <ProductCard 
                    id="meteoDevice"
                    title={t.t1}
                    imgSrc="/7-images/meteoDevice.png"
                    imgAlt="meteoDevice"
                    href="/2uk/catalog6/mD/page.tsx"
                />

                <ProductCard 
                    id="UPSdevice"
                    title={t.t2}
                    imgSrc="/7-images/UPSdevice.png"
                    imgAlt="UPSdevice"
                    href="/2uk/catalog6/Ud/page.tsx"
                />

                {/* ПАРА 2: РЯД 2 */}
                <ProductCard 
                    id="energyHub"
                    title={t.t3}
                    imgSrc="/7-images/energyHub.png"
                    imgAlt="energyHub"
                    href="/2uk/catalog6/eH/page.tsx"
                />

                {/* Блок Coming soon - неклікабельний і з іншим стилем */}
                <section id="Coming soon" 
                    className="bg-background/20 p-8 rounded-3xl border-2 border-dashed border-border/50 h-full flex items-center justify-center min-h-[300px]"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground text-center opacity-70">
                        Coming soon
                    </h2>
                </section>
            </div>
            

            <section id="nextPage" className="py-20 sm:py-15 border-t border-border mt-6 container mx-auto">
                <div className="text-center pt-3">
                    <Link 
                        href="/2uk/works" 
                        className="inline-block bg-primary text-background font-bold py-3 px-10 rounded-full hover:opacity-90 transition-all duration-300 transform hover:translate-x-1"
                    >
                        {t.link}
                    </Link>
                </div>
            </section>
        </div>
    );
}