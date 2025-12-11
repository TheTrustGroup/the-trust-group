/**
 * Favicon Generator Script
 * 
 * This script generates all required favicon sizes from the SVG source.
 * Run with: node scripts/generate-favicons.js
 * 
 * Note: Requires sharp package: npm install sharp
 */

const fs = require('fs');
const path = require('path');

// Favicon sizes required
const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

const publicDir = path.join(process.cwd(), 'public');
const svgPath = path.join(publicDir, 'favicon.svg');

console.log('📦 Favicon Generator');
console.log('==================\n');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Error: sharp package not found.');
  console.error('   Please install it with: npm install sharp\n');
  console.log('📝 Manual Instructions:');
  console.log('   1. Open favicon.svg in a design tool (Figma, Illustrator, etc.)');
  console.log('   2. Export the following sizes as PNG:');
  faviconSizes.forEach(({ size, name }) => {
    console.log(`      - ${size}x${size} → ${name}`);
  });
  console.log('\n   3. Place all PNG files in the /public directory');
  console.log('   4. Update manifest.json with the correct icon paths\n');
  process.exit(1);
}

// Check if SVG exists
if (!fs.existsSync(svgPath)) {
  console.error(`❌ Error: ${svgPath} not found`);
  process.exit(1);
}

console.log('✅ Found favicon.svg');
console.log('🔄 Generating favicons...\n');

// Generate favicons
async function generateFavicons() {
  try {
    for (const { size, name } of faviconSizes) {
      const outputPath = path.join(publicDir, name);
      
      await sharp(svgPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generated ${name} (${size}x${size})`);
    }
    
    console.log('\n✨ All favicons generated successfully!');
    console.log('\n📋 Next steps:');
    console.log('   1. Update app/layout.tsx with favicon links');
    console.log('   2. Update public/manifest.json with icon paths');
    console.log('   3. Test favicons in browser\n');
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

generateFavicons();
