import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '../src/frontend/public/assets/generated');

// ─── Shared helpers ──────────────────────────────────────────────────────────

function stars(count, w, h, seed = 42) {
  let s = seed;
  const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; };
  return Array.from({ length: count }, () => {
    const x = rng() * w;
    const y = rng() * h;
    const r = 0.8 + rng() * 2.2;
    const op = 0.3 + rng() * 0.7;
    const col = rng() > 0.5 ? '#FFD700' : '#FFFFFF';
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}" fill="${col}" opacity="${op.toFixed(2)}"/>`;
  }).join('\n');
}

function sacredRings(cx, cy, baseR, count, color = '#D4AF37', opacity = 0.25) {
  return Array.from({ length: count }, (_, i) => {
    const r = baseR + i * (baseR * 0.28);
    const w = 1 + (count - i) * 0.3;
    return `<circle cx="${cx}" cy="${cy}" r="${r.toFixed(1)}" fill="none" stroke="${color}" stroke-width="${w.toFixed(1)}" opacity="${(opacity - i * 0.03).toFixed(2)}"/>`;
  }).join('\n');
}

function hexPattern(cx, cy, r) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(' ');
  return `<polygon points="${pts}" fill="none" stroke="#D4AF37" stroke-width="0.8" opacity="0.2"/>`;
}

function cornerOrnament(x, y, rot) {
  return `<g transform="translate(${x},${y}) rotate(${rot})">
    <line x1="0" y1="0" x2="40" y2="0" stroke="#D4AF37" stroke-width="1.5" opacity="0.6"/>
    <line x1="0" y1="0" x2="0" y2="40" stroke="#D4AF37" stroke-width="1.5" opacity="0.6"/>
    <line x1="12" y1="0" x2="12" y2="12" stroke="#D4AF37" stroke-width="0.8" opacity="0.4"/>
    <line x1="0" y1="12" x2="12" y2="12" stroke="#D4AF37" stroke-width="0.8" opacity="0.4"/>
    <circle cx="0" cy="0" r="3" fill="#FFD700" opacity="0.7"/>
  </g>`;
}

function omSymbol(cx, cy, fontSize, glowId) {
  return `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central"
    font-family="serif" font-size="${fontSize}" fill="url(#${glowId})"
    filter="url(#textGlow)" opacity="0.95">ॐ</text>`;
}

// ─── LANDSCAPE SVG 1200×628 ───────────────────────────────────────────────────

function buildLandscapeSVG() {
  const W = 1200, H = 628;
  const cx = W / 2, cy = H / 2 - 20;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030008"/>
      <stop offset="40%" stop-color="#0d0025"/>
      <stop offset="100%" stop-color="#020010"/>
    </linearGradient>
    <!-- OM radial glow -->
    <radialGradient id="omGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFD700" stop-opacity="1"/>
      <stop offset="50%" stop-color="#FFA500" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#B8860B" stop-opacity="0"/>
    </radialGradient>
    <!-- OM text fill -->
    <linearGradient id="omText" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFEF9F"/>
      <stop offset="50%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#D4AF37"/>
    </linearGradient>
    <!-- Halo behind OM -->
    <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7B2FBE" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#3D0066" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <!-- Border glow -->
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="25%" stop-color="#FFA500"/>
      <stop offset="75%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#FFD700"/>
    </linearGradient>
    <!-- Text glow filter -->
    <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <!-- Glow filter -->
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)"/>

  <!-- Stars / particles -->
  ${stars(120, W, H, 7)}

  <!-- Halo -->
  <ellipse cx="${cx}" cy="${cy}" rx="300" ry="260" fill="url(#haloGrad)"/>

  <!-- Sacred geometry rings -->
  ${sacredRings(cx, cy, 140, 6, '#D4AF37', 0.22)}
  ${sacredRings(cx, cy, 100, 3, '#FFD700', 0.15)}

  <!-- Hexagonal patterns -->
  ${hexPattern(cx, cy, 160)}
  ${hexPattern(cx, cy, 200)}

  <!-- 8 radial spokes -->
  ${Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 4) * i;
    const x1 = cx + 115 * Math.cos(a), y1 = cy + 115 * Math.sin(a);
    const x2 = cx + 270 * Math.cos(a), y2 = cy + 270 * Math.sin(a);
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#D4AF37" stroke-width="0.7" opacity="0.18"/>`;
  }).join('\n')}

  <!-- OM glow disc -->
  <circle cx="${cx}" cy="${cy}" r="120" fill="url(#omGlow)" opacity="0.18" filter="url(#glow)"/>

  <!-- OM symbol -->
  <text x="${cx}" y="${cy + 22}" text-anchor="middle" dominant-baseline="central"
    font-family="serif" font-size="170" fill="url(#omText)"
    filter="url(#textGlow)" opacity="0.95">ॐ</text>

  <!-- Lotus petals (stylised) -->
  ${Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 4) * i;
    const px = cx + 95 * Math.cos(a), py = cy + 95 * Math.sin(a);
    return `<ellipse cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" rx="18" ry="8"
      fill="#FFD700" opacity="0.13"
      transform="rotate(${(i * 45).toFixed(0)},${px.toFixed(1)},${py.toFixed(1)})"/>`;
  }).join('\n')}

  <!-- Outer border frame -->
  <rect x="8" y="8" width="${W - 16}" height="${H - 16}" rx="6" ry="6"
    fill="none" stroke="url(#borderGrad)" stroke-width="2.5" opacity="0.85"/>
  <rect x="14" y="14" width="${W - 28}" height="${H - 28}" rx="4" ry="4"
    fill="none" stroke="#D4AF37" stroke-width="0.8" opacity="0.35" fill-opacity="0"/>

  <!-- Corner ornaments -->
  ${cornerOrnament(24, 24, 0)}
  ${cornerOrnament(W - 24, 24, 90)}
  ${cornerOrnament(W - 24, H - 24, 180)}
  ${cornerOrnament(24, H - 24, 270)}

  <!-- ── RIGHT COLUMN TEXT ── -->

  <!-- Business name -->
  <text x="${W - 295}" y="110" text-anchor="middle"
    font-family="Georgia, serif" font-size="52" font-weight="bold"
    fill="#FFD700" filter="url(#softGlow)" opacity="0.97">Soul by Seema</text>

  <!-- Tagline -->
  <text x="${W - 295}" y="155" text-anchor="middle"
    font-family="Georgia, serif" font-size="22" letter-spacing="3"
    fill="#FFEF9F" opacity="0.82">Spiritual Healing &amp; Wellness</text>

  <!-- Divider -->
  <line x1="${W - 490}" y1="175" x2="${W - 100}" y2="175"
    stroke="#D4AF37" stroke-width="1" opacity="0.5"/>

  <!-- Services -->
  <text x="${W - 295}" y="212" text-anchor="middle"
    font-family="Georgia, serif" font-size="17" fill="#FFDF80" opacity="0.88">✦ Reiki Healing  ✦  Aura Cleansing</text>
  <text x="${W - 295}" y="240" text-anchor="middle"
    font-family="Georgia, serif" font-size="17" fill="#FFDF80" opacity="0.88">✦ Angel Card Reading  ✦  Past Life Regression</text>

  <!-- Divider 2 -->
  <line x1="${W - 490}" y1="258" x2="${W - 100}" y2="258"
    stroke="#D4AF37" stroke-width="1" opacity="0.4"/>

  <!-- CTA box -->
  <rect x="${W - 490}" y="275" width="390" height="52" rx="6" ry="6"
    fill="#FFD700" fill-opacity="0.12" stroke="#FFD700" stroke-width="1.5" stroke-opacity="0.6"/>
  <text x="${W - 295}" y="307" text-anchor="middle"
    font-family="Georgia, serif" font-size="21" font-weight="bold"
    fill="#FFD700" filter="url(#softGlow)" opacity="0.96">Book Your Session Today</text>

  <!-- Contact -->
  <text x="${W - 295}" y="365" text-anchor="middle"
    font-family="Georgia, serif" font-size="18" fill="#FFEF9F" opacity="0.85">🌐 www.soulbyseema.com</text>
  <text x="${W - 295}" y="398" text-anchor="middle"
    font-family="Georgia, serif" font-size="18" fill="#FFEF9F" opacity="0.85">📞 +91 9999885995</text>

  <!-- Worldwide badge -->
  <text x="${W - 295}" y="445" text-anchor="middle"
    font-family="Georgia, serif" font-size="14" letter-spacing="2"
    fill="#D4AF37" opacity="0.65">✦ WORLDWIDE ONLINE SESSIONS ✦</text>

  <!-- Bottom tagline -->
  <text x="${W / 2}" y="${H - 22}" text-anchor="middle"
    font-family="Georgia, serif" font-size="13" letter-spacing="1.5"
    fill="#D4AF37" opacity="0.5">✦ HEAL · GROW · TRANSFORM ✦</text>
</svg>`;
}

// ─── SQUARE SVG 1200×1200 ────────────────────────────────────────────────────

function buildSquareSVG() {
  const W = 1200, H = 1200;
  const cx = W / 2, cy = H / 2 - 60;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040010"/>
      <stop offset="45%" stop-color="#0f0028"/>
      <stop offset="100%" stop-color="#020010"/>
    </linearGradient>
    <radialGradient id="omGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFD700" stop-opacity="1"/>
      <stop offset="50%" stop-color="#FFA500" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#B8860B" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="omText" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFEF9F"/>
      <stop offset="50%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#D4AF37"/>
    </linearGradient>
    <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6B21A8" stop-opacity="0.4"/>
      <stop offset="60%" stop-color="#3D0066" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="25%" stop-color="#FFA500"/>
      <stop offset="75%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#FFD700"/>
    </linearGradient>
    <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)"/>

  <!-- Stars / particles -->
  ${stars(180, W, H, 13)}

  <!-- Halo -->
  <ellipse cx="${cx}" cy="${cy}" rx="420" ry="420" fill="url(#haloGrad)"/>

  <!-- Sacred geometry rings -->
  ${sacredRings(cx, cy, 220, 7, '#D4AF37', 0.22)}
  ${sacredRings(cx, cy, 150, 4, '#FFD700', 0.14)}

  <!-- Hexagonal patterns -->
  ${hexPattern(cx, cy, 240)}
  ${hexPattern(cx, cy, 310)}

  <!-- 12 radial spokes -->
  ${Array.from({ length: 12 }, (_, i) => {
    const a = (Math.PI / 6) * i;
    const x1 = cx + 170 * Math.cos(a), y1 = cy + 170 * Math.sin(a);
    const x2 = cx + 400 * Math.cos(a), y2 = cy + 400 * Math.sin(a);
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#D4AF37" stroke-width="0.7" opacity="0.16"/>`;
  }).join('\n')}

  <!-- OM glow disc -->
  <circle cx="${cx}" cy="${cy}" r="180" fill="url(#omGlow)" opacity="0.2" filter="url(#glow)"/>

  <!-- OM symbol -->
  <text x="${cx}" y="${cy + 35}" text-anchor="middle" dominant-baseline="central"
    font-family="serif" font-size="260" fill="url(#omText)"
    filter="url(#textGlow)" opacity="0.95">ॐ</text>

  <!-- Lotus petals -->
  ${Array.from({ length: 12 }, (_, i) => {
    const a = (Math.PI / 6) * i;
    const px = cx + 150 * Math.cos(a), py = cy + 150 * Math.sin(a);
    return `<ellipse cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" rx="26" ry="11"
      fill="#FFD700" opacity="0.12"
      transform="rotate(${(i * 30).toFixed(0)},${px.toFixed(1)},${py.toFixed(1)})"/>`;
  }).join('\n')}

  <!-- Outer border frame -->
  <rect x="10" y="10" width="${W - 20}" height="${H - 20}" rx="8" ry="8"
    fill="none" stroke="url(#borderGrad)" stroke-width="3" opacity="0.88"/>
  <rect x="18" y="18" width="${W - 36}" height="${H - 36}" rx="6" ry="6"
    fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.35"/>

  <!-- Corner ornaments -->
  ${cornerOrnament(30, 30, 0)}
  ${cornerOrnament(W - 30, 30, 90)}
  ${cornerOrnament(W - 30, H - 30, 180)}
  ${cornerOrnament(30, H - 30, 270)}

  <!-- ── TEXT (bottom half) ── -->

  <!-- Business name -->
  <text x="${cx}" y="${cy + 280}" text-anchor="middle"
    font-family="Georgia, serif" font-size="78" font-weight="bold"
    fill="#FFD700" filter="url(#softGlow)" opacity="0.97">Soul by Seema</text>

  <!-- Tagline -->
  <text x="${cx}" y="${cy + 340}" text-anchor="middle"
    font-family="Georgia, serif" font-size="30" letter-spacing="4"
    fill="#FFEF9F" opacity="0.8">Spiritual Healing &amp; Wellness</text>

  <!-- Divider -->
  <line x1="${cx - 360}" y1="${cy + 372}" x2="${cx + 360}" y2="${cy + 372}"
    stroke="#D4AF37" stroke-width="1.2" opacity="0.5"/>

  <!-- Services row 1 -->
  <text x="${cx}" y="${cy + 415}" text-anchor="middle"
    font-family="Georgia, serif" font-size="24" fill="#FFDF80" opacity="0.88">✦ Reiki Healing  ✦  Aura Cleansing</text>
  <text x="${cx}" y="${cy + 452}" text-anchor="middle"
    font-family="Georgia, serif" font-size="24" fill="#FFDF80" opacity="0.88">✦ Angel Card Reading  ✦  Past Life Regression</text>

  <!-- Divider 2 -->
  <line x1="${cx - 360}" y1="${cy + 474}" x2="${cx + 360}" y2="${cy + 474}"
    stroke="#D4AF37" stroke-width="1.2" opacity="0.4"/>

  <!-- CTA -->
  <rect x="${cx - 280}" y="${cy + 490}" width="560" height="62" rx="8" ry="8"
    fill="#FFD700" fill-opacity="0.1" stroke="#FFD700" stroke-width="2" stroke-opacity="0.65"/>
  <text x="${cx}" y="${cy + 530}" text-anchor="middle"
    font-family="Georgia, serif" font-size="30" font-weight="bold"
    fill="#FFD700" filter="url(#softGlow)" opacity="0.97">Book Your Session Today</text>

  <!-- Contact -->
  <text x="${cx}" y="${cy + 595}" text-anchor="middle"
    font-family="Georgia, serif" font-size="24" fill="#FFEF9F" opacity="0.85">🌐  www.soulbyseema.com</text>
  <text x="${cx}" y="${cy + 635}" text-anchor="middle"
    font-family="Georgia, serif" font-size="24" fill="#FFEF9F" opacity="0.85">📞  +91 9999885995</text>

  <!-- Worldwide -->
  <text x="${cx}" y="${H - 30}" text-anchor="middle"
    font-family="Georgia, serif" font-size="18" letter-spacing="3"
    fill="#D4AF37" opacity="0.55">✦ WORLDWIDE ONLINE SESSIONS ✦</text>
</svg>`;
}

// ─── Generate both images ────────────────────────────────────────────────────

async function main() {
  const landscapeSVG = buildLandscapeSVG();
  const squareSVG    = buildSquareSVG();

  const landscapeOut = path.join(outputDir, 'soulbyseema-ads-landscape.dim_1200x628.jpg');
  const squareOut    = path.join(outputDir, 'soulbyseema-ads-square.dim_1200x1200.jpg');

  await sharp(Buffer.from(landscapeSVG), { density: 150 })
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toFile(landscapeOut);
  console.log('✅  Landscape ad banner saved:', landscapeOut);

  await sharp(Buffer.from(squareSVG), { density: 150 })
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toFile(squareOut);
  console.log('✅  Square ad banner saved:   ', squareOut);
}

main().catch(err => { console.error(err); process.exit(1); });
