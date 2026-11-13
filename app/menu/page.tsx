import Link from 'next/link';

export const metadata = { 
  title: 'Menu | Shawarma Kareem',
  description: 'Explore our menu of authentic Turkish shawarma, juicy burgers, crispy chicken, and sides.'
};

const menuItems = [
  {
    category: "Shawarma",
    items: [
      { name: "Beef Shawarma", desc: "Authentic, hand-shaved beef marinated in traditional spices.", price: "20", img: "/images/photo-4.jpg" },
      { name: "Chicken Shawarma", desc: "Succulent, freshly roasted chicken wrap.", price: "20", img: "/images/photo-6.jpg" },
      { name: "Turkish Shawarma", desc: "Our signature Turkish-style shawarma.", price: "20", img: "/images/photo-7.jpg" }
    ]
  },
  {
    category: "Burgers",
    items: [
      { name: "Classic Burger", desc: "Juicy beef patty with fresh toppings.", price: "20", img: "/images/photo-8.jpg" }
    ]
  },
  {
    category: "Crispy",
    items: [
      { name: "Crispy Chicken", desc: "Golden, crunchy, and tender chicken.", price: "20", img: "/images/photo-3.jpg" }
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="bg-background min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3 block">Our Kitchen</span>
          <h1 className="text-4xl md:text-6xl font-bold text-ink font-heading mb-6">Our Kitchen Favorites</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Fresh ingredients, traditional recipes, and a passion for great food.
          </p>
        </div>

        <div className="space-y-20">
          {menuItems.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-ink font-heading mb-8 pb-4 border-b border-ink/5 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {cat.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, i) => (
                  <div key={i} className="bg-surface rounded-3xl overflow-hidden border border-ink/5 shadow-sm flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="text-xl font-bold text-ink font-heading">{item.name}</h3>
                        <span className="text-primary font-bold">{item.price}</span>
                      </div>
                      <p className="text-muted text-sm mb-6 flex-1">{item.desc}</p>
                      <a 
                        href={`https://wa.me/96178979892?text=I'd like to order ${item.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary/10 text-primary py-3 rounded-xl font-bold text-center hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                        Add to Order
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
