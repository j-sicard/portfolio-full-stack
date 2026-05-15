import { Section } from '../ui/Section';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center mb-32 last:mb-0`}
    >
      {/* Visuals via placeholders for now */}
      <div className="w-full lg:w-3/5 group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500 rounded-3xl"></div>
        <div className="relative aspect-[16/10] bg-cardBorder rounded-3xl overflow-hidden glass p-2">
          {/* Desktop Mockup Area - Using generic styling to wait for actual images if needed later */}
          <div className="w-full h-full bg-background rounded-2xl overflow-hidden border border-cardBorder relative">
             <div className="absolute inset-0 flex items-center justify-center text-foreground/20 text-xl font-medium tracking-widest uppercase">
                Maquette {project.title}
             </div>
             {/* If real images exist, an img tag would go here */}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5 space-y-6">
        <div className="inline-flex px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
          Projet Client
        </div>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h3>
        <p className="text-foreground/70 text-lg leading-relaxed">
          {project.description}
        </p>
        
        <div className="space-y-4 pt-4 border-t border-cardBorder">
          <ul className="grid gap-2 text-foreground/80">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-sm px-3 py-1 glass rounded-md text-foreground/70 border border-cardBorder">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-6">
          {project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium rounded-full hover:scale-105 transition-transform">
              Voir en direct <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl !== "#" && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 glass rounded-full hover:bg-cardBorder transition-colors">
              Code source <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Club d'Aïkido",
      description: "Un site web moderne et minimaliste conçu pour un vrai club d'Aïkido, reflétant l'héritage japonais de la discipline à travers une expérience utilisateur structurée et épurée.",
      highlights: [
        "Modernisation de l'identité visuelle et amélioration de la lisibilité",
        "Optimisation mobile-first pour un accès facile en déplacement",
        "Navigation simplifiée pour les horaires de cours et les contacts"
      ],
      tech: ["React", "CSS Modules", "Figma", "Design Réactif"],
      liveUrl: "#",
      githubUrl: "https://github.com/j-sicard/aikido-reignac-web-site"
    },
    {
      title: "Écurie Elphé",
      description: "Une expérience narrative élégante et immersive conçue pour un authentique centre équestre, mettant en valeur leurs installations et leur profond respect de la nature.",
      highlights: [
        "Amélioration visuelle premium et flux narratif",
        "Expérience de galerie modulaire immersive",
        "Amélioration de la structure du contenu pour les activités et l'élevage"
      ],
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "https://github.com/j-sicard/ecurie_elevage_d_elphe_vue"
    }
  ];

  return (
    <Section id="projects" className="bg-background relative">
      <div className="mb-20 md:mb-32">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projets Phares</h2>
        <p className="text-xl text-foreground/50 max-w-2xl">Études de cas premium de plateformes clients réelles que j'ai conçues et développées.</p>
      </div>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
