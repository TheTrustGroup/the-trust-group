# GoDaddy DNS Setup Guide for thetrustgroupsolutions.com

## 🎯 Step-by-Step DNS Configuration

### Step 1: Access GoDaddy DNS Management

1. **Log into GoDaddy:**
   - Go to https://www.godaddy.com
   - Click **Sign In** (top right)
   - Enter your credentials

2. **Navigate to DNS Settings:**
   - Click **My Products** (top menu)
   - Find **thetrustgroupsolutions.com** in your domain list
   - Click the **DNS** button (or three dots → **Manage DNS**)

3. **You should see the DNS Records page**

---

## 🌐 Step 2: Add DNS Records for Website (Vercel)

### Remove Existing Records (If Any)

First, check if there are any conflicting records:
- Look for existing **A records** with Name `@`
- Look for existing **CNAME records** with Name `www`
- You may need to delete or edit these

### Add New Records

**Record 1: A Record (Root Domain)**

1. Scroll to the **Records** section
2. Click the **Add** button
3. Fill in:
   - **Type:** Select `A` from dropdown
   - **Name:** Enter `@` (or leave blank)
   - **Value:** Enter `76.76.21.21`
   - **TTL:** Select `600` (10 minutes) or `3600` (1 hour)
4. Click **Save**

**Record 2: CNAME Record (WWW Subdomain)**

1. Click the **Add** button again
2. Fill in:
   - **Type:** Select `CNAME` from dropdown
   - **Name:** Enter `www`
   - **Value:** Enter `cname.vercel-dns.com`
   - **TTL:** Select `600` or `3600`
3. Click **Save**

### Visual Guide:

```
Your DNS Records should look like this:

Type    Name    Value                    TTL
----    ----    -----                    ---
A       @       76.76.21.21              600
CNAME   www     cname.vercel-dns.com      600
```

---

## ⏱️ Step 3: Wait for DNS Propagation

- **Initial propagation:** 1-4 hours
- **Full global propagation:** 24-48 hours
- **Check status:** https://dnschecker.org

### How to Verify:

1. Visit https://dnschecker.org
2. Enter: `thetrustgroupsolutions.com`
3. Select: `A` record type
4. Click **Search**
5. Look for green checkmarks across different locations

---

## 🚀 Step 4: Add Domain to Vercel

**After DNS records are added (wait at least 1 hour):**

1. **Go to Vercel Dashboard:**
   - Visit https://vercel.com
   - Sign in with your GitHub account
   - Select your project

2. **Add Domain:**
   - Go to **Settings** → **Domains**
   - Click **Add Domain**
   - Enter: `thetrustgroupsolutions.com`
   - Click **Add**

3. **Add WWW Domain:**
   - Click **Add Domain** again
   - Enter: `www.thetrustgroupsolutions.com`
   - Click **Add**

4. **Vercel will verify:**
   - It checks if DNS records are correct
   - Shows status: "Valid" or "Invalid Configuration"
   - If invalid, double-check your DNS records

5. **SSL Certificate:**
   - Vercel automatically provisions SSL
   - Takes 5-10 minutes
   - Shows as "Valid" when ready

---

## 📧 Step 5: Email Setup (After Website is Working)

Once your website is live, you can set up email. You'll need to add **MX records** for your email provider.

### For Google Workspace:

**MX Records to Add in GoDaddy:**

1. Go back to DNS Management
2. Click **Add** for each MX record:

```
Priority: 1
Type: MX
Name: @
Value: aspmx.l.google.com
TTL: 3600

Priority: 5
Type: MX
Name: @
Value: alt1.aspmx.l.google.com
TTL: 3600

Priority: 5
Type: MX
Name: @
Value: alt2.aspmx.l.google.com
TTL: 3600

Priority: 10
Type: MX
Name: @
Value: alt3.aspmx.l.google.com
TTL: 3600

Priority: 10
Type: MX
Name: @
Value: alt4.aspmx.l.google.com
TTL: 3600
```

### For Microsoft 365:

**MX Record:**
```
Priority: 0
Type: MX
Name: @
Value: thetrustgroupsolutions-com.mail.protection.outlook.com
TTL: 3600
```

---

## ✅ Verification Checklist

- [ ] Logged into GoDaddy account
- [ ] Found DNS Management for thetrustgroupsolutions.com
- [ ] Added A record: `@` → `76.76.21.21`
- [ ] Added CNAME record: `www` → `cname.vercel-dns.com`
- [ ] Saved all DNS changes
- [ ] Waited 1-4 hours for initial propagation
- [ ] Verified DNS at dnschecker.org
- [ ] Added domain to Vercel
- [ ] Vercel shows domain as "Valid"
- [ ] SSL certificate issued
- [ ] Website accessible at thetrustgroupsolutions.com
- [ ] Website accessible at www.thetrustgroupsolutions.com

---

## 🐛 Troubleshooting

### Issue: "Invalid DNS Configuration" in Vercel

**Solutions:**
1. Double-check A record points to: `76.76.21.21` (exact, no spaces)
2. Double-check CNAME record points to: `cname.vercel-dns.com` (exact)
3. Wait longer (up to 48 hours for full propagation)
4. Clear browser cache
5. Try accessing from different network

### Issue: Domain Not Loading After 48 Hours

**Check:**
1. DNS records are saved in GoDaddy
2. No typos in DNS values
3. TTL is set (not blank)
4. Vercel domain is added correctly
5. SSL certificate is issued (check Vercel dashboard)

### Issue: WWW Not Working

**Solution:**
- Make sure CNAME record for `www` exists
- Value should be: `cname.vercel-dns.com`
- Wait for DNS propagation

---

## 📝 GoDaddy-Specific Tips

1. **DNS Changes Save Immediately** - But propagation takes time
2. **TTL Setting** - Lower TTL (600) = faster updates, Higher TTL (3600) = less DNS queries
3. **Multiple Records** - You can have multiple A or MX records
4. **Edit vs Delete** - You can edit existing records instead of deleting
5. **Support** - GoDaddy has 24/7 support if you need help

---

## 🎯 Next Steps After DNS is Configured

1. ✅ Wait 1-4 hours for DNS propagation
2. ✅ Verify DNS at dnschecker.org
3. ✅ Add domain to Vercel
4. ✅ Wait for SSL certificate
5. ✅ Test website at thetrustgroupsolutions.com
6. ✅ Set up business email (Google Workspace/Microsoft 365)
7. ✅ Add MX records for email
8. ✅ Update contact information in website

---

## 💡 Quick Reference

**DNS Records Summary:**
```
A Record:
Name: @
Value: 76.76.21.21

CNAME Record:
Name: www
Value: cname.vercel-dns.com
```

**Vercel Domain:**
- Main: thetrustgroupsolutions.com
- WWW: www.thetrustgroupsolutions.com

**Email Domain:**
- Will be: info@thetrustgroupsolutions.com
- (After email service is set up)

