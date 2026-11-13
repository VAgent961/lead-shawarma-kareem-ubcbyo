import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.jpg" alt="Shawarma Kareem Logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="text-xl font-bold font-heading">Shawarma Kareem</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Authentic flavors from the heart of Chouf. Every bite is worth it.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com/shawarmakareemofficial" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold font-heading">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <Link href="/menu" className="text-white/60 hover:text-white transition-colors">Our Menu</Link>
              <a href="https://wa.me/96178979892" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Order Online</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold font-heading">Contact Us</h3>
            <div className="flex flex-col gap-3 text-white/60">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>PM5G+Q7G, Bakaata, Al Chouf, Lebanon</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <a href="tel:+96178979892" className="hover:text-white">+961 78 979 892</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <span>Open daily from 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Shawarma Kareem. All rights reserved.</p>
          <p>Bakaata, Al Chouf, Lebanon. Sizzling tradition meets authentic taste.</p>
        </div>
      </div>
    </footer>
  );
}
