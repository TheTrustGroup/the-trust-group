# Clear Git Credentials on macOS

## The Problem
Git is using cached credentials from the old account (technologistttt) instead of prompting for new credentials.

## Solution: Clear macOS Keychain

### Method 1: Using Keychain Access (Easiest)

1. **Open Keychain Access:**
   - Press `Cmd + Space`
   - Type "Keychain Access"
   - Press Enter

2. **Search for GitHub:**
   - In the search box, type: `github.com`
   - Look for entries like:
     - `github.com`
     - `git:https://github.com`

3. **Delete the entries:**
   - Right-click on each GitHub entry
   - Click "Delete"
   - Confirm deletion

4. **Try pushing again:**
   ```bash
   git push -u origin main
   ```
   Now it should prompt for new credentials!

### Method 2: Using Terminal Commands

Run these commands in your terminal:

```bash
# Clear GitHub credentials from keychain
printf "protocol=https\nhost=github.com\n\n" | git credential-osxkeychain erase

# Or remove all GitHub entries
security delete-internet-password -s github.com 2>/dev/null
```

### Method 3: Use URL with Token (One-time)

You can embed the token in the URL for one push:

```bash
# Replace YOUR_TOKEN with your actual token
git remote set-url origin https://YOUR_TOKEN@github.com/TheTrustGroup/the-trust-group.git
git push -u origin main

# Then change it back (remove token from URL)
git remote set-url origin https://github.com/TheTrustGroup/the-trust-group.git
```

---

## After Clearing Credentials

1. **Run push command:**
   ```bash
   git push -u origin main
   ```

2. **When prompted:**
   - Username: `TheTrustGroup`
   - Password: Paste your Personal Access Token

3. **Success!** Your code will be pushed to the new repository.

---

## Verify It Worked

After pushing, check:
- https://github.com/TheTrustGroup/the-trust-group
- You should see all your files there!

