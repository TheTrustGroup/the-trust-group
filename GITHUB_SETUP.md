# GitHub Repository Setup Guide

## ✅ Step 1: Local Git Setup (DONE)
Your local repository is already initialized and committed!

## 📝 Step 2: Create GitHub Repository

### Option A: Via GitHub Website (Recommended)

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the details:**
   - **Repository name**: `the-trust-group` (or any name you prefer)
   - **Description**: "The Trust Group - Professional website built with Next.js"
   - **Visibility**: 
     - ✅ **Public** (free, anyone can see)
     - 🔒 **Private** (requires paid plan, only you can see)
   - **DO NOT** check "Initialize with README" (we already have files)
   - **DO NOT** add .gitignore or license (we already have them)
5. **Click "Create repository"**

### Option B: Via GitHub CLI (if you have it installed)

```bash
gh repo create the-trust-group --public --source=. --remote=origin --push
```

## 🔗 Step 3: Connect Local Repository to GitHub

After creating the repository on GitHub, you'll see a page with setup instructions. Use these commands:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/the-trust-group.git
git branch -M main
git push -u origin main
```

**Example:**
If your GitHub username is `johndoe`, the command would be:
```bash
git remote add origin https://github.com/johndoe/the-trust-group.git
git branch -M main
git push -u origin main
```

## 🔐 Step 4: Authentication

When you run `git push`, you may be asked to authenticate:

**Option 1: Personal Access Token (Recommended)**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Select scopes: `repo` (full control of private repositories)
4. Copy the token
5. Use it as your password when pushing

**Option 2: GitHub CLI**
```bash
gh auth login
```

## ✅ Step 5: Verify

After pushing, check your GitHub repository:
- All files should be visible
- You should see your commit message
- The repository should show "main" branch

## 🚀 Step 6: Deploy to Vercel

Once your code is on GitHub:

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. **Select your repository** (`the-trust-group`)
5. Click "Deploy"

That's it! 🎉

---

## 📋 Quick Checklist

- [x] Git initialized locally
- [x] Files committed
- [ ] GitHub repository created
- [ ] Local repo connected to GitHub
- [ ] Code pushed to GitHub
- [ ] Vercel deployment started

---

## 🆘 Troubleshooting

### "Repository not found"
- Check that you've created the repository on GitHub first
- Verify the repository name matches exactly
- Make sure you're using the correct GitHub username

### "Authentication failed"
- Use a Personal Access Token instead of password
- Make sure the token has `repo` permissions
- Try using GitHub CLI: `gh auth login`

### "Permission denied"
- Check that you have write access to the repository
- Verify you're signed in to the correct GitHub account

---

**Need help?** Let me know your GitHub username and I can provide the exact commands!

