# How to Add Domain to Vercel - Step by Step

## 🎯 Prerequisites

Before adding your domain:
- ✅ DNS records added in GoDaddy (A and CNAME)
- ✅ Waited at least 1 hour for DNS propagation
- ✅ Vercel account created
- ✅ Project deployed to Vercel (or ready to deploy)

---

## 🚀 Method 1: Via Vercel Dashboard (Recommended)

### Step 1: Access Vercel Dashboard

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Click **Sign In** (top right)
   - Sign in with your **GitHub account** (same account that has your repository)

2. **Find Your Project:**
   - After signing in, you'll see your dashboard
   - Look for project: **the-trust-group** (or similar name)
   - If you don't see it, you may need to import it first (see below)

### Step 2: Import Project (If Not Already Deployed)

**If you don't see your project:**

1. Click **Add New Project** button
2. Select **Import Git Repository**
3. Find **TheTrustGroup/the-trust-group** repository
4. Click **Import**
5. Vercel will auto-detect Next.js settings
6. Click **Deploy** (don't worry about environment variables yet)
7. Wait 2-3 minutes for deployment

### Step 3: Add Domain

1. **Go to Project Settings:**
   - Click on your project name
   - Click **Settings** (top menu)
   - Click **Domains** (left sidebar)

2. **Add Root Domain:**
   - Click **Add Domain** button
   - Enter: `thetrustgroupsolutions.com`
   - Click **Add**
   - Vercel will check DNS records

3. **Add WWW Domain:**
   - Click **Add Domain** again
   - Enter: `www.thetrustgroupsolutions.com`
   - Click **Add**

### Step 4: Verify Domain Status

**What to look for:**

- **"Valid" ✅** = DNS is correct, domain is ready
- **"Invalid Configuration" ❌** = DNS not ready yet, wait longer
- **"Pending" ⏳** = Vercel is checking DNS

**If you see "Invalid Configuration":**
- Wait 1-4 more hours
- Double-check DNS records in GoDaddy
- Verify at dnschecker.org
- Try again later

### Step 5: Wait for SSL Certificate

- Vercel automatically provisions SSL certificates
- Takes 5-10 minutes after domain is "Valid"
- Status will show "Valid" when SSL is ready
- Your site will be accessible via HTTPS

---

## 💻 Method 2: Via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

### Step 3: Link Project (If Not Already)

```bash
cd "/Users/raregem.zillion/Desktop/The Trust Group"
vercel link
```

Follow prompts to link to existing project or create new one.

### Step 4: Add Domain

```bash
# Add root domain
vercel domains add thetrustgroupsolutions.com

# Add www domain
vercel domains add www.thetrustgroupsolutions.com
```

---

## ✅ Verification Steps

After adding domain:

1. **Check Domain Status:**
   - Go to Settings → Domains
   - Should show "Valid" for both domains

2. **Test Website:**
   - Visit: https://thetrustgroupsolutions.com
   - Visit: https://www.thetrustgroupsolutions.com
   - Both should load your website
   - Look for padlock icon (🔒) = SSL working

3. **Check SSL:**
   - SSL certificate is automatic
   - Takes 5-10 minutes after domain is valid
   - Status shows in Vercel dashboard

---

## 🐛 Troubleshooting

### Issue: "Invalid Configuration"

**Causes:**
- DNS hasn't propagated yet (wait 1-4 hours)
- DNS records are incorrect
- Wrong domain name entered

**Solutions:**
1. Wait longer (up to 48 hours)
2. Verify DNS records in GoDaddy:
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`
3. Check DNS at dnschecker.org
4. Try removing and re-adding domain in Vercel

### Issue: "Domain Already in Use"

**Solution:**
- Domain might be added to another Vercel project
- Check other projects in your account
- Remove from other project first
- Or contact Vercel support

### Issue: Website Not Loading

**Check:**
1. Domain status is "Valid" in Vercel
2. SSL certificate is issued
3. DNS propagation is complete
4. Try both www and non-www versions
5. Clear browser cache

### Issue: SSL Certificate Pending

**Solution:**
- SSL is automatic, just wait 5-10 minutes
- Check Vercel dashboard for status
- If stuck, try removing and re-adding domain

---

## 📋 Complete Checklist

- [ ] Logged into Vercel with GitHub account
- [ ] Found or imported project
- [ ] Went to Settings → Domains
- [ ] Added `thetrustgroupsolutions.com`
- [ ] Added `www.thetrustgroupsolutions.com`
- [ ] Both domains show "Valid" status
- [ ] SSL certificates issued (automatic)
- [ ] Website accessible at https://thetrustgroupsolutions.com
- [ ] Website accessible at https://www.thetrustgroupsolutions.com
- [ ] Padlock icon shows (SSL working)

---

## 🎯 Quick Reference

**Vercel Dashboard:** https://vercel.com/dashboard
**Domain Settings:** Project → Settings → Domains
**Your Domain:** thetrustgroupsolutions.com
**DNS Check:** https://dnschecker.org

---

## 💡 Pro Tips

1. **Add both www and non-www** - Vercel handles redirects automatically
2. **Wait for "Valid" status** - Don't worry if it takes a few hours
3. **SSL is automatic** - No need to configure certificates
4. **Check from different locations** - DNS propagation varies by location
5. **Keep Vercel dashboard open** - You can see status updates in real-time

---

## 🚀 After Domain is Added

Once your domain shows "Valid" in Vercel:

1. ✅ Website will be live at your domain
2. ✅ SSL certificate will be active
3. ✅ Both www and non-www will work
4. ✅ You can update contact information
5. ✅ Set up business email (next step)

---

## 📞 Need Help?

If you encounter issues:

1. **Check Vercel Status:** https://www.vercel-status.com
2. **Vercel Documentation:** https://vercel.com/docs
3. **Vercel Support:** Available in dashboard
4. **Community:** https://github.com/vercel/vercel/discussions

