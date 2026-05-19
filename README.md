# 🎨 PowerPoint Generator

Generate beautiful PowerPoint presentations from text prompts using AI - **100% Free, No Login, No Signup**

## ✨ Features

✅ **Completely Free** - No API costs or subscriptions  
✅ **No Login Required** - Start immediately  
✅ **Runs Locally** - Your data stays private  
✅ **Fast Generation** - Creates full presentations in seconds  
✅ **Beautiful Output** - Professional-looking slides  
✅ **AI-Powered** - Uses Ollama with Mistral model  

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- Ollama ([Download](https://ollama.ai))

### Step 1: Install Ollama

1. Download Ollama from https://ollama.ai
2. Install and run the application
3. Open terminal and run:

```bash
ollama pull mistral
```

4. Keep Ollama running in the background:

```bash
ollama serve
```

### Step 2: Setup Project

```bash
# Clone or navigate to the project
cd powerpoint

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

### Step 3: Use the App

1. Open http://localhost:3000 in your browser
2. Enter a prompt describing your presentation
3. Click "Generate PowerPoint"
4. Wait 30-60 seconds for AI to create it
5. Download your PPTX file automatically!

## 📝 Example Prompts

- "Create a presentation about climate change with 5 slides"
- "Generate a business proposal presentation for a SaaS startup"
- "Make a presentation about artificial intelligence and machine learning"
- "Create an educational presentation about world history"
- "Generate a marketing presentation for a new product launch"

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Frontend**: React 18 + TypeScript
- **AI**: Ollama (Local)
- **PowerPoint**: pptxgenjs
- **Styling**: CSS Modules

## 📁 Project Structure

```
powerpoint/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts       # API endpoint for generating presentations
│   ├── page.tsx               # Main UI component
│   ├── page.module.css        # Styling
│   ├── layout.tsx             # Layout wrapper
│   └── globals.css            # Global styles
├── package.json
├── next.config.js
├── tsconfig.json
├── .env.example               # Environment variables template
├── .gitignore
└── README.md
```

## 🔧 Configuration

Edit `.env.local` to customize:

```env
OLLAMA_API_URL=http://localhost:11434
OLLAMA_MODEL=mistral
NEXT_PUBLIC_APP_NAME=PowerPoint Generator
```

## 📊 How It Works

1. **User Input** - Enter a prompt describing your presentation
2. **AI Processing** - Ollama generates structured slide content
3. **PPTX Generation** - Creates a PowerPoint file with:
   - Title slide with gradient background
   - Content slides with bullet points
   - Closing slide
   - Professional styling
4. **Download** - File downloads automatically

## ⚙️ Available Ollama Models

You can use different models by changing `OLLAMA_MODEL` in `.env.local`:

```bash
ollama pull mistral      # Recommended (fastest)
ollama pull llama2       # High quality
ollama pull neural-chat  # Good balance
ollama pull dolphin-mixtral  # Advanced
```

To use a different model:

```bash
ollama pull neural-chat
# Update .env.local: OLLAMA_MODEL=neural-chat
```

## 🐛 Troubleshooting

### "Cannot connect to Ollama"

- Make sure Ollama is running (`ollama serve` in terminal)
- Check `OLLAMA_API_URL` in `.env.local` is correct
- Verify Ollama is installed properly

### "Model not found"

```bash
ollama pull mistral
```

### Slow generation

- First run is slower as model loads into memory
- Subsequent requests are faster
- Ensure sufficient RAM available (4GB+ recommended)

### Presentation looks plain

- This is intentional for compatibility
- You can edit the generated PPTX in PowerPoint/Google Slides
- Add images and advanced formatting as needed

## 📈 Performance

- **First request**: 30-90 seconds (model loading)
- **Subsequent requests**: 10-30 seconds
- **File size**: 50-200 KB
- **Supports**: 3-5 slides per generation

## 🔒 Privacy

- ✅ Runs completely locally
- ✅ No data sent to external servers
- ✅ No tracking or analytics
- ✅ No account required
- ✅ No API keys stored

## 📄 License

MIT

## 🤝 Contributing

Feel free to fork and submit pull requests!

## 💬 Support

If you encounter issues:

1. Check Ollama is running
2. Verify Node.js version (18+)
3. Clear `node_modules` and reinstall
4. Check `.env.local` configuration

---

**Made with ❤️ using Next.js and Ollama**
