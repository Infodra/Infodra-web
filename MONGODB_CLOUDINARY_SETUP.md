# MongoDB & Cloudinary Integration Setup Guide

This guide will help you set up MongoDB and Cloudinary integration for the Infodra Web project.

## Prerequisites

- Node.js 16+ installed
- MongoDB Atlas account (free tier available)
- Cloudinary account (free tier available)

## Step 1: Install Required Dependencies

```bash
npm install mongodb cloudinary next-cloudinary
```

Or if using yarn:

```bash
yarn add mongodb cloudinary next-cloudinary
```

### Package Information:
- **mongodb**: Official MongoDB Node.js driver for database operations
- **cloudinary**: SDK for uploading and managing files on Cloudinary
- **next-cloudinary**: Next.js helper for Cloudinary integration

## Step 2: Set Up MongoDB Atlas

### 2.1 Create a MongoDB Atlas Account
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new organization and project

### 2.2 Create a Database Cluster
1. Click "Create a Deployment"
2. Choose "Free" tier
3. Select your preferred region
4. Click "Create Deployment"
5. Wait for the cluster to be created (usually takes 5-10 minutes)

### 2.3 Create a Database User
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and password
5. Click "Add User"

### 2.4 Set Up Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. For production, use your actual IP address instead
5. Click "Confirm"

### 2.5 Get Your Connection String
1. Go back to "Deployments" 
2. Click "Connect" on your cluster
3. Select "Drivers"
4. Choose "Node.js" from the dropdown
5. Copy the connection string
6. Replace `<username>` and `<password>` with your database user credentials
7. The string should look like:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/infodra_db?retryWrites=true&w=majority
   ```

## Step 3: Set Up Cloudinary

### 3.1 Create a Cloudinary Account
1. Visit [Cloudinary](https://cloudinary.com/users/register/free)
2. Sign up for a free account
3. Verify your email

### 3.2 Get Your Credentials
1. Go to the [Cloudinary Dashboard](https://cloudinary.com/console)
2. You'll see your **Cloud Name** at the top
3. Scroll down to find your **API Key**
4. Click on "Account Settings" for more details
5. You'll need to generate or view your **API Secret**

### 3.3 Credential Information:
- **Cloud Name**: Your unique Cloudinary identifier (public)
- **API Key**: Used for authenticated uploads (can be public in client-side, but preferred server-side)
- **API Secret**: KEEP THIS SECRET! Never expose in client-side code

## Step 4: Configure Environment Variables

### 4.1 Create `.env.local` File
1. In the project root, copy `.env.local.example` to `.env.local`
2. Fill in your actual credentials:

```env
# MongoDB
MONGODB_URI=mongodb+srv://your_username:your_password@your-cluster.mongodb.net/infodra_db?retryWrites=true&w=majority

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4.2 Security Best Practices
- Never commit `.env.local` to version control
- Add `.env.local` to your `.gitignore` file
- Use `.env.local.example` for documentation
- For production, use your hosting platform's environment variable settings

## Step 5: Database Setup

The application automatically creates collections when needed. However, you can pre-create them for better organization:

### Collections Created by the App:
1. **contact_messages** - Stores contact form submissions
   - Fields: name, email, phone, message, createdAt
   
2. **candidates** - Stores career application metadata
   - Fields: fullName, email, phone, skills, experienceYears, resumeUrl, createdAt

## Step 6: Test the Integration

### Test Contact Form
1. Go to `/contact` page
2. Fill in the form with:
   - Name: Your name
   - Email: your.email@example.com
   - Phone: +91 XXXXXXXXXX
   - Message: Your message
3. Submit the form
4. Check MongoDB Atlas to verify the data was saved

### Test Career Application Form
1. Go to `/careers` page
2. Fill in the form with all required fields
3. Attach a PDF/DOC file as resume
4. Submit the form
5. Check MongoDB Atlas for the candidate data
6. Check Cloudinary console to verify the resume was uploaded

## API Endpoints

### POST /api/contact
Submit a contact form message

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been received. We will contact you soon.",
  "id": "mongodb_document_id"
}
```

### POST /api/apply
Submit a career application with resume

**Request:** (multipart/form-data)
- fullName (string, required)
- email (string, required)
- phone (string, required)
- skills (string, comma-separated, required)
- experienceYears (number, required)
- resume (file, PDF/DOC/DOCX, max 2MB, required)

**Response:**
```json
{
  "success": true,
  "message": "Your application has been received. We will review your resume and contact you soon.",
  "id": "mongodb_document_id"
}
```

## Troubleshooting

### MongoDB Connection Issues
- **Error: "ECONNREFUSED"**
  - Check if your IP is whitelisted in MongoDB Atlas Network Access
  - Verify your connection string is correct
  - Ensure cluster is running

- **Error: "Authentication failed"**
  - Verify username and password are correct in connection string
  - Check for special characters in password (should be URL encoded)
  - Regenerate database user if needed

### Cloudinary Upload Issues
- **Error: "Invalid API key"**
  - Verify your API key is correct
  - Check if API Secret is correct
  - Regenerate credentials if needed

- **Error: "File size exceeds limit"**
  - Resume files must be under 2MB
  - Check file compression before uploading

- **Error: "Invalid file type"**
  - Only PDF, DOC, and DOCX files are accepted
  - Verify file extension and MIME type

### Form Submission Issues
- **"Please fill in all required fields"**
  - Ensure all required fields are properly filled
  - Check email format is valid

- **"Network error"**
  - Check if your API endpoints are accessible
  - Verify server is running
  - Check browser console for detailed error messages

## Production Deployment

### Vercel (Recommended for Next.js)
1. Push your code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard:
   - MONGODB_URI
   - CLOUDINARY_CLOUD_NAME
   - CLOUDINARY_API_KEY
   - CLOUDINARY_API_SECRET
4. Deploy

### Other Platforms
- Set environment variables in your hosting platform's dashboard
- Ensure build command: `npm run build`
- Ensure start command: `npm start`

## Security Checklist

- [ ] MongoDB user created with strong password
- [ ] Network Access restricted to production IP (for production)
- [ ] CLOUDINARY_API_SECRET is never exposed in client-side code
- [ ] Environment variables are set in production
- [ ] `.env.local` is in `.gitignore`
- [ ] Database backups are enabled in MongoDB Atlas
- [ ] HTTPS is enabled for all deployments

## File Structure

```
src/
├── lib/
│   ├── mongodb.ts          # MongoDB connection utility
│   └── cloudinary.ts       # Cloudinary configuration
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts    # Contact form API
│   │   └── apply/
│   │       └── route.ts    # Career application API
│   ├── contact/
│   │   └── page.tsx        # Contact form page (updated)
│   └── careers/
│       ├── page.tsx        # Careers page
│       └── careers-content.tsx  # Careers form component (updated)
└── ...

.env.local.example          # Example environment variables
```

## Next Steps

1. Set up both MongoDB and Cloudinary accounts
2. Install dependencies: `npm install`
3. Create `.env.local` with your credentials
4. Start the development server: `npm run dev`
5. Test the forms on `/contact` and `/careers`
6. Monitor MongoDB Atlas and Cloudinary console for incoming data

## Support

For issues or questions:
- Check the troubleshooting section above
- Review API error messages in browser console
- Check MongoDB Atlas logs
- Check Cloudinary API logs
- Refer to official documentation:
  - [MongoDB Node.js Driver](https://docs.mongodb.com/drivers/node/)
  - [Cloudinary Documentation](https://cloudinary.com/documentation)
  - [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
