# Private Briefing Form – Where Submissions Go & Setup

## Where you get private briefing submissions

All **private briefing** submissions (from `/briefing` and the contact page briefing section) are delivered to:

**Inbox:** `info@thetrustgroupsolutions.com`

- Same mailbox as the main contact form.
- Delivered via **EmailJS** using the same email service; the briefing form can use either the same template as the contact form or a **dedicated briefing template** (recommended).

If you don’t see them:

1. Check **spam/junk** for `info@thetrustgroupsolutions.com`.
2. In **EmailJS** dashboard: **Email Services** → your service → **History** (see if sends succeeded or failed).
3. Confirm in **Vercel** (or your host) that these env vars are set for production:  
   `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` (and optionally `NEXT_PUBLIC_EMAILJS_BRIEFING_TEMPLATE_ID`).

---

## Recommended: dedicated briefing template

The contact template uses variables like `{{from_name}}`, `{{company}}`, `{{message}}`.  
The **briefing form** sends: `first_name`, `last_name`, `organization`, `role`, `service_area`, `project_overview`, `requires_nda`.  
If the same template is used, those fields appear empty in the email.

**Recommendation:** create a **second EmailJS template** only for the private briefing form.

### 1. Create a new template in EmailJS

- **Email Services** → same service you use for the contact form.
- **Email Templates** → **Create New Template**.

### 2. Template settings

**To Email:**  
`info@thetrustgroupsolutions.com`

**From Name:**  
`{{first_name}} {{last_name}}`

**Reply To:**  
`{{reply_to}}`

**Subject:**  
`Private Briefing Request: {{first_name}} {{last_name}} – {{organization}}`

### 3. Content (paste into the message body)

```
You have received a private briefing request from your website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{first_name}} {{last_name}}
Email: {{from_email}}
Phone: {{phone}}
Organization: {{organization}}
Role: {{role}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service area: {{service_area}}
Budget: {{budget}}
Requires NDA: {{requires_nda}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{project_overview}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reply to: {{reply_to}}
```

Save and copy the **Template ID** (e.g. `template_xxxxx`).

### 4. Environment variable (optional but recommended)

- **Local:** in `.env.local` add:
  - `NEXT_PUBLIC_EMAILJS_BRIEFING_TEMPLATE_ID=template_xxxxx`  
  (use the ID you copied)
- **Vercel:** Project → **Settings** → **Environment Variables** → add the same name and value → **Redeploy**.

If `NEXT_PUBLIC_EMAILJS_BRIEFING_TEMPLATE_ID` is set, the briefing form uses this template; otherwise it falls back to `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` (contact template).

---

## Summary

| Question | Answer |
|----------|--------|
| Where do I get private briefing submissions? | **info@thetrustgroupsolutions.com** (inbox and spam). |
| How are they sent? | EmailJS, same service as the contact form. |
| Same template as contact? | Can be; for correct fields, use a dedicated briefing template and `NEXT_PUBLIC_EMAILJS_BRIEFING_TEMPLATE_ID`. |
