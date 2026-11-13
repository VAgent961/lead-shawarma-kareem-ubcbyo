import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const reviews = [
  {
    name: "Paloma Uribe",
    stars: 5,
    text: "Amazing spot for a quick bite! The shawarma wraps were very tasty and great and I loved that they had hot sauce available. The restaurant was also clean and comfy, I definitely recommend stopping by here!"
  },
  {
    name: "marwan zebian",
    stars: 5,
    text: "I have been to places and i have tasted shawarmas. But this shawarma sandwich is unparalleled. It has all the flavors and tastes like heaven. I advise everyone to cone to this shawarma station and try it"
  },
  {
    name: "Driss Biouzouken",
    stars: 5,
    text: "Great food and fast service, perfect for a quick bite!"
  },
  {
    name: "Ibrahim Abou Ayyash",
    stars: 5,
    text: "We were a group of five people, and the moment we entered, we loved the place! Ambiance is great along with freshly cut and succulent served dishes. Will definitely be returning next time! ;)"
  },
  {
    name: "Bahaa Al Hassanieh",
    stars: 4,
    text: "If you are looking of a place to have a quick and tasty meal then this is the place for it. Variety of options are available. Shawarma Lahme is highly recommend. Also the prices are reasonable"
  }
];

export default function HomeSection3() {
  return (
    <section id="testimonials" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-ink mb-4">Loved by Our Community</h2>
          <div className="flex flex-col items-center justify-center gap-2 mb-2">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <StarHalf size={24} fill="currentColor" />
              <Star size={24} fill="none" />
              <span className="ml-2 text-2xl font-black text-ink">3.8</span>
            </div>
            <p className="text-muted font-medium">Rated 3.8 stars from 52 Google reviews</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-ink/5 flex flex-col">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-ink leading-relaxed mb-6 flex-grow italic">"{review.text}"</p>
              <div className="pt-4 border-t border-ink/5">
                <p className="font-bold text-ink">{review.name}</p>
                <p className="text-xs text-muted uppercase tracking-widest">Google Review</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
