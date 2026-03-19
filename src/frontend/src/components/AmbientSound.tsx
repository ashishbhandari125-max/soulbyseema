import { useEffect, useRef, useState } from "react";

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<AudioNode[]>([]);
  const masterGainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 7000);
    return () => clearTimeout(t);
  }, []);

  const createPinkNoise = (ctx: AudioContext): AudioBufferSourceNode => {
    // Generate 5 seconds of pink noise buffer
    const bufferSize = ctx.sampleRate * 5;
    const buffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = buffer.getChannelData(ch);
      let b0 = 0;
      let b1 = 0;
      let b2 = 0;
      let b3 = 0;
      let b4 = 0;
      let b5 = 0;
      let b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.969 * b2 + white * 0.153852;
        b3 = 0.8665 * b3 + white * 0.3104856;
        b4 = 0.55 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.016898;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      }
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    return source;
  };

  const createSingingBowlTone = (
    ctx: AudioContext,
    master: GainNode,
    freq: number,
    vol: number,
    interval: number,
    offset: number,
  ) => {
    const strike = () => {
      const osc = ctx.createOscillator();
      const envGain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      // Slight frequency drop like real bowl
      osc.frequency.exponentialRampToValueAtTime(freq * 0.994, now + 4);

      envGain.gain.setValueAtTime(0, now);
      envGain.gain.linearRampToValueAtTime(vol, now + 0.04);
      envGain.gain.exponentialRampToValueAtTime(0.001, now + 5);

      osc.connect(envGain);
      envGain.connect(master);
      osc.start(now);
      osc.stop(now + 5.5);
    };

    // First strike after offset, then repeat
    const t1 = setTimeout(strike, offset * 1000);
    const id = setInterval(strike, interval * 1000);
    return () => {
      clearTimeout(t1);
      clearInterval(id);
    };
  };

  const startAmbient = () => {
    if (audioCtxRef.current) return;

    const ctx = new (
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    )();
    audioCtxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0, ctx.currentTime);
    master.gain.linearRampToValueAtTime(1, ctx.currentTime + 3);
    master.connect(ctx.destination);
    masterGainRef.current = master;

    // --- Pink noise (gentle rain-like texture) ---
    const pinkNoise = createPinkNoise(ctx);
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.07, ctx.currentTime);

    // Low-pass filter to make rain soft
    const lpf = ctx.createBiquadFilter();
    lpf.type = "lowpass";
    lpf.frequency.setValueAtTime(900, ctx.currentTime);
    lpf.Q.setValueAtTime(0.5, ctx.currentTime);

    // High-pass to remove rumble
    const hpf = ctx.createBiquadFilter();
    hpf.type = "highpass";
    hpf.frequency.setValueAtTime(120, ctx.currentTime);

    pinkNoise.connect(hpf);
    hpf.connect(lpf);
    lpf.connect(noiseGain);
    noiseGain.connect(master);
    pinkNoise.start();
    nodesRef.current.push(pinkNoise, noiseGain, lpf, hpf);

    // --- Deep om/drone undertone ---
    const drone = ctx.createOscillator();
    const droneGain = ctx.createGain();
    drone.type = "sine";
    drone.frequency.setValueAtTime(108, ctx.currentTime);
    droneGain.gain.setValueAtTime(0.06, ctx.currentTime);
    drone.connect(droneGain);
    droneGain.connect(master);
    drone.start();
    nodesRef.current.push(drone, droneGain);

    // Harmonic shimmer
    const shimmer = ctx.createOscillator();
    const shimmerGain = ctx.createGain();
    shimmer.type = "sine";
    shimmer.frequency.setValueAtTime(216, ctx.currentTime);
    shimmerGain.gain.setValueAtTime(0.025, ctx.currentTime);
    shimmer.connect(shimmerGain);
    shimmerGain.connect(master);
    shimmer.start();
    nodesRef.current.push(shimmer, shimmerGain);

    // --- Singing bowl strikes ---
    const cleanups: Array<() => void> = [];
    cleanups.push(createSingingBowlTone(ctx, master, 432, 0.18, 14, 1));
    cleanups.push(createSingingBowlTone(ctx, master, 528, 0.12, 18, 7));
    cleanups.push(createSingingBowlTone(ctx, master, 324, 0.1, 22, 3.5));
    // Store cleanup refs
    (audioCtxRef.current as unknown as { _cleanup?: () => void })._cleanup =
      () => {
        for (const fn of cleanups) fn();
      };

    setIsPlaying(true);
    setShowHint(false);
  };

  const stopAmbient = () => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;

    // Run interval cleanups
    const cleanup = (ctx as unknown as { _cleanup?: () => void })._cleanup;
    if (cleanup) cleanup();

    masterGainRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 2);
    setTimeout(() => {
      for (const n of nodesRef.current) {
        try {
          n.disconnect();
        } catch {}
        try {
          (n as AudioBufferSourceNode | OscillatorNode).stop();
        } catch {}
      }
      nodesRef.current = [];
      ctx.close();
      audioCtxRef.current = null;
      masterGainRef.current = null;
    }, 2200);
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) stopAmbient();
    else startAmbient();
  };

  return (
    <>
      {showHint && !isPlaying && (
        <div
          className="fixed bottom-20 right-5 z-50 pointer-events-none"
          style={{ animation: "fadeInUp 0.6s ease forwards" }}
        >
          <div
            style={{
              background: "rgba(10,6,2,0.85)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(255,200,80,0.3)",
              borderRadius: 20,
              padding: "8px 16px",
              color: "#ffe08a",
              fontSize: 12,
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(0,0,0,0.55)",
            }}
          >
            🎵 Sacred ambient sound
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -6,
              right: 22,
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid rgba(255,200,80,0.3)",
            }}
          />
        </div>
      )}

      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "Sound band karo" : "Healing sound chalao"}
        className="fixed bottom-6 right-5 z-50"
        style={{
          width: 54,
          height: 54,
          borderRadius: "50%",
          background: isPlaying
            ? "radial-gradient(circle at 38% 32%, #ffe490 0%, #c8860a 55%, #7c4a00 100%)"
            : "radial-gradient(circle at 38% 32%, #b8955a 0%, #6b4a10 55%, #3a2800 100%)",
          border: isPlaying
            ? "1.5px solid rgba(255,220,100,0.7)"
            : "1.5px solid rgba(255,200,80,0.2)",
          boxShadow: isPlaying
            ? "0 0 36px 12px rgba(255,200,60,0.5), 0 2px 18px rgba(0,0,0,0.55)"
            : "0 0 10px 2px rgba(255,180,40,0.15), 0 2px 10px rgba(0,0,0,0.45)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.4s ease",
          animation: isPlaying ? "glowPulse 3.5s ease-in-out infinite" : "none",
          outline: "none",
        }}
      >
        {isPlaying ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            role="img"
            aria-label="Sound on"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#fff" />
            <path
              d="M15.54 8.46a5 5 0 0 1 0 7.07"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M18.36 5.64a9 9 0 0 1 0 12.73"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            role="img"
            aria-label="Sound on"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="rgba(255,255,255,0.5)" />
            <line
              x1="17"
              y1="9"
              x2="23"
              y2="15"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="23"
              y1="9"
              x2="17"
              y2="15"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      <style>{`
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 36px 12px rgba(255,200,60,0.5), 0 2px 18px rgba(0,0,0,0.55); transform: scale(1); }
          50% { box-shadow: 0 0 54px 18px rgba(255,200,60,0.7), 0 2px 22px rgba(0,0,0,0.55); transform: scale(1.07); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
