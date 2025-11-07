# Push to New GitHub Account

## Current Status
- Remote URL updated to: `https://github.com/TheTrustGroup/the-trust-group.git`
- Need to authenticate with new GitHub account

## Steps to Push

### Option 1: Use Personal Access Token (Recommended)

1. **Create Personal Access Token on NEW account:**
   - Go to: https://github.com/settings/tokens/new
   - Sign in with: **TheTrustGroup** account
   - Generate new token (classic)
   - Select scope: `repo`
   - Copy the token

2. **Push with new credentials:**
   ```bash
   cd "/Users/raregem.zillion/Desktop/The Trust Group"
   git push -u origin main
   ```
   
   When prompted:
   - **Username**: `TheTrustGroup`
   - **Password**: Paste your Personal Access Token

### Option 2: Use SSH (Alternative)

1. **Generate SSH key** (if you don't have one):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **Add SSH key to new GitHub account:**
   - Copy public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to: https://github.com/settings/keys
   - Add new SSH key

3. **Change remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:TheTrustGroup/the-trust-group.git
   git push -u origin main
   ```

### Option 3: Clear All Credentials and Start Fresh

```bash
# Clear macOS keychain credentials
git credential-osxkeychain erase <<EOF
host=github.com
protocol=https
EOF

# Or clear all stored credentials
git config --global --unset credential.helper
```

Then try pushing again - it will prompt for new credentials.

---

## After Successful Push

1. **Verify on GitHub:**
   - Go to: https://github.com/TheTrustGroup/the-trust-group
   - Check that all files are there

2. **Deploy to Vercel:**
   - Sign in to Vercel with **TheTrustGroup** GitHub account
   - Import project from new repository
   - Deploy!

---

**Repository URL**: https://github.com/TheTrustGroup/the-trust-group

