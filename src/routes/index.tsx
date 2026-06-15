import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart, Shield, Sparkles, Users, MessageCircle, Mail, Phone,
  Clock, MapPin, Video, Home, GraduationCap, Award, ChevronDown, Menu, X,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LocationMap } from "@/components/site/LocationMap";
import heroImg from "@/assets/mariana-hero.jpg";
import aboutImg from "@/assets/mariana-about.jpg";
import officeImg from "@/assets/office.jpg";

const WHATSAPP = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta";
const EMAIL = "mailto:contato@marianapsicologa.com.br";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mariana Oliveira — Psicóloga Clínica em São Paulo" },
      { name: "description", content: "Psicoterapia individual presencial e online em Vila Mariana, SP. Espaço acolhedor para ansiedade, autoestima e relacionamentos. CRP 06/234567." },
      { property: "og:title", content: "Mariana Oliveira — Psicóloga Clínica em São Paulo" },
      { property: "og:description", content: "Psicoterapia individual presencial e online em Vila Mariana, SP. Um espaço seguro para você se reencontrar." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Psychologist",
        name: "Mariana Oliveira Santos",
        description: "Psicóloga Clínica — CRP 06/234567",
        image: heroImg,
        telephone: "+55 11 99999-9999",
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Maj. Maragliano, 241",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          postalCode: "04017-030",
          addressCountry: "BR",
        },
        geo: { "@type": "GeoCoordinates", latitude: -23.5897, longitude: -46.6402 },
        areaServed: "São Paulo",
        priceRange: "$$",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Approach />
        <ForWhom />
        <Services />
        <Testimonials />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- NAVBAR ---------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#abordagem", label: "Abordagem" },
    { href: "#servicos", label: "Serviços" },
    { href: "#faq", label: "Perguntas" },
    { href: "#localizacao", label: "Localização" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-lg tracking-tight text-sage-deep">
          Mariana Oliveira <span className="text-muted-foreground">· Psicóloga</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/75 transition-colors hover:text-sage-deep">
              {l.label}
            </a>
          ))}
          <Button asChild className="bg-sage text-primary-foreground hover:bg-sage-deep">
            <a href={WHATSAPP} target="_blank" rel="noopener">Agendar consulta</a>
          </Button>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-foreground/80">
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-sage text-primary-foreground hover:bg-sage-deep">
              <a href={WHATSAPP} target="_blank" rel="noopener">Agendar consulta</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="bg-gradient-warm">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-1.5 text-xs uppercase tracking-wider text-sage-deep">
            <Sparkles className="h-3.5 w-3.5" /> CRP 06/234567
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-sage-deep md:text-6xl">
            Um espaço seguro<br />para você cuidar de si.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Psicoterapia humana e baseada em evidências, para quem busca clareza, equilíbrio e novos caminhos. Atendimento presencial em Vila Mariana e online para todo o Brasil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-sage text-primary-foreground hover:bg-sage-deep">
              <a href={WHATSAPP} target="_blank" rel="noopener">Agendar primeira conversa</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-sage text-sage-deep hover:bg-sand">
              <a href="#sobre">Conhecer a Mariana</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Resposta em até 24h · Sigilo absoluto</p>
        </div>
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="absolute -inset-4 rounded-[2rem] bg-sage/10 blur-2xl" />
          <img
            src={heroImg}
            alt="Mariana Oliveira, psicóloga clínica, em retrato acolhedor"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-warm"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <img src={aboutImg} alt="Mariana em seu consultório" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft" loading="lazy" />
        <div>
          <span className="text-xs uppercase tracking-widest text-clay">Sobre</span>
          <h2 className="mt-3 font-serif text-3xl text-sage-deep md:text-4xl">Acolhimento, escuta e ciência caminhando juntos</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-foreground/80">
            <p>
              Sou Mariana Oliveira Santos, psicóloga clínica há mais de dez anos. Acredito que o processo terapêutico é uma construção a dois — um espaço onde você pode se mostrar inteiro, sem julgamento, e descobrir novas formas de se relacionar consigo e com o mundo.
            </p>
            <p>
              Minha prática integra a Terapia Cognitivo-Comportamental com uma escuta sensível e personalizada, respeitando o seu tempo e a sua história. O objetivo é simples: caminhar ao seu lado em direção a uma vida mais leve e significativa.
            </p>
          </div>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-start gap-3"><GraduationCap className="mt-0.5 h-5 w-5 text-sage" /><span><strong>Graduação</strong> em Psicologia — PUC-SP</span></li>
            <li className="flex items-start gap-3"><Award className="mt-0.5 h-5 w-5 text-sage" /><span><strong>Especialização</strong> em Terapia Cognitivo-Comportamental — Instituto Beck</span></li>
            <li className="flex items-start gap-3"><Award className="mt-0.5 h-5 w-5 text-sage" /><span><strong>Formação</strong> em Mindfulness e regulação emocional</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- APPROACH ---------- */
function Approach() {
  const items = [
    { icon: Heart, title: "Escuta acolhedora", text: "Um espaço sem julgamentos, onde sua história é recebida com cuidado e respeito." },
    { icon: Sparkles, title: "Baseado em evidências", text: "Abordagem cognitivo-comportamental integrada a práticas contemporâneas de regulação emocional." },
    { icon: Shield, title: "Sigilo absoluto", text: "Todo o conteúdo das sessões é confidencial, conforme o Código de Ética do Psicólogo." },
    { icon: Users, title: "Plano personalizado", text: "Cada processo é único — construímos juntos um caminho que faz sentido para você." },
  ];
  return (
    <section id="abordagem" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-clay">Abordagem</span>
          <h2 className="mt-3 font-serif text-3xl text-sage-deep md:text-4xl">Como acontece a terapia</h2>
          <p className="mt-4 text-muted-foreground">Um processo construído ao seu tempo, com método, presença e cuidado em cada encontro.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-2xl bg-background p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-warm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sage/10 text-sage">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl text-sage-deep">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOR WHOM ---------- */
function ForWhom() {
  const topics = [
    "Ansiedade e estresse", "Depressão e tristeza profunda", "Autoestima e autoconhecimento",
    "Relacionamentos afetivos", "Luto e perdas", "Transições de vida e carreira",
    "Burnout e esgotamento", "Crises de pânico", "Maternidade e parentalidade",
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-clay">Para quem é</span>
          <h2 className="mt-3 font-serif text-3xl text-sage-deep md:text-4xl">Quem chega até aqui</h2>
          <p className="mt-4 text-muted-foreground">A terapia pode ser um espaço de cuidado em diferentes momentos da vida. Alguns dos temas que acompanho:</p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {topics.map((t) => (
            <div key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-sage/40 hover:bg-sand">
              <span className="h-2 w-2 rounded-full bg-sage" />
              <span className="text-sm text-foreground/85">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const items = [
    { icon: Home, title: "Sessão presencial", desc: "Consultório acolhedor em Vila Mariana, próximo ao metrô. 50 minutos de atendimento individual.", tag: "Vila Mariana, SP" },
    { icon: Video, title: "Sessão online", desc: "Atendimento por vídeo com a mesma qualidade e sigilo do presencial. Para todo o Brasil.", tag: "Google Meet" },
  ];
  return (
    <section id="servicos" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-clay">Modalidades</span>
          <h2 className="mt-3 font-serif text-3xl text-sage-deep md:text-4xl">Atendimento que se adapta a você</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map(({ icon: Icon, title, desc, tag }) => (
            <div key={title} className="rounded-2xl bg-background p-8 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-sage-deep">{title}</h3>
                  <span className="text-xs uppercase tracking-wider text-clay">{tag}</span>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-foreground/80">{desc}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" /> 50 minutos · semanal ou quinzenal
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">Valores e disponibilidade enviados em conversa inicial · Recibo para reembolso disponível</p>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { quote: "Encontrei na Mariana um espaço seguro pra falar de coisas que nunca tinha conseguido colocar em palavras. A escuta dela é rara.", author: "A. M., 32 anos" },
    { quote: "Depois de meses de ansiedade, finalmente entendi o que estava sentindo. O processo foi gradual, respeitoso e transformador.", author: "R. P., 28 anos" },
    { quote: "A terapia online com a Mariana funciona como se estivéssemos na mesma sala. Recomendo de coração.", author: "C. L., 41 anos" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-clay">Depoimentos</span>
          <h2 className="mt-3 font-serif text-3xl text-sage-deep md:text-4xl">O que dizem quem caminhou comigo</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl bg-card p-7 shadow-soft">
              <div className="font-serif text-3xl leading-none text-sage/40">"</div>
              <blockquote className="mt-2 leading-relaxed text-foreground/85">{t.quote}</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const qa = [
    { q: "Como é a primeira sessão?", a: "Um encontro de escuta para entender o que te trouxe à terapia, suas expectativas e dúvidas. Sem compromisso de seguir — você decide no seu tempo." },
    { q: "As sessões são confidenciais?", a: "Sim, totalmente. O sigilo é um princípio fundamental do Código de Ética do Psicólogo e nada do que conversamos sai daquele espaço." },
    { q: "Com que frequência acontecem as sessões?", a: "O mais comum é semanal, mas podemos ajustar conforme sua demanda e disponibilidade — quinzenal também é uma possibilidade." },
    { q: "Terapia online funciona de verdade?", a: "Sim. Diversos estudos demonstram que a psicoterapia online tem eficácia equivalente à presencial, com a vantagem de mais flexibilidade e conforto." },
    { q: "Atende por plano de saúde?", a: "O atendimento é particular. Emito recibo com todos os dados necessários para você solicitar reembolso ao seu plano." },
    { q: "Por quanto tempo dura o processo?", a: "Não há um prazo fixo. Cada pessoa caminha no seu ritmo — alguns processos são mais breves, outros se estendem por mais tempo. Conversamos sobre isso ao longo do percurso." },
  ];
  return (
    <section id="faq" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-clay">Perguntas frequentes</span>
          <h2 className="mt-3 font-serif text-3xl text-sage-deep md:text-4xl">Tudo bem ter dúvidas</h2>
          <p className="mt-4 text-muted-foreground">Algumas das perguntas que costumo receber antes da primeira conversa.</p>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {qa.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-background px-6 [&[data-state=open]]:shadow-soft">
              <AccordionTrigger className="py-5 text-left font-serif text-lg text-sage-deep hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-foreground/80">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- LOCATION ---------- */
function Location() {
  return (
    <section id="localizacao" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-clay">Onde estou</span>
          <h2 className="mt-3 font-serif text-3xl text-sage-deep md:text-4xl">Vila Mariana, São Paulo</h2>
          <p className="mt-4 text-muted-foreground">Consultório próximo às estações Vila Mariana e Ana Rosa do metrô, em um espaço pensado para te receber com tranquilidade.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl bg-card p-6 shadow-soft">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-sage" />
                <div>
                  <p className="font-medium text-foreground">Endereço</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">R. Maj. Maragliano, 241<br />Vila Mariana — São Paulo, SP<br />04017-030</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-soft">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-sage" />
                <div>
                  <p className="font-medium text-foreground">Horários</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Segunda a sexta · 8h às 20h<br />Sábados · 9h às 13h</p>
                </div>
              </div>
            </div>
            <img src={officeImg} alt="Consultório com plantas e iluminação natural" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" loading="lazy" />
          </div>
          <div className="md:col-span-3">
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section id="contato" className="bg-gradient-sage py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl md:text-5xl">Dê o primeiro passo</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/85">
          Talvez essa seja a conversa que você precisava. Estou aqui — sem pressa, sem julgamento.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-background text-sage-deep hover:bg-sand">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
            <a href={EMAIL} className="inline-flex items-center gap-2">
              <Mail className="h-5 w-5" /> Enviar e-mail
            </a>
          </Button>
        </div>
        <p className="mt-8 text-sm text-primary-foreground/70">Resposta em até 24 horas em dias úteis</p>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-lg text-sage-deep">Mariana Oliveira Santos</p>
            <p className="mt-1 text-sm text-muted-foreground">Psicóloga Clínica · CRP 06/234567</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-sage-deep"><Phone className="h-4 w-4" /> WhatsApp</a>
            <a href={EMAIL} className="inline-flex items-center gap-2 hover:text-sage-deep"><Mail className="h-4 w-4" /> E-mail</a>
            <a href="#localizacao" className="inline-flex items-center gap-2 hover:text-sage-deep"><MapPin className="h-4 w-4" /> Vila Mariana, SP</a>
          </div>
        </div>
        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          © {new Date().getFullYear()} Mariana Oliveira Santos. Todos os direitos reservados. Este site tem caráter informativo e não substitui consulta profissional. Em situações de emergência, ligue para o CVV (188) ou procure a unidade de saúde mais próxima.
        </p>
      </div>
    </footer>
  );
}
