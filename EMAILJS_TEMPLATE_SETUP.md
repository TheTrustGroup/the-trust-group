# EmailJS Template Setup - Step-by-Step Guide

## 🎯 Quick Overview

You need to create an email template in EmailJS that will format the contact form submissions. This guide walks you through it step-by-step.

## 📋 Step-by-Step Instructions

### Step 1: Navigate to Email Templates

1. Log into your EmailJS account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. In the left sidebar, click on **"Email Templates"**
3. You should see a button that says **"Create New Template"** or **"Add New Template"**
4. Click it

### Step 2: Fill in Template Details

You'll see a form with several fields. Here's what to fill in:

#### Template Name (Optional but Recommended)
```
Contact Form - The Trust Group
```

#### Service
- Select the email service you created earlier (the one connected to info@thetrustgroupsolutions.com)

#### Template ID
- This will be auto-generated, but you can see it after saving
- **Copy this ID** - you'll need it for your environment variables

### Step 3: Email Settings

#### To Email
```
info@thetrustgroupsolutions.com
```

#### From Name
```
{{from_name}}
```
*(This will show the customer's name as the sender)*

#### From Email
Leave this as your service email (it's usually auto-filled)

#### Reply To
```
{{reply_to}}
```
*(This allows you to reply directly to the customer)*

### Step 4: Email Subject

In the **Subject** field, paste this:

```
New Contact Form Submission from {{from_name}}
```

### Step 5: Email Content (The Template Body)

In the **Content** or **Message** field, paste this entire template:

```
Hello,

You have received a new contact form submission from your website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service: {{service}}
Budget: {{budget}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{files_info}}
Total Files: {{files_count}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: {{reply_to}}

This email was sent from your website contact form.
```

### Step 6: Save the Template

1. Click **"Save"** or **"Create Template"** button
2. After saving, you'll see your **Template ID** (usually something like `template_xxxxxxx`)
3. **Copy this Template ID** - you'll need it!

## 🎨 Simplified Template (If the Above Doesn't Work)

If you're having issues, try this simpler version:

**Subject:**
```
New Contact: {{from_name}}
```

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Service: {{service}}
Budget: {{budget}}

Message:
{{message}}

Files: {{files_info}} ({{files_count}} files)

Reply to: {{reply_to}}
```

## 🔍 Common Issues & Solutions

### Issue 1: "I can't find the Email Templates section"

**Solution:**
- Make sure you're logged into EmailJS
- Look in the left sidebar menu
- It might be under "Integrations" or "Templates"
- If you don't see it, you might need to verify your email first

### Issue 2: "The template editor looks different"

**Solution:**
- EmailJS has updated their interface
- Look for fields labeled: "To", "From", "Subject", "Content", "Message", or "Body"
- The variable syntax `{{variable_name}}` should work the same way

### Issue 3: "I don't see where to add variables"

**Solution:**
- Variables are added by typing `{{variable_name}}` directly in the text fields
- You don't need a special button - just type them in
- Make sure to use double curly braces: `{{` and `}}`

### Issue 4: "The template saves but variables show as {{variable_name}} in emails"

**Solution:**
- This means the variable names don't match what the form is sending
- Check that you're using exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Make sure there are no spaces: `{{ from_name }}` won't work (should be `{{from_name}}`)

### Issue 5: "I can't find the Template ID after saving"

**Solution:**
- The Template ID is usually shown:
  - In the template list (right side of each template)
  - In the template edit page (top or bottom)
  - In the URL when editing: `.../template/xxxxxxx`
- It usually looks like: `template_abc123` or just `abc123`

## 📸 Visual Guide (What to Look For)

When you're in the EmailJS template editor, you should see fields like:

```
┌─────────────────────────────────────┐
│ Template Name: [Contact Form...]   │
│ Service: [Select your service ▼]   │
│                                     │
│ To Email: [info@thetrust...]       │
│ From Name: [{{from_name}}]         │
│ Reply To: [{{reply_to}}]           │
│                                     │
│ Subject: [New Contact Form...]     │
│                                     │
│ Content/Message:                    │
│ ┌─────────────────────────────────┐ │
│ │ [Large text area - paste        │ │
│ │  template here]                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ [Save] [Cancel]                     │
└─────────────────────────────────────┘
```

## ✅ Checklist

Before moving on, make sure you have:

- [ ] Created the email template
- [ ] Set "To Email" to: `info@thetrustgroupsolutions.com`
- [ ] Set "Reply To" to: `{{reply_to}}`
- [ ] Added the subject with `{{from_name}}`
- [ ] Pasted the full template content
- [ ] Saved the template
- [ ] **Copied your Template ID** (most important!)

## 🆘 Still Having Issues?

If you're still stuck, try this:

1. **Use EmailJS's default template first:**
   - Create a new template
   - Use their default example
   - Just change "To Email" to `info@thetrustgroupsolutions.com`
   - Save it and test
   - Then come back and customize it

2. **Check EmailJS documentation:**
   - Go to: https://www.emailjs.com/docs/
   - Search for "creating templates"

3. **Contact EmailJS support:**
   - They have live chat support
   - Usually very helpful with template setup

## 📝 Next Steps

Once your template is created:

1. Copy your **Template ID**
2. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```
3. Test the form!

---

**Need help?** The template variables your forms send are listed in `EMAILJS_SETUP.md` under "Email Template Variables".


