'use client';

import { useState } from 'react';

export default function MessageList({ initialMessages }: { initialMessages: any[] }) {
  const [messages, setMessages] = useState(initialMessages);
  const [updatingId, setUpdatingId] = useState<string | number | null>(null);

  async function updateStatus(id: string | number, status: string) {
    setUpdatingId(id);
    try {
      const res = await fetch('/api/admin/contact', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      if (res.ok) {
        setMessages(prev => prev.map(m => m.id === id ? { ...m, status } : m));
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    } finally {
      setUpdatingId(null);
    }
  }

  return (
    <div className="grid gap-4">
      {messages.map((msg) => (
        <div key={msg.id} className={`bg-white border rounded-2xl p-5 shadow-sm transition-all ${msg.status === 'new' ? 'border-primary/30 ring-1 ring-primary/5' : 'border-slate-200 opacity-80'}`}>
          <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-slate-900">{msg.name}</h3>
                {msg.status === 'new' && (
                  <span className="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded uppercase font-black">New</span>
                )}
              </div>
              <a href={`tel:${msg.phone}`} className="text-primary font-medium text-sm hover:underline">
                {msg.phone}
              </a>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 mb-2">
                {new Date(msg.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
              </div>
              <div className="flex gap-2 justify-end">
                {msg.status === 'new' && (
                  <button 
                    disabled={updatingId === msg.id}
                    onClick={() => updateStatus(msg.id, 'done')}
                    className="text-[10px] font-bold bg-green-50 text-green-600 px-2 py-1 rounded border border-green-100 hover:bg-green-100 disabled:opacity-50"
                  >
                    {updatingId === msg.id ? '...' : 'DONE'}
                  </button>
                )}
                {msg.status !== 'cancelled' && (
                  <button 
                    disabled={updatingId === msg.id}
                    onClick={() => updateStatus(msg.id, 'cancelled')}
                    className="text-[10px] font-bold bg-slate-50 text-slate-400 px-2 py-1 rounded border border-slate-100 hover:bg-slate-100 disabled:opacity-50"
                  >
                    {updatingId === msg.id ? '...' : 'CANCEL'}
                  </button>
                )}
              </div>
            </div>
          </div>
          {msg.message && (
            <div className="bg-slate-50 rounded-xl p-4 text-slate-700 text-sm italic border border-slate-100">
              "{msg.message}"
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
