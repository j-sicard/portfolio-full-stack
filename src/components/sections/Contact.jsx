import { Section } from '../ui/Section';
import { Mail, Download } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/Icons';

export default function Contact() {
  return (
    <Section id="contact" className="pb-10 md:pb-16 mt-20 border-t border-cardBorder/50">
      <div className="text-center max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Restons en contact</h2>
        <p className="text-xl text-foreground/70 pb-4">
          Concevons ensemble des applications web modernes, robustes et adaptées aux besoins réels des environnements techniques.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            href="mailto:srdjulien@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:scale-105 transition-transform w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Me contacter
          </a>
          <a 
            href="#"
            className="flex items-center gap-2 px-8 py-4 glass border border-cardBorder rounded-full hover:bg-cardBorder transition-colors w-full sm:w-auto justify-center"
          >
            <Download className="w-5 h-5" />
            Télécharger CV
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-12 text-foreground/60">
          <a href="https://www.linkedin.com/in/srdjulien/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors p-2 glass rounded-full hover:bg-card">
            <LinkedinIcon className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/j-sicard" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors p-2 glass rounded-full hover:bg-card">
            <GithubIcon className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>

        <p className="text-sm text-foreground/40 pt-16">
          © {new Date().getFullYear()} Julien Sicard - Développeur Frontend. Conçu & développé avec passion.
        </p>
      </div>
    </Section>
  );
}
