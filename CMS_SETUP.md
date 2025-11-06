# Content Management System (CMS) Setup

## ✅ Completed Setup

A simple, JSON-based CMS has been implemented for easy content management without touching code.

## 📁 File Structure

```
data/
├── types.ts              # TypeScript type definitions
├── config.json            # Site configuration
├── services.json          # Service descriptions
├── projects.json          # Portfolio projects
├── testimonials.json     # Client testimonials
├── team.json             # Team members
├── technologies.json     # Technology stack
└── CMS_README.md         # Detailed content update guide

lib/
├── cms.ts                # Server-side data loading utilities
└── cms-client.ts         # Client-side data loading utilities
```

## 🎯 What's Been Done

### 1. Centralized Data Storage
- ✅ All content moved to JSON files in `/data` directory
- ✅ TypeScript types defined for type safety
- ✅ Data loading utilities created for both server and client

### 2. Component Updates
- ✅ Services section now uses `services.json`
- ✅ Portfolio section now uses `projects.json`
- ✅ Testimonials section now uses `testimonials.json`
- ✅ Team section now uses `team.json`
- ✅ Technologies section now uses `technologies.json`
- ✅ Footer now uses `config.json`
- ✅ Navigation now uses `config.json`
- ✅ Contact info now uses `config.json`

### 3. Documentation
- ✅ Comprehensive CMS README created (`data/CMS_README.md`)
- ✅ Environment variables example created (`.env.example`)
- ✅ This setup guide created

## 🚀 How to Use

### Quick Content Updates

1. **Edit JSON files** in the `/data` directory
2. **Save the file**
3. **Restart dev server** (if running): `npm run dev`
4. **Refresh browser** to see changes

### Example: Adding a New Service

1. Open `/data/services.json`
2. Add a new service object:
```json
{
  "id": "new-service",
  "icon": "Brain",
  "title": "New Service Name",
  "description": "Service description...",
  "features": ["Feature 1", "Feature 2"],
  "variant": "primary",
  "href": "/services/new-service"
}
```
3. Save and refresh

### Example: Updating Contact Info

1. Open `/data/config.json`
2. Update the `contact` section:
```json
{
  "contact": {
    "email": "newemail@company.com",
    "phone": "+1 (555) 999-9999",
    ...
  }
}
```
3. Save and refresh

## 📝 Content Files

### `config.json`
- Company information
- Contact details
- Social media links
- Navigation menus
- Footer links

### `services.json`
- Service descriptions
- Features lists
- Service links
- Icons and variants

### `projects.json`
- Project details
- Categories
- Technologies used
- Results/metrics

### `testimonials.json`
- Client quotes
- Client information
- Ratings
- Featured status

### `team.json`
- Team member bios
- Roles and departments
- Contact information

### `technologies.json`
- Technology stack
- Categories
- Proficiency levels
- Descriptions

## 🔧 Technical Details

### Data Loading
- **Server-side**: Use `lib/cms.ts` utilities
- **Client-side**: Use `lib/cms-client.ts` utilities
- Data is loaded at build time for optimal performance

### Type Safety
- All content types defined in `data/types.ts`
- TypeScript ensures data structure consistency
- Autocomplete available in IDEs

### Icon Handling
- Icons loaded dynamically from lucide-react
- Icon names stored as strings in JSON
- Fallback icons provided for missing icons

## 🎨 Available Icons

Icons are from [lucide-react](https://lucide.dev/). Common icons:
- `Brain` - AI/Machine Learning
- `Code` - Development
- `Smartphone` - Mobile
- `Globe` - Web
- `Cloud` - Cloud Services
- `TrendingUp` - Growth/Strategy
- `Database` - Databases
- `Layers` - General Tech

## 🔄 Future Enhancements

### Optional CMS Integration

For non-technical users, you can integrate:

1. **Sanity CMS**
   - Headless CMS with visual editor
   - Real-time preview
   - Content versioning

2. **Contentful**
   - Enterprise-grade CMS
   - Rich media management
   - Multi-language support

3. **Strapi**
   - Self-hosted option
   - Full control over data
   - Custom content types

### Integration Steps (Sanity Example)

1. Install Sanity:
```bash
npm install @sanity/client @sanity/image-url
```

2. Create Sanity schema matching JSON structure
3. Sync Sanity data to JSON files or fetch directly
4. Set up webhook for automatic updates

## 📚 Documentation

- **Content Updates**: See `data/CMS_README.md`
- **Type Definitions**: See `data/types.ts`
- **API Reference**: See `lib/cms.ts` and `lib/cms-client.ts`

## ⚠️ Important Notes

1. **Always validate JSON** before saving
2. **Backup files** before major changes
3. **Test in development** before deploying
4. **Keep IDs unique** across all files
5. **Maintain consistent structure**

## 🆘 Troubleshooting

### JSON Syntax Errors
- Use a JSON validator (jsonlint.com)
- Check for missing commas or quotes
- Ensure proper array/object structure

### Content Not Updating
- Restart development server
- Clear browser cache
- Check console for errors
- Verify JSON file is saved correctly

### Icons Not Showing
- Verify icon name matches lucide-react exactly
- Check for typos
- Use fallback icon if needed

## ✨ Benefits

✅ **Easy Updates** - No code changes needed
✅ **Type Safe** - TypeScript ensures consistency
✅ **Version Control** - JSON files tracked in Git
✅ **Fast Performance** - Data loaded at build time
✅ **Developer Friendly** - Simple structure
✅ **Non-Technical Friendly** - JSON is readable

---

**Ready to update content?** See `data/CMS_README.md` for detailed instructions!

