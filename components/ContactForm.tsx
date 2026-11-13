'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.whatsapp) setWhatsapp(result.whatsapp);

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setError(result.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-surface p-8 rounded-2xl border border-primary/20 text-center space-y-4">
        <h3 className="text-2xl font-bold text-ink">Thank You!</h3>
        <p className="text-muted">We have received your message and will get back to you soon.</p>
        {whatsapp && (
          <a 
            href={whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Send it on WhatsApp too
          </a>
        )}
        <button 
          onClick={() => setStatus('idle')}
          className="block w-full text-primary font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface p-6 md:p-8 rounded-2xl border border-primary/10 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl bg-white border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-ink"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+961 XX XXX XXX"
          className="w-full px-4 py-3 rounded-xl bg-white border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-ink"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1">Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-xl bg-white border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-ink resize-none"
        ></textarea>
      </div>

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm">
          {error}
          {whatsapp && (
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="block mt-2 font-bold underline">
              Try via WhatsApp instead
            </a>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
