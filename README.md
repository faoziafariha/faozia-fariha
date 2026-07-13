# Faozia Fariha — Portfolio

Aesthetic, responsive single-page portfolio built from scratch with vanilla **HTML, CSS, and JavaScript** — no frameworks, no build step. Deploy it free in under a minute.

## ✨ Features

- Modern dark theme with gradient accents and aurora background
- Typewriter hero animation + scroll reveal effects
- Fully responsive (mobile drawer menu included)
- Sections: Hero, About, Skills, Education, Projects, Experience, Competitive Programming, Achievements, Certifications, Contact
- Accessibility-friendly (semantic HTML, focusable links, reduced-motion support)
- ~15 KB total — instant load

## 📁 Project structure

```
portfolio/
├── index.html      # Page markup + content
├── styles.css      # Theme, layout, animations
├── script.js       # Typewriter, reveal, nav, parallax
└── README.md       # You are here
```

## 🚀 Run locally

Just open `index.html` in a browser, or:

```bash
# from this folder
python -m http.server 5173
# then visit http://localhost:5173
```

## 🌐 Deploy

Pick any one of the three options below — all are **free** and take a few minutes.

### Option 1 · GitHub Pages (recommended for a personal site)

```bash
git init
git add .
git commit -m "feat: initial portfolio"
# create a repo on GitHub (e.g. faozia.github.io), then:
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: `main` / `(root)`**. Your site will be live at:
`https://<your-username>.github.io/<repo>/`

> If you want the cleaner URL `https://<username>.github.io`, name the repo `<username>.github.io`.

### Option 2 · Vercel

1. Push the project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** the repo.
3. Leave all settings default — Vercel auto-detects static sites.
4. Click **Deploy**. Done.

Or, no-account-needed CLI:

```bash
npm i -g vercel
vercel        # follow prompts
```

### Option 3 · Netlify

**Drag & drop**: Go to [app.netlify.com/drop](https://app.netlify.com/drop), drag this folder onto the page — instant live URL.

**Or with CLI:**

```bash
npm i -g netlify-cli
netlify deploy --dir=. --prod
```

### Option 4 · Bolt.host / Static hosting (used previously)

Your previous portfolio was on `ai-engineer-professi-cnku.bolt.host` — Bolt.host accepts static sites directly. Upload the three files (`index.html`, `styles.css`, `script.js`) via their dashboard.

## 🛠 Customizing

| What you want to change     | Where to edit                         |
|----------------------------|---------------------------------------|
| Name, tagline, links       | `index.html` — `#home` section        |
| About copy / stats         | `index.html` — `#about` section       |
| Skills list                | `index.html` — `#skills` section      |
| Projects (add / remove)    | `index.html` — `.projects-grid`       |
| Colors / theme             | `styles.css` — `:root` variables       |
| Typewriter phrases         | `script.js` — `phrases` array         |
| Footer text                | `index.html` — `.site-footer`         |

## 🎨 Color palette

```css
--bg:        #0b0f1a   /* deep navy */
--accent:    #7c5cff   /* violet */
--accent-2:  #38e8ff   /* cyan */
--accent-3:  #ff6bd6   /* pink */
--gold:      #ffd166   /* achievement highlight */
```

## 📜 License

MIT — use it, remix it, ship it.