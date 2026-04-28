const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
        LevelFormat, BorderStyle, PageBreak } = require('docx');
const fs = require('fs');

const TEAL = "3A6B7E";
const GOLD = "B8862B";
const INK = "1F2A2E";
const SOFT = "4A5560";

// helpers
const eyebrow = (text) => new Paragraph({
  spacing: { before: 360, after: 80 },
  children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 18, color: TEAL, characterSpacing: 60 })],
});
const sectionLabel = (text) => new Paragraph({
  spacing: { before: 480, after: 120 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: GOLD, space: 6 } },
  children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 20, color: GOLD, characterSpacing: 80 })],
});
const h1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  spacing: { before: 120, after: 200 },
  children: [new TextRun({ text, bold: true, size: 44, color: TEAL, font: "Georgia" })],
});
const h2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  spacing: { before: 240, after: 120 },
  children: [new TextRun({ text, bold: true, size: 32, color: TEAL, font: "Georgia" })],
});
const h3 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  spacing: { before: 180, after: 80 },
  children: [new TextRun({ text, bold: true, size: 24, color: TEAL, font: "Georgia" })],
});
const body = (text, opts = {}) => new Paragraph({
  spacing: { after: 120, line: 320 },
  children: [new TextRun({ text, size: 22, color: INK, ...opts })],
});
const italic = (text) => new Paragraph({
  spacing: { after: 120, line: 320 },
  children: [new TextRun({ text, italics: true, size: 24, color: SOFT, font: "Georgia" })],
});
const cta = (text) => new Paragraph({
  alignment: AlignmentType.LEFT,
  spacing: { before: 160, after: 120 },
  border: { top: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 8 },
            bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 8 } },
  children: [new TextRun({ text: `▶ CTA BUTTON:  ${text}`, bold: true, size: 24, color: GOLD })],
});
const micro = (text) => new Paragraph({
  spacing: { after: 240 },
  children: [new TextRun({ text, italics: true, size: 18, color: SOFT })],
});
const bullet = (text) => new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  spacing: { after: 80, line: 300 },
  children: [new TextRun({ text, size: 22, color: INK })],
});
const quote = (text, attr) => [
  new Paragraph({
    spacing: { before: 120, after: 60 },
    indent: { left: 360 },
    border: { left: { style: BorderStyle.SINGLE, size: 18, color: GOLD, space: 12 } },
    children: [new TextRun({ text: `“${text}”`, italics: true, size: 24, color: INK, font: "Georgia" })],
  }),
  new Paragraph({
    spacing: { after: 200 },
    indent: { left: 360 },
    children: [new TextRun({ text: `— ${attr}`, size: 20, color: SOFT })],
  }),
];
const note = (label, text) => new Paragraph({
  spacing: { before: 120, after: 240 },
  shading: { fill: "F5EFE6", type: "clear", color: "auto" },
  children: [
    new TextRun({ text: `${label}:  `, bold: true, size: 18, color: TEAL }),
    new TextRun({ text, size: 18, color: SOFT, italics: true }),
  ],
});
const divider = () => new Paragraph({
  spacing: { before: 240, after: 240 },
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: "✦   ✦   ✦", color: GOLD, size: 22 })],
});

const children = [];

// ----- COVER -----
children.push(new Paragraph({
  spacing: { before: 0, after: 80 },
  children: [new TextRun({ text: "TAKE BACK YOUR THYROID", bold: true, size: 56, color: TEAL, font: "Georgia" })],
}));
children.push(new Paragraph({
  spacing: { after: 120 },
  children: [new TextRun({ text: "Sales Page Copy — Pre-Launch Bundle", italics: true, size: 28, color: GOLD, font: "Georgia" })],
}));
children.push(new Paragraph({
  spacing: { after: 360 },
  children: [new TextRun({ text: "By McCall McPherson, PA-C   ·   Foreword by Dr. Izabella Wentz", size: 22, color: SOFT })],
}));

children.push(new Paragraph({
  border: { top: { style: BorderStyle.SINGLE, size: 8, color: GOLD, space: 8 } },
  spacing: { after: 120 },
  children: [new TextRun({ text: "" })],
}));

children.push(body("Domain:  takebackyourthyroid.com"));
children.push(body("Audience:  Women 30–60 with thyroid disease (Hashimoto's, hypothyroid, post-thyroidectomy)"));
children.push(body("Primary traffic:  QR code at biohacking conference (mobile-first); paid social, email, organic"));
children.push(body("Offer:  Thyroid Empowered Course ($399 value) + free copy of book at launch — for $39"));
children.push(body("Status:  Pre-launch. Internal review draft."));

children.push(divider());
children.push(body("Page is structured top to bottom in the order it will appear. Section labels in gold are reviewer-only — they do not appear on the live page. Notes in cream blocks are direction for design and dev.", { italics: true }));
children.push(new Paragraph({ children: [new PageBreak()] }));

// ----- 1. ANNOUNCEMENT BAR -----
children.push(sectionLabel("Section 1 · Announcement Bar"));
note("Design", "Sticky top bar — brand-teal background, cream/white text, 36px tall.");
children.push(body("✦  LIMITED PRE-LAUNCH OFFER — 90% OFF + FREE BOOK SHIPPED AT LAUNCH  ✦", { bold: true }));

// ----- 2. NAV -----
children.push(sectionLabel("Section 2 · Navigation"));
note("Design", "Transparent over hero, sticks to top with cream background on scroll.");
children.push(body("Wordmark (left):  Take Back Your Thyroid"));
children.push(body("Links (right, desktop):  The Offer  ·  About McCall  ·  FAQ"));
children.push(body("Nav CTA button:  Get the Bundle →"));

// ----- 3. HERO -----
children.push(sectionLabel("Section 3 · Hero"));
note("Design", "Full viewport on desktop. Two columns — copy left (55%), tilted book cover right (45%). Stacked on mobile.");

children.push(eyebrow("Foreword by Dr. Izabella Wentz — NYT Bestselling Thyroid Pharmacist"));
children.push(h1("Take Back Your THYROID."));
note("Type", "The word THYROID appears in gold, uppercase, mirroring the book cover.");

children.push(italic("The science-based plan to restore your energy, balance your hormones, and reclaim your health — plus the full course that brings it to life."));

children.push(body("Get my Thyroid Empowered Course ($399 value) for just $39 today — and I'll ship you a free copy of my brand-new book the moment it launches."));

children.push(cta("Get the Course + Free Book — $39 →"));
children.push(micro("Instant course access  ·  Free book shipped at launch  ·  No subscription  ·  30-day guarantee"));

children.push(body("Trust strip (small icons + text in a row):"));
children.push(bullet("15+ years in clinical practice"));
children.push(bullet("Thousands of patients restored"));
children.push(bullet("Millions reached through education"));

// ----- 4. PROBLEM -----
children.push(sectionLabel("Section 4 · Problem & Empathy"));
note("Design", "Cream-warm background, generous padding. Three doctor-quote cards in a row.");

children.push(eyebrow("You are not imagining this"));
children.push(h2("Your labs are \"normal.\" You feel anything but."));

children.push(body("Three callout cards (each in serif italic, with a gold quote-mark icon):"));
children.push(...quote("Your TSH is in range — everything looks fine.", "Doctor #1"));
children.push(...quote("It's just stress. Try to lose a little weight.", "Doctor #2"));
children.push(...quote("Here's your levothyroxine. See you in a year.", "Doctor #3"));

children.push(body("Closing paragraph (centered, max-width 720px):"));
children.push(body("Meanwhile, you're exhausted by 2 p.m. Your hair is falling out. Your brain is foggy. You've gained weight you can't explain — and lost a part of yourself you can't quite name."));
children.push(italic("You are not crazy. You are not lazy. And you are not getting the care you deserve."));

// ----- 5. OFFER STACK -----
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(sectionLabel("Section 5 · The Offer Stack (conversion centerpiece)"));
note("Design", "Centered card, cream-warm background, 2px gold border, soft shadow. Max-width 720px.");

children.push(eyebrow("✦  Pre-launch pricing ends at launch  ✦"));
children.push(eyebrow("The Pre-Launch Bundle"));
children.push(h2("Everything you need to take your thyroid back — for $39."));

children.push(h3("🧠 Thyroid Empowered — The Full Course   ($399 value)"));
children.push(body("The exact framework I teach my patients at Modern Thyroid Clinic. Lifetime access."));
children.push(bullet("Read your labs the way a thyroid specialist does"));
children.push(bullet("The right medications, doses, and combinations — and how to advocate for them"));
children.push(bullet("Root-cause protocols for Hashimoto's, hypothyroidism, and post-thyroidectomy"));
children.push(bullet("Food, supplements, and lifestyle that actually move the needle"));

children.push(h3("📕 Take Back Your Thyroid — The Book   (Free, shipped at launch)"));
children.push(body("My brand-new book, with a foreword by Dr. Izabella Wentz. Yours free with this offer. We cover shipping."));

children.push(h3("🎁 The Companion Resource Vault   (Free with the book)"));
children.push(body("Downloads, lab cheat sheets, food guides, and the exact tools my clinicians use every day."));

children.push(divider());
children.push(body("Total value:  $400+   (strikethrough)", { strike: true }));
children.push(new Paragraph({
  children: [new TextRun({ text: "Today: $39", bold: true, size: 44, color: TEAL, font: "Georgia" })],
  spacing: { before: 80, after: 200 },
}));

children.push(cta("Yes — Send Me the Course + My Free Book →"));
children.push(micro("Secure checkout  ·  Stripe  ·  Instant course access  ·  30-day guarantee"));

// ----- 6. SOCIAL PROOF -----
children.push(sectionLabel("Section 6 · Social Proof"));
note("Design", "Brand-teal background, cream text. Three patient testimonial cards + Wentz endorsement block.");

children.push(eyebrow("Trusted by thousands of thyroid patients"));
children.push(h2("This isn't another wellness opinion. It's the protocol that works."));

children.push(...quote("I'd been on the same dose of Synthroid for 12 years and was told I was 'optimized.' Two months on McCall's protocol and I felt like myself again for the first time since my 20s.", "Sarah K. — Hashimoto's patient"));
children.push(...quote("Every doctor told me my numbers were fine. McCall was the first person who actually listened — and the first plan that actually worked.", "Jennifer M. — Post-thyroidectomy"));
children.push(...quote("This course gave me the language to advocate for myself. I walked into my next appointment and finally got the labs and medication I needed.", "Amanda T. — Hypothyroid"));

note("Action", "Replace placeholder testimonials with 3 real patient quotes (text + first name + condition + optional headshot) before launch.");

children.push(h3("Wentz endorsement block"));
children.push(...quote("McCall is doing the work that thyroid patients have been waiting decades for. Take Back Your Thyroid is essential reading.", "Dr. Izabella Wentz, PharmD — NYT Bestselling Author of Hashimoto's Protocol"));

// ----- 7. ABOUT -----
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(sectionLabel("Section 7 · About McCall"));
note("Design", "Cream background. Two columns — McCall portrait left (4:5 aspect, warm natural light), story right.");

children.push(eyebrow("Meet the author"));
children.push(h2("I built the practice I wish had existed when I was the patient."));

children.push(body("I'm McCall McPherson, PA-C — founder of Modern Thyroid Clinic, one of the most-referred thyroid practices in the country."));
children.push(body("I didn't set out to become a thyroid specialist. I became one because the system failed me as a patient — and I refused to let it keep failing the millions of women going through the same thing."));
children.push(body("For the last 15+ years, I've helped thousands of patients restore their energy, lose the weight, clear the brain fog, and reclaim the version of themselves they thought they'd lost. Take Back Your Thyroid is the culmination of everything I've learned."));

children.push(h3("Stat row"));
children.push(bullet("15+   Years in clinical practice"));
children.push(bullet("1,000s   of patients treated"));
children.push(bullet("Millions   reached through education"));

// ----- 8. COURSE MODULES -----
children.push(sectionLabel("Section 8 · What's Inside the Course"));
note("Design", "Cream-warm background. 3×2 grid of cards on desktop, single-column on mobile. Each card: oversized gold module number, title, one-line description.");

children.push(eyebrow("Inside Thyroid Empowered"));
children.push(h2("Six modules. One transformation."));

children.push(h3("01 · Understanding Your Thyroid"));
children.push(body("The biology your doctor never explained."));

children.push(h3("02 · Reading Your Labs Like a Specialist"));
children.push(body("The numbers, the ranges, the red flags."));

children.push(h3("03 · The Right Medication, the Right Dose"));
children.push(body("T4, T3, NDT — and how to advocate for them."));

children.push(h3("04 · The Root-Cause Protocol"));
children.push(body("Hashimoto's, hypothyroidism, and post-thyroidectomy paths."));

children.push(h3("05 · Food, Supplements & Lifestyle"));
children.push(body("What actually moves the needle."));

children.push(h3("06 · Your Long-Term Plan"));
children.push(body("How to stay optimized for life."));

// ----- 9. FAQ -----
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(sectionLabel("Section 9 · FAQ"));
note("Design", "Accordion. First item open by default.");

children.push(eyebrow("Questions, answered"));
children.push(h2("Everything you need to know."));

const faqs = [
  ["When will my book ship?", "The day it launches. We'll email you tracking the moment it's on its way."],
  ["Do I get the course right now?", "Yes — instant access the second you check out."],
  ["Is this really $399 of value for $39?", "Yes. This is a one-time pre-launch offer to get the book into the hands of as many thyroid patients as possible. The course returns to $399 the day the book launches."],
  ["What if I already have a copy of the book?", "Gift it. Every thyroid patient you know needs one."],
  ["Will you ship internationally?", "Yes — international shipping is available at checkout for a small additional fee."],
  ["What's your guarantee?", "30-day money-back guarantee on the course. Try it. If it's not for you, we'll refund you in full — and you can keep the book."],
  ["Is this medical advice?", "This course is education, not personalized medical advice. Always work with a qualified provider for your individual care."],
];
faqs.forEach(([q, a]) => {
  children.push(h3(`Q.  ${q}`));
  children.push(body(`A.  ${a}`));
});

// ----- 10. FINAL CTA -----
children.push(sectionLabel("Section 10 · Final CTA"));
note("Design", "Brand-teal background, cream text, full-width, centered. Gold leaf flourishes corner.");

children.push(h2("You've waited long enough to feel like yourself."));
children.push(body("Get the course today. Get the book at launch. Take your thyroid back."));
children.push(cta("Claim My $39 Bundle →"));
children.push(micro("Limited pre-launch offer  ·  Price returns to $399 at launch"));

// ----- 11. FOOTER -----
children.push(sectionLabel("Section 11 · Footer"));
note("Design", "Ink/charcoal background, cream text, small.");
children.push(body("Wordmark + tagline:  Take Back Your Thyroid  ·  By McCall McPherson, PA-C"));
children.push(body("Quick links:  The Offer  ·  About  ·  FAQ  ·  Contact  ·  Privacy  ·  Terms"));
children.push(body("Social:  Instagram  ·  TikTok  ·  YouTube"));
children.push(micro("© 2026 Modern Thyroid Clinic. All rights reserved.  ·  This site provides educational information and is not a substitute for medical advice from a qualified provider."));

// ----- REVIEWER NOTES -----
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(sectionLabel("Reviewer Notes"));

children.push(h3("Voice & tone (locked)"));
children.push(bullet("McCall in first person throughout"));
children.push(bullet("Empowering, warm, slightly defiant — patient-advocate, never guru"));
children.push(bullet("Short sentences. Validate the reader's experience first, then offer the path."));
children.push(bullet("Female-first audience: women 30–60 with thyroid disease"));

children.push(h3("Brand system (from book cover)"));
children.push(bullet("Primary teal:  #3A6B7E"));
children.push(bullet("Accent gold:  #D9A23D"));
children.push(bullet("Cream background:  #F5EFE6"));
children.push(bullet("Headline font:  Cormorant Garamond"));
children.push(bullet("Body font:  Inter"));

children.push(h3("Conversion details (don't strip in review)"));
children.push(bullet("Sticky mobile CTA bar at bottom of viewport, gold"));
children.push(bullet("Exit-intent modal on desktop with same CTA"));
children.push(bullet("Scarcity pill above offer card — \"Pre-launch pricing ends at launch\""));
children.push(bullet("Trust badges in offer card footer — Stripe, secure checkout, 30-day guarantee"));
children.push(bullet("Form-free page — every CTA goes straight to checkout. No lead-capture friction."));

children.push(h3("Open items / decisions needed"));
children.push(bullet("Confirm final book + shipping cost with Brand Builders → re-test $37 vs $39"));
children.push(bullet("Source 3 real patient testimonials (replace placeholders)"));
children.push(bullet("Confirm Wentz endorsement quote wording with her team"));
children.push(bullet("Decide: international shipping fee or US-only at launch?"));

const doc = new Document({
  creator: "Modern Thyroid Clinic",
  title: "Take Back Your Thyroid — Sales Page Copy",
  description: "Pre-launch landing page copy for team review",
  styles: {
    default: { document: { run: { font: "Calibri", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 44, bold: true, font: "Georgia", color: TEAL },
        paragraph: { spacing: { before: 240, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Georgia", color: TEAL },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Georgia", color: TEAL },
        paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    children,
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("/Users/karlkrummenacher/Documents/Business/MTC/Marketing/Book Launch Funnel/Take-Back-Your-Thyroid-Sales-Page-Copy.docx", buf);
  console.log("OK");
});
