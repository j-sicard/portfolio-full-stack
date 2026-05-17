import { Section } from '../ui/Section';

export default function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center">Expérience & Mentalité</h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cardBorder before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg shadow-primary/20">
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border-cardBorder transition-transform hover:-translate-y-1">
              <h3 className="font-bold text-xl mb-1">Secteur de l’Énergie & Environnements Critiques</h3>
              <p className="text-sm text-foreground/50 mb-3">22 ans d’expérience terrain</p>
              <p className="text-foreground/70 leading-relaxed">
                Expérience acquise dans des environnements techniques exigeants où la rigueur, la sécurité et la fiabilité sont essentielles au bon fonctionnement des opérations.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary transition-colors">
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border-cardBorder transition-transform hover:-translate-y-1">
              <h3 className="font-bold text-xl mb-1">Compréhension Métier & Besoins Clients</h3>
              <p className="text-sm text-foreground/50 mb-3">Vision terrain et approche utilisateur</p>
              <p className="text-foreground/70 leading-relaxed">
                Mon parcours dans le secteur de l’énergie me permet de comprendre les contraintes terrain, les besoins utilisateurs et les attentes métiers des environnements techniques et industriels.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary transition-colors">
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border-cardBorder transition-transform hover:-translate-y-1">
              <h3 className="font-bold text-xl mb-1">Développement Full-Stack Moderne</h3>
              <p className="text-sm text-foreground/50 mb-3">Applications robustes et maintenables</p>
              <p className="text-foreground/70 leading-relaxed">
                Conception d’applications web modernes avec React, Spring Boot, Node.js et technologies cloud AWS, avec une attention particulière portée à la qualité logicielle et à la maintenabilité.
              </p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
