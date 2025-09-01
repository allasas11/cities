const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

const citiesData = [
  {
    image: 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg',
    city: 'Riga',
    price: 890000,
    description: 'One of the highest ranked neighborhood project near Riga'
  },
  {
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
    city: 'New York',
    price: 1250000,
    description: 'Premium downtown Manhattan apartment with city views'
  },
  {
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
    city: 'London',
    price: 980000,
    description: 'Modern flat in Central London near Thames'
  },
  {
    image: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg',
    city: 'Paris',
    price: 850000,
    description: 'Elegant apartment in the heart of Paris with Eiffel Tower view'
  },
  {
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
    city: 'Tokyo',
    price: 750000,
    description: 'Ultra-modern apartment in Shibuya district'
  },
  {
    image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg',
    city: 'Berlin',
    price: 650000,
    description: 'Contemporary loft in trendy Mitte neighborhood'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Madrid',
    price: 720000,
    description: 'Beautiful penthouse near Retiro Park'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Rome',
    price: 680000,
    description: 'Historic apartment near Colosseum with authentic charm'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Amsterdam',
    price: 780000,
    description: 'Canal house in the historic city center'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Barcelona',
    price: 690000,
    description: 'Modern apartment near Sagrada Familia'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Vienna',
    price: 620000,
    description: 'Elegant apartment in historic Innere Stadt'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Prague',
    price: 480000,
    description: 'Stunning apartment overlooking Prague Castle'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Budapest',
    price: 420000,
    description: 'Luxury apartment near the Danube River'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Warsaw',
    price: 380000,
    description: 'Modern high-rise apartment in business district'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Stockholm',
    price: 950000,
    description: 'Waterfront apartment in Gamla Stan'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Oslo',
    price: 880000,
    description: 'Contemporary apartment with fjord views'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Copenhagen',
    price: 820000,
    description: 'Stylish apartment in trendy Nørrebro district'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Helsinki',
    price: 750000,
    description: 'Modern apartment near Helsinki Cathedral'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Dublin',
    price: 690000,
    description: 'Georgian townhouse in Temple Bar area'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Lisbon',
    price: 580000,
    description: 'Charming apartment in historic Alfama district'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Athens',
    price: 450000,
    description: 'Apartment with Acropolis view in Plaka'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Istanbul',
    price: 520000,
    description: 'Luxury apartment overlooking Bosphorus'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Moscow',
    price: 680000,
    description: 'Premium apartment near Red Square'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Kiev',
    price: 280000,
    description: 'Modern apartment in historic Podil district'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Zurich',
    price: 1100000,
    description: 'Luxury apartment with Lake Zurich view'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Geneva',
    price: 980000,
    description: 'Elegant apartment near Lake Geneva'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Brussels',
    price: 620000,
    description: 'Historic apartment in Grand Place area'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Toronto',
    price: 850000,
    description: 'Downtown condo with CN Tower view'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Montreal',
    price: 620000,
    description: 'Victorian apartment in Old Montreal'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Vancouver',
    price: 920000,
    description: 'Waterfront condo with mountain views'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Los Angeles',
    price: 1180000,
    description: 'Hollywood Hills mansion with city views'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Chicago',
    price: 780000,
    description: 'Downtown high-rise with Lake Michigan view'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Houston',
    price: 650000,
    description: 'Modern apartment in Museum District'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Phoenix',
    price: 580000,
    description: 'Desert contemporary home with mountain views'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Philadelphia',
    price: 520000,
    description: 'Historic brownstone in Center City'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'San Francisco',
    price: 1450000,
    description: 'Victorian house in Pacific Heights'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Seattle',
    price: 890000,
    description: 'Modern condo with Puget Sound view'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Denver',
    price: 720000,
    description: 'Contemporary apartment with Rocky Mountain views'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Washington',
    price: 850000,
    description: 'Luxury condo near National Mall'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Boston',
    price: 920000,
    description: 'Historic brownstone in Back Bay'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Miami',
    price: 780000,
    description: 'Oceanfront condo in South Beach'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Las Vegas',
    price: 480000,
    description: 'Luxury suite with Strip view'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Atlanta',
    price: 620000,
    description: 'Modern loft in trendy Midtown'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Portland',
    price: 680000,
    description: 'Eco-friendly apartment in Pearl District'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Austin',
    price: 590000,
    description: 'Modern condo in vibrant downtown'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Nashville',
    price: 520000,
    description: 'Historic home near Music Row'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Sydney',
    price: 1050000,
    description: 'Harbour view apartment in The Rocks'
  },
  {
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    city: 'Melbourne',
    price: 780000,
    description: 'Victorian terrace in trendy Fitzroy'
  },
  {
    image: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
    city: 'Brisbane',
    price: 650000,
    description: 'River view apartment in South Bank'
  },
  {
    image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg',
    city: 'Perth',
    price: 580000,
    description: 'Modern apartment near Swan River'
  }
];

async function seed() {
  try {
    await client.connect();
    const db = client.db("CitiesDB");
    const cities = db.collection("cities");

    await cities.insertMany(citiesData);
    console.log("✅ Cities inserted!");
  } catch (err) {
    console.error("❌ Error inserting cities:", err);
  } finally {
    await client.close();
  }
}

seed();