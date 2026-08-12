import { useState, type ImgHTMLAttributes } from 'react';
import { ImageOff } from 'lucide-react';
import { Skeleton } from './Skeleton';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  wrapperClassName?: string;
  /** Set true only for above-the-fold images (e.g. hero portrait). */
  priority?: boolean;
}

export function LazyImage({
  src,
  alt,
  wrapperClassName = '',
  priority = false,
  className = '',
  ...rest
}: LazyImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {status === 'loading' && (
        <Skeleton className="absolute inset-0 h-full w-full" rounded="rounded-none" />
      )}

      {status === 'error' ? (
        <div
          className="flex h-full w-full items-center justify-center bg-black/5 text-[--color-text-muted] dark:bg-white/5"
          role="img"
          aria-label={`${alt} (image unavailable)`}
        >
          <ImageOff size={24} aria-hidden="true" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...rest}
        />
      )}
    </div>
  );
}
