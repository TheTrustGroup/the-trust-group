# Deployment Guide

Complete guide for deploying The Trust Group website to production.

## 🚀 Quick Start (Vercel)

### Prerequisites
- [ ] Vercel account (sign up at [vercel.com](https://vercel.com))
- [ ] GitHub/GitLab/Bitbucket repository
- [ ] Domain name (optional, for custom domain)

### Step 1: Prepare Repository

1. **Ensure all changes are committed:**
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

2. **Verify build works locally:**
```bash
npm run build
npm start
```

### Step 2: Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your Git repository
4. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

5. Click **"Deploy"**

#### Option B: Vercel CLI

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy to production:**
```bash
vercel --prod
```

### Step 3: Configure Environment Variables

1. Go to your project settings in Vercel
2. Navigate to **"Environment Variables"**
3. Add all variables from `.env.example`:

**Required Variables:**
```
NEXT_PUBLIC_COMPANY_NAME=The Trust Group
NEXT_PUBLIC_COMPANY_TAGLINE=Building Tomorrow's Technology Today
NEXT_PUBLIC_CONTACT_EMAIL=info@thetrustgroup.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
```

**Optional Variables:**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Set for all environments** (Production, Preview, Development)
5. **Redeploy** after adding variables

### Step 4: Set Up Custom Domain

1. Go to **"Settings"** → **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain: `thetrustgroup.com`
4. Follow DNS configuration instructions:

**DNS Records to Add:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. Wait for DNS propagation (can take up to 48 hours)
6. SSL certificate is automatically provisioned by Vercel

### Step 5: Verify Deployment

1. **Check build logs** for errors
2. **Test the live site:**
   - [ ] Homepage loads
   - [ ] Navigation works
   - [ ] Forms submit
   - [ ] Images load
   - [ ] No console errors

3. **Run Lighthouse audit:**
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit
   - Verify scores are 90+

## 🔧 Configuration Files

### `vercel.json`
Already configured with:
- Security headers
- Redirects
- Rewrites
- Build settings

### `next.config.mjs`
Next.js configuration (update if needed)

## 📊 Analytics Setup

### Google Analytics

1. **Create GA4 Property:**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add to Environment Variables:**
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Verify Tracking:**
   - Deploy with variable set
   - Visit site
   - Check GA4 Real-Time reports

### Plausible Analytics (Alternative)

1. **Sign up at [plausible.io](https://plausible.io)**
2. **Add domain**
3. **Add script to `app/layout.tsx`** (if using Plausible instead of GA)

## 🐛 Error Tracking (Sentry)

### Setup

1. **Create Sentry account:**
   - Go to [sentry.io](https://sentry.io)
   - Create new project
   - Select Next.js framework
   - Get DSN

2. **Install Sentry:**
```bash
npm install @sentry/nextjs
```

3. **Initialize Sentry:**
```bash
npx @sentry/wizard@latest -i nextjs
```

4. **Add DSN to Environment Variables:**
```
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_AUTH_TOKEN=your_auth_token
```

5. **Configure in `sentry.client.config.ts`** and `sentry.server.config.ts`

## 🔐 Security Checklist

- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Environment variables set
- [ ] API keys secured
- [ ] Security headers configured (in `vercel.json`)
- [ ] No sensitive data in code
- [ ] Form validation on client and server
- [ ] Rate limiting configured (if applicable)

## 📈 Performance Optimization

### Before Deployment

1. **Optimize Images:**
   - Use Next.js Image component
   - Compress images
   - Use WebP format when possible

2. **Code Splitting:**
   - Already implemented with Next.js
   - Verify bundle sizes

3. **Caching:**
   - Static pages cached automatically
   - API routes can use ISR

4. **CDN:**
   - Vercel provides global CDN automatically

### Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.8s

## 🔄 Continuous Deployment

### Automatic Deployments

Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

### Manual Deployment

```bash
vercel --prod
```

## 📝 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Forms work
- [ ] Analytics tracking
- [ ] Error tracking working
- [ ] SSL certificate active
- [ ] Custom domain working
- [ ] Performance scores meet targets
- [ ] SEO meta tags present
- [ ] Sitemap accessible
- [ ] Robots.txt configured

## 🆘 Troubleshooting

### Build Fails

1. **Check build logs** in Vercel dashboard
2. **Test locally:**
   ```bash
   npm run build
   ```
3. **Common issues:**
   - Missing environment variables
   - TypeScript errors
   - Import errors
   - Missing dependencies

### Domain Not Working

1. **Check DNS records** are correct
2. **Wait for propagation** (up to 48 hours)
3. **Verify in Vercel dashboard** that domain is connected
4. **Check SSL certificate** status

### Analytics Not Working

1. **Verify environment variable** is set
2. **Check GA4 Real-Time** reports
3. **Verify script loads** in browser DevTools
4. **Check for ad blockers** (they block analytics)

### Performance Issues

1. **Run Lighthouse audit**
2. **Check bundle sizes**
3. **Optimize images**
4. **Enable caching**
5. **Use Vercel Analytics** for insights

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Google Analytics Setup](https://support.google.com/analytics/answer/9304153)
- [Sentry Next.js Guide](https://docs.sentry.io/platforms/javascript/guides/nextjs/)

## 🔄 Updates and Maintenance

### Updating Content

1. **Edit JSON files** in `/data` directory
2. **Commit changes:**
   ```bash
   git add data/
   git commit -m "Update content"
   git push
   ```
3. **Vercel automatically redeploys**

### Updating Code

1. **Make changes locally**
2. **Test with `npm run dev`**
3. **Build test: `npm run build`**
4. **Commit and push**
5. **Vercel deploys automatically**

### Rollback

1. Go to Vercel dashboard
2. Navigate to **"Deployments"**
3. Find previous working deployment
4. Click **"..."** → **"Promote to Production"**

---

**Deployment Date**: _______________
**Deployed By**: _______________
**Production URL**: _______________
**Status**: ☐ Live  ☐ Staging  ☐ Issues

