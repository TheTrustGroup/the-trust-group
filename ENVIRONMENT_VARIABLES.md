# Environment Variables Guide

Complete reference for all environment variables used in The Trust Group website.

## 🔐 Required Variables

These variables must be set for the site to function properly.

### Company Information

```bash
NEXT_PUBLIC_COMPANY_NAME=The Trust Group
NEXT_PUBLIC_COMPANY_TAGLINE=Building Tomorrow's Technology Today
NEXT_PUBLIC_COMPANY_WEBSITE=https://thetrustgroup.com
```

### Contact Information

```bash
NEXT_PUBLIC_CONTACT_EMAIL=info@thetrustgroup.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
```

### Office Address

```bash
NEXT_PUBLIC_OFFICE_ADDRESS_LINE1=123 Innovation Drive
NEXT_PUBLIC_OFFICE_ADDRESS_LINE2=Suite 500
NEXT_PUBLIC_OFFICE_CITY=San Francisco
NEXT_PUBLIC_OFFICE_STATE=CA
NEXT_PUBLIC_OFFICE_ZIP=94105
NEXT_PUBLIC_OFFICE_COUNTRY=United States
```

### Business Hours

```bash
NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAYS=Monday - Friday: 9:00 AM - 6:00 PM PST
NEXT_PUBLIC_BUSINESS_HOURS_WEEKENDS=Saturday: 10:00 AM - 2:00 PM PST
NEXT_PUBLIC_BUSINESS_HOURS_CLOSED=Sunday: Closed
```

## 📊 Optional Variables

### Analytics

#### Google Analytics 4

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**How to get:**
1. Go to [Google Analytics](https://analytics.google.com)
2. Create GA4 property
3. Get Measurement ID (starts with `G-`)

#### Google Tag Manager (Alternative)

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Error Tracking

#### Sentry

```bash
NEXT_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
SENTRY_AUTH_TOKEN=your_auth_token
SENTRY_ORG=your_org
SENTRY_PROJECT=your_project
```

**How to get:**
1. Sign up at [Sentry.io](https://sentry.io)
2. Create new project
3. Get DSN from project settings
4. Get auth token from account settings

### Email Service

#### EmailJS

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**How to get:**
1. Sign up at [EmailJS](https://www.emailjs.com)
2. Create email service
3. Create email template
4. Get Public Key from account settings

### Social Media Links

These can be set in `data/config.json` or as environment variables:

```bash
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/thetrustgroup
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/thetrustgroup
NEXT_PUBLIC_GITHUB_URL=https://github.com/thetrustgroup
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_YOUTUBE_URL=
```

## 🚀 Vercel-Specific Variables

These are automatically set by Vercel (don't set manually):

```bash
VERCEL=1
VERCEL_ENV=production|preview|development
VERCEL_URL=your-app.vercel.app
```

## 📝 Setting Variables

### Local Development

1. **Copy `.env.example` to `.env.local`:**
```bash
cp .env.example .env.local
```

2. **Edit `.env.local`** with your values

3. **Restart dev server:**
```bash
npm run dev
```

### Vercel Deployment

1. **Go to Vercel Dashboard**
2. **Select your project**
3. **Go to Settings → Environment Variables**
4. **Add each variable:**
   - Name: Variable name
   - Value: Variable value
   - Environment: Select (Production, Preview, Development)

5. **Redeploy** after adding variables

### Netlify Deployment

1. **Go to Netlify Dashboard**
2. **Select your site**
3. **Go to Site settings → Environment variables**
4. **Add variables**
5. **Redeploy**

## 🔒 Security Best Practices

1. **Never commit `.env.local`** to Git
2. **Use `NEXT_PUBLIC_` prefix** only for client-side variables
3. **Keep sensitive keys** in environment variables, not in code
4. **Use different values** for development and production
5. **Rotate keys regularly**

## ✅ Verification

### Check Variables Are Set

```bash
# Local
cat .env.local

# Vercel (via CLI)
vercel env ls
```

### Test in Code

```typescript
// Client-side (browser console)
console.log(process.env.NEXT_PUBLIC_GA_ID);

// Server-side (API route)
console.log(process.env.NEXT_PUBLIC_CONTACT_EMAIL);
```

## 🆘 Troubleshooting

### Variable Not Working

1. **Check prefix:** Client-side vars need `NEXT_PUBLIC_`
2. **Restart server:** After adding new variables
3. **Redeploy:** On Vercel/Netlify after adding variables
4. **Check spelling:** Variable names are case-sensitive

### Variable Not Available in Browser

- Only variables with `NEXT_PUBLIC_` prefix are available in browser
- Server-side variables are not exposed to client
- Rebuild after changing variables

### Variable Shows as Undefined

1. **Check `.env.local`** exists (local)
2. **Check Vercel dashboard** (production)
3. **Verify variable name** matches exactly
4. **Restart dev server** or redeploy

---

**Last Updated**: _______________
**Maintained By**: _______________

