# Social Media Integration Guide
## Elegant Glow Aesthetic Clinic

This guide explains how to integrate Google Reviews, Instagram Feed, and Facebook into your website.

---

## 📊 Google Reviews Integration

### Option 1: Google My Business Widget (Recommended - Free)

#### Step 1: Set Up Google My Business
1. Go to [Google My Business](https://business.google.com/)
2. Claim or create your business listing
3. Verify your business
4. Get your Place ID

#### Step 2: Get Your Place ID
1. Visit [Google Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for "Elegant Glow Aesthetic Clinic, Bokaro"
3. Copy your Place ID (format: `ChIJ...`)

#### Step 3: Enable Google Places API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable "Places API"
4. Create API credentials (API Key)
5. Restrict API key to your domain

#### Step 4: Add to Your Website
Create a new component: `src/components/GoogleReviews.tsx`

```typescript
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
}

export const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    try {
      const placeId = 'YOUR_PLACE_ID_HERE'; // Replace with your Place ID
      const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with your API key
      
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
      );
      
      const data = await response.json();
      if (data.result && data.result.reviews) {
        setReviews(data.result.reviews.slice(0, 6)); // Show top 6 reviews
      }
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading reviews...</div>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.author_name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-accent transition-colors"
          >
            Write a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};
```

### Option 2: Elfsight Widget (Easiest - Paid)
1. Go to [Elfsight Google Reviews Widget](https://elfsight.com/google-reviews-widget/)
2. Create widget and customize
3. Copy embed code
4. Add to your website

---

## 📸 Instagram Feed Integration

### Option 1: Instagram Basic Display API (Free)

#### Step 1: Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add "Instagram Basic Display" product
4. Configure OAuth redirect URIs

#### Step 2: Get Access Token
1. In your app settings, go to Instagram Basic Display
2. Add Instagram Test User
3. Generate Access Token
4. Save the token (expires in 60 days)

#### Step 3: Create Instagram Feed Component
Create: `src/components/InstagramFeed.tsx`

```typescript
import React, { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
}

export const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  const fetchInstagramPosts = async () => {
    try {
      const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${accessToken}`
      );
      
      const data = await response.json();
      if (data.data) {
        setPosts(data.data.slice(0, 9)); // Show 9 posts
      }
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading Instagram feed...</div>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Follow Us on Instagram</h2>
          <a
            href="https://instagram.com/elegantglowclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold"
          >
            <FaInstagram size={24} />
            @elegantglowclinic
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FaInstagram className="text-white text-4xl" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### Option 2: Elfsight Instagram Feed (Easiest - Paid)
1. Go to [Elfsight Instagram Feed](https://elfsight.com/instagram-feed-instashow/)
2. Connect your Instagram account
3. Customize widget
4. Copy embed code

### Option 3: Manual Instagram Embed (Free)
1. Go to your Instagram post
2. Click "..." menu
3. Select "Embed"
4. Copy embed code
5. Add to your website

---

## 📘 Facebook Integration

### Option 1: Facebook Page Plugin (Free)

#### Step 1: Create Facebook Page Plugin
1. Go to [Facebook Page Plugin](https://developers.facebook.com/docs/plugins/page-plugin)
2. Enter your Facebook Page URL
3. Customize settings (width, height, tabs)
4. Copy the generated code

#### Step 2: Add to Your Website
Create: `src/components/FacebookFeed.tsx`

```typescript
import React, { useEffect } from 'react';

export const FacebookFeed: React.FC = () => {
  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Connect With Us on Facebook
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/elegantglowclinic"
            data-tabs="timeline"
            data-width="500"
            data-height="600"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/elegantglowclinic"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/elegantglowclinic">
                Elegant Glow Aesthetic Clinic
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
```

#### Step 3: Add Facebook SDK to index.html
Add before closing `</body>` tag:

```html
<!-- Facebook SDK -->
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" 
  src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0" 
  nonce="YOUR_NONCE">
</script>
```

---

## 🔧 Environment Variables Setup

Create `.env` file in your project root:

```env
# Google Reviews
VITE_GOOGLE_PLACES_API_KEY=your_google_api_key_here
VITE_GOOGLE_PLACE_ID=your_place_id_here

# Instagram
VITE_INSTAGRAM_ACCESS_TOKEN=your_instagram_token_here
VITE_INSTAGRAM_USER_ID=your_instagram_user_id

# Facebook
VITE_FACEBOOK_APP_ID=your_facebook_app_id
VITE_FACEBOOK_PAGE_ID=your_facebook_page_id
```

Update your components to use environment variables:

```typescript
const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
```

---

## 📱 Social Media Links in Footer

Update `src/components/layout/Footer.tsx`:

```typescript
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    url: 'https://facebook.com/elegantglowclinic',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com/elegantglowclinic',
    color: 'hover:text-pink-600'
  },
  {
    name: 'Google Reviews',
    icon: FaGoogle,
    url: 'https://g.page/r/YOUR_REVIEW_LINK/review',
    color: 'hover:text-red-600'
  }
];

// In your Footer component:
<div className="flex space-x-4">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-2xl transition-colors ${social.color}`}
      aria-label={social.name}
    >
      <social.icon />
    </a>
  ))}
</div>
```

---

## 🚀 Implementation Steps

### 1. Add Components to Home Page
Update `src/pages/Home.tsx`:

```typescript
import { GoogleReviews } from '../components/GoogleReviews';
import { InstagramFeed } from '../components/InstagramFeed';
import { FacebookFeed } from '../components/FacebookFeed';

// Add in your Home component:
<GoogleReviews />
<InstagramFeed />
<FacebookFeed />
```

### 2. Install Required Dependencies
```bash
npm install react-icons
```

### 3. Update Docker Configuration
Add environment variables to `docker-compose.yml`:

```yaml
frontend:
  environment:
    - VITE_GOOGLE_PLACES_API_KEY=${GOOGLE_API_KEY}
    - VITE_GOOGLE_PLACE_ID=${GOOGLE_PLACE_ID}
    - VITE_INSTAGRAM_ACCESS_TOKEN=${INSTAGRAM_TOKEN}
    - VITE_FACEBOOK_APP_ID=${FACEBOOK_APP_ID}
```

### 4. Rebuild and Deploy
```bash
docker-compose build frontend
docker-compose up -d
```

---

## 📋 Checklist

- [ ] Set up Google My Business account
- [ ] Get Google Place ID
- [ ] Enable Google Places API
- [ ] Create Google API key
- [ ] Set up Facebook Developer account
- [ ] Create Facebook App
- [ ] Connect Instagram account
- [ ] Get Instagram Access Token
- [ ] Create Facebook Page
- [ ] Add environment variables
- [ ] Create social media components
- [ ] Add components to pages
- [ ] Test all integrations
- [ ] Deploy to production

---

## 🔒 Security Best Practices

1. **Never commit API keys to Git**
   - Use `.env` files
   - Add `.env` to `.gitignore`

2. **Restrict API Keys**
   - Limit to your domain only
   - Set usage quotas

3. **Refresh Tokens Regularly**
   - Instagram tokens expire in 60 days
   - Set up automatic refresh

4. **Use Environment Variables**
   - Different keys for dev/prod
   - Never expose in client-side code

---

## 💡 Alternative Solutions

### Third-Party Widgets (Easiest)
1. **Elfsight** - All-in-one solution ($5-15/month)
2. **Taggbox** - Social media aggregator
3. **Juicer** - Social feed aggregator
4. **SnapWidget** - Instagram widget

### Pros:
- No coding required
- Automatic updates
- Professional design
- Easy setup

### Cons:
- Monthly cost
- Less customization
- External dependency

---

## 📞 Support

For help with integration:
1. Google Places API: [Documentation](https://developers.google.com/maps/documentation/places/web-service/overview)
2. Instagram API: [Documentation](https://developers.facebook.com/docs/instagram-basic-display-api)
3. Facebook SDK: [Documentation](https://developers.facebook.com/docs/javascript)

---

## 🎯 Next Steps

1. Choose your preferred integration method
2. Set up necessary accounts and API keys
3. Create the components
4. Test thoroughly
5. Deploy to production
6. Monitor and maintain

Good luck with your social media integration! 🚀