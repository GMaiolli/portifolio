export const profile = {
  name: 'Gabriel Maiolli',
  fullName: 'Gabriel Maiolli de Oliveira',
  headline: 'Full Stack Developer (Go & React) | AI Engineering | System Design & Automation | Open to Work & Freelance Projects',
  location: 'Maringá, Paraná · Brasil',
  email: 'maiolligabriel@gmail.com',
  whatsapp: 'https://wa.me/5544991529100',
  linkedin: 'https://www.linkedin.com/in/gabriel-maiolli-de-oliveira/',
  // O endereço do GitHub será publicado após confirmação do proprietário.
  github: null as string | null,
};

export type Experience = { company: string; role: string; period: string; context: string; highlights: string[]; stack?: string[] };
export const experience: Experience[] = [
  {
    company: 'DB1 Group · WiseShip', role: 'Software Developer Trainee', period: 'jun — nov 2026',
    context: 'Plataforma TMS para governança logística no e-commerce.',
    highlights: ['Desenvolvimento e evolução de funcionalidades Full Stack com Go e React.', 'Participação em iniciativas de agentes inteligentes, automação e especificações técnicas.', 'Colaboração em fluxos de negócio e integrações do produto.'],
    stack: ['Go', 'React', 'JavaScript', 'IA aplicada'],
  },
  {
    company: 'DB1 Global Software', role: 'Software Developer Trainee · Full Stack', period: 'mar — jun 2026',
    context: 'Sustentação e evolução de sistemas corporativos com colaboração de arquitetos de software.',
    highlights: ['Desenvolvimento Full Stack e resolução de problemas técnicos.', 'Contato com sistemas legados e arquiteturas baseadas em microsserviços.'],
    stack: ['C# / .NET', 'React', 'TypeScript', 'Node.js'],
  },
  {
    company: 'B5S Tecnologia', role: 'Estagiário', period: 'out 2025 — fev 2026',
    context: 'Estágio presencial, meio período, em contexto de automação e inteligência artificial.',
    highlights: [],
  },
];

export const skillGroups = [
  { title: 'Uso profissional', description: 'Tecnologias e ambientes com experiência prática de trabalho.', items: ['Go', 'React', 'JavaScript', 'TypeScript', 'C# / .NET', 'Node.js', 'APIs', 'Git', 'Linux'] },
  { title: 'Pesquisa e prática', description: 'Ferramentas e temas aplicados em pesquisa ou projetos de estudo.', items: ['Python', 'SQL / MySQL', 'Machine Learning', 'CNN', 'Visão Computacional', 'Google Earth Engine'] },
  { title: 'Interesses em evolução', description: 'Áreas que sigo estudando e aprofundando.', items: ['AI Engineering', 'Arquitetura de Software', 'System Design', 'Agentes inteligentes', 'Automação'] },
];

export const services = [
  { number: '01', title: 'Aplicações web', description: 'Interfaces, painéis e funcionalidades personalizadas para produtos digitais.' },
  { number: '02', title: 'APIs e integrações', description: 'Serviços, regras de negócio e conexão entre sistemas e plataformas.' },
  { number: '03', title: 'Automação', description: 'Scripts e fluxos para reduzir trabalho repetitivo e integrar processos.' },
  { number: '04', title: 'Soluções com IA', description: 'Prototipação de recursos inteligentes, agentes e automações com IA.' },
  { number: '05', title: 'Evolução de software', description: 'Correções, melhorias e novas funcionalidades em aplicações existentes.' },
];

export type Project = {
  slug: string; name: string; status: 'Publicado' | 'Em desenvolvimento' | 'Ideia';
  description: string; problem: string; technologies: string[]; participation: string;
  decisions: string[]; challenges: string[]; results: string[]; images: string[];
  demoUrl: string | null; repositoryUrl: string | null; publicationUrl: string | null;
};

export const projects: Project[] = [{
  slug: 'pesquisa-ndvi-cnn', name: 'Monitoramento da saúde da vegetação com NDVI e CNN', status: 'Publicado',
  description: 'Pesquisa científica sobre classificação de cobertura vegetal com índices espectrais de imagens Sentinel-2, processamento automatizado e redes neurais convolucionais.',
  problem: 'Investigar formas de apoiar a análise de cobertura e saúde vegetal em diferentes contextos ambientais.',
  technologies: ['Sentinel-2', 'Google Earth Engine', 'NDVI', 'CNN', 'Sensoriamento remoto'],
  participation: 'Coautor da pesquisa publicada na Revista Sodebras.',
  decisions: ['Uso de índices espectrais derivados de imagens Sentinel-2.', 'Processamento automatizado com Google Earth Engine e classificação com CNN.'],
  challenges: ['Heterogeneidade de paisagens', 'Variabilidade temporal', 'Interpretação dos índices em diferentes biomas'],
  results: ['Artigo publicado em 16 de dezembro de 2025 na Revista Sodebras.', 'DOI: 10.29367/ze642n35'],
  images: [], demoUrl: null, repositoryUrl: null,
  publicationUrl: 'https://revista.sodebras.com.br/index.php/revista/article/view/147',
}];
