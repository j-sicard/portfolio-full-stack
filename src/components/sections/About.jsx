import { Section } from '../ui/Section';
import { Target, MonitorSmartphone, Code2 } from 'lucide-react';

export default function About() {
  const focuses = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Rigueur & Fiabilité",
      description: "22 ans d’expérience en environnement critique m’ont appris l’importance de la qualité, de la précision et des procédures."
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
      title: "Développement Full-Stack",
      description: "Conception d’applications web modernes avec React, Java Spring Boot, Node.js et outils cloud modernes."
    },
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "Résolution de problèmes",
      description: "Habitué aux environnements exigeants, je développe des solutions maintenables, structurées et orientées utilisateur."
    }
  ];

  return (
    <Section id="about">
      <div className="space-y-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Une approche orientée qualité,<br className="hidden md:block" /><span className="text-foreground/50">maintenabilité et expérience utilisateur.</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Je conçois des applications web modernes, performantes et maintenables, avec une approche orientée qualité, expérience utilisateur et résolution de problématiques concrètes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focuses.map((focus, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {focus.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{focus.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {focus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
