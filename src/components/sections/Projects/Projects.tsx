import { useMemo, useState } from 'react';

import {
  AnimatePresence,
  m as motion,
} from 'framer-motion';

import { SearchX } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

import {
  PROJECTS,
  type ProjectFilter,
} from '@/data/projects';

import { ProjectFilterBar } from './ProjectFilterBar';
import { ProjectSearch } from './ProjectSearch';
import { ProjectCard } from './ProjectCard';


export function Projects() {
  const [filter, setFilter] =
    useState<ProjectFilter>('All');

  const [query, setQuery] =
    useState('');


  const filteredProjects = useMemo(() => {
    const q = query
      .trim()
      .toLowerCase();

    return PROJECTS.filter((project) => {
      const matchesFilter =
        filter === 'All' ||
        project.category === filter;

      const matchesQuery =
        q === '' ||
        project.title
          .toLowerCase()
          .includes(q) ||
        project.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(q),
        );

      return (
        matchesFilter &&
        matchesQuery
      );
    });
  }, [filter, query]);


  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="
        relative
        overflow-hidden
        pb-16
        pt-2
        sm:pb-20
        sm:pt-3
        lg:pb-24
        lg:pt-4
      "
    >
      <Container className="relative">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <SectionHeading
            eyebrow="My Work"
            title="Featured Projects"
            description="A mix of AI/ML experiments, web apps, and embedded systems projects."
          />
        </div>


        {/* =========================
            FILTER + SEARCH
        ========================== */}

        <div
          className="
            mx-auto
            mb-7
            mt-5
            flex
            w-full
            min-w-0
            flex-col
            items-center
            gap-3
            sm:mb-8
            sm:mt-6
            sm:gap-4
            lg:mb-9
          "
        >

          {/* Mobile-friendly filter wrapper */}

          <div
            className="
              w-full
              min-w-0
              overflow-x-auto
              overscroll-x-contain
              pb-1
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <div
              className="
                flex
                min-w-max
                justify-start
                px-1
                sm:justify-center
              "
            >
              <ProjectFilterBar
                active={filter}
                onChange={setFilter}
              />
            </div>
          </div>


          {/* Search */}

          <div
            className="
              flex
              w-full
              min-w-0
              justify-center
            "
          >
            <ProjectSearch
              value={query}
              onChange={setQuery}
            />
          </div>

        </div>


        {/* =========================
            PROJECT GRID
        ========================== */}

        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="
              grid
              min-w-0
              grid-cols-1
              gap-5
              sm:grid-cols-2
              sm:gap-6
              lg:grid-cols-3
            "
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(
                (project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ),
              )}
            </AnimatePresence>
          </motion.div>
        ) : (

          /* =========================
              EMPTY STATE
          ========================== */

          <div
            className="
              flex
              flex-col
              items-center
              gap-3
              px-4
              py-12
              text-center
              text-[--color-text-muted]
              sm:py-16
            "
          >
            <SearchX
              size={32}
              aria-hidden="true"
            />

            <p
              className="
                max-w-md
                text-sm
                leading-6
                sm:text-base
              "
            >
              No projects match your search.
              Try a different keyword or filter.
            </p>
          </div>
        )}

      </Container>
    </section>
  );
}

export default Projects;