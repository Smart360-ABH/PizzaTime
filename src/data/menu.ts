export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type Category = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const categories: Category[] = [
  {
    id: "pizza",
    title: "Пицца",
    items: [
      {
        id: "ovoshchnaya",
        name: "Овощная",
        description: "Свежие овощи, томатный соус, сыр",
        price: 450,
        image:
          "/images/pizza/ovoshchnaya.jpg",
      },
      {
        id: "cezar",
        name: "Цезарь",
        description: "Курица, салат Романо, пармезан, соус Цезарь",
        price: 500,
        image:
          "/images/pizza/cezar.jpg",
      },
      {
        id: "pepperoni",
        name: "Пепперони",
        description: "Пепперони, моцарелла, томатный соус",
        price: 400,
        image:
          "/images/pizza/pepperoni.jpg",
      },
      {
        id: "myasnaya",
        name: "Мясная",
        description: "Ассорти мясных топпингов, сыр, соус",
        price: 480,
        image:
          "/images/pizza/myasnaya.jpg",
      },
      {
        id: "assorti",
        name: "Ассорти",
        description: "Сборная пицца с разными вкусами",
        price: 500,
        image:
          "/images/pizza/assorti.jpg",
      },
      {
        id: "mexican",
        name: "Мексиканская",
        description: "Острый перец, кукуруза, соус сальса, сыр",
        price: 500,
        image:
          "/images/pizza/assorti.jpg",
      },
      {
        id: "four-cheese",
        name: "Четыре сыра",
        description: "Моцарелла, дорблю, пармезан, чеддер",
        price: 500,
        image:
          "/images/pizza/four-cheese.jpg",
      },
      {
        id: "pesto",
        name: "Песто",
        description: "Соус песто, моцарелла, томаты",
        price: 450,
        image:
          "/images/pizza/pesto.jpg",
      },
      {
        id: "gorodskaya",
        name: "Городская",
        description: "Классическое городское сочетание",
        price: 500,
        image:
          "/images/pizza/gorodskaya.jpg",
      },
      {
        id: "margherita",
        name: "Маргарита",
        description: "Томатный соус, моцарелла, базилик",
        price: 400,
        image:
          "/images/pizza/margherita.jpg",
      },
      {
        id: "carbonara",
        name: "Карбонара",
        description: "Сливочный соус, бекон, пармезан, яйцо",
        price: 450,
        image:
          "/images/pizza/carbonara.jpg",
      },
      {
        id: "time",
        name: "Тайм",
        description: "Фирменная пицца Pizza Time",
        price: 450,
        image:
          "/images/pizza/time.jpg",
      },
    ],
  },
  {
    id: "burgers",
    title: "Бургеры",
    items: [
      {
        id: "egg-burger",
        name: "Эгг-бургер",
        description: "С сочной котлетой и яйцом",
        price: 350,
        image:
          "/images/burgers/egg-burger.jpg",
      },
      {
        id: "corporate-burger",
        name: "Корпоратив бургер",
        description: "Большой бургер с фирменным соусом",
        price: 400,
        image:
          "/images/burgers/corporate-burger.jpg",
      },
      {
        id: "chicken-burger",
        name: "Чикен бургер",
        description: "Хрустящая курица, салат, соус",
        price: 350,
        image:
          "/images/burgers/chicken-burger.jpg",
      },
      {
        id: "cheeseburger",
        name: "Чизбургер",
        description: "Говяжья котлета, сыр чеддер",
        price: 300,
        image:
          "/images/burgers/cheeseburger.jpg",
      },
      {
        id: "beefburger",
        name: "Бифбургер",
        description: "Двойная говяжья котлета, соус",
        price: 350,
        image:
          "/images/burgers/beefburger.jpg",
      },
    ],
  },
  {
    id: "khachapuri",
    title: "Хачапуры",
    items: [
      {
        id: "classic-khachapuri",
        name: "Обычный",
        description: "Классический хачапури с сыром",
        price: 400,
        image:
          "/images/khachapuri-round.jpg",
      },
      {
        id: "boat-khachapuri",
        name: "Лодочка",
        description: "Аджарский хачапури-лодочка",
        price: 300,
        image:
          "/images/khachapuri-boat-egg.jpg",
      },
      {
        id: "grilled-khachapuri",
        name: "На мангале",
        description: "Хачапури, приготовленный на мангале",
        price: 450,
        image:
          "/images/khachapuri-round.jpg",
      },
    ],
  },
  {
    id: "souvlaki",
    title: "Сувлаки",
    items: [
      {
        id: "open-souvlaki",
        name: "Открытый",
        description: "Подача на тарелке с гарниром",
        price: 350,
        image:
          "/images/souvlaki/classic-souvlaki.jpg",
      },
      {
        id: "classic-souvlaki",
        name: "Обычный",
        description: "Классический сувлаки в пите",
        price: 350,
        image:
          "/images/souvlaki/classic-souvlaki.jpg",
      },
      {
        id: "lavash-souvlaki",
        name: "В лаваше",
        description: "Сувлаки, завёрнутый в лаваш",
        price: 300,
        image:
          "/images/souvlaki/lavash-souvlaki.jpg",
      },
    ],
  },
  {
    id: "shawarma",
    title: "Шаурма",
    items: [
      {
        id: "shawarma-regular",
        name: "Обычная",
        description: "Классическая шаурма",
        price: 300,
        image:
          "/images/shawarma/shawarma-regular.jpg",
      },
      {
        id: "shawarma-fries",
        name: "С картошкой",
        description: "Шаурма с картофелем фри внутри",
        price: 350,
        image:
          "/images/shawarma/shawarma-fries.jpg",
      },
    ],
  },
  {
    id: "snacks",
    title: "Закуски",
    items: [
      {
        id: "fries",
        name: "Картошка фри",
        description: "Классические хрустящие фри",
        price: 200,
        image:
          "/images/snacks/fries.jpg",
      },
      {
        id: "country-potatoes",
        name: "Картошка по-деревенски",
        description: "Запечённые дольки картофеля",
        price: 200,
        image:
          "/images/snacks/country-potatoes.jpg",
      },
      {
        id: "nuggets",
        name: "Наггетсы (10 шт)",
        description: "Куриные наггетсы, 10 штук",
        price: 250,
        image:
          "/images/snacks/nuggets.jpg",
      },
      {
        id: "hot-dog",
        name: "Хот-дог",
        description: "Классический хот-дог",
        price: 250,
        image:
          "/images/snacks/hot-dog.jpg",
      },
      {
        id: "twister",
        name: "Твистер",
        description: "Ролл в лаваше с курицей",
        price: 250,
        image:
          "/images/snacks/twister.jpg",
      },
    ],
  },
];
