import Link from 'next/link';
import { ArrowUpRight, Mail, MessageCircle, Sparkles } from 'lucide-react';

export default function ContatoPage() {
  return <main className="inner-page contact-page">
    <nav className="inner-nav"><Link className="brand" href="/"><span className="brand-mark-text">S</span><span>SALUTAR<span className="dot">.</span></span></Link><div className="nav-links"><Link href="/">Início</Link><Link href="/sobre">Sobre nós</Link><Link href="/contato">Contato</Link></div><Link className="nav-cta" href="https://wa.me/553192288682?text=Ol%C3%A1%20Salutar%2C%20quero%20iniciar%20um%20projeto." target="_blank">Vamos conversar <ArrowUpRight size={16}/></Link></nav>
    <section className="contact-page-hero"><p className="eyebrow"><Sparkles size={14}/> Fale com a Salutar</p><h1>Seu próximo<br/><em>movimento começa aqui.</em></h1><p className="inner-lead">Conte um pouco sobre o que você quer construir. A gente responde com ideias, perguntas e um caminho possível.</p><div className="contact-options"><Link className="contact-option whatsapp" href="https://wa.me/553192288682?text=Ol%C3%A1%20Salutar%2C%20quero%20iniciar%20um%20projeto." target="_blank"><MessageCircle/><span><small>WhatsApp</small>+55 31 9228-8682</span><ArrowUpRight/></Link><Link className="contact-option email" href="mailto:salutarwork@gmail.com"><Mail/><span><small>E-mail</small>salutarwork@gmail.com</span><ArrowUpRight/></Link></div></section>
    <footer className="inner-footer"><span>© 2026 Salutar</span><Link href="/">Voltar para a home <ArrowUpRight size={15}/></Link></footer>
  </main>;
}
