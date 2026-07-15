import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Наші підтримувані мови
const locales = ['uk', 'en'];

export default getRequestConfig(async ({ locale }) => {
  // Перевіряємо, чи існує така мова. Якщо хтось введе /fr - видасть 404
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    // Завантажуємо відповідний словник з папки messages
    messages: (await import(`./messages/${locale}.json`)).default
  };
});