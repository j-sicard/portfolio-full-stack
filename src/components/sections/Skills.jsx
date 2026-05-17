import { Section } from '../ui/Section';
import { Database, Layout, Server, Cloud, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: ["Java", "Spring Boot", "Node.js", "REST API"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["AWS", "Docker", "CI/CD", "Git"]
    },
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5" />,
      skills: ["React", "TypeScript", "TailwindCSS", "Vite"]
    },
    {
      title: "Bases de données",
      icon: <Database className="w-5 h-5" />,
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Architecture & Qualité",
      icon: <ShieldCheck className="w-5 h-5" />,
      skills: ["MVC", "SOLID", "JUnit"]
    }
  ];

  const highlightedSkills = ["AWS", "Spring Boot", "React"];

  return (
    <Section id="skills" className="bg-card/30 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Compétences Techniques</h2>
        <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
          Technologies et architectures utilisées pour concevoir des applications web modernes, robustes et adaptées aux environnements techniques et industriels exigeants.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="group relative p-8 rounded-2xl bg-card/20 border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
          >
            {/* Subtle gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground/90 tracking-wide">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => {
                  const isHighlighted = highlightedSkills.includes(skill);
                  return (
                    <div 
                      key={index}
                      className={`
                        relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default
                        ${isHighlighted 
                          ? "border border-primary/40 text-primary bg-primary/5 hover:border-primary/80 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] hover:-translate-y-0.5 hover:bg-primary/10" 
                          : "border border-white/5 text-foreground/70 bg-white/5 hover:border-white/20 hover:text-foreground hover:bg-white/10 hover:-translate-y-0.5"
                        }
                      `}
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
