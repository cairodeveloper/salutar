import { Quote } from 'lucide-react';

// TODO: substituir por avaliações reais dos clientes.
const reviews = [
  { name: 'Mariana Alves', role: 'Clínica de psicologia', text: 'O site transmitiu exatamente o acolhimento que queríamos. Os contatos novos aumentaram já no primeiro mês.', size: 'l', color: 'electric' },
  { name: 'Rafael Costa', role: 'Pizzaria', text: 'Equipe atenta, rápida e criativa. Entenderam o negócio de verdade.', size: 'm', color: 'lilac' },
  { name: 'Camila Duarte', role: 'Imobiliária', text: 'As campanhas trouxeram clientes mais qualificados e o custo por contato caiu bastante.', size: 'l', color: 'orange' },
  { name: 'Bruno Menezes', role: 'E-commerce', text: 'Comunicação clara e entregas sempre no prazo.', size: 's', color: 'aqua' },
  { name: 'Letícia Ramos', role: 'Estúdio de estética', text: 'Nosso Instagram ganhou identidade e passou a gerar agendamentos toda semana. Recomendo muito!', size: 'l', color: 'gold' },
  { name: 'Thiago Pires', role: 'Consultório', text: 'Profissionais, próximos e cheios de ideias.', size: 's', color: 'electric' },
  { name: 'Fernanda Lima', role: 'Restaurante', text: 'Os vídeos e fotos elevaram a percepção de valor da nossa marca. Resultado acima do esperado.', size: 'm', color: 'aqua' },
  { name: 'Gustavo Rocha', role: 'Escritório de advocacia', text: 'Passamos a ser encontrados no Google por quem realmente precisa de nós.', size: 'm', color: 'lilac' },
] as const;

const rows = [0, 3, 5];
const durations = [70, 85, 75];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="avaliacoes" aria-labelledby="testimonials-title">
      <div className="section-intro">
        <p className="eyebrow dark"><span>04</span> Avaliações</p>
        <h2 id="testimonials-title">Quem já caminhou<br />com a gente <em>conta.</em></h2>
      </div>
      <div className="brick-wall">
        {rows.map((offset, r) => {
          const list = [...reviews.slice(offset), ...reviews.slice(0, offset)];
          return (
            <div className="brick-row" data-reverse={r % 2 === 1} style={{ animationDuration: `${durations[r]}s` }} key={r}>
              {[0, 1].map((copy) => list.map((review) => (
                <figure className={`brick brick-${review.size} brick-${review.color}`} key={`${copy}-${review.name}`} aria-hidden={copy === 1}>
                  <Quote size={22} aria-hidden="true" />
                  <blockquote>{review.text}</blockquote>
                  <figcaption><b>{review.name}</b><span>{review.role}</span></figcaption>
                </figure>
              )))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
