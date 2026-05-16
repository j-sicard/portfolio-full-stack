import { Section } from '../ui/Section';

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Java Spring Boot", "Hibernate", "Node.js", "REST API"]
    },
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"]
    },
    {
      title: "Bases de données",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Git", "CI/CD"]
    },
    {
      title: "Architecture",
      skills: ["MVC", "SOLID", "JUnit"]
    }
  ];

  return (
    <Section id="skills" className="bg-card/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Arsenal Technique</h2>
        <p className="text-foreground/60 text-lg">Les outils et technologies que j'utilise pour donner vie aux idées.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="p-8 glass rounded-2xl border border-cardBorder hover:border-primary/20 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-6 text-foreground tracking-wide">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 rounded-lg border border-cardBorder/50 bg-background/30 font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-default text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
