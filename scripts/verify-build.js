#!/usr/bin/env node

/**
 * Build Verification Script
 * 
 * Runs checks to ensure the build is ready for deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];

console.log('🔍 Running build verification...\n');

// Check 1: TypeScript compilation
console.log('1. Checking TypeScript...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('   ✅ TypeScript check passed\n');
} catch (error) {
  errors.push('TypeScript compilation failed');
  console.log('   ❌ TypeScript check failed\n');
}

// Check 2: Linting
console.log('2. Checking ESLint...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('   ✅ ESLint check passed\n');
} catch (error) {
  warnings.push('ESLint found issues (non-blocking)');
  console.log('   ⚠️  ESLint found issues\n');
}

// Check 3: Build
console.log('3. Building application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('   ✅ Build successful\n');
} catch (error) {
  errors.push('Build failed');
  console.log('   ❌ Build failed\n');
  process.exit(1);
}

// Check 4: Required environment variables
console.log('4. Checking environment variables...');
const requiredEnvVars = [
  'NEXT_PUBLIC_COMPANY_NAME',
  'NEXT_PUBLIC_CONTACT_EMAIL',
];

const missingVars = requiredEnvVars.filter(
  (varName) => !process.env[varName]
);

if (missingVars.length > 0) {
  warnings.push(`Missing optional env vars: ${missingVars.join(', ')}`);
  console.log(`   ⚠️  Missing optional variables: ${missingVars.join(', ')}\n`);
} else {
  console.log('   ✅ Environment variables check passed\n');
}

// Check 5: Required files exist
console.log('5. Checking required files...');
const requiredFiles = [
  'data/config.json',
  'data/services.json',
  'data/projects.json',
  'data/testimonials.json',
  'data/team.json',
  'data/technologies.json',
  'app/layout.tsx',
  'app/page.tsx',
  'next.config.mjs',
  'vercel.json',
];

const missingFiles = requiredFiles.filter(
  (file) => !fs.existsSync(path.join(process.cwd(), file))
);

if (missingFiles.length > 0) {
  errors.push(`Missing required files: ${missingFiles.join(', ')}`);
  console.log(`   ❌ Missing files: ${missingFiles.join(', ')}\n`);
} else {
  console.log('   ✅ All required files present\n');
}

// Check 6: JSON files are valid
console.log('6. Validating JSON files...');
const jsonFiles = [
  'data/config.json',
  'data/services.json',
  'data/projects.json',
  'data/testimonials.json',
  'data/team.json',
  'data/technologies.json',
];

let jsonErrors = false;
jsonFiles.forEach((file) => {
  try {
    const content = fs.readFileSync(path.join(process.cwd(), file), 'utf8');
    JSON.parse(content);
  } catch (error) {
    errors.push(`Invalid JSON in ${file}: ${error.message}`);
    jsonErrors = true;
  }
});

if (jsonErrors) {
  console.log('   ❌ JSON validation failed\n');
} else {
  console.log('   ✅ All JSON files are valid\n');
}

// Summary
console.log('\n📊 Verification Summary:\n');

if (errors.length > 0) {
  console.log('❌ Errors (must fix before deployment):');
  errors.forEach((error) => console.log(`   - ${error}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log('⚠️  Warnings (recommended to fix):');
  warnings.forEach((warning) => console.log(`   - ${warning}`));
  console.log('');
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All checks passed! Ready for deployment.\n');
  process.exit(0);
} else if (errors.length > 0) {
  console.log('❌ Build verification failed. Please fix errors before deploying.\n');
  process.exit(1);
} else {
  console.log('⚠️  Build verification passed with warnings. Review before deploying.\n');
  process.exit(0);
}

