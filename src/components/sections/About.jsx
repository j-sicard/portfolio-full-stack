import { Section } from '../ui/Section';
import { Target, MonitorSmartphone, Code2 } from 'lucide-react';

export default function About() {
  const focuses = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Mentalité UX/UI",
      description: "J'aborde le développement avec une philosophie centrée sur l'utilisateur, en veillant à ce que chaque interface soit intuitive, accessible et pertinente."
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
      title: "Design Réactif",
      description: "Création de mises en page qui s'adaptent de manière fluide à n'importe quel appareil, en privilégiant une approche mobile-first sans sacrifier l'élégance sur ordinateur."
    },
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "Expérience Client Réelle",
      description: "Traduction des besoins commerciaux en solutions numériques parfaites au pixel près, en mettant l'accent sur une communication solide et le souci du détail."
    }
  ];

  return (
    <Section id="about">
      <div className="space-y-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Concentré sur <br className="hidden md:block" /><span className="text-foreground/50">l'expérience utilisateur.</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Je suis un développeur Frontend dédié à la création d'applications web performantes et visuellement frappantes. Mon travail se définit par une obsession pour le code propre, l'esthétique moderne et la résolution de problèmes réels pour les clients.
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
