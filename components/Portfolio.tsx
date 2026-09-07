import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Fiamma',
    category: 'Pizzaria italiana',
    description: 'O sabor da Itália começa antes da primeira fatia.',
    url: 'https://fiammapizzaria.vercel.app/',
    domain: 'fiammapizzaria.vercel.app',
    image: '/portfolio/fiamma.webp',
    color: 'orange',
  },
  {
    name: 'Imova',
    category: 'Imobiliária',
    description: 'Uma nova forma de encontrar o seu próximo lugar.',
    url: 'https://imovaweb.vercel.app/',
    domain: 'imovaweb.vercel.app',
    image: '/portfolio/imova.webp',
    color: 'aqua',
  },
  {
    name: 'Clínica Aflora',
    category: 'Clínica de psicologia',
    description: 'Uma presença digital que aproxima e acolhe.',
    url: 'https://clinicaaflora.vercel.app/',
    domain: 'clinicaaflora.vercel.app',
    image: '/portfolio/aflora.webp',
    color: 'lilac',
  },
] as const;

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio" aria-labelledby="portfolio-title">
      <div className="portfolio-intro section-intro">
        <div>
          <p className="eyebrow"><span>03</span> Portfólio · Criação de sites</p>
          <h2 id="portfolio-title">Ideias que já<br/>viraram <em>presença.</em></h2>
        </div>
        <p className="portfolio-lead">Cada negócio tem uma história. Veja como transformamos três delas em experiências digitais com identidade própria.</p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <article className={`portfolio-project portfolio-${project.color}`} key={project.name}>
            <a className="portfolio-project-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar o site ${project.name} (abre em nova aba)`}>
              <div className="portfolio-project-meta"><span>0{index + 1}</span><span>{project.category}</span></div>
              <div className="portfolio-preview">
                <div className="portfolio-browser">
                  <div className="portfolio-browser-bar" aria-hidden="true"><span className="portfolio-browser-dots"><i/><i/><i/></span><span>{project.domain}</span></div>
                  {project.image ? (
                    <Image src={project.image} alt={`Página inicial do site ${project.name}`} width={1440} height={1000} sizes="(max-width: 600px) 88vw, (max-width: 1100px) 42vw, 28vw" />
                  ) : (
                    <div className="portfolio-preview-pending"><span>Clínica</span><strong>Aflora</strong><span>Psicologia</span></div>
                  )}
                </div>
              </div>
              <div className="portfolio-project-heading"><h3>{project.name}</h3><span className="portfolio-visit">Visitar site <ArrowUpRight size={18} aria-hidden="true"/></span></div>
              <p className="portfolio-description">{project.description}</p>
            </a>
          </article>
        ))}
      </div>

      <div className="portfolio-footer"><p>Seu projeto pode ser o próximo.</p><a href="/contato" className="big-link">Vamos tirar sua ideia do papel <span><ArrowDownRight aria-hidden="true"/></span></a></div>
    </section>
  );
}
