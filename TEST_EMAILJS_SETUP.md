# Test Your EmailJS Setup

## ✅ Setup Complete!

Your `.env.local` file has been created with your EmailJS credentials:
- ✅ Service ID: `service_4zimeep`
- ✅ Template ID: `template_b0wanef`
- ✅ Public Key: `3cv5xhklDMxUuZh5Y`

## 🧪 How to Test

### Step 1: Restart Your Dev Server

**Important:** You MUST restart your dev server for environment variables to load!

1. If your dev server is running, stop it (Ctrl+C or Cmd+C)
2. Start it again:
   ```bash
   npm run dev
   ```

### Step 2: Test the Contact Form

1. Open your browser and go to: `http://localhost:3000/contact`
2. Fill out the contact form:
   - Name: Test User
   - Email: your-test-email@example.com
   - Company: Test Company
   - Service: Select any service
   - Description: This is a test message to verify EmailJS is working
   - Budget: Select any option
3. Click "Send Message"
4. You should see a success message: "Thank you! We'll get back to you within 24 hours."

### Step 3: Verify Email Was Sent

1. **Check EmailJS Dashboard:**
   - Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - Click on "Email Logs" or "Activity"
   - You should see your test email listed there

2. **Check Your Inbox:**
   - Go to **info@thetrustgroupsolutions.com** inbox
   - You should receive an email within seconds
   - Check spam folder if not in inbox

3. **Verify Email Content:**
   - The email should have the subject: "New Contact Form Submission from Test User"
   - It should contain all the form data you submitted
   - The "Reply To" should be your test email address

## ✅ Success Indicators

You'll know it's working if:
- ✅ Form shows success message after submission
- ✅ Email appears in EmailJS dashboard logs
- ✅ Email arrives in info@thetrustgroupsolutions.com inbox
- ✅ Email contains all the form data correctly formatted

## 🆘 Troubleshooting

### "EmailJS configuration is missing" Error

**Solution:**
- Make sure you restarted the dev server after creating `.env.local`
- Check that `.env.local` is in the project root (same folder as `package.json`)
- Verify the file has all 3 variables with correct names
- Make sure there are no extra spaces or quotes around the values

### Form Submits But No Email Arrives

**Check:**
1. EmailJS Dashboard → Email Logs
   - If you see the email there, EmailJS is working
   - Check if there's an error message
   
2. Email Service Connection
   - Go to EmailJS → Email Services
   - Make sure your service shows as "Connected"
   - If not, reconnect it

3. Template Settings
   - Go to EmailJS → Email Templates
   - Click on your template
   - Verify "To Email" is: `info@thetrustgroupsolutions.com`
   - Check "Reply To" is: `{{reply_to}}`

4. Spam Folder
   - Check spam/junk folder
   - The email might be filtered

### Variables Show as {{variable_name}} in Email

**Solution:**
- This means the template variables aren't matching
- Check that your template uses exactly: `{{from_name}}`, `{{from_email}}`, etc.
- No spaces: `{{ from_name }}` won't work (should be `{{from_name}}`)

## 🚀 For Production (Vercel)

If you're deploying to Vercel, you also need to add these environment variables there:

1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add each variable:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_4zimeep`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_b0wanef`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `3cv5xhklDMxUuZh5Y`
4. Select all environments (Production, Preview, Development)
5. **Redeploy** your application

## 📧 Where Messages Go

All contact form submissions will be sent to:
- **Email:** info@thetrustgroupsolutions.com
- **Reply To:** Customer's email (so you can reply directly)

## 🎉 You're All Set!

Once you've tested and confirmed emails are arriving, your contact forms are fully functional!

---

**Need help?** Check `EMAILJS_SETUP.md` for more detailed information.
