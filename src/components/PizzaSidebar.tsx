import { ChevronDown, ChevronUp, Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/data/menu";

interface PizzaSidebarProps {
  categories: Category[];
  currentIndex: number;
  onChangeIndex: (index: number) => void;
}

export const PizzaSidebar = ({ categories, currentIndex, onChangeIndex }: PizzaSidebarProps) => {
  const prev = () => onChangeIndex((currentIndex - 1 + categories.length) % categories.length);
  const next = () => onChangeIndex((currentIndex + 1) % categories.length);

  return (
    <aside
      aria-label="Меню категорий"
      className="flex flex-col gap-4 bg-sidebar text-sidebar-foreground w-64 p-4 rounded-lg border border-sidebar-border/60 shadow-lg"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_0_3px_hsl(var(--background))]">
          <Pizza className="h-5 w-5 text-sidebar-primary-foreground" />
        </div>
        <div className="leading-tight">
          <p className="text-sm text-muted-foreground">Пиццерия</p>
          <p className="font-semibold">Pizza Time</p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-secondary rounded-md p-2">
        <Button size="icon" variant="secondary" aria-label="Предыдущая категория" onClick={prev}>
          <ChevronUp className="h-4 w-4" />
        </Button>
        <span className="text-sm text-muted-foreground">Категории</span>
        <Button size="icon" variant="secondary" aria-label="Следующая категория" onClick={next}>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <nav className="flex-1 overflow-auto">
        <ul className="space-y-1">
          {categories.map((c, idx) => (
            <li key={c.id}>
              <button
                onClick={() => onChangeIndex(idx)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md transition-colors",
                  idx === currentIndex
                    ? "bg-sidebar-accent text-foreground"
                    : "hover:bg-sidebar-accent/70 text-muted-foreground"
                )}
                aria-current={idx === currentIndex ? "page" : undefined}
              >
                {c.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <p className="text-xs text-muted-foreground">
        Стрелки пролистывают категории. Нажмите на категорию, чтобы открыть товары.
      </p>
    </aside>
  );
};
