# 🎨 AI Image Studio

### Generate stunning AI images from text — powered by DALL-E

**Live Demo:** https://client-lake-eight-73.vercel.app
**API:** https://ai-powered-image-generation-app.onrender.com
**License:** MIT

**A full-stack MERN application that generates AI-powered images using OpenAI's DALL-E and publishes them to a shared community gallery.**

Live Demo · Report Bug · Request Feature

---

## ✨ Features

### 🖼️ AI Image Generation

Generate images from text prompts using OpenAI's DALL-E model.

### 🏛️ Community Gallery

Browse and discover images created by other users.

### 📤 Image Sharing

Publish generated images to the community showcase.

### 🔍 Search

Search through posts by name or prompt.

### ⬇️ Download

Download any community image to your device.

### 🎲 Surprise Me

Get random creative prompt suggestions.

---

## 🛠️ Tech Stack

### Frontend

* React 18
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### AI

* OpenAI DALL-E

### Storage

* Cloudinary

### Deployment

* Vercel
* Render

---

## 📁 Project Structure

AI-Powered-Image-Generation-APP/

client/                      # React frontend (Vite)

* src/

  * assets/                  # Static assets (logo, icons)
  * components/              # Reusable UI components
  * constant/                # Prompt suggestions
  * page/                    # Page components (Home, CreatePost)
  * utils/                   # Utility functions
* .env.example               # Frontend env template
* vercel.json                # Vercel SPA rewrite config

server/                      # Express backend API

* mongodb/

  * connect.js               # MongoDB connection
  * models/post.js           # Post schema (name, prompt, photo)
* routes/

  * dalleRoutes.js           # POST /api/v1/dalle — image generation
  * postRoutes.js            # GET/POST /api/v1/post — CRUD posts
* .env.example               # Backend env template
* index.js                   # Server entry point

render.yaml                  # Render deployment blueprint
LICENSE                      # MIT License
README.md

---

## 🚀 Getting Started

### Prerequisites

* Node.js v16 or higher
* MongoDB Atlas account (free tier works)
* OpenAI API Key
* Cloudinary account (free tier works)

### 1. Clone the Repository

```bash
git clone https://github.com/im-anwesh17/AI-Powered-Image-Generation-APP.git
cd AI-Powered-Image-Generation-APP
```

### 2. Set Up the Server

```bash
cd server
cp .env.example .env
```

Edit `server/.env`:

```env
MONGODB_URL=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=8080
```

Install dependencies and run:

```bash
npm install
npm run dev
```

### 3. Set Up the Client

```bash
cd client
cp .env.example .env
```

Edit `client/.env`:

```env
VITE_API_URL=http://localhost:8080
```

Install dependencies and run:

```bash
npm install
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 🌐 Deployment

### Backend → Render

1. Push code to GitHub.
2. Create a new Web Service in Render.
3. Connect the repository and set Root Directory to `server`.
4. Configure:

   * Build Command: `npm install`
   * Start Command: `npm start`
   * Instance Type: Free
5. Add environment variables:

   * MONGODB_URL
   * OPENAI_API_KEY
   * CLOUDINARY_CLOUD_NAME
   * CLOUDINARY_API_KEY
   * CLOUDINARY_API_SECRET
6. Deploy and note the server URL.

Alternative: Use Render Blueprint deployment with `render.yaml`.

### Frontend → Vercel

1. Create a new project in Vercel.
2. Import the GitHub repository.
3. Set:

   * Root Directory: `client`
   * Framework Preset: `Vite`
4. Add environment variable:

```env
VITE_API_URL=<your_render_server_url>
```

5. Deploy.

---

## 🔑 Environment Variables

### Server (`server/.env`)

| Variable              | Description                                |
| --------------------- | ------------------------------------------ |
| MONGODB_URL           | MongoDB Atlas connection string            |
| OPENAI_API_KEY        | OpenAI API key for DALL-E image generation |
| CLOUDINARY_CLOUD_NAME | Cloudinary cloud name                      |
| CLOUDINARY_API_KEY    | Cloudinary API key                         |
| CLOUDINARY_API_SECRET | Cloudinary API secret                      |
| PORT                  | Server port                                |

### Client (`client/.env`)

| Variable     | Description                                   |
| ------------ | --------------------------------------------- |
| VITE_API_URL | Backend API base URL (without trailing slash) |

---

## 🔌 API Endpoints

| Method | Endpoint      | Description                     |
| ------ | ------------- | ------------------------------- |
| GET    | /             | Health check                    |
| GET    | /api/v1/post  | Get all community posts         |
| POST   | /api/v1/post  | Create a new post               |
| GET    | /api/v1/dalle | DALL-E route health check       |
| POST   | /api/v1/dalle | Generate an image from a prompt |

---

## 📸 How It Works

1. User enters a text prompt.
2. Frontend sends a request to `/api/v1/dalle`.
3. Backend calls OpenAI DALL-E.
4. DALL-E returns a generated image.
5. Backend sends the image back to the frontend.
6. User can publish the image to the community gallery.
7. Backend uploads the image to Cloudinary.
8. Post metadata is stored in MongoDB Atlas.
9. Community users can browse, search, and download shared images.

---

## 👨‍💻 Author

**Anwesh**

GitHub: https://github.com/im-anwesh17

---

## 📝 Credits

This project is a fork of the AI Image Generation App by JavaScript Mastery and has been personalized and enhanced by Anwesh.

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, consider giving it a star on GitHub.

Made by Anwesh.
