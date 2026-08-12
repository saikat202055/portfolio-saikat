import { memo } from 'react';

import { m as motion } from 'framer-motion';

import {
  ArrowUpRight,
  Award,
  FileText,
} from 'lucide-react';

import { Card } from '@/components/ui/Card';

import type {
  CertificateItem,
} from '@/data/certificates';


interface CertificateCardProps {
  certificate: CertificateItem;
  index: number;
}


export const CertificateCard = memo(
  function CertificateCard({
    certificate,
    index,
  }: CertificateCardProps) {
    return (
      <motion.article
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-8%',
        }}
        transition={{
          delay:
            (index % 8) * 0.06,
          duration: 0.55,
          ease: [
            0.16,
            1,
            0.3,
            1,
          ],
        }}
        whileHover={{
          y: -5,
        }}
        className="
          h-full
          min-w-0
        "
      >
        <Card
          spotlight
          className="
            group
            relative
            flex
            h-full
            min-h-[280px]
            flex-col
            overflow-hidden
            p-0
            sm:min-h-[300px]
          "
        >
          {/* VISUAL */}

          <div
            className="
              relative
              flex
              min-h-[145px]
              flex-1
              items-center
              justify-center
              overflow-hidden
              border-b
              border-[--color-border]
              bg-[--color-surface]/45
              sm:min-h-[165px]
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-36
                w-36
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[--color-primary]/10
                blur-3xl
              "
            />


            <div
              className="
                absolute
                left-3
                top-3
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[--color-border]
                bg-[--color-surface]/80
                px-2.5
                py-1
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[--color-text-muted]
                backdrop-blur-xl
                sm:left-4
                sm:top-4
              "
            >
              <Award
                size={12}
                aria-hidden="true"
                className="
                  text-[--color-primary]
                "
              />

              Certificate
            </div>


            <div
              className="
                relative
                grid
                h-16
                w-16
                place-items-center
                rounded-2xl
                border
                border-[--color-primary]/25
                bg-[--color-primary]/10
                text-[--color-primary]
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:border-[--color-primary]/45
              "
            >
              <FileText
                size={28}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
          </div>


          {/* CONTENT */}

          <div
            className="
              flex
              flex-col
              p-5
              sm:p-6
            "
          >
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-[--color-primary]
              "
            >
              {certificate.category}
            </p>


            <h3
              className="
                mt-2
                text-base
                font-bold
                leading-snug
                tracking-tight
                text-[--color-text]
                transition-colors
                duration-300
                group-hover:text-[--color-primary-light]
                sm:text-lg
              "
            >
              {certificate.title}
            </h3>


            <a
              href={certificate.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certificate.title} certificate PDF`}
              className="
                group/button
                mt-5
                inline-flex
                min-h-11
                w-full
                items-center
                justify-between
                gap-3
                rounded-xl
                border
                border-[--color-border]
                bg-[--color-surface]/65
                px-4
                py-2.5
                text-sm
                font-semibold
                text-[--color-text]
                transition-all
                duration-300
                hover:border-[--color-primary]/45
                hover:bg-[--color-primary]/10
                hover:text-[--color-primary-light]
              "
            >
              <span>
                View Certificate
              </span>

              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover/button:-translate-y-0.5
                  group-hover/button:translate-x-0.5
                "
              />
            </a>
          </div>


          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-[2px]
              w-0
              -translate-x-1/2
              rounded-full
              bg-[--color-primary]
              transition-all
              duration-500
              group-hover:w-2/3
            "
          />
        </Card>
      </motion.article>
    );
  },
);


export default CertificateCard;