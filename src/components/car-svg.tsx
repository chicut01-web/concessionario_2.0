
import React from 'react';

interface CarSVGProps {
  className?: string;
  tone?: 'brand' | 'ink';
  shadow?: boolean;
}

// Clean, stylized side-view car SVG. Placeholder for real 3D render.
// Designed to be legible at any size, no logos/branded shapes.
export function CarSVG({ className = '', tone = 'brand', shadow = true }: CarSVGProps) {
  const bodyFill = tone === 'brand' ? 'url(#carBodyBrand)' : 'url(#carBodyInk)';
  const roofFill = tone === 'brand' ? 'oklch(0.22 0.10 255)' : 'oklch(0.20 0.05 255)';
  const glassFill = 'oklch(0.88 0.04 220 / 0.85)';
  const trim = tone === 'brand' ? 'oklch(0.68 0.12 220)' : 'oklch(0.55 0.08 255)';

  return (
    <svg viewBox="0 0 800 280" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="carBodyBrand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.42 0.16 255)" />
          <stop offset="0.55" stopColor="oklch(0.32 0.14 255)" />
          <stop offset="1" stopColor="oklch(0.20 0.10 255)" />
        </linearGradient>
        <linearGradient id="carBodyInk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.32 0.03 255)" />
          <stop offset="1" stopColor="oklch(0.16 0.03 255)" />
        </linearGradient>
        <linearGradient id="glassHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.96 0.02 220)" stopOpacity="0.7" />
          <stop offset="1" stopColor="oklch(0.70 0.08 220)" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="wheelGrad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="oklch(0.28 0.02 255)" />
          <stop offset="0.7" stopColor="oklch(0.16 0.02 255)" />
          <stop offset="1" stopColor="oklch(0.10 0.01 255)" />
        </radialGradient>
        <radialGradient id="rimGrad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="oklch(0.85 0.01 255)" />
          <stop offset="1" stopColor="oklch(0.55 0.02 255)" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      {shadow && (
        <ellipse cx="400" cy="250" rx="320" ry="14" fill="oklch(0.14 0.04 255 / 0.22)" filter="blur(4px)" />
      )}

      {/* Lower body — main curve */}
      <path
        d="M 70 200
           Q 70 175, 95 165
           L 175 150
           Q 215 110, 290 100
           L 480 96
           Q 540 96, 580 130
           L 645 155
           L 715 165
           Q 740 170, 740 195
           L 740 215
           Q 740 225, 730 225
           L 85 225
           Q 70 225, 70 215 Z"
        fill={bodyFill}
      />

      {/* Roof / cabin */}
      <path
        d="M 215 112
           Q 250 65, 315 62
           L 455 62
           Q 510 62, 550 100
           L 560 118
           L 215 118 Z"
        fill={roofFill}
      />

      {/* Windows */}
      <path
        d="M 240 108
           Q 265 76, 315 74
           L 380 74
           L 380 108 Z"
        fill={glassFill}
      />
      <path
        d="M 390 74
           L 450 74
           Q 500 74, 535 105
           L 540 108
           L 390 108 Z"
        fill={glassFill}
      />
      <path
        d="M 240 108
           Q 265 76, 315 74
           L 380 74
           L 380 90
           Q 305 92, 270 108 Z"
        fill="url(#glassHighlight)"
        opacity="0.5"
      />

      {/* Window pillar */}
      <rect x="382" y="74" width="6" height="34" fill={roofFill} />

      {/* Body highlight stripe */}
      <path
        d="M 105 175 L 720 175"
        stroke={trim}
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <path
        d="M 120 195 L 710 195"
        stroke="oklch(1 0 0 / 0.18)"
        strokeWidth="1"
      />

      {/* Door handles */}
      <rect x="305" y="163" width="26" height="4" rx="2" fill="oklch(1 0 0 / 0.35)" />
      <rect x="440" y="163" width="26" height="4" rx="2" fill="oklch(1 0 0 / 0.35)" />
      {/* Door split */}
      <path d="M 378 118 L 378 210" stroke="oklch(0 0 0 / 0.25)" strokeWidth="1" />

      {/* Headlight */}
      <path
        d="M 720 175 Q 735 178, 738 190 L 735 200 L 715 200 Z"
        fill="oklch(0.95 0.06 90 / 0.95)"
      />
      <circle cx="725" cy="188" r="3" fill="oklch(1 0 0)" />

      {/* Taillight */}
      <path
        d="M 80 175 L 110 175 L 110 195 L 82 195 Q 76 195, 76 188 Z"
        fill="oklch(0.55 0.20 25 / 0.9)"
      />

      {/* Grille hint */}
      <path d="M 690 210 L 720 210" stroke="oklch(0 0 0 / 0.35)" strokeWidth="2" />

      {/* Wheel arches */}
      <circle cx="200" cy="225" r="48" fill="oklch(0.10 0.04 255)" />
      <circle cx="600" cy="225" r="48" fill="oklch(0.10 0.04 255)" />

      {/* Wheels */}
      <g>
        <circle cx="200" cy="225" r="40" fill="url(#wheelGrad)" />
        <circle cx="200" cy="225" r="24" fill="url(#rimGrad)" />
        <circle cx="200" cy="225" r="6" fill="oklch(0.30 0.02 255)" />
        {/* Spokes */}
        {[0,60,120,180,240,300].map(a => (
          <rect key={a} x="198" y="205" width="4" height="20" fill="oklch(0.72 0.01 255)"
                transform={`rotate(${a} 200 225)`} />
        ))}
      </g>
      <g>
        <circle cx="600" cy="225" r="40" fill="url(#wheelGrad)" />
        <circle cx="600" cy="225" r="24" fill="url(#rimGrad)" />
        <circle cx="600" cy="225" r="6" fill="oklch(0.30 0.02 255)" />
        {[0,60,120,180,240,300].map(a => (
          <rect key={a} x="598" y="205" width="4" height="20" fill="oklch(0.72 0.01 255)"
                transform={`rotate(${a} 600 225)`} />
        ))}
      </g>

      {/* Light bloom accent (only when brand tone) */}
      {tone === 'brand' && (
        <circle cx="725" cy="188" r="18" fill="oklch(0.95 0.06 90)" opacity="0.18" />
      )}
    </svg>
  );
}
