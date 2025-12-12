# Vercel Deployment - Environment Variables Setup

## 🚀 Quick Deployment Guide

This guide will help you add all required environment variables to your Vercel deployment.

## 📋 Required Environment Variables

### EmailJS Configuration (Contact Forms)

These are **REQUIRED** for contact forms to work:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_4zimeep
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_b0wanef
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=3cv5xhklDMxUuZh5Y
```

## ✅ Step-by-Step: Add to Vercel

### Step 1: Access Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Log in to your account
3. Select your project: **The Trust Group**

### Step 2: Navigate to Environment Variables

1. Click on your project
2. Go to **Settings** (top navigation)
3. Click **Environment Variables** (left sidebar)

### Step 3: Add Each Variable

For each variable below, follow these steps:

1. Click **"Add New"** button
2. Enter the **Name** (exactly as shown)
3. Enter the **Value** (from below)
4. Select **all environments**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Click **"Save"**

#### Variable 1: EmailJS Service ID

- **Name:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- **Value:** `service_4zimeep`
- **Environments:** Production, Preview, Development

#### Variable 2: EmailJS Template ID

- **Name:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- **Value:** `template_b0wanef`
- **Environments:** Production, Preview, Development

#### Variable 3: EmailJS Public Key

- **Name:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **Value:** `3cv5xhklDMxUuZh5Y`
- **Environments:** Production, Preview, Development

### Step 4: Optional Variables (If Needed)

If you have Google Maps API key:

- **Name:** `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- **Value:** (your Google Maps API key)
- **Environments:** Production, Preview, Development

### Step 5: Redeploy

**IMPORTANT:** After adding environment variables, you MUST redeploy:

1. Go to **Deployments** tab
2. Click the **"..."** (three dots) on the latest deployment
3. Click **"Redeploy"**
4. Or push a new commit to trigger automatic deployment

## ✅ Verification Checklist

After redeploying, verify:

- [ ] All 3 EmailJS variables are added
- [ ] All variables are set for Production, Preview, and Development
- [ ] Deployment completed successfully
- [ ] Test contact form on live site
- [ ] Check that emails are received at info@thetrustgroupsolutions.com

## 🧪 Test After Deployment

1. Go to your live website
2. Navigate to the contact page
3. Fill out and submit the contact form
4. Check **info@thetrustgroupsolutions.com** inbox
5. Verify email was received

## 📸 Visual Guide

When adding variables in Vercel, you'll see:

```
┌─────────────────────────────────────────┐
│ Add New Environment Variable            │
├─────────────────────────────────────────┤
│ Key: [NEXT_PUBLIC_EMAILJS_SERVICE_ID]  │
│ Value: [service_4zimeep]                │
│                                         │
│ Environments:                           │
│ ☑ Production                            │
│ ☑ Preview                               │
│ ☑ Development                            │
│                                         │
│ [Cancel]  [Save]                        │
└─────────────────────────────────────────┘
```

## 🆘 Troubleshooting

### Variables Not Working After Deployment

**Solution:**
- Make sure you **redeployed** after adding variables
- Check that variables are set for the correct environment (Production)
- Verify variable names are exact (case-sensitive)
- Check Vercel deployment logs for errors

### Contact Form Shows "Configuration Missing" Error

**Solution:**
- Verify all 3 EmailJS variables are added
- Check variable names start with `NEXT_PUBLIC_`
- Ensure variables are set for Production environment
- Redeploy after adding variables

### Emails Not Arriving

**Solution:**
- Check EmailJS dashboard → Email Logs
- Verify EmailJS service is connected
- Check template "To Email" is: `info@thetrustgroupsolutions.com`
- Check spam folder

## 📝 Quick Copy-Paste Values

For easy reference, here are your values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_4zimeep
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_b0wanef
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=3cv5xhklDMxUuZh5Y
```

## 🎯 Next Steps

1. ✅ Add all 3 variables to Vercel
2. ✅ Redeploy your application
3. ✅ Test the contact form on live site
4. ✅ Verify emails are received

---

**You're all set!** Once you add these variables and redeploy, your contact forms will be fully functional on production! 🚀
