import { useState, type ChangeEvent, type FormEvent } from 'react';
import { m as motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { sendContactEmail } from '@/lib/emailjs';

type Status = 'idle' | 'loading' | 'success' | 'error';

const initialFormState = { name: '', email: '', message: '' };

export function ContactForm() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field: keyof typeof form) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await sendContactEmail(form);
      setStatus('success');
      setForm(initialFormState);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange('name')}
          className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[--color-primary] dark:border-white/15"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange('email')}
          className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[--color-primary] dark:border-white/15"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange('message')}
          className="w-full resize-none rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[--color-primary] dark:border-white/15"
        />
      </div>

      <Button
        type="submit"
        disabled={status === 'loading'}
        icon={
          status === 'loading' ? (
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          ) : (
            <Send size={16} aria-hidden="true" />
          )
        }
        className="mt-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 text-sm text-[--color-primary]"
          >
            <CheckCircle2 size={16} aria-hidden="true" /> Message sent — I&apos;ll reply soon!
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 text-sm text-red-500"
          >
            <AlertCircle size={16} aria-hidden="true" /> {errorMessage}
          </motion.p>
        )}
      </div>
    </form>
  );
}
