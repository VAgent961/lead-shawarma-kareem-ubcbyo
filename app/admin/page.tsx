import { sql, hasDb } from '@/lib/db';
import { LogoutButton } from '@/lib/admin-ui';
import MessageList from '@/components/Admin/MessageList';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Admin | Shawarma Kareem', robots: { index: false, follow: false } };

export default async function AdminPage() {
  if (!hasDb) {
    return (
      <div className="min-h-screen bg-surface p-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-ink mb-4">Shawarma Kareem Admin</h1>
        <p className="text-muted max-w-md">The database is not connected yet. Please check your environment variables.</p>
      </div>
    );
  }

  let messages = [];
  let error = null;

  try {
    messages = await sql`
      select * from contact_messages 
      order by created_at desc 
      limit 100
    `;
  } catch (e) {
    error = "Could not fetch messages from database.";
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-surface border-b border-ink/10 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div>
          <div className="text-xl font-bold text-ink">Shawarma Kareem</div>
          <p className="text-xs text-muted uppercase tracking-wider font-semibold">Admin Dashboard</p>
        </div>
        <LogoutButton />
      </header>

      <div className="p-6 max-w-6xl mx-auto">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink">Contact Messages</h2>
            <span className="bg-ink/10 text-ink text-xs px-2 py-1 rounded-full font-medium">
              {messages.length} Recent
            </span>
          </div>

          {error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl">
              {error}
            </div>
          ) : messages.length === 0 ? (
            <div className="bg-surface border border-ink/10 p-12 rounded-2xl text-center">
              <p className="text-muted">No messages yet.</p>
            </div>
          ) : (
            <MessageList initialMessages={messages} />
          )}
        </section>
      </div>
    </div>
  );
}
