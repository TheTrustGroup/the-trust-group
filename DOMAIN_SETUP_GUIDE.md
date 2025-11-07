# Domain Setup Guide for The Trust Group

## 🎯 Current Domain Configuration

Your website is currently configured to use: **thetrustgroup.com**

This domain appears in:
- Website URLs
- Email addresses (info@thetrustgroup.com)
- SEO settings
- Sitemap
- Social links

## 🔍 Step 1: Check if You Own the Domain

### Option A: Check Domain Registrars

Check if you have accounts with these common registrars:
- **Namecheap** - https://www.namecheap.com
- **GoDaddy** - https://www.godaddy.com
- **Google Domains** - https://domains.google
- **Cloudflare** - https://www.cloudflare.com/products/registrar
- **Name.com** - https://www.name.com
- **Domain.com** - https://www.domain.com

**How to check:**
1. Log into each registrar account
2. Look for "My Domains" or "Domain List"
3. Search for "thetrustgroup.com"

### Option B: Use WHOIS Lookup

Check domain ownership publicly:
1. Go to https://whois.net or https://whois.icann.org
2. Enter: `thetrustgroup.com`
3. Check the "Registrar" and "Registrant" information

**What to look for:**
- If it shows your name/company → You own it!
- If it shows someone else → You need to register it
- If it shows "Available" → You can register it

## 📝 Step 2: Register the Domain (If You Don't Own It)

### Recommended Domain Registrars

#### 1. **Namecheap** (Recommended)
- **Price:** ~$10-15/year for .com
- **Why:** Good prices, free privacy protection, easy DNS management
- **Link:** https://www.namecheap.com

#### 2. **Cloudflare Registrar**
- **Price:** At-cost pricing (very cheap)
- **Why:** No markup, excellent DNS service
- **Link:** https://www.cloudflare.com/products/registrar

#### 3. **Google Domains**
- **Price:** ~$12/year
- **Why:** Simple interface, integrates with Google services
- **Link:** https://domains.google

#### 4. **GoDaddy**
- **Price:** ~$12-15/year (often has first-year discounts)
- **Why:** Popular, lots of features
- **Link:** https://www.godaddy.com

### Registration Steps

1. **Choose a registrar** (Namecheap recommended)
2. **Search for domain:** `thetrustgroup.com`
3. **Check availability:**
   - If available → Add to cart and checkout
   - If taken → Consider alternatives:
     - `thetrustgroup.io`
     - `thetrustgroup.tech`
     - `thetrustgroup.net`
     - `trustgroup.com`
     - `thetrustgroup.co`

4. **Complete registration:**
   - Enter your contact information
   - Choose registration period (1-10 years)
   - Enable privacy protection (recommended)
   - Complete payment

5. **Verify email** from registrar
6. **Access domain management** panel

## 🔧 Step 3: Domain Configuration for Website

Once you have the domain, you need to configure DNS for:

### A. Website Hosting (Vercel)

When you deploy to Vercel, you'll need to add these DNS records:

**DNS Records for Vercel:**
```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**How to add:**
1. Log into your domain registrar
2. Go to DNS Management / DNS Settings
3. Add the records above
4. Wait 24-48 hours for DNS propagation

### B. Email Setup (After Domain is Ready)

Once domain DNS is working, you can set up email:

**For Google Workspace:**
- Add MX records provided by Google
- Verify domain ownership

**For Microsoft 365:**
- Add MX records provided by Microsoft
- Verify domain ownership

**For Zoho Mail:**
- Add MX records provided by Zoho
- Verify domain ownership

## 📋 Domain Setup Checklist

- [ ] Check if you already own `thetrustgroup.com`
- [ ] If not owned, choose a registrar
- [ ] Register the domain
- [ ] Verify email from registrar
- [ ] Access domain management panel
- [ ] Note down DNS management access
- [ ] (Later) Configure DNS for Vercel hosting
- [ ] (Later) Configure DNS for email (MX records)

## 🎯 Alternative Domain Options

If `thetrustgroup.com` is taken, consider:

### Similar Options:
- `thetrustgroup.io` - Tech-focused
- `thetrustgroup.tech` - Technology emphasis
- `thetrustgroup.net` - Alternative TLD
- `trustgroup.com` - Shorter version
- `thetrustgroup.co` - Modern alternative

### If You Choose a Different Domain:

You'll need to update these files:
1. `/data/config.json` - Update `website` field
2. `/app/sitemap.ts` - Update `siteUrl`
3. `/lib/seo.ts` - Update `siteUrl`
4. Environment variables - Update `NEXT_PUBLIC_SITE_URL`

## 💡 Pro Tips

1. **Register for multiple years** - Often cheaper, less renewal hassle
2. **Enable auto-renewal** - Prevents accidental expiration
3. **Use privacy protection** - Hides your personal info from WHOIS
4. **Keep registrar account secure** - Use 2FA if available
5. **Document DNS settings** - Save screenshots of DNS configuration

## 🚨 Important Notes

- **Domain registration** is separate from hosting
- **DNS changes** can take 24-48 hours to propagate
- **Keep registrar account active** - Domain expires if not renewed
- **Transfer domains carefully** - Can take 5-7 days

## 📞 Next Steps After Domain Setup

Once you have the domain:
1. ✅ Configure DNS for website (Vercel)
2. ✅ Set up business email (Google Workspace/Microsoft 365)
3. ✅ Update contact information in `/data/config.json`
4. ✅ Test email sending/receiving
5. ✅ Update website with real contact details

---

## Quick Reference: Domain Status Check

**To check if domain is available:**
```bash
# Visit any registrar and search:
thetrustgroup.com
```

**To check current domain owner:**
```bash
# Visit WHOIS lookup:
https://whois.net
# Enter: thetrustgroup.com
```

**To check DNS records:**
```bash
# Use online tool:
https://dnschecker.org
# Enter: thetrustgroup.com
```

