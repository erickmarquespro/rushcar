# Notas de arquitetura — Rush Car

Registro de decisões e planos discutidos, para não se perder entre sessões/dispositivos.

## Arquitetura de domínio (planejada, ainda não implementada)

**Ideia central (definida em conversa com o cliente):**

- **Domínio principal** (`rushsolucoesautomotivas.com`): marca + autoridade +
  ponto de escolha da unidade. Objetivo: apresentar a Rush Car, gerar
  confiança, e direcionar o visitante para a unidade certa. É a Home
  institucional (o que já existe hoje em `index.html`).

- **Subdomínio da matriz** (ex.: `kobrasol.rushsolucoesautomotivas.com`):
  página de conversão local da unidade Kobrasol.

- **Subdomínio da filial** (ex.: `barreiros.rushsolucoesautomotivas.com`):
  página de conversão local da unidade Barreiros.

- Os dois subdomínios compartilham praticamente a mesma arquitetura/template,
  mas com conteúdo específico de cada unidade — não pode ser copy/paste puro,
  vale personalizar elementos por localização (fotos, equipe, endereço,
  horário, talvez pequenas variações de texto/tom).

- Objetivo dos subdomínios: fazer o visitante/cliente/corretor entrar em
  contato com a unidade desejada (conversão local), diferente do domínio
  principal que é mais institucional.

**Status atual do código:** as páginas de unidade ainda vivem como subpastas
(`/unidades/kobrasol.html`), não como subdomínios de verdade. Migrar para
subdomínio real depende de: (1) ter hospedagem ativa com controle de DNS
(hoje só o domínio foi comprado, sem hospedagem — ver seção abaixo), e
(2) decidir a estrutura técnica (pode continuar sendo o mesmo repositório/
mesmos arquivos servidos sob hosts diferentes, ou pastas separadas por
subdomínio).

**Considerações técnicas a discutir quando formos implementar:**
- Subdomínio vs subpasta tem implicações de SEO (motores de busca às vezes
  tratam subdomínio como propriedade distinta, subpasta mantém autoridade
  do domínio principal mais unificada) — vale pesar isso antes de migrar.
- Precisa configurar registro DNS tipo `CNAME`/`A` pra cada subdomínio
  apontando pro host.

## Situação de hospedagem/domínio (contexto)

- Domínio `rushsolucoesautomotivas.com` comprado na HostGator.
- **Hospedagem ainda NÃO contratada** (só o domínio existe até o momento
  desta nota) — sem hospedagem ativa não dá pra configurar subdomínio nem
  publicar nada de verdade lá.
- Cliente pediu prévia rápida via Artifact enquanto decide sobre hospedagem.

## Dados reais já coletados

- CNPJ Kobrasol (matriz): 45.916.827/0001-88
- Unidade Kobrasol: R. Lídio Antônio de Matos, 162 — Kobrasol, São José - SC, 88102-460
- Unidade Barreiros: Av. Leoberto Leal, 250 — Barreiros, São José - SC, 88117-000 (CNPJ da filial ainda pendente)
- Horário (ambas, por ora): Seg. a sex., 08h–12h e 13h30–18h · Sáb./dom. fechado
- Equipe Kobrasol: Jhan Felau (recepção, WhatsApp (48) 9 9104-3983, tel (48) 3058-1756),
  Erick Marques (perito, WhatsApp (48) 9 9141-3209), Willian Gomes (perito, WhatsApp (48) 9 9141-6365)
- Equipe/CNPJ da Barreiros: ainda não coletados — cliente disse que avisa quando quiser fazer essa unidade
- E-mail: contato@rushcar.com.br
- Instagram: @rushsolucoesautomotivas (sem Facebook)
- Avaliações do Google: já transcritas 6 reais no carrossel de depoimentos
- Seguradoras/associações: lista completa já aplicada com logos reais no marquee (ver `assets/img/seguradoras/`)
