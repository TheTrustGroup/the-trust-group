# Complete Vercel Environment Variables Setup

## 🎯 All Environment Variables for Deployment

Copy and paste these into Vercel Dashboard → Settings → Environment Variables

## ✅ REQUIRED Variables (Contact Forms)

These are **essential** for contact forms to work:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_4zimeep
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_b0wanef
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=3cv5xhklDMxUuZh5Y
```

## 📋 OPTIONAL Variables

These are optional but recommended:

### Google Maps API (Optional - Map works without it)
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```
*Note: The map will work with the embed URL even without this key*

### Google Analytics (Optional)
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
*Only if you want to track website analytics*

### Site URL (Optional - Has default)
```bash
NEXT_PUBLIC_SITE_URL=https://thetrustgroupsolutions.com
```
*Default is already set in code, but you can override it*

## 🚀 Quick Setup Steps

### Step 1: Go to Vercel Dashboard
1. Visit: https://vercel.com/dashboard
2. Select your project: **The Trust Group**

### Step 2: Add Environment Variables
1. Click **Settings** → **Environment Variables**
2. Click **"Add New"** for each variable below

### Step 3: Add Required Variables

**Variable 1:**
- **Key:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- **Value:** `service_4zimeep`
- **Environments:** ☑ Production ☑ Preview ☑ Development

**Variable 2:**
- **Key:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- **Value:** `template_b0wanef`
- **Environments:** ☑ Production ☑ Preview ☑ Development

**Variable 3:**
- **Key:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **Value:** `3cv5xhklDMxUuZh5Y`
- **Environments:** ☑ Production ☑ Preview ☑ Development

### Step 4: Redeploy

**CRITICAL:** After adding variables, you MUST redeploy:

1. Go to **Deployments** tab
2. Find the latest deployment
3. Click **"..."** (three dots menu)
4. Click **"Redeploy"**
5. Wait for deployment to complete

OR

Push a new commit to trigger automatic deployment:
```bash
git commit --allow-empty -m "Trigger redeploy with environment variables"
git push origin main
```

## ✅ Verification

After redeployment:

1. ✅ Visit your live site
2. ✅ Go to contact page
3. ✅ Submit a test form
4. ✅ Check **info@thetrustgroupsolutions.com** inbox
5. ✅ Verify email was received

## 📝 Complete Variable List (Copy-Paste Ready)

For easy reference, here are all your values:

### Required (Must Add):
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_4zimeep
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_b0wanef
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=3cv5xhklDMxUuZh5Y
```

### Optional (Add if you have them):
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://thetrustgroupsolutions.com
```

## 🎯 Minimum Required

For the site to work with contact forms, you only need these 3:
- ✅ `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- ✅ `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- ✅ `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Everything else is optional!

## 🆘 Troubleshooting

**Variables not working?**
- Make sure you **redeployed** after adding variables
- Check variables are set for **Production** environment
- Verify variable names are exact (case-sensitive)
- Check Vercel deployment logs

**Contact form not working?**
- Verify all 3 EmailJS variables are added
- Check EmailJS dashboard → Email Logs
- Ensure template "To Email" is: `info@thetrustgroupsolutions.com`

---

**Ready to deploy!** Add the 3 required variables and redeploy! 🚀




