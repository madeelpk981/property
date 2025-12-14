import { Property } from "./types";

export const MOCK_PROPERTIES: Property[] = [
  {
    id: "p1",
    title: "Modern Luxury Villa in DHA",
    price: 85000000,
    currency: "PKR",
    location: "DHA Phase 6, Lahore",
    beds: 5,
    baths: 6,
    area: 5400,
    areaUnit: "sq.ft",
    type: "sale",
    category: "house",
    imageUrl: "https://picsum.photos/seed/estate1/800/600",
    description: "A stunning brand new architect-designed 1 Kanal house featuring imported fittings, double height lobby, swimming pool, and a home theater. Located in the heart of Phase 6 near the main boulevard.",
    added: "2 days ago",
    agent: {
      name: "Ali Khan",
      phone: "+92 300 1234567",
      image: "https://picsum.photos/seed/agent1/100/100",
      email: "ali.khan@estateai.com"
    },
    features: ["Swimming Pool", "Home Theater", "Servant Quarter", "Central Heating", "Corner Plot"]
  },
  {
    id: "p2",
    title: "Cosy 2-Bed Apartment with View",
    price: 150000,
    currency: "PKR",
    location: "E-11 Sector, Islamabad",
    beds: 2,
    baths: 2,
    area: 1200,
    areaUnit: "sq.ft",
    type: "rent",
    category: "apartment",
    imageUrl: "https://picsum.photos/seed/estate2/800/600",
    description: "Fully furnished apartment with Margalla Hills view. Secure gated community with 24/7 backup generator and underground parking.",
    added: "5 hours ago",
    agent: {
      name: "Sara Ahmed",
      phone: "+92 321 9876543",
      image: "https://picsum.photos/seed/agent2/100/100",
      email: "sara.ahmed@estateai.com"
    },
    features: ["Furnished", "Backup Generator", "Security Staff", "Elevator"]
  },
  {
    id: "p3",
    title: "Commercial Plot Main Boulevard",
    price: 120000000,
    currency: "PKR",
    location: "Bahria Town, Karachi",
    beds: 0,
    baths: 0,
    area: 2500,
    areaUnit: "sq.ft",
    type: "sale",
    category: "commercial",
    imageUrl: "https://picsum.photos/seed/estate3/800/600",
    description: "Prime commercial location ready for construction. Ideal for banks, corporate offices, or retail outlets. High footfall area.",
    added: "1 week ago",
    agent: {
      name: "Kamran Malik",
      phone: "+92 333 5556667",
      image: "https://picsum.photos/seed/agent3/100/100",
      email: "kamran.malik@estateai.com"
    },
    features: ["Corner", "Main Road", "Sewerage", "Water Supply", "Electricity"]
  },
  {
    id: "p4",
    title: "Brand New 10 Marla House",
    price: 45000000,
    currency: "PKR",
    location: "Johar Town, Lahore",
    beds: 4,
    baths: 4,
    area: 2250,
    areaUnit: "sq.ft",
    type: "sale",
    category: "house",
    imageUrl: "https://picsum.photos/seed/estate4/800/600",
    description: "Solid construction with A+ grade material. Spanish tile flooring, Ash wood doors, and Grohe fittings. Near Emporium Mall.",
    added: "3 days ago",
    agent: {
      name: "Bilal Sheikh",
      phone: "+92 345 1112223",
      image: "https://picsum.photos/seed/agent4/100/100",
      email: "bilal.sheikh@estateai.com"
    },
    features: ["Garage", "Balcony", "Double Glazed Windows", "Near Park"]
  },
  {
    id: "p5",
    title: "Luxury Penthouse",
    price: 550000,
    currency: "PKR",
    location: "Clifton, Karachi",
    beds: 3,
    baths: 4,
    area: 3000,
    areaUnit: "sq.ft",
    type: "rent",
    category: "apartment",
    imageUrl: "https://picsum.photos/seed/estate5/800/600",
    description: "Sea facing penthouse with private terrace. Modern kitchen, jacuzzi bathrooms, and servant quarter. Building has gym and pool.",
    added: "Today",
    agent: {
      name: "Zainab Raza",
      phone: "+92 301 4443332",
      image: "https://picsum.photos/seed/agent5/100/100",
      email: "zainab.raza@estateai.com"
    },
    features: ["Sea View", "Jacuzzi", "Private Terrace", "Gym Access"]
  },
  {
    id: "p6",
    title: "Affordable Family Home",
    price: 25000000,
    currency: "PKR",
    location: "Rawalpindi",
    beds: 3,
    baths: 2,
    area: 1350,
    areaUnit: "sq.ft",
    type: "sale",
    category: "house",
    imageUrl: "https://picsum.photos/seed/estate6/800/600",
    description: "Perfect starter home for a small family. Recently renovated. Close to schools and metro station.",
    added: "2 weeks ago",
    agent: {
      name: "Usman Ghani",
      phone: "+92 332 9998887",
      image: "https://picsum.photos/seed/agent6/100/100",
      email: "usman.ghani@estateai.com"
    },
    features: ["Renovated", "Near Metro", "Gas Available", "Car Porch"]
  }
];

export const FORMAT_CURRENCY = (amount: number, currency: string) => {
  if (amount >= 10000000) {
    return `${currency} ${(amount / 10000000).toFixed(2)} Crore`;
  } else if (amount >= 100000) {
    return `${currency} ${(amount / 100000).toFixed(2)} Lakh`;
  }
  return `${currency} ${amount.toLocaleString()}`;
};

export const LEGAL_CONTENT = {
  terms: {
    title: "Terms & Conditions",
    content: `
      <h3 class="font-bold text-lg mb-2">1. Introduction</h3>
      <p class="mb-4">Welcome to EstateAI. By accessing our website, you agree to these terms and conditions. Please read them carefully.</p>
      
      <h3 class="font-bold text-lg mb-2">2. Use of Service</h3>
      <p class="mb-4">You agree to use our service only for lawful purposes. You are strictly prohibited from unauthorized data scraping, posting false listings, or harassing agents.</p>
      
      <h3 class="font-bold text-lg mb-2">3. Property Listings</h3>
      <p class="mb-4">EstateAI acts as a platform for connecting buyers and sellers. We do not guarantee the accuracy of property details provided by third-party agents.</p>
      
      <h3 class="font-bold text-lg mb-2">4. User Accounts</h3>
      <p class="mb-4">You are responsible for maintaining the confidentiality of your account credentials. Any activity occurring under your account is your responsibility.</p>
      
      <h3 class="font-bold text-lg mb-2">5. Limitation of Liability</h3>
      <p class="mb-4">EstateAI shall not be liable for any direct, indirect, or consequential damages arising from the use of our platform.</p>
    `
  },
  privacy: {
    title: "Privacy Policy",
    content: `
      <h3 class="font-bold text-lg mb-2">1. Information We Collect</h3>
      <p class="mb-4">We collect information you provide directly to us, such as your name, email address, and phone number when you create an account or contact an agent.</p>
      
      <h3 class="font-bold text-lg mb-2">2. How We Use Information</h3>
      <p class="mb-4">We use your information to provide, maintain, and improve our services, communicate with you, and personalize your experience.</p>
      
      <h3 class="font-bold text-lg mb-2">3. Data Sharing</h3>
      <p class="mb-4">We do not sell your personal data. We may share your information with real estate agents only when you explicitly submit an inquiry for a property.</p>
      
      <h3 class="font-bold text-lg mb-2">4. Security</h3>
      <p class="mb-4">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access or alteration.</p>
    `
  },
  cookies: {
    title: "Cookie Policy",
    content: `
      <h3 class="font-bold text-lg mb-2">1. What are Cookies?</h3>
      <p class="mb-4">Cookies are small text files stored on your device when you visit our website. They help us remember your preferences and improve site performance.</p>
      
      <h3 class="font-bold text-lg mb-2">2. Types of Cookies We Use</h3>
      <ul class="list-disc ml-5 mb-4">
        <li><strong>Essential Cookies:</strong> Necessary for the website to function.</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the site.</li>
        <li><strong>Functional Cookies:</strong> Remember your login details and search preferences.</li>
      </ul>
      
      <h3 class="font-bold text-lg mb-2">3. Managing Cookies</h3>
      <p class="mb-4">You can control and/or delete cookies as you wish through your browser settings.</p>
    `
  },
  safety: {
    title: "Safety Guide",
    content: `
      <h3 class="font-bold text-lg mb-2">1. General Safety Tips</h3>
      <p class="mb-4">Always prioritize your safety when meeting agents or viewing properties. If something feels off, trust your instincts.</p>
      
      <h3 class="font-bold text-lg mb-2">2. Meeting in Person</h3>
      <ul class="list-disc ml-5 mb-4">
        <li>Meet in public places first or ensure the property is in a safe location.</li>
        <li>Tell a friend or family member where you are going.</li>
        <li>Avoid carrying large amounts of cash.</li>
      </ul>
      
      <h3 class="font-bold text-lg mb-2">3. Scams to Avoid</h3>
      <p class="mb-4">Be wary of listings that seem too good to be true. Never transfer money via wire services for a property you haven't seen. Verify the agent's credentials.</p>
    `
  }
};