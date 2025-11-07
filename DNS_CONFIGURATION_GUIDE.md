# DNS Configuration Guide

## 🎯 Setting Up Your Domain for Website & Email

### Step 1: Access Your Domain DNS Settings

1. **Log into your domain registrar** (Namecheap, GoDaddy, Cloudflare, etc.)
2. **Find your domain** in the domain list
3. **Click "Manage" or "DNS Settings"**
4. **Look for "DNS Management" or "Advanced DNS"**

---

## 🌐 Step 2: Configure DNS for Website (Vercel)

Your website needs these DNS records to work with Vercel:

### DNS Records to Add:

**Record 1: A Record (Root Domain)**
```
Type: A
Name: @ (or leave blank, or "thetrustgroup.com")
Value: 76.76.21.21
TTL: Automatic (or 3600)
```

**Record 2: CNAME Record (WWW Subdomain)**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Automatic (or 3600)
```

### How to Add in Common Registrars:

#### Namecheap:
1. Go to **Domain List** → Click **Manage** next to your domain
2. Go to **Advanced DNS** tab
3. Click **Add New Record**
4. Add A record: Type `A`, Host `@`, Value `76.76.21.21`
5. Add CNAME record: Type `CNAME`, Host `www`, Value `cname.vercel-dns.com`
6. Click **Save All Changes**

#### GoDaddy:
1. Go to **My Products** → Click **DNS** next to your domain
2. Scroll to **Records** section
3. Click **Add** button
4. Add A record: Type `A`, Name `@`, Value `76.76.21.21`, TTL `600`
5. Add CNAME record: Type `CNAME`, Name `www`, Value `cname.vercel-dns.com`, TTL `600`
6. Click **Save**

#### Cloudflare:
1. Select your domain
2. Go to **DNS** → **Records**
3. Click **Add record**
4. Add A record: Type `A`, Name `@`, IPv4 address `76.76.21.21`, Proxy status `DNS only`
5. Add CNAME record: Type `CNAME`, Name `www`, Target `cname.vercel-dns.com`, Proxy status `DNS only`
6. Click **Save**

#### Google Domains:
1. Go to **DNS** section
2. Scroll to **Custom resource records**
3. Click **Add record**
4. Add A record: Type `A`, Name `@`, IPv4 address `76.76.21.21`
5. Add CNAME record: Type `CNAME`, Name `www`, Data `cname.vercel-dns.com`
6. Click **Save**

---

## 📧 Step 3: Configure DNS for Email (After Choosing Email Provider)

### For Google Workspace:

**MX Records to Add:**
```
Priority: 1
Type: MX
Name: @ (or leave blank)
Value: aspmx.l.google.com

Priority: 5
Type: MX
Name: @
Value: alt1.aspmx.l.google.com

Priority: 5
Type: MX
Name: @
Value: alt2.aspmx.l.google.com

Priority: 10
Type: MX
Name: @
Value: alt3.aspmx.l.google.com

Priority: 10
Type: MX
Name: @
Value: alt4.aspmx.l.google.com
```

**TXT Record for Verification:**
```
Type: TXT
Name: @
Value: (Provided by Google during setup)
```

### For Microsoft 365:

**MX Record:**
```
Priority: 0
Type: MX
Name: @
Value: yourdomain-com.mail.protection.outlook.com
(Replace "yourdomain" with your actual domain)
```

**TXT Records:**
```
Type: TXT
Name: @
Value: (Multiple TXT records provided by Microsoft)
```

### For Zoho Mail:

**MX Records:**
```
Priority: 10
Type: MX
Name: @
Value: mx.zoho.com

Priority: 20
Type: MX
Name: @
Value: mx2.zoho.com
```

---

## ⏱️ Step 4: Wait for DNS Propagation

- **DNS changes** can take 24-48 hours to fully propagate
- **Some changes** may appear within a few hours
- **Check propagation** at: https://dnschecker.org

### How to Check:

1. Visit https://dnschecker.org
2. Enter your domain: `thetrustgroup.com`
3. Select record type: `A` or `MX`
4. Click **Search**
5. Green checkmarks = DNS is working globally

---

## ✅ Step 5: Add Domain to Vercel

After DNS records are added:

1. **Go to Vercel Dashboard** → Your Project → **Settings** → **Domains**
2. **Click "Add Domain"**
3. **Enter your domain:** `thetrustgroup.com`
4. **Click "Add"**
5. **Vercel will verify** the DNS records
6. **SSL certificate** will be automatically provisioned (can take a few minutes)

---

## 🔍 Verification Checklist

- [ ] A record added for root domain (@)
- [ ] CNAME record added for www subdomain
- [ ] DNS records saved in registrar
- [ ] Waited 24-48 hours for propagation
- [ ] Verified DNS propagation at dnschecker.org
- [ ] Added domain to Vercel
- [ ] Vercel shows domain as "Valid"
- [ ] SSL certificate issued (automatic)
- [ ] Website accessible at yourdomain.com
- [ ] Website accessible at www.yourdomain.com

---

## 🐛 Troubleshooting

### Domain Not Working After 48 Hours?

1. **Double-check DNS records:**
   - A record points to: `76.76.21.21`
   - CNAME record points to: `cname.vercel-dns.com`

2. **Check for typos:**
   - No extra spaces
   - Correct record types
   - Correct values

3. **Clear DNS cache:**
   ```bash
   # macOS
   sudo dscacheutil -flushcache
   
   # Windows
   ipconfig /flushdns
   ```

4. **Check Vercel domain status:**
   - Go to Vercel → Settings → Domains
   - Check for error messages
   - Verify DNS configuration

### Common Issues:

**Issue:** "Domain not found"
- **Solution:** Wait longer for DNS propagation (up to 48 hours)

**Issue:** "SSL certificate pending"
- **Solution:** Wait 5-10 minutes, Vercel auto-provisions SSL

**Issue:** "Invalid DNS configuration"
- **Solution:** Double-check A and CNAME records match exactly

---

## 📝 Next Steps After DNS is Configured

1. ✅ Wait for DNS propagation (24-48 hours)
2. ✅ Add domain to Vercel
3. ✅ Set up business email (Google Workspace/Microsoft 365)
4. ✅ Add MX records for email
5. ✅ Update contact information in `/data/config.json`
6. ✅ Test website at your domain
7. ✅ Test email sending/receiving

---

## 💡 Pro Tips

- **Keep DNS records simple** - Only add what you need
- **Document your DNS settings** - Take screenshots
- **Use DNS checker** - Verify changes are live globally
- **Test before going live** - Use Vercel preview URLs first
- **Keep registrar account secure** - Enable 2FA

