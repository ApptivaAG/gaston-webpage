import type { MarkdownInstance } from 'astro'

export type Language = 'de' | 'en'

export interface FooterItem {
  href: string
  title: string
}
export interface FooterGroup {
  title: string
  items: FooterItem[]
}
export type I18nFooter = Record<Language, FooterGroup[]>

export type Product = {
  name: string
  description: string
  claim: string
}
export type MetaData = Record<Language, Product>

export type CallToAction = {
  href: string
  text: string
}

export type BlogPostFrontMatter = {
  lang: 'de' | 'en'
  title: string
  description: string
  image: string
  date: string
  author: string
}
export type BlogPost = MarkdownInstance<BlogPostFrontMatter>[]

export type TeamMember = {
  name: string
  role: Record<Language, string>
  image: string
}

export type LandingPageFrontMatter = {
  lang: 'de' | 'en'
  title: string
  description: string
  image: string
  keyword: string
}
export type LandingPage = MarkdownInstance<LandingPageFrontMatter>[]

export type DocumentationFrontMatter = {
  lang: 'de' | 'en'
  title: string
  description: string
}
export type Documentation = MarkdownInstance<DocumentationFrontMatter>[]
