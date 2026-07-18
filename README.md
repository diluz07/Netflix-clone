# 🎬 Netflix Clone

A pixel-perfect Netflix UI clone built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies, just pure front-end magic.

**[🔗 Live Demo](https://diluz07.github.io/Netflix-clone/)**

---

## ✨ What's Inside

This isn't your average tutorial clone. It's a fully interactive streaming platform UI with real functionality:

- **Hero Slideshow** — The billboard cycles through 5 featured shows every 8 seconds with smooth crossfade transitions and clickable indicator dots (just like the real Netflix).
- **Infinite Scroll Rows** — All category rows scroll endlessly in a seamless loop. Click the arrows or scroll manually — it never stops, just like a roulette.
- **19 Real Shows & Movies** — Stranger Things, Breaking Bad, Money Heist, Dark, The Witcher, and more — each with real TMDB artwork.
- **Hover Previews** — Hover over any show card to see it scale up with a smooth popup showing action buttons, metadata, and match scores.
- **Built-in Video Player** — Click "Play" on any show and a full video player opens with play/pause, volume, progress scrubbing, speed control, and fullscreen.
- **Search** — Type in the search bar to instantly filter through all shows and movies.
- **My List** — Add or remove shows from your personal watchlist. It persists across sessions using localStorage.
- **Details Modal** — Click "More Info" on any show for a detailed modal with synopsis, cast, genres, and a trailer player.
- **Responsive Design** — Looks great on desktops, tablets, and phones.

---

## 🚀 Getting Started

Want to run it locally? It's dead simple — no `npm install`, no build step, nothing.

### 1. Clone the repo

```bash
git clone https://github.com/diluz07/Netflix-clone.git
cd Netflix-clone
```

### 2. Start a local server

You can use Python (comes pre-installed on Mac/Linux):

```bash
python3 -m http.server 8080
```

Or if you prefer Node.js:

```bash
npx serve .
```

### 3. Open in your browser

Head to [http://localhost:8080](http://localhost:8080) and you're in.

### 4. Sign in

Use these credentials on the login screen:

| Email | Password |
|---|---|
| `test@example.com` | `password123` |

That's it. You're watching "Netflix" now. 🍿

---

## 🗂️ Project Structure

```
Netflix-clone/
├── index.html          → The entire UI (landing page, browse, modals, player)
├── style.css           → All styling (1400+ lines of handcrafted CSS)
├── app.js              → All logic (1100+ lines — auth, slideshow, search, player)
├── netflix-logo.png    → Netflix logo with transparent background
├── black-mirror.jpg    → Custom Black Mirror artwork
├── cobra-kai.jpg       → Cobra Kai poster
├── peaky-blinders.jpg  → Peaky Blinders poster
├── the-witcher.jpg     → The Witcher poster
└── .gitignore
```

No build tools. No bundlers. No package.json. Just files that work.

---

## 🎨 Design Highlights

A few things I'm proud of:

- **Glassmorphism login** with frosted-glass blur and subtle borders
- **Netflix-style indicator dots** on the hero slideshow with a progress bar animation
- **Smooth cubic-bezier transitions** on card hovers (not just generic `ease`)
- **Layered box shadows** for realistic depth on hover popups
- **Gradient overlays** on the billboard that match Netflix's exact look
- **Custom video player** styled to match Netflix's dark UI

---

## 🛠️ Built With

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, flexbox, gradients, keyframe animations, media queries
- **JavaScript (ES6+)** — DOM manipulation, localStorage, event delegation
- **Google Fonts** — Inter + Outfit
- **TMDB** — Movie artwork and poster images

---

## 📝 Notes

- This is a front-end UI clone for educational purposes only. It doesn't stream actual content.
- Show images are sourced from [TMDB](https://www.themoviedb.org/). All rights belong to their respective owners.
- The video player uses free sample videos from Google's public media bucket.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ☕ and way too many CSS lines.*
