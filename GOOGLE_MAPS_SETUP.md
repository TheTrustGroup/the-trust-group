# Google Maps API Setup Guide

To enable the interactive map on the contact page, you need to set up a Google Maps API key.

## Steps to Get a Google Maps API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create or Select a Project**
   - Click on the project dropdown at the top
   - Click "New Project" or select an existing one

3. **Enable Maps JavaScript API**
   - Go to "APIs & Services" > "Library"
   - Search for "Maps JavaScript API"
   - Click on it and click "Enable"

4. **Enable Maps Embed API** (for iframe embeds)
   - In the same library, search for "Maps Embed API"
   - Click on it and click "Enable"

5. **Create API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key

6. **Restrict the API Key** (Recommended for Security)
   - Click on the API key you just created
   - Under "Application restrictions", select "HTTP referrers"
   - Add your website domains:
     - `thetrustgroupsolutions.com/*`
     - `*.thetrustgroupsolutions.com/*`
     - `localhost:3000/*` (for local development)
   - Under "API restrictions", select "Restrict key"
   - Choose "Maps JavaScript API" and "Maps Embed API"
   - Click "Save"

7. **Add to Environment Variables**

   **For Local Development:**
   - Create or update `.env.local` file in the project root:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

   **For Vercel Deployment:**
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add a new variable:
     - Name: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
     - Value: Your API key
     - Environment: Production, Preview, Development (select all)
   - Click "Save"
   - Redeploy your application

## Billing Information

Google Maps Platform offers:
- **Free tier**: $200 credit per month (covers most small to medium websites)
- **Pricing**: After free tier, pay-as-you-go pricing applies
- **Maps Embed API**: Free (unlimited requests)

For most websites, the free tier is sufficient. Monitor your usage in the Google Cloud Console.

## Troubleshooting

### Map shows "API key rejected" error
- Verify the API key is correctly set in environment variables
- Check that the API key has the correct restrictions
- Ensure "Maps Embed API" is enabled
- Wait a few minutes after enabling the API (propagation delay)

### Map doesn't load
- Check browser console for errors
- Verify the API key is accessible (check `process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`)
- Ensure the domain is added to HTTP referrer restrictions
- Check that billing is enabled (even for free tier)

## Alternative: Without API Key

If you don't want to set up an API key, the map component will show a fallback with:
- A helpful message
- A direct link to Google Maps
- The office address displayed prominently

The site will work perfectly fine without the API key - users can still access the location via the "Open in Google Maps" button.

