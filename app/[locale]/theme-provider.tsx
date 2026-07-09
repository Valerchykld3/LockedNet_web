"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Використовуємо React.ComponentProps для автоматичного визначення типів
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}