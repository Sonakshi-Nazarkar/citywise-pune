import React, { useState } from 'react';
import { Camera, ImageOff, ShieldCheck } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeName?: string;
  category?: string;
  attribution?: {
    author: string;
    license: string;
    source: string;
    isPlaceholder?: boolean;
  };
  showAttributionBadge?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  placeName,
  category,
  attribution,
  showAttributionBadge = false,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const isPlaceholder = attribution?.isPlaceholder || src.endsWith('.svg');

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      {/* Skeleton / Loading Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <Camera className="w-6 h-6 text-slate-600" />
        </div>
      )}

      {hasError ? (
        /* Clean fallback container when image cannot load */
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-4 text-center">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">
            <ImageOff className="w-5 h-5 text-indigo-300" />
          </div>
          <span className="font-bold text-sm text-white line-clamp-1">
            {placeName || alt}
          </span>
          <span className="text-[11px] text-indigo-200 mt-0.5">
            {category ? `${category.toUpperCase()} • Pune` : 'Pune Landmark'}
          </span>
          <span className="text-[9px] text-slate-400 mt-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
            Verified Location Listing
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          {...props}
        />
      )}

      {/* Attribution Overlay Badge */}
      {attribution && showAttributionBadge && !hasError && (
        <div className="absolute bottom-2 right-2 z-10">
          <div
            title={
              isPlaceholder
                ? 'Clean branded placeholder shown in lieu of unverified photos'
                : `Photo: ${attribution.author} (${attribution.license}) via ${attribution.source}`
            }
            className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-950/80 hover:bg-slate-950 text-white text-[10px] backdrop-blur-xs border border-white/15 cursor-help transition-colors"
          >
            <Camera className="w-3 h-3 text-indigo-300 shrink-0" />
            <span className="truncate max-w-[130px] font-mono">
              {isPlaceholder ? 'Placeholder' : attribution.license}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
