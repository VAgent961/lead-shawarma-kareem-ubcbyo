export default function HomeMenu() {
  const specialties = [
    {
      title: "Beef & Chicken Shawarma",
      desc: "Hand-shaved and marinated to perfection.",
      img: "/images/photo-5.jpg"
    },
    {
      title: "Turkish Shawarma",
      desc: "A unique, savory twist on a classic favorite.",
      img: "/images/photo-1.jpg"
    },
    {
      title: "Burgers & Crispy",
      desc: "Satisfying comfort food made with quality ingredients.",
      img: "/images/photo-3.jpg"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3 block">Our Specialties</span>
          <h2 className="text-3xl md:text-5xl font-bold text-ink font-heading">Fresh Flavors, Served Daily</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item, idx) => (
            <div key={idx} className="group bg-surface rounded-3xl overflow-hidden border border-ink/5 shadow-sm hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-ink mb-3 font-heading">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
