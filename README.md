# Cities API

A simple REST API for managing cities, built with Node.js, Express, and MongoDB Atlas.  
Supports listing, adding, and filtering cities. Designed for learning and demo purposes.

## Tech Stack

- Node.js + Express
- MongoDB Atlas (cloud database)
- Deployed on Render

## Getting Started

### Clone the repository
git clone https://github.com/<your-username>/cities-api.git
cd cities-api

### Install dependencies
npm install

### Create `.env` file
Add your MongoDB connection string:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/CitiesDB?retryWrites=true&w=majority

### Run locally
node server.js
# API will be available at http://localhost:3000

## API Endpoints

### GET /api/cities
Get all cities. Supports query parameters:
- `limit` — max number of results (e.g., `?limit=3`)
- `city` — filter by city name (case-insensitive)
- `minPrice` — minimum price
- `maxPrice` — maximum price

Example:
GET /api/cities?limit=3&city=Paris&minPrice=1000000

### POST /api/cities
Add a new city. JSON body example:

{
  "image": "https://example.com/photo.jpg",
  "city": "New City",
  "price": 500000,
  "description": "Beautiful city to visit"
}

## Deployment

- Hosted on Render: https://cities-api-bhy8.onrender.com  
- Make sure to set the `MONGO_URI` environment variable in Render.

## Notes

- For testing, MongoDB Atlas may temporarily allow all IPs (0.0.0.0/0).  
- Use a dedicated MongoDB user for production projects to protect other databases.  
- Frontend apps can fetch the API directly without CORS issues.

