export default function AboutGraphic() {
  const plates = [
    { cx: 205, cy: 214, w: 126, h: 36, t: 15 },
    { cx: 211, cy: 258, w: 112, h: 32, t: 14 },
    { cx: 203, cy: 296, w: 94, h: 27, t: 12 },
    { cx: 207, cy: 328, w: 72, h: 21, t: 10 },
  ];

  return (
    <svg
      viewBox="0 0 420 594"
      role="img"
      aria-label="Illustration: a glass sphere balancing on a stack of floating slabs above a beam of purple light"
      className="h-auto w-[clamp(230px,27vw,340px)] overflow-visible"
    >
      <defs>
        <radialGradient id="sphereBody" cx="34%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#dcbcff" />
          <stop offset="22%" stopColor="#ab6bf4" />
          <stop offset="52%" stopColor="#7c22d6" />
          <stop offset="82%" stopColor="#4b0f70" />
          <stop offset="100%" stopColor="#2a0641" />
        </radialGradient>

        <radialGradient id="sphereSpecular" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="plateTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#efebe6" />
          <stop offset="100%" stopColor="#cfc8c2" />
        </linearGradient>

        <linearGradient id="plateLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8a8290" />
          <stop offset="100%" stopColor="#403a49" />
        </linearGradient>

        <linearGradient id="plateRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c3bbc2" />
          <stop offset="100%" stopColor="#8f8794" />
        </linearGradient>

        <linearGradient id="beam" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#d0a3fb" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#9737ea" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#5b0f8e" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="beamCore" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#f6e9ff" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#b56ff8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a556f5" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9b3fe0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#9b3fe0" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="pool" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a556f5" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#a556f5" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient glow */}
      <ellipse cx="210" cy="150" rx="185" ry="155" fill="url(#aura)" />

      {/* ghost ring behind the sphere */}
      <circle
        cx="234"
        cy="170"
        r="53"
        fill="none"
        stroke="#7c2ea8"
        strokeOpacity="0.4"
        strokeWidth="7"
      />

      {/* sphere */}
      <circle cx="164" cy="120" r="90" fill="url(#sphereBody)" />
      <ellipse
        cx="130"
        cy="82"
        rx="31"
        ry="22"
        fill="url(#sphereSpecular)"
        transform="rotate(-28 130 82)"
      />
      <circle
        cx="164"
        cy="120"
        r="90"
        fill="none"
        stroke="#c9a0ff"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />

      {/* stacked slabs */}
      {plates.map(({ cx, cy, w, h, t }, index) => (
        <g key={index}>
          <polygon
            points={`${cx - w},${cy} ${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h}`}
            fill="url(#plateTop)"
          />
          <polygon
            points={`${cx - w},${cy} ${cx},${cy + h} ${cx},${cy + h + t} ${cx - w},${cy + t}`}
            fill="url(#plateLeft)"
          />
          <polygon
            points={`${cx},${cy + h} ${cx + w},${cy} ${cx + w},${cy + t} ${cx},${cy + h + t}`}
            fill="url(#plateRight)"
          />
        </g>
      ))}

      {/* stem pieces */}
      <g>
        <polygon points="165,352 207,345 249,352 207,364" fill="url(#plateTop)" />
        <polygon points="165,352 207,364 207,374 165,362" fill="url(#plateLeft)" />
        <polygon points="207,364 249,352 249,362 207,374" fill="url(#plateRight)" />
      </g>
      <polygon points="183,382 207,377 231,382 207,390" fill="#f2eee9" />
      <polygon points="183,382 207,390 207,396 183,388" fill="#7c7480" />
      <polygon points="207,390 231,382 231,388 207,396" fill="#b3abb4" />

      {/* diamond + light beam */}
      <polygon points="207,404 229,434 207,452 185,434" fill="#f5f1ec" />
      <polygon points="207,404 229,434 207,452" fill="#d5cdd8" />

      <ellipse cx="207" cy="566" rx="66" ry="16" fill="url(#pool)" />
      <polygon points="198,452 216,452 252,576 162,576" fill="url(#beam)" opacity="0.9" />
      <polygon points="203,452 211,452 224,560 194,560" fill="url(#beamCore)" />
    </svg>
  );
}
