import { ExternalLink } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { LazyImage } from '@/components/ui/LazyImage';
import type { Certificate } from '@/types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  return (
    <Modal isOpen={certificate !== null} onClose={onClose} title={certificate?.title ?? ''}>
      {certificate && (
        <div>
          <LazyImage
            src={certificate.image}
            alt={`${certificate.title} certificate, full size`}
            wrapperClassName="mb-4 aspect-[4/3] w-full rounded-xl"
            priority
          />
          <h3 className="text-lg font-semibold">{certificate.title}</h3>
          <p className="mt-1 text-sm text-[--color-text-muted]">
            {certificate.issuer} · {certificate.date}
          </p>
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[--color-primary] hover:underline"
            >
              Verify Credential <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </Modal>
  );
}
