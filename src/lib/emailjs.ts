import emailjs from '@emailjs/browser';

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();

const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();

const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(
  data: ContactFormData
) {
  const missing: string[] = [];

  if (!SERVICE_ID) {
    missing.push('VITE_EMAILJS_SERVICE_ID');
  }

  if (!TEMPLATE_ID) {
    missing.push('VITE_EMAILJS_TEMPLATE_ID');
  }

  if (!PUBLIC_KEY) {
    missing.push('VITE_EMAILJS_PUBLIC_KEY');
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing EmailJS configuration: ${missing.join(', ')}`
    );
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      message: data.message,

      // Extra values for compatibility
      from_name: data.name,
      from_email: data.email,

      title: `Portfolio message from ${data.name}`,
    },
    {
      publicKey: PUBLIC_KEY,
    }
  );
}