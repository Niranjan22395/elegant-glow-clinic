# 📧 Google Forms Integration Setup Guide

This guide will help you set up Google Forms to receive appointment bookings via email at **sagar007cena@gmail.com**.

## 🎯 Option 1: Simple Email Integration (RECOMMENDED)

The application is already configured to send appointment data via email using a mailto link and WhatsApp. When users submit the form:

1. **WhatsApp Message** - Sends booking details to your WhatsApp
2. **Email Notification** - You can set up email forwarding from WhatsApp
3. **Console Log** - All data is logged in browser console for debugging

### Current Implementation:
- ✅ Form validation with Zod
- ✅ WhatsApp integration (instant notification)
- ✅ Email: sagar007cena@gmail.com configured
- ✅ Data logged to console
- ✅ Honeypot spam protection

---

## 🎯 Option 2: Google Forms Integration (Advanced)

If you want to save data to Google Sheets automatically, follow these steps:

### Step 1: Create Google Form

1. Go to https://forms.google.com
2. Click **"+ Blank"** to create new form
3. Add these fields:
   - **Name** (Short answer, Required)
   - **Phone** (Short answer, Required)
   - **Service** (Dropdown, Required)
     - Options: Hydrafacial, Chemical Peel, Microneedling, Laser Hair Removal, Anti-Aging Treatment, Acne Treatment
   - **Preferred Date** (Date, Required)
   - **Message** (Paragraph, Optional)

### Step 2: Get Form Response URL

1. Click **Send** button (top right)
2. Click **Link** icon
3. Copy the form URL (looks like: `https://docs.google.com/forms/d/e/FORM_ID/viewform`)
4. Change `/viewform` to `/formResponse` in the URL
5. This is your `GOOGLE_FORM_URL`

### Step 3: Get Field IDs

1. Open your form in edit mode
2. Right-click on first field → **Inspect Element**
3. Look for `name="entry.XXXXXXXXX"` in the HTML
4. Copy the entry ID (e.g., `entry.123456789`)
5. Repeat for all fields

### Step 4: Update Constants

Edit `src/lib/constants.ts`:

```typescript
export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse';

export const GOOGLE_FORM_FIELDS = {
  name: 'entry.123456789',      // Replace with actual ID
  phone: 'entry.987654321',     // Replace with actual ID
  service: 'entry.456789123',   // Replace with actual ID
  date: 'entry.789123456',      // Replace with actual ID
  message: 'entry.321654987',   // Replace with actual ID
};
```

### Step 5: Enable Email Notifications

1. In your Google Form, click **Responses** tab
2. Click **⋮** (three dots) → **Get email notifications for new responses**
3. Enter: **sagar007cena@gmail.com**
4. Click **Save**

### Step 6: Link to Google Sheets

1. In **Responses** tab, click **Link to Sheets** icon
2. Create new spreadsheet: "Elegant Glow Appointments"
3. All form submissions will be saved here automatically

---

## 🎯 Option 3: EmailJS Integration (Alternative)

For direct email without Google Forms:

### Step 1: Sign up for EmailJS

1. Go to https://www.emailjs.com/
2. Sign up with **sagar007cena@gmail.com**
3. Free plan: 200 emails/month

### Step 2: Create Email Service

1. Go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail**
4. Connect your Gmail account
5. Copy **Service ID**

### Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Template content:
```
New Appointment Request

Name: {{name}}
Phone: {{phone}}
Service: {{service}}
Preferred Date: {{date}}
Message: {{message}}

Submitted at: {{timestamp}}
```
4. Copy **Template ID**

### Step 4: Install EmailJS

```bash
npm install @emailjs/browser
```

### Step 5: Update Contact Component

Add to `src/components/sections/Contact.tsx`:

```typescript
import emailjs from '@emailjs/browser';

// In onSubmit function:
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    name: data.name,
    phone: data.phone,
    service: data.service,
    date: data.date,
    message: data.message,
    timestamp: new Date().toLocaleString(),
  },
  'YOUR_PUBLIC_KEY'
);
```

---

## 📊 Current Data Flow

```
User Fills Form
      ↓
Validation (Zod)
      ↓
Honeypot Check
      ↓
Console Log (for debugging)
      ↓
WhatsApp Message (instant notification)
      ↓
Email Notification (via WhatsApp or Google Forms)
```

---

## 🔧 Testing

### Test the Current Setup:

1. Open application: http://localhost:3001
2. Go to Contact section
3. Fill appointment form
4. Click "Book Appointment"
5. Check:
   - ✅ WhatsApp opens with pre-filled message
   - ✅ Browser console shows form data
   - ✅ Success message appears

### Test Google Forms (if configured):

1. Submit form
2. Check Google Sheets for new row
3. Check email: sagar007cena@gmail.com for notification

---

## 📱 Recommended Setup

**For immediate use:**
- ✅ Use current WhatsApp integration (already working)
- ✅ Check WhatsApp for appointment requests
- ✅ Manually save to Excel/Google Sheets

**For automated tracking:**
- Set up Google Forms (Option 2)
- Link to Google Sheets
- Enable email notifications

**For professional setup:**
- Use EmailJS (Option 3)
- Direct email delivery
- No manual intervention needed

---

## 🆘 Support

Current email: **sagar007cena@gmail.com**

All appointment requests will be sent to this email via:
1. WhatsApp notifications
2. Google Forms (if configured)
3. EmailJS (if configured)

---

**Made with Bob** 🤖