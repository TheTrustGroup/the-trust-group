# EmailJS Quick Start Guide

## 🚀 Quick Setup (5 minutes)

Your contact forms are **already configured** with EmailJS! You just need to add your credentials.

### Step 1: Get EmailJS Credentials (3 minutes)

1. **Sign up** at [EmailJS.com](https://www.emailjs.com/) (Free: 200 emails/month)
2. **Create Email Service:**
   - Go to "Email Services" → "Add New Service"
   - Choose Gmail/Outlook
   - Connect your email: **info@thetrustgroupsolutions.com**
   - Copy the **Service ID**

3. **Create Email Template:**
   - Go to "Email Templates" → "Create New Template"
   - **Subject:** `New Contact Form: {{from_name}}`
   - **Content:** Use the template from `EMAILJS_SETUP.md`
   - **To Email:** `info@thetrustgroupsolutions.com`
   - **Reply To:** `{{reply_to}}`
   - Copy the **Template ID**

4. **Get Public Key:**
   - Go to "Account" → "General"
   - Copy your **Public Key**

### Step 2: Add Environment Variables (1 minute)

**For Local Development:**

1. Create `.env.local` in project root:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Restart dev server: `npm run dev`

**For Vercel Production:**

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add all three variables (Production, Preview, Development)
3. Redeploy

### Step 3: Test (1 minute)

1. Fill out contact form on your site
2. Submit
3. Check **info@thetrustgroupsolutions.com** inbox
4. ✅ You should receive the email!

## 📧 Where Messages Go

All contact form submissions are sent to:
- **Email:** info@thetrustgroupsolutions.com
- **Reply To:** Customer's email (so you can reply directly)

## ✅ What's Already Done

- ✅ EmailJS package installed
- ✅ Contact forms integrated
- ✅ Error handling configured
- ✅ Success/error messages set up
- ✅ Form validation working

## 🔧 Troubleshooting

**"EmailJS configuration is missing" error:**
- Check `.env.local` exists and has all 3 variables
- Restart dev server after adding variables
- On Vercel: Redeploy after adding environment variables

**Emails not arriving:**
- Check spam folder
- Verify EmailJS service is connected
- Check EmailJS dashboard for sent emails
- Verify template "To Email" is correct

**Form shows success but no email:**
- Check EmailJS dashboard → "Email Logs"
- Verify environment variables are correct
- Check browser console for errors

## 📚 Full Documentation

See `EMAILJS_SETUP.md` for detailed template structure and advanced configuration.




