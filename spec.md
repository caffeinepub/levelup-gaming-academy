# LevelUp Gaming Academy

## Current State
- HomePage.tsx has a dark gradient background with a grid overlay, frosted glass oval, SVG game icons, and an inline footer.
- GamePage.tsx has pack cards with glassmorphism, a tournament note, and an inline footer.
- No animated background (particles, glowing grid), no CSS keyframe animations.
- Footer.tsx is a separate detailed component used elsewhere but not on these pages.
- Game card images are SVG icons, not photo images.
- No Tournament section on the homepage.

## Requested Changes (Diff)

### Add
- Animated background: dark blue→black gradient, faint glowing grid, floating particles (CSS/JS), soft neon green highlights.
- CSS keyframe animations: fadeIn, glowPulse, slideUp, float for particles.
- Hero section: glowing neon green title with animated glow pulse, larger font, smooth fade-in.
- Description text above title: "LevelUp Gaming Academy is here to help you improve your gaming skills and become a better competitive player."
- Game cards: use existing generated PNG images (chess, fortnite, codm, valorant, roblox) with dark overlay, rounded corners, soft shadow, neon hover glow, scale(1.05) on hover.
- Section text "For further assistance please select your game." with fade-in animation.
- Training Pack cards on GamePage: updated descriptions, soft neon border, hover glow, slide-up animation.
- Tournament section on HomePage: trophy icon, glowing card, title "Monthly Tournament", description.
- Professional footer on both pages: "© 2026 LevelUp Gaming Academy — Helping gamers level up their skills."

### Modify
- HomePage.tsx: replace SVG icons with image-based cards, enhance animations and layout.
- GamePage.tsx: update pack descriptions, improve card styling, update footer text.
- index.css: add keyframe animations (fadeIn, glowPulse, slideUp, floatParticle).

### Remove
- SVG icon components (ChessIcon, FortniteIcon, CodmIcon, ValorantIcon, RobloxIcon) from HomePage.
- Old inline footer text from both pages.

## Implementation Plan
1. Add CSS keyframe animations to index.css.
2. Rewrite HomePage.tsx:
   - Animated background with particles (JS-rendered divs with float animation).
   - Glowing grid overlay.
   - Hero: description text + glowing pulsing title with fadeIn.
   - Game cards using PNG images with dark overlay, hover effects.
   - Tournament section with trophy icon and glowing card.
   - Professional footer.
3. Update GamePage.tsx:
   - Update pack descriptions to new text.
   - Soft neon border on pack cards, slide-up animation.
   - Updated footer text.
