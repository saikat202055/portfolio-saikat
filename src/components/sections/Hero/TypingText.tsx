import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

interface TypingTextProps {
  words: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
}

export function TypingText({
  words,
  typingSpeedMs = 60,
  deletingSpeedMs = 30,
  pauseMs = 1600,
}: TypingTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentWord = words[wordIndex];
    const atFullWord = charCount === currentWord.length;
    const atEmpty = charCount === 0;

    let delay = isDeleting ? deletingSpeedMs : typingSpeedMs;
    if (atFullWord && !isDeleting) delay = pauseMs;

    const timeout = setTimeout(() => {
      if (!isDeleting && atFullWord) {
        setIsDeleting(true);
        return;
      }
      if (isDeleting && atEmpty) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      setCharCount((prev) => prev + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [
    charCount,
    isDeleting,
    wordIndex,
    words,
    typingSpeedMs,
    deletingSpeedMs,
    pauseMs,
    prefersReducedMotion,
  ]);

  const displayText = prefersReducedMotion
    ? words[0]
    : words[wordIndex].slice(0, charCount);

  return (
    <span aria-live="polite" className="inline-flex items-center">
      {displayText}
      {!prefersReducedMotion && (
        <span
          aria-hidden="true"
          className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-[--color-primary]"
        />
      )}
    </span>
  );
}
