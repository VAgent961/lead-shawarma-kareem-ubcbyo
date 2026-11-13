import HomeHome from '@/components/Home/HomeHome';
import HomeMenu from '@/components/Home/HomeMenu';
import HomeSection3 from '@/components/Home/HomeSection3';
import HomeSection4 from '@/components/Home/HomeSection4';

export const metadata = { 
  title: 'Shawarma Kareem | Authentic Turkish Shawarma in Bakaata, Chouf',
  description: 'Craving the best shawarma in Chouf? Visit Shawarma Kareem in Bakaata for authentic beef, chicken, Turkish shawarma, burgers, and crispy chicken.'
};

export default function HomePage() {
  return (
    <div className="bg-surface text-ink antialiased">
      <HomeHome />
      <HomeMenu />
      <HomeSection3 />
      <HomeSection4 />
      
      {/* CTA Band */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-8">Ready to taste the best shawarma in Chouf?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/96178979892" 
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Order via WhatsApp
            </a>
            <a 
              href="tel:+96178979892" 
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
