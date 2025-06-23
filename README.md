# CyberNest Website

Un sito web moderno e professionale per CyberNest, azienda specializzata in soluzioni IT integrate.

## Funzionalità

- **Design Responsive**: Ottimizzato per tutti i dispositivi
- **Animazioni Fluide**: Utilizzando Framer Motion per un'esperienza utente coinvolgente
- **Form di Contatto Funzionale**: Invio email reale tramite Supabase Edge Functions
- **SEO Ottimizzato**: Meta tag e struttura ottimizzati per i motori di ricerca
- **Conformità GDPR**: Informativa privacy integrata nel form di contatto

## Tecnologie Utilizzate

- **React 18** con TypeScript
- **Vite** per il build tool
- **Tailwind CSS** per lo styling
- **Framer Motion** per le animazioni
- **React Router** per la navigazione
- **Supabase** per il backend e l'invio email
- **Lucide React** per le icone

## Setup del Progetto

### 1. Installazione Dipendenze

```bash
npm install
```

### 2. Configurazione Supabase

1. Crea un progetto su [Supabase](https://supabase.com)
2. Vai su "Connect to Supabase" nel menu in alto a destra
3. Segui le istruzioni per configurare il progetto

### 3. Configurazione Servizio Email

Per abilitare l'invio delle email, devi configurare un servizio di email transazionale:

1. **Registrati su Resend**: Vai su [resend.com](https://resend.com) e crea un account
2. **Ottieni la API Key**: Dalla dashboard di Resend, crea una nuova API key
3. **Configura il dominio**: Aggiungi e verifica il dominio `cybernest.it` su Resend
4. **Imposta le variabili d'ambiente**: Nel tuo progetto Supabase, vai su Settings > Edge Functions e aggiungi:
   - `RESEND_API_KEY`: La tua API key di Resend

### 4. Deploy della Edge Function

La Edge Function per l'invio email è già configurata in `supabase/functions/send-contact-email/`. 
Verrà automaticamente deployata quando configuri Supabase.

### 5. Avvio del Progetto

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

## Struttura del Progetto

```
src/
├── components/          # Componenti riutilizzabili
├── pages/              # Pagine dell'applicazione
├── layout/             # Layout principale
├── lib/                # Configurazioni e utility
└── index.css           # Stili globali

supabase/
└── functions/
    └── send-contact-email/  # Edge Function per invio email
```

## Form di Contatto

Il form di contatto include:

- **Validazione lato client**: Controlli in tempo reale
- **Invio email reale**: Tramite Supabase Edge Functions e Resend
- **Email di conferma**: L'utente riceve una conferma automatica
- **Conformità GDPR**: Checkbox obbligatoria per il consenso privacy
- **Gestione errori**: Feedback chiaro in caso di problemi

## Personalizzazione

### Colori del Brand

I colori sono definiti in `tailwind.config.js`:

```javascript
colors: {
  'primary-dark': '#1c002c',
  'primary': '#2e005f',
  'accent': '#a83cf0',
  'accent-bright': '#c000ff',
}
```

### Contenuti

Tutti i contenuti sono facilmente modificabili nei file delle pagine in `src/pages/`.

## Build per Produzione

```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`.

## Supporto

Per supporto tecnico o domande, contatta il team di sviluppo.