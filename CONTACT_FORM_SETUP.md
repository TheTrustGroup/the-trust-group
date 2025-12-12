# Contact Form Setup - Quick Start Guide

## ✅ What's Already Done

- ✅ EmailJS package installed
- ✅ Contact forms updated to use EmailJS
- ✅ Forms configured to send to: **info@thetrustgroupsolutions.com**
- ✅ Environment variables configured
- ✅ Error handling implemented

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (free account)
3. Verify your email

### Step 2: Create Email Service

1. In EmailJS dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail** (easiest) or your email provider
3. Connect your email account
4. **Set receiving email to:** `info@thetrustgroupsolutions.com`
5. Copy the **Service ID** (looks like: `service_xxxxx`)

### Step 3: Create Email Template

1. Go to **Email Templates** → **Create New Template**
2. Use this template:

**Subject:**
```
New Contact Form: {{from_name}} - {{service}}
```

**Body:**
```
New contact form submission from your website:

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
```

3. Set **To Email** to: `info@thetrustgroupsolutions.com`
4. Set **From Name** to: `{{from_name}}`
5. Set **Reply To** to: `{{reply_to}}`
6. Copy the **Template ID** (looks like: `template_xxxxx`)

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find **Public Key** (also called API Key)
3. Copy it

### Step 5: Add Environment Variables

1. Create `.env.local` file in project root:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace with your actual values
3. Save the file

### Step 6: Test

1. Restart your dev server: `npm run dev`
2. Go to contact page
3. Fill out and submit the form
4. Check **info@thetrustgroupsolutions.com** inbox
5. You should receive the email!

## 🌐 For Production (Vercel)

1. Go to Vercel dashboard → Your project
2. **Settings** → **Environment Variables**
3. Add these three variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Add the same values from your `.env.local`
5. **Redeploy** your application

## 📧 Where Messages Go

All contact form submissions are sent to:
**info@thetrustgroupsolutions.com**

The email includes:
- Sender's name and email
- Company name
- Phone number (if provided)
- Selected service
- Project description
- Budget range
- File attachments info

## 🔧 Troubleshooting

**Form shows error:**
- Check that all three environment variables are set
- Verify values are correct (no extra spaces)
- Restart dev server after adding variables

**No email received:**
- Check spam folder
- Verify EmailJS service is connected
- Check EmailJS dashboard for errors
- Verify template has correct variables

**For detailed setup, see:** `EMAILJS_SETUP.md`
