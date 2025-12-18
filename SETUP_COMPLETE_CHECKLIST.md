# EmailJS Setup Complete Checklist

## ✅ What You've Done
- [x] Created EmailJS account
- [x] Created email service
- [x] Created email template

## 📋 What You Need Now

### Step 1: Get Your Credentials

You need to collect these 3 values from EmailJS:

1. **Service ID**
   - Go to: Email Services
   - Click on your service
   - Copy the Service ID (usually looks like: `service_xxxxxxx`)

2. **Template ID** 
   - Go to: Email Templates
   - Click on the template you just created
   - Copy the Template ID (usually looks like: `template_xxxxxxx`)

3. **Public Key**
   - Go to: Account → General
   - Find "Public Key" or "API Key"
   - Copy it

### Step 2: Add to Environment Variables

**For Local Development:**

1. Create `.env.local` file in your project root (same folder as `package.json`)

2. Add these three lines (replace with your actual values):

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

3. Save the file

4. **Restart your dev server:**
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

**For Vercel Production:**

1. Go to Vercel Dashboard
2. Select your project
3. Go to: Settings → Environment Variables
4. Add each variable:
   - Name: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - Value: (paste your Service ID)
   - Environment: Select all (Production, Preview, Development)
   - Click "Save"
   
   Repeat for:
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

5. **Redeploy** your application

### Step 3: Test It!

1. Go to your contact page: `http://localhost:3000/contact` (or your live site)
2. Fill out the contact form
3. Submit it
4. Check your email: **info@thetrustgroupsolutions.com**
5. You should receive the email within seconds! 🎉

## 🔍 How to Find Your Credentials

### Service ID
- EmailJS Dashboard → Email Services
- Click on your service name
- Service ID is shown at the top or in the URL

### Template ID
- EmailJS Dashboard → Email Templates  
- Click on your template name
- Template ID is shown at the top or in the URL
- Or in the template list, it's usually on the right side

### Public Key
- EmailJS Dashboard → Account (top right) → General
- Scroll down to find "Public Key" or "API Key"
- Click "Copy" or select and copy

## ✅ Verification

After adding environment variables, verify:

1. **Check `.env.local` exists** (for local dev)
2. **Restart dev server** (important!)
3. **Test the form** - submit a test message
4. **Check EmailJS logs:**
   - Go to EmailJS Dashboard → Email Logs
   - You should see your test email there
5. **Check your inbox:** info@thetrustgroupsolutions.com

## 🆘 Troubleshooting

**"EmailJS configuration is missing" error:**
- Make sure `.env.local` file exists
- Check all 3 variables are there (no typos)
- Restart dev server after creating/editing `.env.local`
- On Vercel: Make sure you redeployed after adding variables

**Form submits but no email arrives:**
- Check EmailJS Dashboard → Email Logs (see if it was sent)
- Check spam folder
- Verify "To Email" in template is: `info@thetrustgroupsolutions.com`
- Check EmailJS service is properly connected

**Variables not working:**
- Make sure variable names start with `NEXT_PUBLIC_`
- No spaces around the `=` sign
- Restart dev server after changes

## 🎯 Next Steps

Once everything is working:
1. Test with a real submission
2. Verify email formatting looks good
3. Set up email forwarding if needed
4. Consider upgrading EmailJS plan if you expect >200 emails/month

---

**You're almost there!** Just add those 3 environment variables and you're done! 🚀


