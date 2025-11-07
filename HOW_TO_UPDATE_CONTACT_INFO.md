# How to Update Contact Details and Information

## Quick Guide

All contact information is stored in **`data/config.json`**. This is a centralized file that controls contact details across your entire website.

## What You Can Update

### 1. Contact Information (`contact` section)

Edit the following fields in `data/config.json`:

```json
"contact": {
  "address": {
    "line1": "Your Street Address",
    "line2": "Suite/Floor (optional)",
    "city": "Your City",
    "state": "Your State",
    "zip": "Your ZIP Code",
    "country": "Your Country"
  },
  "email": "your-email@thetrustgroupsolutions.com",
  "phone": "+1 (555) 123-4567",
  "businessHours": {
    "weekdays": "Monday - Friday: 9:00 AM - 6:00 PM PST",
    "weekends": "Saturday: 10:00 AM - 2:00 PM PST",
    "closed": "Sunday: Closed"
  },
  "social": {
    "linkedin": "https://linkedin.com/company/yourcompany",
    "twitter": "https://twitter.com/yourcompany",
    "github": "https://github.com/yourcompany",
    "facebook": "https://facebook.com/yourcompany",
    "instagram": "https://instagram.com/yourcompany",
    "youtube": "https://youtube.com/yourcompany"
  }
}
```

### 2. Company Information (`company` section)

```json
"company": {
  "name": "The Trust Group",
  "tagline": "Your Tagline Here",
  "description": "Your company description...",
  "founded": "2014",
  "headquarters": "Your City, State",
  "website": "https://thetrustgroupsolutions.com"
}
```

### 3. Social Links (`socialLinks` section)

This controls which social links appear in the footer and other places:

```json
"socialLinks": [
  {
    "name": "LinkedIn",
    "icon": "Linkedin",
    "href": "https://linkedin.com/company/thetrustgroup"
  },
  {
    "name": "Twitter",
    "icon": "Twitter",
    "href": "https://twitter.com/thetrustgroup"
  },
  {
    "name": "GitHub",
    "icon": "Github",
    "href": "https://github.com/thetrustgroup"
  },
  {
    "name": "Email",
    "icon": "Mail",
    "href": "mailto:info@thetrustgroupsolutions.com"
  }
]
```

## Where These Details Appear

- **Contact Page** (`/contact`) - Full contact information display
- **Footer** - Email, phone, and social links
- **About Page** - Company information
- **Chatbot** - Contact information in responses
- **SEO Metadata** - Email in structured data

## Steps to Update

1. **Open** `data/config.json` in your code editor
2. **Edit** the values you want to change
3. **Save** the file
4. **Test** locally (if running dev server) or push to GitHub for deployment

## Important Notes

- **Email**: Make sure to update both `contact.email` and the `mailto:` link in `socialLinks` if you change the email
- **Phone**: Format it as you want it displayed (e.g., "+1 (555) 123-4567")
- **Social Media**: Leave empty strings `""` for social platforms you don't use
- **JSON Syntax**: Be careful with commas and quotes - JSON is strict about syntax

## Example: Updating Your Phone Number

```json
// Before
"phone": "+1 (555) 123-4567"

// After
"phone": "+1 (415) 555-0123"
```

## Example: Adding a New Social Media Link

```json
"socialLinks": [
  // ... existing links ...
  {
    "name": "Facebook",
    "icon": "Facebook",
    "href": "https://facebook.com/thetrustgroup"
  }
]
```

## After Making Changes

1. Save the file
2. If you're running locally: The changes should appear immediately (Next.js hot reload)
3. If deploying: Commit and push to GitHub, and Vercel will automatically deploy the changes

## Need Help?

If you want me to update specific contact details for you, just tell me what needs to be changed and I'll update the file for you!

