const PARTICLE_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

export default function SacredLotus() {
  const outerPetals = [0, 1, 2, 3, 4, 5, 6, 7];
  const innerPetals = [0, 1, 2, 3, 4, 5, 6, 7];
  const rayAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

  return (
    <div
      className="sacred-lotus-wrap pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative element hidden from screen readers */}
      <svg
        viewBox="-220 -220 440 440"
        xmlns="http://www.w3.org/2000/svg"
        className="sacred-lotus-svg"
        role="presentation"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff8e1" stopOpacity="1" />
            <stop offset="30%" stopColor="#f0d070" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#C9A24A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="outerPetalGrad" cx="50%" cy="80%" r="70%">
            <stop offset="0%" stopColor="#f5e0a0" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#C9A24A" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
          </radialGradient>

          <radialGradient id="innerPetalGrad" cx="50%" cy="75%" r="65%">
            <stop offset="0%" stopColor="#fffde7" stopOpacity="1" />
            <stop offset="40%" stopColor="#e8c878" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C9A24A" stopOpacity="0.4" />
          </radialGradient>

          <radialGradient id="rayGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffde7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C9A24A" stopOpacity="0" />
          </radialGradient>

          <filter
            id="centerFilter"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
            <feFlood floodColor="#C9A24A" floodOpacity="0.7" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="petalGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feFlood floodColor="#C9A24A" floodOpacity="0.4" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="lotus-rotate">
          {/* Divine light rays */}
          {rayAngles.map((angle) => (
            <ellipse
              key={`ray-${angle}`}
              cx="0"
              cy="0"
              rx="6"
              ry="190"
              fill="url(#rayGrad)"
              transform={`rotate(${angle})`}
              opacity="0.4"
            />
          ))}

          {/* Outer petals */}
          {outerPetals.map((i) => (
            <ellipse
              key={`op-${i * 45}`}
              cx="0"
              cy="-105"
              rx="28"
              ry="78"
              fill="url(#outerPetalGrad)"
              stroke="rgba(201,162,74,0.5)"
              strokeWidth="0.5"
              filter="url(#petalGlow)"
              transform={`rotate(${i * 45})`}
              className={i % 2 === 0 ? "petal-breathe" : "petal-breathe-2"}
            />
          ))}

          {/* Inner petals */}
          {innerPetals.map((i) => (
            <ellipse
              key={`ip-${i * 45}`}
              cx="0"
              cy="-65"
              rx="18"
              ry="50"
              fill="url(#innerPetalGrad)"
              stroke="rgba(240,215,138,0.6)"
              strokeWidth="0.5"
              transform={`rotate(${i * 45 + 22.5})`}
              className={i % 2 === 0 ? "petal-breathe-2" : "petal-breathe"}
            />
          ))}

          {/* Center orb */}
          <circle
            cx="0"
            cy="0"
            r="32"
            fill="url(#centerGlow)"
            filter="url(#centerFilter)"
            className="center-glow"
          />
          <circle
            cx="0"
            cy="0"
            r="18"
            fill="none"
            stroke="rgba(255,248,225,0.6)"
            strokeWidth="1"
          />
          <circle cx="0" cy="0" r="8" fill="rgba(255,253,230,0.9)" />
        </g>

        {/* Floating particles */}
        {PARTICLE_ANGLES.map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const dist = 55 + (idx % 3) * 20;
          const px = Math.cos(rad) * dist;
          const py = Math.sin(rad) * dist;
          return (
            <circle
              key={`pt-${angle}`}
              cx={px}
              cy={py}
              r={1.5 + (idx % 3) * 0.8}
              fill="#f0d070"
              opacity="0.85"
              className="particle-float"
              style={{ animationDelay: `${idx * 0.55}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
}
