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
  claim: 'Ihre Gäste bestellen und bezahlen ohne Wartezeit.',
  name: 'Gaston',
}
const productEn: Product = {
  description: 'Self-Order|Pay for Gastronomy',
  claim: 'Your guests order and pay without waiting.',
  name: 'Gaston',
}
export const metaData: MetaData = {
  de: productDe,
  en: productEn,
}

export const callToActionLinksDe: CallToAction[] = [
  { href: '/de/demo/', text: 'Demo ausprobieren' },
  { href: '/de/preise/', text: 'Unverbindliches Angebot' },
]
export const callToActionLinksEn: CallToAction[] = [
  { href: '/en/demo/', text: 'Try demo' },
  { href: '/en/contact/', text: 'Request a quote' },
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
        title: 'Digitale Speisekarte',
        href: '/de/digitale-speisekarte/',
        description:
          'Präsentieren Sie mit unserer digitalen Speisekarte Ihr Angebot im besten Licht.',
      },
      {
        title: 'Bestell-App',
        href: '/de/restaurant-bestell-app/',
        description: 'Entdecken Sie unsere Restaurant Bestell App.',
      },
      {
        href: '/de/funktionsumfang/',
        title: 'Funktionsumfang',
        description: 'Detaillierte Auflistung aller Funktionen von Gaston.',
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
        title: 'Uns',
        href: '/de/ueber-uns/',
        description: 'Was treibt uns an? Worauf legen wir wert?',
      },
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
        title: 'Digitale Speisekarte',
        href: '/de/digitale-speisekarte/',
      },
      {
        title: 'Restaurant Bestell App',
        href: '/de/restaurant-bestell-app/',
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
        title: 'Uns',
        href: '/de/ueber-uns/',
      },
      {
        href: '/de/team/',
        title: 'Team',
      },
      {
        href: '/de/blog/',
        title: 'Blog',
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
        title: 'Take Away und Delivery',
        href: '/de/takeaway-delivery/',
      },
      {
        title: 'Gäste-Rufsystem',
        href: '/de/gaeste-rufsystem/',
      },
      {
        title: 'Gaston oder Orderman',
        href: '/de/orderman/',
      },
    ],
  },
  {
    title: 'Dokumentation',
    items: [
      {
        title: 'Bestell- und Zahlungsablauf',
        href: '/de/bestell-und-zahlungs-ablauf-gastro-betriebe/',
      },
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
