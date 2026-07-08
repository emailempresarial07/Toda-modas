# Toda Modas — Site institucional

Site institucional moderno, responsivo e otimizado para SEO da loja de moda
feminina **Toda Modas**, localizada em Cidade São Mateus, São Paulo - SP.

Construído com **HTML5, CSS3 e JavaScript puro** (sem dependências de build),
para carregamento rápido e fácil hospedagem em qualquer serviço estático
(GitHub Pages, Netlify, Vercel, hospedagem tradicional etc.).

## ✨ Recursos

- Design premium com paleta neutra (branco, preto, cinza) e detalhes em dourado/rosa
- Totalmente responsivo (desktop, tablet e celular)
- SEO otimizado: meta tags, Open Graph, dados estruturados (Schema.org `ClothingStore`)
- Botão flutuante do WhatsApp
- Animações suaves ao rolar a página (com respeito a `prefers-reduced-motion`)
- Menu mobile, mapa integrado do Google Maps e botão "Traçar rota"
- Formulário de contato que encaminha a mensagem direto para o WhatsApp
- Páginas de Política de Privacidade e Termos de Uso

## 📂 Estrutura

```
index.html                    Página principal (Hero, Sobre, Categorias,
                              Diferenciais, Galeria, Avaliações, Localização, Contato)
styles.css                    Estilos do site
script.js                     Interações (menu, scroll, formulário → WhatsApp)
politica-de-privacidade.html  Página institucional
termos-de-uso.html            Página institucional
legal.css                     Estilos das páginas institucionais
robots.txt / sitemap.xml      Arquivos de SEO
```

## 🚀 Como visualizar

Basta abrir o arquivo `index.html` no navegador. Para simular um servidor local:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## 🛠️ Personalização

- **Imagens:** as fotos usam URLs de demonstração do Unsplash. Substitua pelos
  arquivos reais da loja (crie uma pasta `img/` e ajuste os caminhos em
  `index.html` e nas propriedades `--img` / `background` do `styles.css`).
- **WhatsApp:** o número está definido como `551126912472`. Para alterar, atualize
  os links `wa.me/...` no HTML e a constante `WHATSAPP_NUMBER` em `script.js`.
- **Domínio:** ajuste as URLs `https://www.todamodas.com.br/` nas meta tags,
  `robots.txt` e `sitemap.xml` para o domínio real.
- **Redes sociais:** os ícones de Instagram/Facebook estão prontos no rodapé/contato
  ("em breve") — basta inserir os links quando disponíveis.

## 📍 Dados da loja

- **Segmento:** moda feminina
- **Endereço:** Av. Mateo Bei, 2717 - Cidade São Mateus, São Paulo - SP, CEP 03949-012
- **Telefone / WhatsApp:** (11) 2691-2472
- **Horário:** aberto diariamente a partir das 10h
- **Avaliação:** 4,2 ⭐ (mais de 150 avaliações)
