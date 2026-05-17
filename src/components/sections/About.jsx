import { Section } from '../ui/Section';
import { Target, MonitorSmartphone, Code2 } from 'lucide-react';

export default function About() {
  const focuses = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Rigueur & Fiabilité",
      description: "22 ans d’expérience en environnement critique m’ont apporté rigueur, fiabilité et exigence dans la conception de solutions techniques.."
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
      title: "Développement Full-Stack",
      description: "Développement d’applications full-stack avec React, Spring Boot, Node.js et technologies cloud AWS."
    },
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "Connaissance métier",
      description: "Mon expérience dans le secteur de l’énergie me permet de comprendre les besoins terrain, les contraintes techniques et les attentes clients des environnements industriels exigeants."
    }
  ];

  return (
    <Section id="about">
      <div className="space-y-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Une approche orientée robustesse,<br className="hidden md:block" /><span className="text-foreground/50">qualité logicielle et expérience utilisateur.</span></h2>
          <div className="text-lg text-foreground/70 max-w-2xl leading-relaxed space-y-4">
            <p>
              Après plus de 20 ans dans le secteur de l’énergie
              et des environnements techniques exigeants,
              je me suis reconverti dans le développement logiciel
              afin de concevoir des applications web adaptées
              aux besoins réels du terrain.
            </p>
            <p>
              Mon expérience dans le domaine de l’énergie me permet
              de comprendre les enjeux métiers, les contraintes techniques,
              les attentes clients et les exigences de qualité propres
              aux secteurs industriels et critiques.
            </p>
          </div>
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
