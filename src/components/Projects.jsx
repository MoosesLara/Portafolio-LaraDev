import { useState } from 'react'
import { projects, collaborations } from '../data/config'
import Reveal from './Reveal'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

function ProjectCard({ project, index, statusLabel }) {
  const { t } = useLanguage()
  const [ref, visible] = useReveal()

  const handleAnimationEnd = (e) => {
    if (e.target !== e.currentTarget) return
    if (e.animationName === 'zoomIn') {
      e.currentTarget.classList.remove('animate__zoomIn')
    }
  }

  return (
    <article
      ref={ref}
      className={
        'group relative flex flex-col h-full overflow-hidden rounded-[16px] bg-[var(--card-bg)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow)] hover:border-[var(--accent-2)]' +
        (visible ? ' animate__animated animate__zoomIn' : ' reveal')
      }
      style={visible ? { animationDelay: `${index * 0.12}s` } : undefined}
      onAnimationEnd={handleAnimationEnd}
    >
      {project.image && (
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/5">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[var(--accent-1)] opacity-0 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
        </div>
      )}
      <div className="flex flex-col flex-grow p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-h)] mb-3 tracking-tight transition-colors">
          {project.title}
        </h3>
        <p className="text-[16px] text-[var(--text)] mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-[12px] font-semibold tracking-wider rounded-lg bg-[color-mix(in_srgb,var(--accent-1)_12%,transparent)] text-[var(--accent-1)] transition-colors group-hover:bg-[color-mix(in_srgb,var(--accent-1)_18%,transparent)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center flex-wrap gap-4 mt-auto pt-4 border-t border-[var(--border)]">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--accent-2)] hover:underline transition-all hover:text-[var(--accent-1)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              {t.projects.code}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--accent-2)] hover:underline transition-all hover:text-[var(--accent-1)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              {t.projects.demo}
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--accent-2)] hover:underline transition-all hover:text-[var(--accent-1)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              {t.projects.visit}
            </a>
          )}
          {statusLabel && (
            <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-bold tracking-wide uppercase bg-[color-mix(in_srgb,var(--accent-3)_10%,transparent)] text-[var(--accent-3)] rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-3)] animate-pulse" aria-hidden="true" />
              {statusLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

const SHOW_MY_PROJECTS = true

export default function Projects() {
  const { t } = useLanguage()
  const [tab, setTab] = useState(SHOW_MY_PROJECTS ? 'mine' : 'collabs')

  const mineItems = projects.map((project, i) => ({ ...project, ...t.projects.items[i] }))
  const collabItems = collaborations.map((project, i) => ({
    ...project,
    ...t.projects.collaborations.items[i],
  }))
  const activeItems = tab === 'mine' ? mineItems : collabItems

  return (
    <section className="projects" id="projects">
      <Reveal as="h2" className="section-title" animation="fadeInUp">
        {t.projects.headingPre}
        <span className="highlight">{t.projects.headingHighlight}</span>
      </Reveal>

      {SHOW_MY_PROJECTS && (
        <div className="project-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'mine'}
            className={'project-tab' + (tab === 'mine' ? ' is-active' : '')}
            onClick={() => setTab('mine')}
          >
            {t.projects.tabMine}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'collabs'}
            className={'project-tab' + (tab === 'collabs' ? ' is-active' : '')}
            onClick={() => setTab('collabs')}
          >
            {t.projects.tabCollabs}
          </button>
        </div>
      )}

      <div className="project-grid">
        {activeItems.map((project, i) => (
          <ProjectCard
            key={`${tab}-${i}`}
            project={project}
            index={i}
            statusLabel={tab === 'collabs' ? t.projects.statusActive : undefined}
          />
        ))}
      </div>
    </section>
  )
}
