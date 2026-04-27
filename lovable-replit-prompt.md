# LOVABLE / REPLIT BUILD PROMPT
## Landing Page: takebackyourthyroid.com

Copy this entire document into Lovable or Replit as your initial prompt.

---

## PROJECT BRIEF

Build a single-page, high-conversion sales/landing page for the pre-launch of the book **"Take Back Your Thyroid"** by McCall McPherson, PA-C (Foreword by Dr. Izabella Wentz). The page sells a $39 pre-launch bundle: the **Thyroid Empowered Course** ($399 value) PLUS a free copy of the book shipped at launch.

**Domain:** takebackyourthyroid.com
**Primary traffic source:** QR code scanned at biohacking conference (mobile-first)
**Secondary:** paid social, email, organic
**Goal:** maximize checkout starts on the primary CTA

## TECH REQUIREMENTS

- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **UI components:** shadcn/ui where appropriate
- **Fonts:** Google Fonts — `Cormorant Garamond` (serif headlines, weights 500/600/700) + `Inter` (body, weights 400/500/600)
- **Icons:** lucide-react
- **Animation:** subtle Framer Motion fade-up on scroll for sections
- **Forms:** Stub the checkout CTA to a `/checkout` route placeholder; do not wire payment yet
- **Mobile-first responsive** — design at 375px first, then scale up
- **Performance:** all images use `next/image`; lazy-load below the fold
- **Accessibility:** WCAG AA contrast, semantic HTML, alt text on every image, focus-visible states on all interactive elements
- **SEO:** meta title, description, OpenGraph tags, favicon

## BRAND SYSTEM (locked from book cover)

### Colors
```css
--brand-teal: #3A6B7E;        /* Primary — banner, headlines accents */
--brand-teal-deep: #2C5564;   /* Hover/dark */
--brand-gold: #D9A23D;        /* Accent — CTAs, "THYROID" word, dividers */
--brand-gold-light: #E8BC68;  /* Hover */
--cream: #F5EFE6;             /* Page background */
--cream-warm: #FAF6EF;        /* Card background */
--ink: #1F2A2E;               /* Body text */
--ink-soft: #4A5560;          /* Secondary text */
--white: #FFFFFF;
```

### Typography
- **H1:** Cormorant Garamond, 56–72px desktop / 36–44px mobile, weight 600, tight tracking. The word "THYROID" in gold uppercase to mirror the cover.
- **H2:** Cormorant Garamond, 40–48px, weight 600
- **H3:** Cormorant Garamond, 24–28px, weight 600
- **Body:** Inter, 17–18px, line-height 1.65
- **Eyebrow / labels:** Inter uppercase, letter-spacing 0.18em, 12–13px, weight 600, brand-teal

### Visual motifs
- Subtle gold botanical leaf SVG flourishes as section dividers (mirror the cover's leaf graphic)
- Soft, warm shadows on cards (never harsh)
- Generous white/cream space — luxe wellness, not crowded funnel
- Book cover image always slightly tilted (~6–8°) with a soft drop shadow for depth
- Avoid stock-photo "doctor with stethoscope" energy; this is editorial wellness

### Voice & tone
- McCall in first person throughout
- Empowering, warm, slightly defiant — patient-advocate, never guru
- Short sentences. Punchy. Validates the reader's experience first, then offers the path
- Female-first audience (women 30–60 with thyroid disease, mostly Hashimoto's/hypothyroid)

## ASSETS

- Book cover image: provide upload slot (`/public/book-cover.jpg`) — tilted hero treatment
- McCall headshot: provide upload slot (`/public/mccall.jpg`)
- Modern Thyroid Clinic logo: optional footer placement
- Dr. Izabella Wentz endorsement badge: text-only is fine

---

## PAGE STRUCTURE & FULL COPY

### 1. ANNOUNCEMENT BAR (sticky top, brand-teal background, white text, 36px tall)
```
✦ LIMITED PRE-LAUNCH OFFER — 90% OFF + FREE BOOK SHIPPED AT LAUNCH ✦
```

### 2. NAVIGATION (transparent over hero, sticks on scroll with cream bg)
- Left: "Take Back Your Thyroid" wordmark (Cormorant Garamond, brand-teal)
- Right (desktop only): The Offer · About McCall · FAQ · [CTA button: "Get the Bundle"]

### 3. HERO SECTION (full viewport on desktop, cream bg)

**Layout:** Two-column desktop (text left 55% / book mockup right 45%), stacked on mobile (text first, book below).

**Eyebrow (uppercase, brand-teal, tracked):**
FOREWORD BY DR. IZABELLA WENTZ — NYT BESTSELLING THYROID PHARMACIST

**H1 (Cormorant, the word "Thyroid" in gold caps to echo the cover):**
Take Back Your **THYROID**.

**Subheadline (serif italic, ink-soft, 22–26px):**
The science-based plan to restore your energy, balance your hormones, and reclaim your health — plus the full course that brings it to life.

**Body paragraph (Inter, 18px):**
Get my **Thyroid Empowered Course** ($399 value) for just **$39** today — and I'll ship you a free copy of my brand-new book the moment it launches.

**Primary CTA (large gold button, white text, generous padding, slight gold glow on hover):**
Get the Course + Free Book — $39 →

**Trust microcopy under CTA (small, ink-soft):**
Instant course access · Free shipping at launch · No subscription · 30-day guarantee

**Trust strip (small icons + text in a row, sits just below CTA):**
✓ 15+ years of clinical practice  ✓ Thousands of patients restored  ✓ As featured in [logos placeholder]

**Right column visual:**
Book cover tilted 8°, soft drop shadow, gold leaf flourish behind it, small "course preview" device mockup floating beside it overlapping slightly.

---

### 4. PROBLEM / EMPATHY SECTION (cream-warm bg, generous padding)

**Eyebrow:** YOU ARE NOT IMAGINING THIS

**H2:** Your labs are "normal." You feel anything but.

**Three-column callout cards (cream bg, soft shadow, gold quote-mark icon top):**

> "Your TSH is in range — everything looks fine."

> "It's just stress. Try to lose a little weight."

> "Here's your levothyroxine. See you in a year."

**Closing paragraph (centered, max-width 720px, serif italic for the bold line):**
Meanwhile, you're exhausted by 2 p.m. Your hair is falling out. Your brain is foggy. You've gained weight you can't explain — and lost a part of yourself you can't quite name.

***You are not crazy. You are not lazy. And you are not getting the care you deserve.***

---

### 5. THE OFFER STACK (the conversion centerpiece — cream bg, large card centered)

**Eyebrow (centered):** THE PRE-LAUNCH BUNDLE

**H2 (centered):** Everything you need to take your thyroid back — for $39.

**Offer card (large, cream-warm bg, gold border 2px, soft shadow, max-width 720px):**

Three stacked items, each with: gold icon left, item name + value right of icon, description below.

**🧠 THYROID EMPOWERED — The Full Course**  *$399 value*
The exact framework I teach my patients at Modern Thyroid Clinic. Lifetime access.
- Read your labs the way a thyroid specialist does
- The right medications, doses, and combinations — and how to advocate for them
- Root-cause protocols for Hashimoto's, hypothyroidism, and post-thyroidectomy
- What to eat, what to skip, and the supplements that actually move the needle

**📕 *Take Back Your Thyroid* — The Book**  *Free, shipped at launch*
My brand-new book, with a foreword by Dr. Izabella Wentz. Yours free with this offer. We cover shipping.

**🎁 The Companion Resource Vault**  *Free with the book*
Downloads, lab cheat sheets, food guides, and the exact tools my clinicians use every day.

**Divider (thin gold line)**

**Total value: $400+** *(strikethrough)*
**Today: $39**

**Primary CTA (full-width within card, gold):**
Yes — Send Me the Course + My Free Book →

**Microcopy below CTA:**
Secure checkout · Instant course access · Free book shipped at launch

---

### 6. SOCIAL PROOF SECTION (brand-teal bg, white/cream text)

**Eyebrow (gold):** TRUSTED BY THOUSANDS OF THYROID PATIENTS

**H2 (white):** This isn't another wellness opinion. It's the protocol that works.

**Three testimonial cards** (cream bg, dark text, 5-star gold icons, italic quote, attribution):

> "I'd been on the same dose of Synthroid for 12 years and was told I was 'optimized.' Two months on McCall's protocol and I felt like myself again for the first time since my 20s."
> — **Sarah K.**, Hashimoto's patient

> "Every doctor told me my numbers were fine. McCall was the first person who actually listened — and the first plan that actually worked."
> — **Jennifer M.**, post-thyroidectomy

> "This course gave me language to advocate for myself. I walked into my next appointment and finally got the labs and medication I needed."
> — **Amanda T.**, hypothyroid

**Below testimonials — Wentz endorsement block (centered, max-width 720px):**

*[Photo placeholder: Dr. Izabella Wentz, small circular]*

> "McCall is doing the work that thyroid patients have been waiting decades for. *Take Back Your Thyroid* is essential reading."
> — **Dr. Izabella Wentz, PharmD**, NYT Bestselling Author of *Hashimoto's Protocol*

---

### 7. ABOUT MCCALL (cream bg, two-column: photo left, story right)

**Eyebrow:** MEET THE AUTHOR

**H2:** I built the practice I wish had existed when I was the patient.

**Body:**
I'm McCall McPherson, PA-C — founder of **Modern Thyroid Clinic**, one of the most-referred thyroid practices in the country.

I didn't set out to become a thyroid specialist. I became one because the system failed me as a patient — and I refused to let it keep failing the millions of women going through the same thing.

For the last 15+ years, I've helped thousands of patients restore their energy, lose the weight, clear the brain fog, and reclaim the version of themselves they thought they'd lost. *Take Back Your Thyroid* is the culmination of everything I've learned.

**Stat row (three columns, gold numbers, ink labels):**
- **15+** Years in clinical practice
- **1,000s** of patients treated
- **Millions** reached through education

---

### 8. WHAT'S INSIDE THE COURSE (cream-warm bg)

**Eyebrow:** INSIDE THYROID EMPOWERED

**H2:** Six modules. One transformation.

**Six-card grid (3x2 desktop, 1x6 mobile), each with gold module number, title, 1-line description:**

1. **Understanding Your Thyroid** — The biology your doctor never explained
2. **Reading Your Labs Like a Specialist** — The numbers, the ranges, the red flags
3. **The Right Medication, The Right Dose** — T4, T3, NDT, and how to advocate for them
4. **The Root-Cause Protocol** — Hashimoto's, hypothyroidism, and post-thyroidectomy paths
5. **Food, Supplements & Lifestyle** — What actually moves the needle
6. **Your Long-Term Plan** — How to stay optimized for life

---

### 9. FAQ (cream bg, accordion using shadcn/ui)

**Eyebrow:** QUESTIONS, ANSWERED

**H2:** Everything you need to know.

1. **When will my book ship?**
   The day it launches. We'll email you tracking the moment it's on its way.

2. **Do I get the course right now?**
   Yes — instant access the second you check out.

3. **Is this really $399 of value for $39?**
   Yes. This is a one-time pre-launch offer to get the book into the hands of as many thyroid patients as possible. The course returns to $399 the day the book launches.

4. **What if I already have a copy of the book?**
   Gift it. Every thyroid patient you know needs one.

5. **Will you ship internationally?**
   Yes — international shipping is available at checkout for a small additional fee.

6. **What's your guarantee?**
   30-day money-back guarantee on the course. Try it. If it's not for you, we'll refund you in full — and you can keep the book.

7. **Is this medical advice?**
   This course is education, not personalized medical advice. Always work with a qualified provider for your individual care.

---

### 10. FINAL CTA SECTION (brand-teal bg, white text, centered, full-width)

**H2 (large, serif, white):** You've waited long enough to feel like yourself.

**Body (cream, max-width 600px, centered):**
Get the course today. Get the book at launch. Take your thyroid back.

**Primary CTA (large gold button):**
Claim My $39 Bundle →

**Microcopy (small, cream):**
Limited pre-launch offer · Price returns to $399 at launch

---

### 11. FOOTER (ink bg, cream text, small)

- Left: "Take Back Your Thyroid" wordmark + tagline "By McCall McPherson, PA-C"
- Center: Quick links — The Offer · About · FAQ · Contact · Privacy · Terms
- Right: Social icons (Instagram, TikTok, YouTube)
- Bottom row: © 2026 Modern Thyroid Clinic. All rights reserved. · Disclaimer: This site provides educational information and is not a substitute for medical advice from a qualified provider.

---

## CONVERSION DETAILS (don't skip these)

- **Sticky mobile CTA bar** at bottom of viewport on mobile only: gold bg, "Get the Bundle — $39 →", appears after user scrolls past hero
- **Exit-intent on desktop:** lightweight modal — "Wait — your bundle is reserved for the next 15 minutes. Claim it now for $39." with same CTA
- **Scarcity marker** above the offer stack card: small gold pill "✦ Pre-launch pricing ends at launch ✦"
- **Trust badges row** in the footer of the offer card: "🔒 Secure checkout · 💳 Stripe · ✓ 30-day guarantee"
- **Smooth scroll** anchors from nav links
- **Form-free page** — every CTA goes straight to checkout. No lead-capture friction.

## DELIVERABLE

A single Next.js page at `/app/page.tsx` (plus any extracted components in `/components/`). Include the Tailwind config with the brand color tokens above. Make it gorgeous, fast, and ruthlessly conversion-focused. Female-first, editorial wellness aesthetic — think *Goop meets a real medical authority*. Not a funnel template.
