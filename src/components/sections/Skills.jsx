import { Section } from '../ui/Section';

export default function Skills() {
  const skills = [
    "React", "Vue.js", "Tailwind CSS", "JavaScript (ES6+)", 
    "TypeScript", "Design UX/UI", "Mises en page réactives", 
    "Intégration API", "Git / GitHub", "Framer Motion",
    "Figma", "Optimisation des performances"
  ];

  return (
    <Section id="skills" className="bg-card/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Arsenal Technique</h2>
        <p className="text-foreground/60 text-lg">Les outils et technologies que j'utilise pour donner vie aux idées.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="px-6 py-3 glass rounded-xl border border-cardBorder font-medium text-foreground/80 hover:text-foreground hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all duration-300 cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}
