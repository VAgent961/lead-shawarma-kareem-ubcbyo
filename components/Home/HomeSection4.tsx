import React from 'react';
import ContactForm from '../ContactForm';

export default function HomeSection4() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black text-ink mb-4">Find Us in Bakaata</h2>
              <p className="text-lg text-muted">
                Located in the heart of Al Chouf, we are ready to serve you a delicious meal.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border-4 border-surface shadow-2xl h-[400px] relative group">
              <iframe
                src="https://www.google.com/maps?q=33.709447499999996,35.675687599999996&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Shawarma Kareem Location"
                className="transition-all duration-500"
              ></iframe>
              <div className="absolute bottom-6 left-6 right-6">
                <a
                  href="https://www.google.com/maps/place/?q=place_id:ChIJQWA2X8QnHxURs5W-LYEkXKg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-ink text-center py-4 rounded-xl font-bold shadow-xl hover:bg-primary hover:text-white transition-all"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-ink mb-2">Address</h4>
              <p className="text-muted">PM5G+Q7G, Bakaata, Al Chouf, Lebanon</p>
              <div className="mt-4 pt-4 border-t border-ink/5 flex flex-wrap gap-4">
                <a href="tel:+96178979892" className="text-primary font-bold hover:underline">+961 78 979 892</a>
                <span className="text-ink/20">|</span>
                <a href="https://instagram.com/shawarmakareemofficial" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">@shawarmakareemofficial</a>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-ink">Send us a Message</h3>
              <p className="text-muted">Have a question or want to pre-order? Let us know!</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
