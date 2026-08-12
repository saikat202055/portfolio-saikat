import { useCallback, useEffect, useState } from 'react';

export function useCarousel(itemCount: number, autoPlayMs = 6000) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(
    () => setIndex((prev) => (prev + 1) % itemCount),
    [itemCount]
  );
  const prev = useCallback(
    () => setIndex((prevIdx) => (prevIdx - 1 + itemCount) % itemCount),
    [itemCount]
  );
  const goTo = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    if (isPaused || itemCount <= 1) return;
    const id = setInterval(next, autoPlayMs);
    return () => clearInterval(id);
  }, [isPaused, next, autoPlayMs, itemCount]);

  return {
    index,
    next,
    prev,
    goTo,
    pause: () => setIsPaused(true),
    resume: () => setIsPaused(false),
  };
}
