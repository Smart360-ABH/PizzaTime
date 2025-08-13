import { useState } from "react";
import { categories } from "@/data/menu";
import { PizzaSidebar } from "@/components/PizzaSidebar";
import { ProductPanel } from "@/components/ProductPanel";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [current, setCurrent] = useState(0);
  const category = categories[current];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, hsl(var(--background) / 0.6), hsl(var(--background) / 0.9)), url('https://images.unsplash.com/photo-1548365328-9f547fb095de?q=80&w=1600&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="container py-8">
        <header className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Pizza Time — Меню</h1>
            <p className="text-muted-foreground mt-2">Свежая пицца, закуски и напитки. Доставим быстро!</p>
          </div>
          <div className="shrink-0">
            <Button asChild size="lg">
              <a
                href="https://wa.me/79407442255"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Заказать доставку в WhatsApp"
              >
                Заказать доставку
              </a>
            </Button>
          </div>
        </header>

        <section className="flex flex-col md:flex-row gap-4">
          <PizzaSidebar categories={categories} currentIndex={current} onChangeIndex={setCurrent} />
          <ProductPanel category={category} />
        </section>

        <SiteFooter />
      </main>
    </div>
  );
};

export default Index;
