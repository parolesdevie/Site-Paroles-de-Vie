export interface ITag {
  slug: string
  author: string
  pdfCount: Number
}

export interface IPdf {
  tags: string[]
  author: string
  slug: string
  title: string
}

export interface IWebSite {
  name: string
  href: string
}

export interface IBook {
  title: string
  slug: string
}

export interface ILink {
  name: string
  to: string
}

export type IBreadcrumbItem = ILink

export interface ITopic {
  cover: string
  to: string
  title: string
}
