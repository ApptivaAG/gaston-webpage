import type {
  CallToAction,
  FooterGroup,
  I18nFooter,
  Language,
  MetaData,
  Product,
} from './types'

const productDe: Product = {
  description: 'Self-Order|Pay für Gastro',
  claim: 'Gastgeben auf dem nächsten Level.',
  name: 'Gaston',
}
const productEn: Product = {
  description: 'Self-Order|Pay for Gastronomy',
  claim: 'Hospitality on the next level.',
  name: 'Gaston',
}
export const metaData: MetaData = {
  de: productDe,
  en: productEn,
}

export const callToActionLinksDe: CallToAction[] = [
  { href: '/de/preise/', text: 'Gaston engagieren' },
  { href: '/de/demo/', text: 'Demo starten' },
]
export const callToActionLinksEn: CallToAction[] = [
  { href: '/en/contact/', text: 'Order now' },
  { href: '/en/demo/', text: 'Start demo' },
]

export const generalTitle = ({ name }: Product) => `${name}`

export interface NavigationItem {
  href: string
  title: string
  description?: string
}

export interface NavigationGroup {
  title: string
  items: NavigationItem[]
}

export type NavigationTree = (NavigationItem | NavigationGroup)[]

export type Navigation = Record<Language, NavigationTree>

const navigationDe: NavigationTree = [
  {
    title: 'Produkt',
    items: [
      {
        href: '/de/bestell-und-zahlungs-ablauf-gastro-betriebe/',
        title: 'Bestell- und Zahlungsablauf',
        description:
          'Beschreibung, wie das Bestellen und Bezahlen aus der Sicht eines Gastrobetriebs mit Gaston funktioniert.',
      },
      {
        href: '/de/funktionsumfang/',
        title: 'Funktionsumfang',
        description: 'Detaillierte Auflistung aller Funktionen von Gaston.',
      },
      {
        title: 'Bestell-App',
        href: '/de/restaurant-bestell-app/',
        description: 'Entdecken Sie unsere Restaurant Bestell App.',
      },
      {
        href: '/de/demo/',
        title: 'Demo',
        description:
          'Machen Sie eine Bestellung und erfahren dabei den Zahlungsablauf.',
      },
    ],
  },
  {
    title: 'Über',
    items: [
      {
        href: '/de/team/',
        title: 'Team',
        description: 'Wer versteckt sich hinter der Persona?',
      },
      {
        href: '/de/blog/',
        title: 'Blog',
        description: 'Der neuste Gossip, der gerade die Runden macht.',
      },
      {
        title: 'Mission',
        href: '/de/mission/',
        description: 'Was ist unsere Mission? Was treibt uns?',
      },
    ],
  },
  {
    title: 'Preise',
    href: '/de/preise/',
  },
  {
    href: '/de/kontakt/',
    title: 'Kontakt',
  },
]

const navigationEn: NavigationTree = [
  {
    title: 'Demo',
    href: '/en/demo/',
  },
  {
    title: 'About',
    items: [
      {
        title: 'Team',
        href: '/en/team/',
        description: 'Who is hiding behind the persona?',
      },
      {
        title: 'Blog',
        href: '/en/blog/',
        description: 'The latest gossip doing the rounds.',
      },

      {
        title: 'Mission',
        href: '/en/mission/',
        description: 'What is our mission? What drives us?',
      },
    ],
  },
  { title: 'Contact', href: '/en/contact/' },
]

export const globalNavigation: Navigation = {
  de: navigationDe,
  en: navigationEn,
}

const footerDe: FooterGroup[] = [
  {
    title: 'Produkt',
    items: [
      {
        title: 'Bestell- und Zahlungsablauf',
        href: '/de/bestell-und-zahlungs-ablauf-gastro-betriebe/',
      },
      {
        title: 'Funktionsumfang',
        href: '/de/funktionsumfang/',
      },
      {
        title: 'Preise',
        href: '/de/preise/',
      },
      {
        href: '/de/demo/',
        title: 'Demo',
      },
    ],
  },
  {
    title: 'Über',
    items: [
      {
        href: '/de/team/',
        title: 'Team',
      },
      {
        href: '/de/blog/',
        title: 'Blog',
      },
      {
        title: 'Mission',
        href: '/de/mission/',
      },
      {
        href: '/de/kontakt/',
        title: 'Kontakt',
      },
    ],
  },
  {
    title: 'Highlights',
    items: [
      {
        title: 'Restaurant Bestell App',
        href: '/de/restaurant-bestell-app/',
      },
      {
        title: 'Digitale Speisekarte',
        href: '/de/digitale-speisekarte/',
      },
      {
        title: 'Take Away und Delivery',
        href: '/de/takeaway-delivery/',
      },
      {
        title: 'Gäste-Rufsystem',
        href: '/de/gäste-rufsystem/',
      },
      {
        title: 'Gaston oder Orderman',
        href: '/de/orderman/',
      },
      {
        title: 'Gaston oder Yoordi',
        href: '/de/yoordi/',
      },
    ],
  },
  {
    title: 'Dokumentation',
    items: [
      {
        title: 'Inbetriebnahme von Gaston',
        href: '/de/dokumentation/inbetriebnahme-gaston/',
      },
      {
        title: 'Speisekarte bearbeiten',
        href: '/de/dokumentation/speisekarten-angebot-bearbeiten/',
      },
    ],
  },
]

export const footer: I18nFooter = {
  de: footerDe,
  en: [],
}
