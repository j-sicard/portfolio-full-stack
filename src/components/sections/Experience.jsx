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
              <h3 className="font-bold text-xl mb-1">Sites Web Prêts pour la Production</h3>
              <p className="text-sm text-foreground/50 mb-3">Concentration sur la stabilité et l'évolutivité</p>
              <p className="text-foreground/70 leading-relaxed">
                Travail direct avec les clients pour définir les besoins, établir des bases techniques solides et livrer des sites web prêts pour un trafic réel.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary transition-colors">
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border-cardBorder transition-transform hover:-translate-y-1">
              <h3 className="font-bold text-xl mb-1">Interfaces Centrées sur l'Utilisateur</h3>
              <p className="text-sm text-foreground/50 mb-3">Conception axée sur l'empathie</p>
              <p className="text-foreground/70 leading-relaxed">
                Chaque décision de conception découle de la compréhension de l'utilisateur final. Résoudre les problèmes fondamentaux des clients grâce à des interfaces accessibles, lisibles et sans friction.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary transition-colors">
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border-cardBorder transition-transform hover:-translate-y-1">
              <h3 className="font-bold text-xl mb-1">Souci Obsessionnel du Détail</h3>
              <p className="text-sm text-foreground/50 mb-3">Les micro-interactions comptent</p>
              <p className="text-foreground/70 leading-relaxed">
                Une sensation premium réside dans les détails : transitions fluides, espacement délibéré, hiérarchie typographique et animations performantes qui ravissent les utilisateurs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
