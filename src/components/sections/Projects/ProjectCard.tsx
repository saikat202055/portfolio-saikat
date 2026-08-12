import { memo } from 'react';

import { m as motion } from 'framer-motion';

import {
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { LazyImage } from '@/components/ui/LazyImage';

import type { Project } from '@/types';


interface ProjectCardProps {
  project: Project;
  index: number;
}


export const ProjectCard = memo(function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const hasProjectLink = Boolean(project.liveUrl);

  const cardContent = (
    <Card
      spotlight
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        p-0
        transition-all
        duration-300
      "
    >
      {/* =========================
          PROJECT IMAGE
      ========================== */}

      <div
        className="
          relative
          overflow-hidden
        "
      >
        <LazyImage
          src={project.image}
          alt={`${project.title} preview screenshot`}
          wrapperClassName="
            aspect-[16/10]
            w-full
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />


        {/* IMAGE OVERLAY */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/55
            via-black/5
            to-transparent
            opacity-30
            transition-opacity
            duration-500
            group-hover:opacity-70
          "
        />


        {/* PROJECT OPEN ICON */}

        {hasProjectLink && (
          <div
            aria-hidden="true"
            className="
              absolute
              right-3
              top-3
              grid
              h-9
              w-9
              place-items-center
              rounded-full
              border
              border-white/15
              bg-black/35
              text-white
              opacity-90
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              group-hover:border-[--color-primary]/50
              group-hover:bg-[--color-primary]/20
              sm:right-4
              sm:top-4
            "
          >
            <ArrowUpRight
              size={17}
              aria-hidden="true"
            />
          </div>
        )}
      </div>


      {/* =========================
          CONTENT
      ========================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-5
          sm:p-6
          lg:p-6
        "
      >
        {/* TITLE */}

        <h3
          className="
            text-lg
            font-bold
            tracking-tight
            text-[--color-text]
            transition-colors
            duration-300
            group-hover:text-[--color-primary-light]
          "
        >
          {project.title}
        </h3>


        {/* DESCRIPTION */}

        <p
          className="
            mt-2
            flex-1
            text-sm
            leading-6
            text-[--color-text-muted]
          "
        >
          {project.description}
        </p>


        {/* TECHNOLOGIES */}

        <ul
          className="
            mt-5
            flex
            flex-wrap
            gap-2
          "
        >
          {project.tags.map((tag, tagIndex) => (
            <motion.li
              key={tag}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay:
                  index * 0.05 +
                  tagIndex * 0.03,
              }}
            >
              <Badge>
                {tag}
              </Badge>
            </motion.li>
          ))}
        </ul>


        {/* =========================
            VIEW PROJECT FOOTER
        ========================== */}

        {hasProjectLink && (
          <div
            className="
              mt-5
              flex
              min-h-11
              items-center
              justify-between
              gap-3
              border-t
              border-[--color-border]
              pt-4
            "
          >
            <span
              className="
                text-sm
                font-semibold
                text-[--color-primary]
                transition-colors
                duration-300
                group-hover:text-[--color-primary-light]
              "
            >
              View Project
            </span>

            <ExternalLink
              size={16}
              aria-hidden="true"
              className="
                shrink-0
                text-[--color-text-muted]
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[--color-primary]
              "
            />
          </div>
        )}
      </div>


      {/* =========================
          BOTTOM ACCENT
      ========================== */}

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
          group-hover:w-3/4
        "
      />
    </Card>
  );


  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -15,
      }}
      transition={{
        delay: (index % 6) * 0.08,
        duration: 0.55,
      }}
      whileHover={
        hasProjectLink
          ? { y: -7 }
          : undefined
      }
      className="
        h-full
        min-w-0
      "
    >
      {hasProjectLink ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} project`}
          className="
            block
            h-full
            rounded-2xl
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[--color-primary]
          "
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.article>
  );
});