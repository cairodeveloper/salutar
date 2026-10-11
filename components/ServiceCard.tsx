'use client';

import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import { useState } from 'react';

type ServiceCardProps = {
  number: string;
  title: string;
  text: string;
  details: string;
  color: string;
  Icon: LucideIcon;
};

export default function ServiceCard({ number, title, text, details, color, Icon }: ServiceCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`sv-card ${color}${open ? ' is-open' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!open); } }}
    >
      <div className="sv-top"><span>{number}</span><Icon size={30} /></div>
      <div className="sv-body">
        <div className="sv-text"><p>{text}</p><p>{details}</p></div>
        <small>{open ? 'Clique para fechar' : 'Clique para descobrir'}</small>
        <div className="sv-bottom">
          <h3>{title}</h3>
          <a href="/contato" aria-label={`Conhecer ${title}`} onClick={(e) => e.stopPropagation()}><ArrowUpRight size={22} /></a>
        </div>
      </div>
    </article>
  );
}
