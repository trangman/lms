# Deploying AML LMS to Netlify

This guide will help you deploy the AML Compliance LMS to Netlify.

## Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Netlify Account** - Sign up at [netlify.com](https://netlify.com)
3. **Supabase Project** (optional for basic prototype)

## Method 1: Deploy via GitHub (Recommended)

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AML LMS prototype"
   ```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com) and create a new repository
   - Name it something like `aml-lms-prototype`

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/aml-lms-prototype.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. **Log in to Netlify**: Go to [app.netlify.com](https://app.netlify.com)

2. **Import from Git**:
   - Click "New site from Git"
   - Choose "GitHub" as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select your `aml-lms-prototype` repository

3. **Configure Build Settings**:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - Click "Deploy site"

### Step 3: Configure Environment Variables (Optional)

If you plan to connect to Supabase later:

1. Go to **Site settings** > **Environment variables**
2. Add these variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## Method 2: Manual Deploy

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Deploy to Netlify

1. **Go to Netlify**: Visit [app.netlify.com](https://app.netlify.com)
2. **Drag and Drop**: 
   - Drag the `out` folder to the deploy area on Netlify
   - Or use "Browse to upload" and select the `out` folder

## Post-Deployment

### Custom Domain (Optional)

1. Go to **Site settings** > **Domain management**
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

### HTTPS

Netlify automatically provides HTTPS for all sites. No additional configuration needed.

### Redirects

The `netlify.toml` file is already configured to handle client-side routing for the single-page application.

## Verification

After deployment, test these URLs on your live site:

- `https://your-site.netlify.app/` - Dashboard
- `https://your-site.netlify.app/courses/` - Courses page
- `https://your-site.netlify.app/progress/` - Progress page
- `https://your-site.netlify.app/certificates/` - Certificates page
- `https://your-site.netlify.app/profile/` - Profile page

## Troubleshooting

### Build Fails
- Check the deploy log in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (should be 18+)

### 404 Errors on Refresh
- Ensure `netlify.toml` is in the root directory
- Check the redirects configuration

### Missing Environment Variables
- Add them in Netlify dashboard under Site settings > Environment variables
- Redeploy after adding variables

## Continuous Deployment

With GitHub integration:
- Every push to the `main` branch triggers a new deployment
- Pull requests can have deploy previews
- Check deploy status in the Netlify dashboard

## Site Information

Your Netlify site will have:
- **Automatic URL**: `https://random-name-123456.netlify.app`
- **Custom domain** (if configured)
- **SSL certificate** (automatic)
- **CDN distribution** (global)

## Next Steps

1. **Test thoroughly** on the live site
2. **Set up Supabase** for data persistence (optional)
3. **Configure custom domain** if needed
4. **Set up form handling** for contact forms (if added)
5. **Add analytics** (Google Analytics, Netlify Analytics, etc.)

---

🎉 **Your AML LMS is now live on Netlify!**

The prototype demonstrates all core LMS functionality for AML compliance training and is ready for stakeholder review and testing. 