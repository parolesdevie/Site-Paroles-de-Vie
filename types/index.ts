export interface ITag {
  slug: string
  author: string
  pdfCount: Number
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

export enum VideoLinkEnum {
  UNKNOW,
  YOUTUBE,
  TIKTOK,
}

export interface IVideoLink {
  source: VideoLinkEnum
  name: string
  url: string
  thumbnail: string
}

export enum AuthorEnum {
  NULL = '',
  UNKNOW = 'inconnu',
  JOZUA = 'jozua',
  BENEVOLENCE = 'benevolence',
  SHAM = 'sham',
  JMS = 'jms',
  FIDELIS_AND_VERAX = 'fidelis-and-verax',
}

export enum AuthorTeamEnum {
  NULL = '',
  UNKNOW = 'inconnu',
  COLISEUM = 'coliseum',
  THEOPHILOS = 'theophilos',
}

export interface IPdf {
  tags: string[]
  author: AuthorEnum
  slug: string
  title: string
}

export enum FormatEnum {
  UNKNOW = 'UNKNOW',
  EPUB = 'EPUB',
  PDF = 'PDF',
}

export interface ISourceFile {
  author: AuthorEnum
  format: FormatEnum
  thumbnail: string
  href: string
  title: string
}

export enum DebatPlateformEnum {
  UNKNOW = 'Unknow',
  YOUTUBE = 'YouTube',
  TIKTOK = 'TikTok',
  DISCORD = 'Discord',
}

export interface IDebaterProfils {
  id: number
  pseudo?: string
  name?: string
  religion?: string
}

export interface IDebater extends IDebaterProfils {
  team?: Number
}
export interface IDebat {
  topic?: string
  date: string
  url: string
  subject: string
  debaters: IDebater[]
  plateform: DebatPlateformEnum.YOUTUBE
}
