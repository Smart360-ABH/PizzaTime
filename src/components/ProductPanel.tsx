import { Category } from "@/data/menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductPanelProps {
  category: Category;
}

export const ProductPanel = ({ category }: ProductPanelProps) => {
  return (
    <section
      aria-live="polite"
      className="flex-1 bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/70 rounded-lg border p-4 overflow-hidden animate-slide-in-right"
    >
      <header className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight">{category.title}</h2>
        <p className="text-sm text-muted-foreground">Выберите любимые позиции из раздела «{category.title}»</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.items.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardHeader className="p-0">
              <img
                src={item.image}
                alt={`${item.name} — Pizza Time`}
                loading="lazy"
                className="h-40 w-full object-cover"
              />
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="font-semibold">{item.price} ₽</span>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">В корзину</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
