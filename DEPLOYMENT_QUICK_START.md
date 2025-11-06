# Deployment Quick Start Guide

Quick reference for deploying to Vercel.

## 🚀 5-Minute Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Click **"Deploy"** (settings are auto-detected)

### Step 3: Add Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

**Required:**
```
NEXT_PUBLIC_COMPANY_NAME=The Trust Group
NEXT_PUBLIC_CONTACT_EMAIL=info@thetrustgroup.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
```

**Optional (Analytics):**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Step 4: Add Custom Domain (Optional)

1. Settings → Domains
2. Add `thetrustgroup.com`
3. Follow DNS instructions
4. Wait for SSL (automatic)

### Step 5: Verify

- [ ] Site loads
- [ ] Forms work
- [ ] No console errors
- [ ] Analytics tracking (if configured)

**Done!** 🎉

---

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

