import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Gauge } from 'lucide-react';
import { Breed } from '../types/dog';

interface BreedMotionPlayerProps {
  breed: Breed;
  chapters?: { time: string; label: string; description: string }[];
}

type GaitMode = 'walk' | 'trot' | 'gallop';

export const BreedMotionPlayer: React.FC<BreedMotionPlayerProps> = ({
  breed,
  chapters,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [gait, setGait] = useState<GaitMode>('trot');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [progress, setProgress] = useState(0);

  const phaseRef = useRef(0);

  const gaitMeta: Record<GaitMode, { label: string; kmh: number; note: string }> = {
    walk: {
      label: 'Pas calme',
      kmh: Math.round(breed.gaitSpeedKmh * 0.18),
      note: 'Allure à 4 temps régulière, observation sereine de l’environnement.',
    },
    trot: {
      label: 'Trot d’endurance',
      kmh: Math.round(breed.gaitSpeedKmh * 0.45),
      note: breed.strideFrequency,
    },
    gallop: {
      label: 'Galop rapide',
      kmh: breed.gaitSpeedKmh,
      note: `Vitesse de pointe estimée jusqu’à ${breed.gaitSpeedKmh} km/h en terrain dégagé.`,
    },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let lastTs = performance.now();

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const drawFrame = (ts: number) => {
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs = ts;

      const baseFreq = gait === 'walk' ? 2.6 : gait === 'trot' ? 4.8 : 7.6;
      if (isPlaying && !prefersReduced) {
        phaseRef.current += dt * baseFreq * speedMultiplier;
        setProgress((prev) => (prev + dt * 6 * speedMultiplier) % 100);
      }

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Warm editorial backdrop
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#FBF8F3');
      grad.addColorStop(0.76, '#EFE7DA');
      grad.addColorStop(1, '#E2D6C3');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Distance grid markers scrolling with ground
      const groundY = h * 0.78;
      const scrollSpeed = gait === 'walk' ? 45 : gait === 'trot' ? 110 : 210;
      const scrollOffset = (phaseRef.current * (scrollSpeed / baseFreq)) % 80;

      ctx.strokeStyle = 'rgba(20, 20, 19, 0.1)';
      ctx.lineWidth = 1;
      for (let x = -scrollOffset; x < w + 80; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, groundY);
        ctx.lineTo(x, groundY + 12);
        ctx.stroke();
      }

      // Ground horizon line
      ctx.strokeStyle = '#141413';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(24, groundY);
      ctx.lineTo(w - 24, groundY);
      ctx.stroke();

      // Kinematics parameters based on size & gait
      const scale =
        breed.sizeCategory === 'Petit' ? 0.78 : breed.sizeCategory === 'Grand' ? 1.12 : 0.96;
      const t = phaseRef.current;
      const bounce =
        gait === 'gallop'
          ? Math.abs(Math.sin(t)) * -14
          : gait === 'trot'
            ? Math.sin(t * 2) * 4
            : Math.sin(t * 2) * 1.5;

      const cx = w * 0.5;
      const cy = groundY - 62 * scale + bounce;

      // Ground shadow
      ctx.fillStyle = 'rgba(20, 20, 19, 0.14)';
      const shadowScale = 1 - Math.abs(bounce) * 0.015;
      ctx.beginPath();
      ctx.ellipse(cx, groundY + 4, 68 * scale * shadowScale, 7 * scale, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      const primary = breed.morpho.primaryColor;
      const secondary = breed.morpho.secondaryColor;
      const stroke = '#141413';

      // Leg stride angles
      const strideAmp = gait === 'walk' ? 0.35 : gait === 'trot' ? 0.62 : 0.92;
      const frontA = Math.sin(t) * strideAmp;
      const frontB = Math.sin(t + (gait === 'gallop' ? 0.5 : Math.PI)) * strideAmp;
      const backA = Math.sin(t + (gait === 'trot' ? Math.PI : Math.PI * 0.85)) * strideAmp;
      const backB = Math.sin(t + (gait === 'gallop' ? 1.4 : 0)) * strideAmp;

      const drawLeg = (hipX: number, hipY: number, angle: number, color: string) => {
        ctx.save();
        ctx.translate(hipX, hipY);
        ctx.rotate(angle);
        ctx.fillStyle = color;
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(-6, 0, 12, 46, 6);
        ctx.fill();
        ctx.stroke();
        // Paw
        ctx.beginPath();
        ctx.ellipse(2, 46, 8, 4.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      };

      // Far legs
      drawLeg(-36, 12, backB, secondary === '#191918' ? '#2E2D2B' : primary);
      drawLeg(36, 10, frontB, secondary === '#191918' ? '#2E2D2B' : primary);

      // Animated tail
      ctx.save();
      ctx.translate(-52, -10);
      const tailWag = Math.sin(t * 1.5) * 0.16;
      ctx.rotate(tailWag);
      ctx.strokeStyle = stroke;
      ctx.fillStyle = primary;
      ctx.lineWidth = 2;
      if (breed.morpho.tailStyle === 'curled') {
        ctx.beginPath();
        ctx.arc(-6, -12, 13, 0.2, Math.PI * 1.65);
        ctx.lineWidth = 7;
        ctx.strokeStyle = primary;
        ctx.stroke();
        ctx.lineWidth = 2;
        ctx.strokeStyle = stroke;
        ctx.stroke();
      } else if (breed.morpho.tailStyle === 'docked-short') {
        ctx.beginPath();
        ctx.ellipse(-6, -2, 7, 5, -0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-24, -18, -36, -6);
        ctx.lineWidth = breed.morpho.tailStyle === 'plume' ? 9 : 6;
        ctx.lineCap = 'round';
        ctx.strokeStyle = primary;
        ctx.stroke();
      }
      ctx.restore();

      // Torso
      ctx.fillStyle = primary;
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 56, 24, gait === 'gallop' ? -0.06 : 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Chest / collar accent
      ctx.strokeStyle = '#EA580C';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(42, -14);
      ctx.lineTo(54, 10);
      ctx.stroke();

      // Neck & Head
      ctx.save();
      ctx.translate(48, -14);
      ctx.rotate(gait === 'gallop' ? 0.12 : -0.05);
      ctx.fillStyle = primary;
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.roundRect(-12, -26, 24, 34, 10);
      ctx.fill();
      ctx.stroke();

      // Head profile
      ctx.beginPath();
      ctx.ellipse(12, -28, 22, 16, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Muzzle
      const muzzleLen = breed.morpho.muzzleStyle === 'short' ? 12 : 22;
      ctx.beginPath();
      ctx.roundRect(18, -28, muzzleLen, 12, 5);
      ctx.fill();
      ctx.stroke();

      // Nose
      ctx.fillStyle = breed.morpho.noseColor;
      ctx.beginPath();
      ctx.arc(18 + muzzleLen, -25, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Eye
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(16, -32, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = breed.morpho.eyeColor;
      ctx.beginPath();
      ctx.arc(16.5, -32, 2, 0, Math.PI * 2);
      ctx.fill();

      // Ear on profile
      ctx.fillStyle = secondary === '#191918' ? secondary : primary;
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 2;
      if (breed.morpho.earStyle === 'erect' || breed.morpho.earStyle === 'bat') {
        ctx.beginPath();
        ctx.moveTo(2, -40);
        ctx.lineTo(8, -62);
        ctx.lineTo(16, -40);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.ellipse(2, -26, 7, 15, 0.25, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
      ctx.restore();

      // Near legs
      drawLeg(-32, 14, backA, primary);
      drawLeg(40, 12, frontA, primary);

      ctx.restore();

      animId = requestAnimationFrame(drawFrame);
    };

    animId = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(animId);
  }, [breed, gait, isPlaying, speedMultiplier]);

  const currentInfo = gaitMeta[gait];

  return (
    <div className="rounded-xl border border-[#141413]/12 bg-white overflow-hidden">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={760}
          height={310}
          className="w-full h-[230px] sm:h-[290px] block"
        />
        <div className="absolute top-3 left-3 bg-[#141413]/85 text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-2">
          <Gauge className="w-3.5 h-3.5 text-[#EA580C]" />
          <span className="font-medium">{breed.name}</span>
          <span aria-hidden="true" className="text-white/40">·</span>
          <span className="font-mono-num text-[#FDBA74]">{currentInfo.kmh} km/h</span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-[#141413]/10 text-[#141413] px-2.5 py-1 rounded-md text-xs font-mono-num">
          {currentInfo.label}
        </div>
      </div>

      {/* Video Player Controls Bar */}
      <div className="bg-[#141413] text-white px-4 py-3 space-y-2.5">
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#EA580C] transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EA580C] hover:bg-[#DC4E08] text-white text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              aria-label={isPlaying ? 'Mettre en pause' : 'Lire l’animation'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause' : 'Lecture'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                phaseRef.current = 0;
                setProgress(0);
                setIsPlaying(true);
              }}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Recommencer la séquence"
              title="Recommencer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Gait Switcher */}
          <div className="flex items-center gap-1 bg-white/10 p-1 rounded-lg">
            {(['walk', 'trot', 'gallop'] as GaitMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setGait(mode)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  gait === mode
                    ? 'bg-white text-[#141413]'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {mode === 'walk' ? 'Pas' : mode === 'trot' ? 'Trot' : 'Galop'}
              </button>
            ))}
          </div>

          {/* Playback Speed */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-white/60 mr-1">Vitesse :</span>
            {[0.5, 1, 1.5].map((spd) => (
              <button
                key={spd}
                type="button"
                onClick={() => setSpeedMultiplier(spd)}
                className={`px-2 py-1 rounded font-mono-num text-xs cursor-pointer transition-colors ${
                  speedMultiplier === spd
                    ? 'bg-[#EA580C] text-white'
                    : 'bg-white/10 text-white/75 hover:text-white'
                }`}
              >
                {spd}×
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-white/75 leading-relaxed pt-1 border-t border-white/10">
          {currentInfo.note}
        </p>

        {chapters && chapters.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-white/10">
            {chapters.map((ch, idx) => (
              <button
                key={ch.time}
                type="button"
                onClick={() => {
                  setGait(idx === 0 ? 'walk' : idx === 1 ? 'trot' : 'gallop');
                  setIsPlaying(true);
                }}
                className="text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="text-[11px] font-mono-num text-[#FDBA74]">{ch.time} · {ch.label}</div>
                <div className="text-xs text-white/70 mt-0.5 line-clamp-2">{ch.description}</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
