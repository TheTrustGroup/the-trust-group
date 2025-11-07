# Fix Vercel DNS Configuration for thetrustgroupsolutions.com

## Current Issue
Vercel is detecting conflicting DNS records that need to be removed before the domain can be properly configured.

## Steps to Fix

### 1. Remove Conflicting A Records in GoDaddy

1. Log in to your GoDaddy account
2. Go to **My Products** → **DNS** (or **Domains** → **DNS**)
3. Find your domain `thetrustgroupsolutions.com`
4. Look for these **A records** and **DELETE** them:
   - **Type**: A
   - **Name**: @
   - **Value**: `13.248.243.5`
   
   - **Type**: A
   - **Name**: @
   - **Value**: `76.223.105.230`

### 2. Add the Correct A Record

After removing the conflicting records, add this new A record:

- **Type**: A
- **Name**: @ (or leave blank, or use `@`)
- **Value**: `216.198.79.1`
- **TTL**: 600 (or default)

### 3. Verify www Subdomain

For `www.thetrustgroupsolutions.com`, Vercel shows "DNS Change Recommended". Check if you have a CNAME record:

- **Type**: CNAME
- **Name**: www
- **Value**: `cname.vercel-dns.com`
- **TTL**: 600 (or default)

If this CNAME record doesn't exist, add it.

### 4. Wait for DNS Propagation

After making these changes:
- DNS changes can take **24-48 hours** to fully propagate
- However, they often work within **1-2 hours**
- You can check propagation status at: https://www.whatsmydns.net/

### 5. Verify in Vercel

Once DNS has propagated:
1. Go back to your Vercel project → **Settings** → **Domains**
2. The status should change from "Invalid Configuration" to "Valid Configuration"
3. Vercel will automatically issue an SSL certificate

## Quick Checklist

- [ ] Removed A record: `@` → `13.248.243.5`
- [ ] Removed A record: `@` → `76.223.105.230`
- [ ] Added A record: `@` → `216.198.79.1`
- [ ] Verified CNAME record: `www` → `cname.vercel-dns.com`
- [ ] Waited for DNS propagation (check whatsmydns.net)
- [ ] Verified domain status in Vercel dashboard

## Notes

- The old IP addresses (`13.248.243.5` and `76.223.105.230`) are from Vercel's previous IP range
- The new IP (`216.198.79.1`) is part of Vercel's expanded IP range
- You can only have **ONE** A record for `@` pointing to Vercel
- Multiple A records for the same name cause conflicts

