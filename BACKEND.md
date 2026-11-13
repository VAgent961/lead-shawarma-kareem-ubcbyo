# Shawarma Kareem Backend Documentation

This project uses a Next.js 14 App Router backend with a Neon Postgres database.

## Database Schema
The database consists of the following table:

### `contact_messages`
Stores inquiries sent through the contact form.
- `id`: Primary Key (BigSerial)
- `created_at`: Timestamp (defaults to now)
- `name`: Customer name (Required)
- `phone`: Customer phone number (Required)
- `message`: Optional message text
- `status`: 'new', 'done', or 'cancelled' (defaults to 'new')

## API Routes
- `POST /api/contact`: Public endpoint to submit the contact form. Cleans data, saves to DB, and notifies the owner.
- `PATCH /api/admin/contact`: Protected endpoint to update message status.

## Admin Dashboard
The admin dashboard is available at `/admin`.
- **Login**: Use the `ADMIN_PASSWORD` set in your environment variables.
- **Functionality**: View the latest 100 contact messages, mark them as done, or cancel them.

## Environment Variables
Required variables for full functionality:

```env
# Database (Neon)
DATABASE_URL=your_neon_postgres_url

# Admin Access
ADMIN_PASSWORD=your_secure_password
ADMIN_SECRET=automatically_generated_on_vercel

# Notifications (Optional)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
RESEND_API_KEY=your_resend_key
NOTIFY_EMAIL=owner@example.com
NOTIFY_FROM=notifications@yourdomain.com

# Business Contact
WHATSAPP_NUMBER=96178979892
```

## Later Features
- **Customer Accounts**: Not included in this version.
- **Online Ordering System**: Currently handled via WhatsApp links for direct communication.
