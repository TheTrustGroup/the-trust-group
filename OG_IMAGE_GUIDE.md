# Open Graph Image Guide

## Overview
Open Graph (OG) images are the images that appear when your website is shared on social media platforms like Facebook, Twitter, LinkedIn, etc.

## Specifications

### Required Size
- **Dimensions**: 1200 x 630 pixels
- **Aspect Ratio**: 1.91:1
- **Format**: JPEG or PNG
- **File Size**: Under 8MB (recommended: under 1MB)

### Current Setup
- Default image path: `/public/og-image.jpg`
- Can be overridden per page via the `image` parameter in `generateMetadata()`

## How to Create Your OG Image

### Option 1: Using Canva (Easiest)
1. Go to [Canva.com](https://www.canva.com)
2. Create a custom design: 1200 x 630 pixels
3. Add your company logo
4. Add tagline: "The Trust Group - AI & Software Engineering Solutions"
5. Use brand colors: Primary Blue (#0066FF), Accent Cyan (#00B8E6)
6. Export as JPEG
7. Save as `og-image.jpg` in `/public/` folder

### Option 2: Using Figma
1. Create a new frame: 1200 x 630px
2. Add background gradient or solid color
3. Add logo and text
4. Export as PNG or JPEG
5. Save as `og-image.jpg` in `/public/` folder

### Option 3: Using Photoshop/Illustrator
1. Create new document: 1200 x 630 pixels, RGB color mode
2. Design your image
3. Export for web (JPEG, quality 80-90%)
4. Save as `og-image.jpg` in `/public/` folder

## Design Recommendations

### Essential Elements
- ✅ Company logo (prominently placed)
- ✅ Company name: "The Trust Group"
- ✅ Tagline or key message
- ✅ Visual branding (colors, fonts)
- ✅ High contrast for readability

### Best Practices
- Keep text minimal and readable
- Use high-quality images
- Ensure logo is clear and visible
- Test on different devices
- Use brand colors consistently
- Avoid too much text (social platforms may crop)

## Page-Specific OG Images

You can create unique OG images for different pages:

### Home Page
- File: `/public/og-image.jpg` (default)
- Content: Main company branding

### Service Pages
- Example: `/public/og-services.jpg`
- Use in page: `generateMetadata({ image: "/og-services.jpg" })`

### Blog Posts
- Dynamic images per post
- Use in blog post metadata

## Testing Your OG Image

### Facebook Sharing Debugger
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL
3. Click "Scrape Again" to refresh cache
4. Check the preview

### Twitter Card Validator
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your URL
3. Check the preview

### LinkedIn Post Inspector
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your URL
3. Check the preview

## Current Implementation

The OG image is configured in `lib/seo.ts`:
```typescript
const defaultImage = `${siteUrl}/og-image.jpg`;
```

To override for a specific page:
```typescript
export const metadata: Metadata = generateMetadata({
  title: "Your Page",
  description: "Your description",
  image: "/custom-og-image.jpg", // Custom image
});
```

## Next Steps

1. **Create the default OG image** (`/public/og-image.jpg`)
2. **Test on social platforms** using the tools above
3. **Create page-specific images** for major pages (optional)
4. **Update image** when branding changes

## Quick Template

If you need a quick placeholder, you can use this structure:

```
┌─────────────────────────────────────────┐
│                                         │
│         [Company Logo]                  │
│                                         │
│      The Trust Group                    │
│   AI & Software Engineering Solutions   │
│                                         │
│         [Visual Element]                │
│                                         │
└─────────────────────────────────────────┘
```

Remember: The image should be visually appealing and represent your brand well when shared on social media!

