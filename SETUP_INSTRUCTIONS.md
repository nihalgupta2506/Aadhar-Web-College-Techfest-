# AADHAR '14 - Local Setup Guide

## 📋 Files Included

- `index.html` - Main HTML file (ALL pages included)
- `style.css` - Complete styling
- `script.js` - JavaScript functionality with countdown timer
- `SETUP_INSTRUCTIONS.md` - This file

## 🎬 Required Assets

You need to add the video background file:

1. **Download the video**: `bg-video.mp4` (jungle/forest video background)
   - Place it in the same folder as `index.html`
   - If you don't have a video, you can:
     - Create a simple MP4 video of jungle scenery
     - Or comment out the video line in HTML and it will use the overlay effect

## ⚙️ How to Run Locally

### Option 1: Using Python (Recommended for Windows/Mac/Linux)

```bash
# Navigate to the folder containing the HTML files
cd path/to/aadhar-website

# For Python 3:
python -m http.server 8000

# For Python 2:
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: **http://localhost:8000**

### Option 2: Using Node.js (http-server)

```bash
# Install globally (one time)
npm install -g http-server

# Navigate to folder and run
cd path/to/aadhar-website
http-server
```

Then open: **http://localhost:8080**

### Option 3: Using Live Server (VS Code Extension)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically

### Option 4: Direct File Opening (Limited Features)

- Just double-click `index.html` to open in browser
- ⚠️ Note: Video may not play due to browser security. Use one of the above methods instead.

## 🎮 Website Features

✅ **6 Pages:**
- Home (with countdown timer to Feb 1)
- Levels (Events)
- The Legend (About)
- Guardians (Team)
- Enter The Game (Registration)
- Signal (Contact)

✅ **Features:**
- Countdown timer updating every second
- Responsive design (mobile, tablet, desktop)
- Jungle theme with animations
- Navigation between pages
- Registration form
- Contact form

## 📱 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

To modify content, edit `index.html`:

- **Event names**: Look for `<h3>` tags in the EVENTS PAGE section
- **Team members**: Edit the TEAM PAGE section
- **Contact info**: Edit the CONTACT PAGE section
- **Colors**: Edit `:root` variables in `style.css`
- **Fonts**: Edit `@import` links in `style.css`

## 🎥 Adding Your Video

1. Get a jungle/forest video (MP4 format recommended)
2. Name it `bg-video.mp4`
3. Place in same folder as `index.html`
4. That's it! It will auto-play

## ❌ Troubleshooting

### Video not playing?
- Make sure you're using a local server (not just opening the file)
- Check file is named exactly: `bg-video.mp4`
- Try a different video format if needed

### Fonts look weird?
- The fonts load from Google Fonts (needs internet)
- Make sure you have a stable connection

### Mobile menu not working?
- Try a different browser
- Clear browser cache (Ctrl+Shift+Del)

## 🚀 Deployment

To deploy online:

1. **Netlify** (Free & Easy):
   - Drag and drop folder at netlify.com/drop
   - Done!

2. **GitHub Pages**:
   - Push to GitHub repo
   - Enable Pages in settings
   - Visit `username.github.io/repo-name`

3. **Vercel**:
   - Connect your GitHub repo
   - Auto-deploys on push

4. **Any Web Server**:
   - Upload all files to your hosting
   - Make sure file paths are correct

## 📧 Support

For issues or questions about this website, contact:
- **Email**: aadhar@poornima.org
- **Phone**: +91 98765 43210

---

**Made with ❤️ for AADHAR '14 by Zircon Club**
