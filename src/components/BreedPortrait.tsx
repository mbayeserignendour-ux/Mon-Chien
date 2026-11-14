import React, { useState } from 'react';
import { Breed } from '../types/dog';

interface BreedPortraitProps {
  breed: Breed;
  className?: string;
  forcePlate?: boolean;
  showPlateLabel?: boolean;
}

/**
 * Renders either the breed's dedicated studio photograph (with zero-broken-image fallback)
 * OR a bespoke, anatomically tailored naturalist SVG plate reflecting the breed's real
 * ear geometry, muzzle profile, coat texture, coat pattern, and exact color palette.
 */
export const BreedPortrait: React.FC<BreedPortraitProps> = ({
  breed,
  className = '',
  forcePlate = false,
  showPlateLabel = false,
}) => {
  const [imgError, setImgError] = useState(false);

  if (breed.photo && !forcePlate && !imgError) {
    return (
      <div className={`relative overflow-hidden bg-[#EBE4D8] ${className}`}>
        <img
          src={breed.photo}
          alt={`${breed.name} — ${breed.originCountry}`}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setImgError(true)}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {showPlateLabel && (
          <div className="pointer-events-none absolute bottom-2.5 left-3 text-[11px] font-mono-num tracking-wider text-white/90 bg-black/55 px-2 py-0.5 rounded">
            Photographie · {breed.name}
          </div>
        )}
      </div>
    );
  }

  const { morpho } = breed;
  const uid = breed.id.replace(/[^a-z0-9]/gi, '');

  const renderEars = () => {
    const earFill = morpho.coatPattern === 'saddle' || morpho.coatPattern === 'masked'
      ? morpho.secondaryColor
      : morpho.primaryColor;

    switch (morpho.earStyle) {
      case 'erect':
        return (
          <g>
            <path d="M126 112 L106 46 Q104 38 113 42 L152 88 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M126 102 L114 58 L142 90 Z" fill={morpho.accentColor} fillOpacity="0.45" />
            <path d="M234 112 L254 46 Q256 38 247 42 L208 88 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M234 102 L246 58 L218 90 Z" fill={morpho.accentColor} fillOpacity="0.45" />
          </g>
        );
      case 'bat':
        return (
          <g>
            <path d="M126 118 C100 92 96 42 124 40 C142 39 152 72 154 96 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" />
            <path d="M126 104 C111 86 110 56 125 55 C135 54 142 74 144 92 Z" fill={morpho.accentColor} fillOpacity="0.5" />
            <path d="M234 118 C260 92 264 42 236 40 C218 39 208 72 206 96 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" />
            <path d="M234 104 C249 86 250 56 235 55 C225 54 218 74 216 92 Z" fill={morpho.accentColor} fillOpacity="0.5" />
          </g>
        );
      case 'semi-erect':
        return (
          <g>
            <path d="M126 112 L108 62 Q108 50 132 58 L152 92 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M108 62 Q102 78 118 82 L126 68 Z" fill={morpho.accentColor} stroke="#1C1917" strokeWidth="1.8" />
            <path d="M234 112 L252 62 Q252 50 228 58 L208 92 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M252 62 Q258 78 242 82 L234 68 Z" fill={morpho.accentColor} stroke="#1C1917" strokeWidth="1.8" />
          </g>
        );
      case 'button':
        return (
          <g>
            <path d="M124 108 C104 98 94 114 108 134 C118 148 128 138 132 122 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" />
            <path d="M236 108 C256 98 266 114 252 134 C242 148 232 138 228 122 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" />
          </g>
        );
      case 'feathered':
        return (
          <g>
            <path d="M128 102 C100 108 86 154 96 196 C102 214 122 212 128 186 C132 162 134 128 134 112 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" />
            <path d="M98 158 Q112 174 124 162 M96 178 Q112 194 126 182" stroke={morpho.accentColor} strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <path d="M232 102 C260 108 274 154 264 196 C258 214 238 212 232 186 C228 162 226 128 226 112 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" />
            <path d="M262 158 Q248 174 236 162 M264 178 Q248 194 234 182" stroke={morpho.accentColor} strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </g>
        );
      case 'floppy':
      default:
        return (
          <g>
            <path d="M128 100 C102 106 94 146 100 182 C104 196 122 194 128 172 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" />
            <path d="M232 100 C258 106 266 146 260 182 C256 196 238 194 232 172 Z" fill={earFill} stroke="#1C1917" strokeWidth="2.2" />
          </g>
        );
    }
  };

  const renderRuffOrTexture = () => {
    if (morpho.coatTexture === 'fluffy') {
      return (
        <path
          d="M114 186 C100 200 106 226 128 232 C144 252 168 258 180 258 C192 258 216 252 232 232 C254 226 260 200 246 186 C236 172 222 170 180 170 C138 170 124 172 114 186 Z"
          fill={morpho.coatPattern === 'tuxedo' || morpho.coatPattern === 'masked' ? morpho.secondaryColor : morpho.primaryColor}
          stroke="#1C1917"
          strokeWidth="2"
        />
      );
    }
    if (morpho.coatTexture === 'curly') {
      return (
        <g fill={morpho.primaryColor} stroke="#1C1917" strokeWidth="1.8">
          <circle cx="152" cy="88" r="16" />
          <circle cx="180" cy="82" r="18" />
          <circle cx="208" cy="88" r="16" />
        </g>
      );
    }
    return null;
  };

  const renderCoatPattern = () => {
    switch (morpho.coatPattern) {
      case 'spotted':
        return (
          <g fill={morpho.secondaryColor} opacity="0.88">
            <circle cx="148" cy="116" r="8" />
            <circle cx="210" cy="122" r="10" />
            <circle cx="136" cy="212" r="11" />
            <circle cx="220" cy="218" r="9" />
            <circle cx="182" cy="236" r="7" />
            <circle cx="164" cy="102" r="5" />
          </g>
        );
      case 'tricolor':
        return (
          <g>
            <path d="M126 106 C142 90 162 94 168 122 L154 152 L126 146 Z" fill={morpho.accentColor} />
            <path d="M234 106 C218 90 198 94 192 122 L206 152 L234 146 Z" fill={morpho.accentColor} />
            <circle cx="156" cy="132" r="7" fill={morpho.secondaryColor} />
            <circle cx="204" cy="132" r="7" fill={morpho.secondaryColor} />
            <path d="M168 182 L192 182 L198 250 L162 250 Z" fill="#FAF8F4" opacity="0.92" />
          </g>
        );
      case 'tuxedo':
        return (
          <g>
            <path d="M174 88 L186 88 L184 144 L176 144 Z" fill={morpho.secondaryColor} />
            <path d="M150 184 Q180 202 210 184 L204 252 L156 252 Z" fill={morpho.secondaryColor} />
          </g>
        );
      case 'bicolor':
        return (
          <g>
            <path d="M162 184 L198 184 L206 252 L154 252 Z" fill={morpho.secondaryColor} opacity="0.9" />
            <circle cx="158" cy="126" r="7" fill={morpho.secondaryColor} opacity="0.85" />
            <circle cx="202" cy="126" r="7" fill={morpho.secondaryColor} opacity="0.85" />
          </g>
        );
      case 'merle':
        return (
          <g fill={morpho.secondaryColor} opacity="0.55">
            <ellipse cx="145" cy="122" rx="14" ry="9" transform="rotate(-20 145 122)" />
            <ellipse cx="212" cy="138" rx="16" ry="10" transform="rotate(25 212 138)" />
            <ellipse cx="140" cy="222" rx="18" ry="11" />
            <ellipse cx="218" cy="228" rx="14" ry="9" />
          </g>
        );
      case 'brindle':
        return (
          <g stroke={morpho.secondaryColor} strokeWidth="3.5" strokeLinecap="round" opacity="0.5">
            <path d="M138 110 L152 122" />
            <path d="M222 110 L208 122" />
            <path d="M130 206 L152 218" />
            <path d="M230 206 L208 218" />
            <path d="M142 232 L162 242" />
          </g>
        );
      case 'masked':
        return (
          <g>
            <ellipse cx="180" cy="158" rx="34" ry="26" fill={morpho.secondaryColor} opacity="0.85" />
          </g>
        );
      case 'saddle':
        return (
          <g>
            <path d="M136 96 C158 84 202 84 224 96 L210 132 L150 132 Z" fill={morpho.secondaryColor} opacity="0.85" />
          </g>
        );
      default:
        return null;
    }
  };

  const muzzleWidth =
    morpho.muzzleStyle === 'long' ? 24 : morpho.muzzleStyle === 'short' || morpho.muzzleStyle === 'wrinkled' ? 32 : 28;
  const muzzleHeight = morpho.muzzleStyle === 'long' ? 34 : 24;

  return (
    <div
      className={`relative overflow-hidden bg-[#EFE8DC] select-none ${className}`}
      aria-label={`Portrait naturaliste : ${breed.name}`}
    >
      <svg
        viewBox="0 0 360 270"
        className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={`bg-${uid}`} cx="50%" cy="42%" r="65%">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="100%" stopColor="#E6DDD0" />
          </radialGradient>
        </defs>

        {/* Museum plate backdrop */}
        <rect width="360" height="270" fill={`url(#bg-${uid})`} />
        <rect
          x="10"
          y="10"
          width="340"
          height="250"
          fill="none"
          stroke="#1C1917"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        {/* Subtle botanical/horizon arch behind portrait */}
        <circle cx="180" cy="134" r="96" fill="#FFFFFF" fillOpacity="0.45" />

        {/* Shoulders / Chest */}
        <path
          d="M96 270 C102 214 132 184 180 184 C228 184 258 214 264 270 Z"
          fill={morpho.primaryColor}
          stroke="#1C1917"
          strokeWidth="2.2"
        />

        {/* Fluffy chest ruff if applicable */}
        {renderRuffOrTexture()}

        {/* Ears (behind/around head) */}
        {renderEars()}

        {/* Head Silhouette */}
        <path
          d="M126 122 C126 86 150 78 180 78 C210 78 234 86 234 122 C234 156 218 184 180 188 C142 184 126 156 126 122 Z"
          fill={morpho.primaryColor}
          stroke="#1C1917"
          strokeWidth="2.2"
        />

        {/* Coat Pattern Overlays */}
        {renderCoatPattern()}

        {/* Wrinkles for wrinkled muzzles */}
        {morpho.muzzleStyle === 'wrinkled' && (
          <g stroke="#1C1917" strokeOpacity="0.45" strokeWidth="1.6" fill="none" strokeLinecap="round">
            <path d="M158 106 Q180 112 202 106" />
            <path d="M164 116 Q180 120 196 116" />
            <path d="M148 152 Q156 164 166 166" />
            <path d="M212 152 Q204 164 194 166" />
          </g>
        )}

        {/* Muzzle */}
        <ellipse
          cx="180"
          cy={158 + (morpho.muzzleStyle === 'long' ? 4 : 0)}
          rx={muzzleWidth}
          ry={muzzleHeight / 1.4}
          fill={
            morpho.coatPattern === 'masked'
              ? morpho.secondaryColor
              : morpho.coatPattern === 'tricolor' || morpho.coatPattern === 'tuxedo'
                ? '#FAF8F4'
                : morpho.accentColor
          }
          fillOpacity={morpho.coatPattern === 'solid' ? 0.35 : 0.92}
          stroke="#1C1917"
          strokeOpacity="0.3"
          strokeWidth="1.4"
        />

        {/* Bearded muzzle tuft */}
        {morpho.muzzleStyle === 'bearded' && (
          <path
            d="M152 158 Q166 188 180 184 Q194 188 208 158"
            fill={morpho.secondaryColor}
            fillOpacity="0.65"
            stroke="#1C1917"
            strokeWidth="1.4"
          />
        )}

        {/* Eyes */}
        <g>
          <ellipse cx="155" cy="128" rx="7.5" ry="6.5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.5" />
          <circle cx="156" cy="128" r="4.8" fill={morpho.eyeColor} />
          <circle cx="157.5" cy="126.5" r="1.6" fill="#FFFFFF" />

          <ellipse cx="205" cy="128" rx="7.5" ry="6.5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.5" />
          <circle cx="204" cy="128" r="4.8" fill={morpho.eyeColor} />
          <circle cx="205.5" cy="126.5" r="1.6" fill="#FFFFFF" />
        </g>

        {/* Nose */}
        <path
          d="M169 148 C169 143 191 143 191 148 C191 154 184 159 180 159 C176 159 169 154 169 148 Z"
          fill={morpho.noseColor}
        />
        <ellipse cx="176" cy="147" rx="3" ry="1.4" fill="#FFFFFF" fillOpacity="0.35" />

        {/* Mouth expression */}
        <path
          d="M180 159 V167 M180 167 C174 172 167 170 164 166 M180 167 C186 172 193 170 196 166"
          stroke="#1C1917"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Collar with brass tag */}
        <path
          d="M138 202 Q180 218 222 202"
          stroke="#EA580C"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="180" cy="216" r="6" fill="#D97706" stroke="#1C1917" strokeWidth="1.4" />

        {/* Museum Plate Accession Caption */}
        <text
          x="22"
          y="250"
          fontSize="10"
          fontFamily="JetBrains Mono, monospace"
          fill="#57534E"
          letterSpacing="0.08em"
        >
          PLANCHE N° {morpho.plateNumber} · {breed.originCountry.toUpperCase()}
        </text>

        {/* Color swatch key */}
        <g transform="translate(292, 240)">
          <circle cx="0" cy="6" r="5" fill={morpho.primaryColor} stroke="#1C1917" strokeWidth="1" />
          <circle cx="14" cy="6" r="5" fill={morpho.secondaryColor} stroke="#1C1917" strokeWidth="1" />
          <circle cx="28" cy="6" r="5" fill={morpho.accentColor} stroke="#1C1917" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};
