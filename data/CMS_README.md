# Content Management System (CMS) Guide

This guide explains how to update website content without touching code. All content is stored in JSON files in the `/data` directory.

## 📁 Data Structure

All content files are located in the `/data` directory:

```
data/
├── config.json          # Site configuration (company info, contact, navigation)
├── services.json         # Service descriptions
├── projects.json         # Portfolio projects
├── testimonials.json     # Client testimonials
├── team.json            # Team members
└── technologies.json    # Technology stack
```

## 🔧 How to Update Content

### 1. Services (`services.json`)

Edit `/data/services.json` to update service descriptions, features, and links.

**Example:**
```json
{
  "id": "ai-solutions",
  "icon": "Brain",
  "title": "AI Solutions & Implementation",
  "description": "Your service description here...",
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "variant": "primary",
  "href": "/services/ai-solutions"
}
```

**Available Icons:** Brain, Code, Smartphone, Globe, Cloud, TrendingUp, and any icon from [lucide-react](https://lucide.dev/)

**Variants:** `"default"`, `"primary"`, or `"accent"`

### 2. Projects/Portfolio (`projects.json`)

Edit `/data/projects.json` to add, update, or remove portfolio projects.

**Example:**
```json
{
  "id": "1",
  "title": "Project Name",
  "description": "Short description",
  "longDescription": "Detailed description",
  "category": "ai",
  "technologies": ["React", "Node.js"],
  "featured": true,
  "caseStudyUrl": "/portfolio/project-name",
  "client": "Client Name",
  "year": "2024",
  "results": [
    "Result 1",
    "Result 2"
  ]
}
```

**Categories:** `"ai"`, `"web"`, `"mobile"`, `"enterprise"`, or `"all"`

### 3. Testimonials (`testimonials.json`)

Edit `/data/testimonials.json` to add or update client testimonials.

**Example:**
```json
{
  "id": "1",
  "quote": "Testimonial text here...",
  "clientName": "John Doe",
  "clientTitle": "CEO",
  "company": "Company Name",
  "rating": 5,
  "featured": true
}
```

**Rating:** 1-5 (integer)
**Featured:** `true` or `false`

### 4. Team Members (`team.json`)

Edit `/data/team.json` to update team member information.

**Example:**
```json
{
  "id": "1",
  "name": "John Doe",
  "role": "Chief Executive Officer",
  "bio": "Bio text here...",
  "linkedin": "https://linkedin.com/in/johndoe",
  "email": "john@company.com",
  "department": "Executive"
}
```

### 5. Technologies (`technologies.json`)

Edit `/data/technologies.json` to update the technology stack.

**Example:**
```json
{
  "name": "React",
  "category": "frontend",
  "proficiency": "expert",
  "description": "UI library"
}
```

**Proficiency Levels:** `"expert"`, `"advanced"`, `"proficient"`, or `"beginner"`

**Categories:** `"ai-ml"`, `"frontend"`, `"backend"`, `"mobile"`, `"cloud-devops"`, `"databases"`

### 6. Site Configuration (`config.json`)

Edit `/data/config.json` to update:
- Company information
- Contact details
- Social media links
- Navigation menus
- Footer links

**Important Fields:**
- `company.name` - Company name
- `company.tagline` - Company tagline
- `contact.email` - Contact email
- `contact.phone` - Contact phone
- `contact.address` - Office address
- `socialLinks` - Social media links

## 🚀 Quick Updates

### Adding a New Service

1. Open `/data/services.json`
2. Add a new service object to the array
3. Save the file
4. The service will appear on the website automatically

### Adding a New Project

1. Open `/data/projects.json`
2. Add a new project to the `projects` array
3. Save the file
4. The project will appear in the portfolio section

### Updating Contact Information

1. Open `/data/config.json`
2. Update the `contact` section
3. Save the file
4. Changes appear immediately

### Changing Social Media Links

1. Open `/data/config.json`
2. Update the `socialLinks` array
3. Save the file
4. Links update in footer and contact sections

## 📝 JSON Formatting Tips

- Always use double quotes (`"`) for strings
- Use commas (`,`) to separate items in arrays and objects
- Don't add trailing commas
- Validate JSON syntax before saving (use a JSON validator)

## 🔄 After Making Changes

1. **Save the JSON file**
2. **Restart the development server** (if running):
   ```bash
   npm run dev
   ```
3. **Refresh your browser** to see changes

## 🎨 Icon Names

Icons are from [lucide-react](https://lucide.dev/). Use the exact icon name (e.g., `"Brain"`, `"Code"`, `"Smartphone"`).

Common icons:
- `Brain` - AI/Machine Learning
- `Code` - Development
- `Smartphone` - Mobile
- `Globe` - Web
- `Cloud` - Cloud Services
- `TrendingUp` - Growth/Strategy
- `Database` - Databases
- `Layers` - General Tech

## ⚠️ Important Notes

1. **Always validate JSON** before saving to avoid breaking the site
2. **Backup files** before making major changes
3. **Test changes** in development before deploying
4. **Keep IDs unique** - don't duplicate IDs
5. **Use proper formatting** - maintain consistent structure

## 🆘 Troubleshooting

### Site Not Updating
- Check JSON syntax for errors
- Restart the development server
- Clear browser cache
- Check console for errors

### Icons Not Showing
- Verify icon name matches lucide-react exactly
- Check for typos in icon names
- Use fallback icon if needed

### Content Not Appearing
- Verify JSON structure matches examples
- Check that arrays/objects are properly formatted
- Ensure required fields are present

## 📚 Additional Resources

- [JSON Validator](https://jsonlint.com/)
- [Lucide Icons](https://lucide.dev/)
- [Next.js Documentation](https://nextjs.org/docs)

## 🔐 Environment Variables (Optional)

For sensitive or frequently changing content, you can use environment variables. See `.env.example` for configuration.

---

**Need Help?** Contact the development team or refer to the main README.md for more information.

