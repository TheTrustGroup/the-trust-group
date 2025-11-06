# Preview & Deploy Guide

## 🖥️ Preview Locally

The development server is starting. Once it's ready:

1. **Open your browser** and go to: **http://localhost:3000**

2. **What to check:**
   - ✅ Homepage loads correctly
   - ✅ Navigation works (desktop & mobile)
   - ✅ All sections display properly
   - ✅ Forms are functional
   - ✅ Images load correctly
   - ✅ No console errors (open DevTools: F12)
   - ✅ Mobile responsiveness (resize browser or use device emulation)

3. **Test key features:**
   - Click through navigation links
   - Test contact form
   - Check service cards hover effects
   - Verify portfolio filtering
   - Test mobile menu

---

## 🚀 Best Deployment Path: Vercel (Recommended)

Vercel is the **best choice** for Next.js because:
- ✅ Zero-config deployment
- ✅ Automatic SSL certificates
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Preview deployments for PRs
- ✅ Built-in analytics
- ✅ Free tier is generous

### Quick Deployment Steps

#### 1. Prepare Your Code
```bash
# Make sure everything is committed
git add .
git commit -m "Ready for production deployment"
git push origin main
```

#### 2. Deploy to Vercel (Choose One Method)

**Method A: Via Vercel Dashboard (Easiest)**
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your repository
4. Vercel auto-detects Next.js settings
5. Click **"Deploy"**
6. Wait 2-3 minutes for deployment

**Method B: Via Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (first time - follow prompts)
vercel

# Deploy to production
vercel --prod
```

#### 3. Configure Environment Variables

After first deployment, go to **Project Settings → Environment Variables** and add:

**Required:**
```
NEXT_PUBLIC_COMPANY_NAME=The Trust Group
NEXT_PUBLIC_CONTACT_EMAIL=info@thetrustgroup.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
```

**Optional (for analytics):**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Important:** After adding variables, click **"Redeploy"** to apply changes.

#### 4. Add Custom Domain (Optional)

1. Go to **Settings → Domains**
2. Add your domain: `thetrustgroup.com`
3. Follow DNS instructions:
   - Add A record: `@` → `76.76.21.21`
   - Add CNAME: `www` → `cname.vercel-dns.com`
4. SSL certificate is automatically provisioned (takes 1-24 hours)

---

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads at production URL
- [ ] All pages accessible
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] No console errors
- [ ] Mobile view works
- [ ] Analytics tracking (if configured)
- [ ] SSL certificate active (green padlock)
- [ ] Custom domain working (if configured)

---

## 🔄 Continuous Deployment

Once set up, Vercel automatically:
- ✅ Deploys on every push to `main` branch
- ✅ Creates preview deployments for pull requests
- ✅ Runs build checks before deployment
- ✅ Sends deployment notifications

**Workflow:**
```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Vercel automatically deploys! 🚀
```

---

## 🆘 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Test build locally: `npm run build`

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check SSL certificate status in Vercel

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables
- Check variable names match exactly

---

## 📈 Next Steps After Deployment

1. **Set up Google Analytics** (if not done)
   - Get GA4 Measurement ID
   - Add to environment variables
   - Redeploy

2. **Monitor Performance**
   - Use Vercel Analytics (built-in)
   - Check Lighthouse scores
   - Monitor Core Web Vitals

3. **Set up Error Tracking** (optional)
   - Consider Sentry for error monitoring
   - See `DEPLOYMENT.md` for setup instructions

4. **SEO Verification**
   - Submit sitemap to Google Search Console
   - Verify meta tags with browser inspector
   - Test structured data with Google's Rich Results Test

---

## 🎯 Recommended Deployment Timeline

**Day 1: Initial Deployment**
- Deploy to Vercel
- Add environment variables
- Test all functionality

**Day 2-3: Domain Setup**
- Add custom domain
- Configure DNS
- Wait for SSL certificate

**Week 1: Optimization**
- Set up analytics
- Monitor performance
- Fix any issues

**Ongoing:**
- Regular content updates via CMS
- Monitor analytics
- Keep dependencies updated

---

## 📚 Additional Resources

- **Full Deployment Guide**: See `DEPLOYMENT.md`
- **Environment Variables**: See `ENVIRONMENT_VARIABLES.md`
- **Testing Checklist**: See `TESTING_CHECKLIST.md`
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

**Your site is ready to deploy!** 🎉

The development server should be running at **http://localhost:3000** - preview it now, then follow the steps above to deploy to production.

