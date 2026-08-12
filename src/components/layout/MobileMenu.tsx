import { useEffect } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NAV_LINKS } from '@/data/navigation';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { IconButton } from '@/components/ui/IconButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
}

export function MobileMenu({ isOpen, onClose, activeId }: MobileMenuProps) {
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-white dark:bg-[--color-bg-dark] lg:hidden"
        >
          <div className="flex h-16 items-center justify-between px-6">
            <span className="font-[--font-heading] text-lg font-bold">Menu</span>
            <IconButton icon={<X size={20} />} label="Close menu" onClick={onClose} />
          </div>

          <ul className="flex flex-col gap-2 px-6 pt-6">
            {NAV_LINKS.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <a
                  href={link.href}
                  onClick={onClose}
                  aria-current={activeId === link.href.slice(1) ? 'true' : undefined}
                  className={`block rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                    activeId === link.href.slice(1)
                      ? 'bg-[--color-primary]/10 text-[--color-primary]'
                      : 'hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
