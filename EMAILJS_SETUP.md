# EmailJS Setup Instructions

The contact form is configured to use EmailJS for sending emails. Follow these steps to set it up:

## 1. Install EmailJS

```bash
npm install @emailjs/browser
```

## 2. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new email service (Gmail, Outlook, etc.)
4. Create an email template

## 3. Get Your Credentials

After setting up your service and template, you'll get:
- Service ID
- Template ID
- Public Key

## 4. Update Contact Form

Open `components/contact/contact-form.tsx` and:

1. Uncomment the EmailJS import:
```typescript
import emailjs from '@emailjs/browser';
```

2. Replace the placeholder values in the `handleSubmit` function:
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

3. Remove or comment out the simulated API call:
```typescript
// Remove this line:
await new Promise((resolve) => setTimeout(resolve, 2000));
```

## 5. Email Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Company name
- `{{service}}` - Selected service
- `{{message}}` - Project description
- `{{budget}}` - Budget range

## 6. Environment Variables (Optional)

For better security, you can use environment variables:

1. Create `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the code to use environment variables:
```typescript
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  templateParams,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
```

## Alternative: Use API Route

Instead of EmailJS, you can create a Next.js API route:

1. Create `app/api/contact/route.ts`
2. Use a service like SendGrid, Resend, or Nodemailer
3. Update the form to call `/api/contact` instead

## Testing

After setup, test the form:
1. Fill out all required fields
2. Submit the form
3. Check your email inbox
4. Verify all form data is received correctly

