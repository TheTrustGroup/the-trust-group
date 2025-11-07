# Setting Up Business Email & Updating Contact Details

## 📧 Getting a Business Email

You have several options for getting a professional business email address:

### Option 1: Google Workspace (Recommended)
**Best for:** Professional email with Google services integration

**Steps:**
1. Go to [Google Workspace](https://workspace.google.com)
2. Choose a plan (Starter: $6/user/month)
3. Sign up with your domain (thetrustgroup.com)
4. Verify domain ownership
5. Create email addresses (e.g., info@thetrustgroup.com, contact@thetrustgroup.com)

**Benefits:**
- Professional email addresses
- Gmail interface
- Google Drive, Calendar, Meet included
- 30GB storage per user
- Mobile apps available

### Option 2: Microsoft 365 Business
**Best for:** Integration with Microsoft Office suite

**Steps:**
1. Go to [Microsoft 365](https://www.microsoft.com/microsoft-365/business)
2. Choose a plan (Business Basic: $6/user/month)
3. Sign up with your domain
4. Verify domain ownership
5. Create email addresses

**Benefits:**
- Outlook email
- Office apps (Word, Excel, PowerPoint)
- OneDrive storage
- Teams for collaboration

### Option 3: Zoho Mail (Free Option)
**Best for:** Budget-conscious businesses

**Steps:**
1. Go to [Zoho Mail](https://www.zoho.com/mail/)
2. Sign up for free plan (up to 5 users)
3. Add your domain
4. Verify domain ownership
5. Create email addresses

**Benefits:**
- Free for up to 5 users
- 5GB storage per user
- Professional email addresses
- Mobile apps available

### Option 4: Namecheap Email (If domain is with Namecheap)
**Best for:** Simple setup if domain is already with Namecheap

**Steps:**
1. Log into Namecheap account
2. Go to Domain List → Manage
3. Enable Private Email
4. Create email addresses

**Benefits:**
- Easy setup if domain is with Namecheap
- Affordable pricing
- Simple interface

## 🔧 Domain Requirements

Before setting up email, you need:
- A domain name (e.g., thetrustgroup.com)
- Access to domain DNS settings
- Ability to add MX records (for email routing)

## 📝 Recommended Email Addresses

Common business email addresses to create:
- `info@thetrustgroup.com` - General inquiries
- `contact@thetrustgroup.com` - Contact form submissions
- `hello@thetrustgroup.com` - General communication
- `support@thetrustgroup.com` - Customer support
- `sales@thetrustgroup.com` - Sales inquiries
- `careers@thetrustgroup.com` - Job applications

## 🏢 Updating Contact Information

Once you have your business email, update it in the website:

### Step 1: Edit Contact Details

Open `/data/config.json` and update the `contact` section:

```json
{
  "contact": {
    "address": {
      "line1": "Your Actual Street Address",
      "line2": "Suite/Floor Number (optional)",
      "city": "Your City",
      "state": "Your State",
      "zip": "Your ZIP Code",
      "country": "Your Country"
    },
    "email": "info@thetrustgroup.com",  // ← Update this
    "phone": "+1 (555) 123-4567",        // ← Update this
    "businessHours": {
      "weekdays": "Monday - Friday: 9:00 AM - 6:00 PM PST",
      "weekends": "Saturday: 10:00 AM - 2:00 PM PST",
      "closed": "Sunday: Closed"
    }
  }
}
```

### Step 2: Update Social Links Email

Also update the email link in `socialLinks`:

```json
{
  "name": "Email",
  "icon": "Mail",
  "href": "mailto:info@thetrustgroup.com"  // ← Update this
}
```

### Step 3: Update Company Headquarters

Update the headquarters location:

```json
{
  "company": {
    "headquarters": "Your City, State"  // ← Update this
  }
}
```

## 🚀 Quick Setup Checklist

- [ ] Choose email provider (Google Workspace recommended)
- [ ] Sign up for email service
- [ ] Verify domain ownership
- [ ] Create email addresses (info@, contact@, etc.)
- [ ] Test email sending/receiving
- [ ] Update `/data/config.json` with new email
- [ ] Update `/data/config.json` with office address
- [ ] Update `/data/config.json` with phone number
- [ ] Update business hours if needed
- [ ] Test contact form with new email
- [ ] Commit and push changes to GitHub

## 📍 Where Contact Info Appears

Your contact information appears in:
- Contact page (`/contact`)
- Footer (on all pages)
- Contact form
- Chatbot responses
- Email links throughout the site

## 🔒 Security Tips

1. **Use strong passwords** for email accounts
2. **Enable 2-factor authentication** (2FA)
3. **Set up email forwarding** if needed
4. **Regular backups** of important emails
5. **Monitor for spam** and phishing attempts

## 💡 Pro Tips

- Start with `info@` and `contact@` addresses
- Set up email forwarding to your personal email initially
- Use a professional email signature
- Consider setting up auto-responders for after-hours
- Integrate email with your CRM if you have one

