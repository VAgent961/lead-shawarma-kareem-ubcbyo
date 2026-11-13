export default function HomeHome() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/photo-2.jpg" 
          alt="Freshly prepared shawarma wraps and fast food favorites" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-1.5 rounded-full mb-6">
            <div className="flex text-secondary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>
              ))}
            </div>
            <span className="text-white text-xs font-bold tracking-wider uppercase">3.8 Stars on Google</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white font-heading leading-[1.1] mb-6">
            Every Bite is <span className="text-primary">Worth It</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
            Experience the authentic taste of premium beef, chicken, and Turkish shawarma in the heart of Bakaata.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/96178979892" 
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-center hover:scale-105 transition-transform shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">message</span>
              Order via WhatsApp
            </a>
            <a 
              href="tel:+96178979892" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">call</span>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
