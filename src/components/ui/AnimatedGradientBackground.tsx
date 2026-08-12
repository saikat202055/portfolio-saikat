/**
 * Ambient background used site-wide. Pure CSS `transform`/`opacity`
 * keyframe animations (see index.css) — no JS per-frame work, so this
 * stays cheap even on low-end mobile devices. Automatically frozen by
 * the global `prefers-reduced-motion` rule in index.css.
 */
export function AnimatedGradientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="animate-blob-slow absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[--color-primary]/15 blur-[110px]" />
      <div className="animate-blob-slow-reverse absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[--color-primary-light]/10 blur-[110px]" />
    </div>
  );
}
