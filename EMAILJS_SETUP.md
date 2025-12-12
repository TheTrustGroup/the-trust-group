# EmailJS Setup Instructions

The contact form is now configured to use EmailJS for sending emails to **info@thetrustgroupsolutions.com**. Follow these steps to complete the setup:

## ✅ Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a **free account** (200 emails/month)
3. Verify your email address

## ✅ Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for quick setup)
   - **Outlook/Office 365**
   - **Custom SMTP**
4. Follow the setup wizard to connect your email account
5. **Important**: Use **info@thetrustgroupsolutions.com** as the receiving email
6. Copy your **Service ID** (you'll need this later)

## ✅ Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
Hello,

You have received a new contact form submission from your website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service: {{service}}
Budget: {{budget}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{files_info}}
Total Files: {{files_count}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: {{reply_to}}

This email was sent from your website contact form.
```

4. Set **To Email** to: `info@thetrustgroupsolutions.com`
5. Set **From Name** to: `{{from_name}}`
6. Set **Reply To** to: `{{reply_to}}`
7. Copy your **Template ID**

## ✅ Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it

## ✅ Step 5: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add your EmailJS credentials:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual credentials
4. **Important**: Never commit `.env.local` to Git (it's already in `.gitignore`)

## ✅ Step 6: For Vercel Deployment

If deploying to Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these three variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Add the same values you used in `.env.local`
5. Redeploy your application

## ✅ Step 7: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check **info@thetrustgroupsolutions.com** inbox
5. You should receive the email within seconds

## 📧 Email Template Variables

The forms send these variables to EmailJS:

**Standard Contact Form:**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Company name (or "Not provided")
- `{{service}}` - Selected service
- `{{message}}` - Project description
- `{{budget}}` - Budget range (or "Not specified")
- `{{to_email}}` - Always "info@thetrustgroupsolutions.com"
- `{{reply_to}}` - Sender's email (for reply functionality)

**Premium Contact Form (Additional):**
- `{{phone}}` - Phone number (or "Not provided")
- `{{files_info}}` - List of uploaded files
- `{{files_count}}` - Number of files attached

## 🔒 Security Notes

- The Public Key is safe to expose in client-side code (it's designed for this)
- EmailJS has rate limiting on free tier (200 emails/month)
- For production, consider upgrading to a paid plan for higher limits
- All emails will be sent to: **info@thetrustgroupsolutions.com**

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

