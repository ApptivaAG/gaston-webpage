import { MarkdownInstance } from 'astro'

export type Language = 'de' | 'en'
export type Product = {
  name: string
  description: string
  claim: string
}
export type MetaData = Record<Language, Product>

export type BlogPostFrontMatter = {
  lang: 'de' | 'en'
  title: string
  description: string
  image: string
  date: string
  author: string
}
export type BlogPost = MarkdownInstance<BlogPostFrontMatter>[]