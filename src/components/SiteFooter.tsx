import React from "react";

export const SiteFooter = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Pizza Time",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Эшба 185",
      addressLocality: "Сухум",
    },
    telephone: "+79407442255",
    openingHours: "Mo-Su 09:00-00:00",
    sameAs: [
      "https://wa.me/79407442255",
      "https://www.instagram.com/pizza_time_sukhum",
    ],
    servesCuisine: ["Pizza", "Burgers", "Georgian", "Street Food"],
    areaServed: "Сухум",
  };

  return (
    <footer className="mt-10 border-t pt-6" aria-label="Контакты Pizza Time">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <section>
          <h2 className="text-base font-semibold">Контакты</h2>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>
              Телефон: <a href="tel:+79407442255" className="underline underline-offset-4">+7 940 744 22 55</a>
            </li>
            <li>
              WhatsApp: <a href="https://wa.me/79407442255" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">+7 940 744 22 55</a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-base font-semibold">Адрес</h2>
          <p className="mt-2 text-sm text-muted-foreground">Эшба 185</p>
          <p className="text-sm text-muted-foreground">Доставка по Сухуму</p>
        </section>
        <section>
          <h2 className="text-base font-semibold">Режим работы</h2>
          <p className="mt-2 text-sm text-muted-foreground">Работаем с 09:00 до 00:00</p>
        </section>
        <section>
          <h2 className="text-base font-semibold">Соцсети</h2>
          <a
            href="https://www.instagram.com/pizza_time_sukhum"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm underline underline-offset-4"
            aria-label="Instagram Pizza Time"
          >
            Instagram
          </a>
        </section>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Pizza Time. Все права защищены.</p>
    </footer>
  );
};

export default SiteFooter;
