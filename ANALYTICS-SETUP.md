# 📊 Guia de Implementação - Google Analytics 4

## Como adicionar Google Analytics ao H3iisk Links

### Passo 1: Criar uma conta no Google Analytics

1. Acesse: https://analytics.google.com/
2. Clique em "Começar a medir"
3. Configure sua propriedade (nome: "H3iisk Links")
4. Copie o **MEASUREMENT ID** (formato: G-XXXXXXXXXX)

### Passo 2: Adicionar ao projeto

Adicione o script no `index.html`, dentro da tag `<head>`, **antes** do fechamento:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

**Substitua `G-XXXXXXXXXX` pelo seu MEASUREMENT ID real.**

### Passo 3 (Opcional): Rastrear cliques nos links

Se quiser rastrear quando os usuários clicam nos links sociais, adicione eventos personalizados.

#### Criar arquivo de tracking:

**`src/utils/analytics.ts`**

```typescript
// Função para rastrear eventos personalizados
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
};

// Eventos específicos
export const trackLinkClick = (platform: string, url: string) => {
  trackEvent("link_click", {
    platform: platform,
    url: url,
    event_category: "engagement",
    event_label: platform,
  });
};
```

#### Atualizar App.tsx:

```tsx
import { trackLinkClick } from "./utils/analytics";

function App() {
  const handleLinkClick = (platform: string, url: string) => {
    trackLinkClick(platform, url);
  };

  return (
    // ... código existente

    <a
      href="https://www.twitch.tv/h3iisk"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => handleLinkClick("Twitch", "https://www.twitch.tv/h3iisk")}
      className="..."
    >
      <TwitchIcon />
      <span>Twitch</span>
    </a>

    // Repetir para outros links...
  );
}
```

### Passo 4: Testar

1. Deploy do site
2. Acesse o site
3. Abra o Google Analytics
4. Vá em "Relatórios" > "Tempo real"
5. Você deve ver sua visita registrada

### Métricas Importantes a Acompanhar

- **Usuários ativos**: Quantas pessoas visitam
- **Taxa de engajamento**: Tempo na página
- **Eventos de clique**: Qual rede social é mais clicada
- **Dispositivos**: Mobile vs Desktop
- **Localização**: De onde vêm os visitantes
- **Origem do tráfego**: Como encontraram o site

### Privacy (Opcional mas Recomendado)

Adicione um aviso de cookies/privacidade conforme LGPD:

```html
<!-- index.html -->
<noscript>
  Este site usa Google Analytics para melhorar a experiência do usuário.
</noscript>
```

Ou implemente um banner de consentimento de cookies usando bibliotecas como:

- `react-cookie-consent`
- `cookie-consent-banner`

---

## Alternativas ao Google Analytics

### Plausible Analytics (Privacy-friendly)

- Open source
- Não precisa de banner de cookies
- Mais leve
- https://plausible.io/

### Umami

- Self-hosted
- Privacy-focused
- Open source
- https://umami.is/

### Vercel Analytics

- Se hospedar na Vercel
- Muito simples de configurar
- Privacy-friendly
- Gratuito no plano hobby

---

**Próximos passos:**

1. Configure o Google Analytics
2. Adicione o script ao `index.html`
3. (Opcional) Implemente tracking de eventos
4. Monitore as métricas regularmente
