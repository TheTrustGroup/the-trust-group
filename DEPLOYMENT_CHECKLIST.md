# Deployment Checklist

## Pre-Deployment

### 1. Environment Variables
- [ ] `NEXT_PUBLIC_SITE_URL` - Set to production URL
- [ ] `NEXT_PUBLIC_GA_ID` - Google Analytics ID (if using)
- [ ] `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Google Maps API key (if using)
- [ ] All environment variables configured in Vercel

### 2. Build Verification
- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] No console errors in production build
- [ ] All pages generate successfully

### 3. Testing
- [ ] Test all pages load correctly
- [ ] Test all forms submit correctly
- [ ] Test all links work
- [ ] Test responsive design on multiple devices
- [ ] Test dark mode toggle
- [ ] Test navigation menu
- [ ] Test chatbot functionality
- [ ] Test contact form submission

### 4. Content Review
- [ ] All placeholder content replaced
- [ ] All images optimized
- [ ] All text proofread
- [ ] Contact information correct
- [ ] Social media links correct

### 5. SEO
- [ ] Meta tags verified
- [ ] Open Graph images created
- [ ] Sitemap.xml accessible
- [ ] Robots.txt configured
- [ ] Structured data validated

### 6. Performance
- [ ] Lighthouse score 90+ in all categories
- [ ] Images optimized
- [ ] Fonts preloaded
- [ ] Code minified
- [ ] Bundle size acceptable

### 7. Security
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] No sensitive data in client code
- [ ] API keys in environment variables
- [ ] Content Security Policy configured

---

## Vercel Deployment

### 1. Project Setup
- [ ] Project connected to GitHub repository
- [ ] Build command: `npm run build`
- [ ] Output directory: `.next`
- [ ] Install command: `npm install`
- [ ] Node.js version: 18.x or higher

### 2. Domain Configuration
- [ ] Custom domain added: `thetrustgroupsolutions.com`
- [ ] DNS records configured:
  - [ ] A record: `@` → Vercel IP
  - [ ] CNAME record: `www` → cname.vercel-dns.com
- [ ] SSL certificate issued (automatic)
- [ ] Domain verified

### 3. Environment Variables
- [ ] All environment variables added in Vercel dashboard
- [ ] Variables marked as "Production" or "Preview" as needed
- [ ] Sensitive variables encrypted

### 4. Build Settings
- [ ] Framework preset: Next.js
- [ ] Root directory: `./` (if not root)
- [ ] Build command: `npm run build` (default)
- [ ] Output directory: `.next` (default)
- [ ] Install command: `npm install` (default)

### 5. Deployment
- [ ] Initial deployment successful
- [ ] Production deployment verified
- [ ] Preview deployments working
- [ ] Automatic deployments from main branch enabled

---

## Post-Deployment

### 1. Verification
- [ ] Site loads at production URL
- [ ] All pages accessible
- [ ] HTTPS working
- [ ] SSL certificate valid
- [ ] No console errors
- [ ] Analytics tracking working

### 2. Testing
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Test form submissions
- [ ] Test all interactive features
- [ ] Test dark mode
- [ ] Test responsive design

### 3. Monitoring
- [ ] Google Analytics tracking verified
- [ ] Error monitoring set up (if using)
- [ ] Performance monitoring active
- [ ] Uptime monitoring configured

### 4. SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify structured data in Google Rich Results Test
- [ ] Check mobile-friendliness
- [ ] Verify page speed

### 5. Social Media
- [ ] Test Open Graph tags with Facebook Debugger
- [ ] Test Twitter Card tags with Twitter Card Validator
- [ ] Test LinkedIn sharing
- [ ] Verify OG images display correctly

---

## Rollback Plan

### If Issues Occur:
1. **Immediate Rollback:**
   - Go to Vercel dashboard
   - Navigate to Deployments
   - Find last working deployment
   - Click "..." → "Promote to Production"

2. **Investigate:**
   - Check Vercel build logs
   - Check browser console for errors
   - Review recent changes
   - Test locally

3. **Fix and Redeploy:**
   - Fix identified issues
   - Test locally
   - Push to repository
   - Monitor deployment

---

## Maintenance

### Regular Tasks:
- [ ] Monitor Google Analytics weekly
- [ ] Check for broken links monthly
- [ ] Update dependencies quarterly
- [ ] Review and update content as needed
- [ ] Monitor performance metrics
- [ ] Check security updates

### Updates:
- [ ] Keep Next.js updated
- [ ] Keep dependencies updated
- [ ] Review and update content
- [ ] Add new testimonials/projects
- [ ] Update team information

---

## Support Resources

### Documentation:
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs

### Tools:
- Lighthouse: Chrome DevTools
- WAVE: https://wave.webaim.org/
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/

---

## Quick Commands

```bash
# Build locally
npm run build

# Test production build
npm run start

# Run linting
npm run lint

# Type check
npm run type-check

# Format code
npm run format
```

---

## Emergency Contacts

- **Vercel Support:** https://vercel.com/support
- **Domain Provider:** GoDaddy (if applicable)
- **Hosting:** Vercel

---

## Notes

- All deployments are automatic from the main branch
- Preview deployments are created for pull requests
- Environment variables are encrypted in Vercel
- SSL certificates are automatically managed by Vercel
- Build logs are available in Vercel dashboard

