// Configuration file for website content management
export const websiteConfig = {
  // Company Information
  company: {
    name: "Travel Like AP",
    email: "info@travellikeap.com",
    phone: "+91 98765 43210",
    location: "Bangalore, Karnataka, India",
    businessHours: "Mon-Sat, 9 AM - 6 PM",
    copyrightYear: 2025
  },

  // Social Media Links
  socialMedia: {
    instagram: "https://instagram.com/travellikeap",
    youtube: "https://youtube.com/@travellikeap",
    whatsapp: "https://wa.me/919876543210",
    email: "mailto:info@travellikeap.com"
  },

  // Google Form Link
  googleForm: "https://docs.google.com/forms/d/1H2ZRxI1cqRVBWSbnCFSZG_gqVc2BBXQANjL3MVMBtto/viewform?edit_requested=true",

  // Statistics
  stats: {
    completedRides: 25,
    happyRiders: 150,
    kilometersCovered: 5000,
    monthsOfAdventure: 12
  },

  // Hero Section Configuration
  heroConfig: {
    slideInterval: 5000, // milliseconds
    slides: [
      {
        id: 1,
        title: "LOSE YOURSELF",
        subtitle: "DISCOVER YOURSELF",
        tagline: "Travel Like A Pro",
        background: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop",
        cta: "Join Our Rides"
      },
      {
        id: 2,
        title: "ADVENTURE AWAITS",
        subtitle: "EXPLORE THE WORLD",
        tagline: "Ride Beyond Limits",
        background: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=1920&h=1080&fit=crop",
        cta: "Book Adventure"
      },
      {
        id: 3,
        title: "MOUNTAIN SPIRIT",
        subtitle: "CONQUER PEAKS",
        tagline: "Ride to the Top",
        background: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1920&h=1080&fit=crop",
        cta: "Start Journey"
      },
      {
        id: 4,
        title: "FREEDOM CALLS",
        subtitle: "ANSWER THE ROAD",
        tagline: "Your Next Adventure",
        background: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
        cta: "Explore Now"
      }
    ]
  },

  // Featured Ride
  featuredRide: {
    title: "Featured Adventure",
    subtitle: "Himalayan Spirit 2025",
    description: "Join us for the ultimate mountain biking experience through the majestic Himalayas",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=300&fit=crop"
  },

  // Navigation Menu
  navigation: [
    { path: "/", label: "Upcoming Trips" },
    { path: "/previous", label: "Previous Events" },
    { path: "/contact", label: "Contact" }
  ]
};

// Data storage keys for localStorage
export const STORAGE_KEYS = {
  UPCOMING_RIDES: 'upcoming_rides',
  PREVIOUS_RIDES: 'previous_rides',
  HERO_SLIDES: 'hero_slides',
  WEBSITE_CONFIG: 'website_config',
  STATS: 'stats'
};

// Default ride data structure
export const defaultRideStructure = {
  id: null,
  title: '',
  date: '',
  image: '',
  description: '',
  duration: '',
  distance: '',
  participants: 0,
  status: 'upcoming', // 'upcoming', 'completed', 'cancelled'
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
