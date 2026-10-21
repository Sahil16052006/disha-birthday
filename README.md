# 🌸 A Little World for Disha

> *“A birthday gift, made of little memories, beautiful wishes, and words meant just for you.”*  
> **Dedicated to Disha • 22 October 2026 • Made with love, by Sahil**

---

## ✨ Overview

**A Little World for Disha** is a custom, handcrafted digital birthday experience designed like an intimate luxury editorial journal and romantic novel. 

It celebrates Disha’s quiet ambition, determination, patience, and sisterly bond with Sahil, anchored by the cherished personal memory that Disha notices even the smallest changes in Sahil's face without needing explanations.

---

## 🎨 Creative Architecture & Palette

- **Warm Ivory (`#FFF9F3`) & Blush Pink (`#F2D6D7`)**: Soft, delicate canvas and card backgrounds.
- **Deep Burgundy (`#702D42`)**: Editorial headings, wax seal, and accents.
- **Champagne Gold (`#C8A46B`)**: Fine borders, stars, and celebratory highlights.
- **Warm Dark Brown (`#38272B`)**: Editorial body typography.
- **Dusty Rose (`#D6A0A6`)**: Floating petals, ribbons, and subtle dividers.

---

## 📖 The 10 Interactive Experiences

1. **Screen 1 — The Opening Curtain**: A full-screen gateway with drifting rose petals and gold dust. "For someone who notices the little things... Disha ♡". Unlocks the gift with optional ambient music.
2. **Screen 2 — The Birthday Reveal**: Editorial hero celebrating Disha's day with a sincere birthday message and interactive petal confetti.
3. **Screen 3 — “The Little Things You Do”**: The emotional heart of the website, set on warm parchment paper, reflecting on how she notices unspoken moods.
4. **Screen 4 — “A Girl Who Keeps Becoming”**: 4 progressive milestone cards honoring her quiet courage, self-reliance, and patience.
5. **Screen 5 — “Between the Pages”**: A cozy bookstore atmosphere dedicated to *October Junction* and *Can We Be Strangers Again?*, featuring interactive page-turn reflections and bookmark ribbons.
6. **Screen 6 — “Little Moments, Big Feelings”**: A scrapbook gallery featuring real photographs of Disha with polaroid styling, washi tape, handwritten captions, and a full-screen Lightbox.
7. **Screen 7 — “A Letter From Sahil”**: A sealed envelope with a burgundy ribbon and wax seal that animates open to reveal Sahil's heartfelt sisterly letter.
8. **Screen 8 — The Birthday Countdown**: An exact countdown calculated for midnight Asia/Kolkata (UTC+5:30) with dynamic states (Before, During, and After). Includes preview testing controls.
9. **Screen 9 — The Secret Birthday Surprise**: A final interactive gift box that unties to reveal an emotional closing note with celebratory confetti.
10. **Screen 10 — The Final Page**: Minimalist closing scene signed by Sahil with a working replay button that returns to the opening without reloading.

---

## 🎵 Soothing Ambient Audio

The website includes a floating music player with an ambient piano melody engine built with the **Web Audio API**. It works 100% offline without copyright restrictions, zero external network calls, and provides options to connect Spotify and YouTube playlists.

---

## 🚀 Running Locally

1. Open your terminal in this directory:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. Build and preview the production version:
   ```bash
   npm run build
   npm run preview
   ```

---

## 📸 Updating Photos & Messages

All text, dates, photos, and music links are centralized in one single configuration file:
👉 **`src/data/birthdayConfig.ts`**

### To add or change photos:
1. Place your new image in the `public/images/` folder.
2. Open `src/data/birthdayConfig.ts`.
3. Update the `gallery.photos` list:
   ```ts
   {
     id: 'photo-5',
     url: 'images/your_new_photo.jpg',
     caption: 'A new lovely memory',
     subcaption: 'Captured on a sunny afternoon',
     aspect: 'portrait',
   }
   ```
4. Run `npm run build` to update the production bundle.

---

## 🌐 Free Public Deployment on GitHub Pages

This website is pre-configured with relative asset paths (`./`) and includes an automated GitHub Actions deployment workflow.

### Quick Deployment Steps:

1. **Create a GitHub repository:**
   - Go to [GitHub.com](https://github.com) and create a new repository (e.g. `disha-birthday`).

2. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "A Little World for Disha - Birthday Website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/disha-birthday.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - In your GitHub repository, click on **Settings** > **Pages** (under the left menu).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - The included `.github/workflows/deploy.yml` workflow will automatically run, build the site, and publish it to:
     `https://<your-username>.github.io/disha-birthday/`

4. **Share the link with Disha!** 🌸
