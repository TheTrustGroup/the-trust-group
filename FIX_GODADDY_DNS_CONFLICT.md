# Fixing GoDaddy DNS Conflict for www Record

## 🔍 The Problem

You're seeing: **"Record name www conflicts with another record"**

This means there's already a DNS record for `www` that conflicts with the CNAME record you're trying to add.

## ✅ Solution: Remove Conflicting Record First

### Step 1: Find the Conflicting Record

1. In GoDaddy DNS Management, scroll to the **Records** section
2. Look for any record with **Name: `www`**
3. Common conflicting records:
   - An **A record** with Name `www` pointing to an IP address
   - An existing **CNAME record** with Name `www`
   - A **TXT record** or other record with Name `www`

### Step 2: Delete the Conflicting Record

1. Find the record with Name `www`
2. Click the **three dots (⋯)** or **pencil icon** next to it
3. Click **Delete** (or **Remove**)
4. Confirm deletion

### Step 3: Add the Correct CNAME Record

Now you can add the correct record:

1. Click **Add** button
2. Fill in:
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Value:** `cname.vercel-dns.com`
   - **TTL:** `600` or `3600`
3. Click **Save**

## 📋 Common Scenarios

### Scenario 1: Existing A Record for www

**If you see:**
```
Type: A
Name: www
Value: (some IP address like 192.0.2.1)
```

**Action:** Delete this A record, then add the CNAME record.

### Scenario 2: Existing CNAME with Wrong Value

**If you see:**
```
Type: CNAME
Name: www
Value: (something other than cname.vercel-dns.com)
```

**Action:** Either:
- Delete and recreate with correct value, OR
- Edit the existing record and change the Value to `cname.vercel-dns.com`

### Scenario 3: Multiple www Records

**If you see multiple records with Name `www`:**
- Delete ALL of them
- Then add the single correct CNAME record

## 🎯 What Your DNS Should Look Like

After fixing, you should have:

```
Type    Name    Value                    TTL
----    ----    -----                    ---
A       @       76.76.21.21              600
CNAME   www     cname.vercel-dns.com      600
```

**Important:** You should only have ONE record for `www`, and it should be a CNAME pointing to `cname.vercel-dns.com`.

## ⚠️ Important Notes

1. **You can't have both A and CNAME** for the same name (`www`)
2. **Only one CNAME** per name is allowed
3. **Delete first, then add** - Don't try to edit if it's a different type
4. **Save changes** after deleting and adding

## 🔄 Step-by-Step Fix

1. ✅ Go to GoDaddy DNS Management
2. ✅ Find record with Name `www`
3. ✅ Delete that record
4. ✅ Click "Add" button
5. ✅ Add CNAME: Name `www`, Value `cname.vercel-dns.com`
6. ✅ Save
7. ✅ Verify both records exist (A for @, CNAME for www)

## 🐛 Still Having Issues?

If you still see conflicts:

1. **Refresh the page** - Sometimes GoDaddy needs a refresh
2. **Check for hidden records** - Scroll through all records
3. **Wait a few minutes** - DNS changes can take a moment to process
4. **Contact GoDaddy support** - They can help identify the conflict

