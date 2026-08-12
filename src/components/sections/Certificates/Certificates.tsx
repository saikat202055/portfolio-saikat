import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

import {
  CERTIFICATES,
} from '@/data/certificates';

import {
  CertificateCard,
} from './CertificateCard';


export function Certificates() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="
        relative
        overflow-hidden
        bg-black/[0.02]
        pb-16
        pt-2
        dark:bg-white/[0.02]
        sm:pb-20
        sm:pt-3
        lg:pb-24
        lg:pt-4
      "
    >
      {/* LEFT GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/3
          -z-10
          h-64
          w-64
          rounded-full
          bg-[--color-primary]/5
          blur-[110px]
          sm:h-72
          sm:w-72
        "
      />


      {/* RIGHT GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          -z-10
          h-64
          w-64
          rounded-full
          bg-[--color-primary]/5
          blur-[110px]
          sm:h-72
          sm:w-72
        "
      />


      <Container className="relative">

        {/* HEADING */}

        <div
          className="
            mx-auto
            mb-6
            max-w-3xl
            text-center
            sm:mb-7
          "
        >
          <SectionHeading
            eyebrow="Continuous Learning"
            title="Certificates"
            description="Professional certifications and learning credentials across digital marketing, AI, software development, and technology."
          />
        </div>


        {/* GRID */}

        {CERTIFICATES.length > 0 ? (
          <div
            className="
              grid
              min-w-0
              grid-cols-1
              items-stretch
              gap-5
              sm:grid-cols-2
              sm:gap-6
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {CERTIFICATES.map(
              (
                certificate,
                index,
              ) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  index={index}
                />
              ),
            )}
          </div>
        ) : (
          <div
            className="
              rounded-2xl
              border
              border-[--color-border]
              bg-[--color-surface]/40
              px-5
              py-10
              text-center
              text-sm
              text-[--color-text-muted]
            "
          >
            Certificates will be added soon.
          </div>
        )}

      </Container>
    </section>
  );
}


export default Certificates;