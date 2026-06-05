# 🎨 AI Image Studio — by Anwesh

A full-stack web application that generates AI-powered images using **OpenAI DALL-E** and publishes them to a shared community gallery. Built with the MERN stack (MongoDB, Express, React, Node.js).

![AI Image Studio](client/src/assets/preview.png)

## ✨ Features

- **AI Image Generation** — Generate images from text prompts using OpenAI's DALL-E model
- **Community Gallery** — Browse and discover images created by other users
- **Image Sharing** — Publish generated images to the community showcase
- **Search** — Search through posts by name or prompt
- **Download** — Download any community image to your device
- **Surprise Me** — Get random creative prompt suggestions

## 🛠️ Tech Stack

| Layer      | Technology                      |
|------------|---------------------------------|
| Frontend   | React 18, Vite, Tailwind CSS    |
| Backend    | Node.js, Express.js             |
| Database   | MongoDB Atlas (Mongoose ODM)    |
| AI         | OpenAI DALL-E API               |
| Storage    | Cloudinary (image hosting)      |
| Deployment | Vercel (frontend), Render (backend) |

## 📁 Project Structure

```
├── client/                  # React frontend (Vite)
│   ├── src/
│   │   ├── assets/          # Static assets (logo, icons)
│   │   ├── components/      # Reusable UI components
│   │   ├── constant/        # Prompt suggestions
│   │   ├── page/            # Page components (Home, CreatePost)
│   │   └── utils/           # Utility functions
│   ├── .env.example         # Frontend env template
│   └── vercel.json          # Vercel deployment config
├── server/                  # Express backend
│   ├── mongodb/             # Database connection & models
│   ├── routes/              # API routes (DALL-E, Posts)
│   ├── .env.example         # Backend env template
│   └── index.js             # Server entry point
├── render.yaml              # Render deployment blueprint
└── LICENSE                  # MIT License
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (free tier works)
- [OpenAI API Key](https://platform.openai.com/api-keys)
- [Cloudinary](https://cloudinary.com/) account (free tier works)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-image-studio.git
cd ai-image-studio
```

### 2. Set Up the Server

```bash
cd server
cp .env.example .env
# Edit .env with your actual credentials
npm install
npm run dev
```

### 3. Set Up the Client

```bash
cd client
cp .env.example .env
# Edit .env — set VITE_API_URL=http://localhost:8080
npm install
npm run dev
```

The app should now be running at `http://localhost:5173`.

## 🌐 Deployment

### Backend → Render

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/) → **New** → **Blueprint**
3. Connect your GitHub repo — Render will auto-detect `render.yaml`
4. Set the environment variables in Render's dashboard:
   - `MONGODB_URL`
   - `OPENAI_API_KEY`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
5. Deploy — note your server URL (e.g., `https://anwesh-ai-image-generator-api.onrender.com`)

### Frontend → Vercel

1. Go to [Vercel](https://vercel.com/) → **Add New Project**
2. Import your GitHub repo
3. Set **Root Directory** to `client`
4. Set **Framework Preset** to `Vite`
5. Add environment variable:
   - `VITE_API_URL` = your Render server URL (from step 5 above)
6. Deploy

## 🔑 Environment Variables

### Server (`server/.env`)

| Variable | Description |
|----------|-------------|
| `MONGODB_URL` | MongoDB Atlas connection string |
| `OPENAI_API_KEY` | OpenAI API key for DALL-E |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `PORT` | Server port (auto-set by Render) |

### Client (`client/.env`)

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API base URL (no trailing slash) |

## 📝 Credits

This project is a fork of the [AI Image Generation App](https://github.com/adrianhajdin/project_ai_mern_image_generation) by **JavaScript Mastery**. Personalized and maintained by **Anwesh**.

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
