export interface IImageSrcMedia {
  '1x': string
  '1.5x': string
  '2x': string
  '3x': string
  '4x': string
}
export interface IImageSrc {
  mobile: IImageSrcMedia
  desktop: IImageSrcMedia
}
export interface IImageSrcset {
  mobile: string
  desktop: string
}
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
  alt: string
  slug: string
  amazon?: string
}

export interface ILink {
  name: string
  to: string
}

export type IBreadcrumbItem = ILink

export interface ITopicCover {
  color: string
  srcset: IImageSrcset
  src: IImageSrc
  alt: string
}
export interface ITopic {
  cover: ITopicCover
  to: string
  slug?: string
  title: string
}

export enum QuestionPlateformEnum {
  UNKNOW,
  GOT_QUESTIONS = 'GotQuestions.org'
}

export interface IQuestion {
  title: string
  slug?: string
  href?: string
  plateform?: QuestionPlateformEnum
  response?: string
}

export enum VideoLinkEnum {
  UNKNOW = 'Inconu',
  YOUTUBE = 'Youtube',
  YOUTUBE_SHORT = 'YoutubeShorts',
  TIKTOK = 'TikTok',
  DAILYMOTION = 'DailyMotion'
}

export enum GospelCategoryEnum {
  ODE = 'Ode',
  LITURGICAL_SONGS = 'Chant liturgique',
  ACTIVE_CHRISTIANITY = 'Active Christianity',
  EMMANUEL_COMMUNITY = "Chant de la communauté de l' Emmanuel",
  TJ = 'Chant des témoins de Jéhovah',
  JEWISH_SONGS = 'Chants juifs',
  PROTESTANT_SONGS = 'Chants protestants',
  MODERN = 'Moderne',
  CRUSADE = 'Croisade',
  OTHERS = 'Autre'
}

export interface IVideoLink {
  lang?: LanguageEnum
  source: VideoLinkEnum
  category?: GospelCategoryEnum
  name: string
  url: string
  thumbnail: string
  topic?: string
}

export enum ThemeEnum {
  THEOLOGY = 'theology',
  REFUTATION = 'refutation',
  HERETIC_THESIS = 'heretic thesis',
  DILEMME = 'Dilemme'
}

export enum AuthorEnum {
  NULL = '',
  UNKNOW = 'inconnu',
  JOZUA = 'jozua',
  BENEVOLENCE = 'benevolence',
  SHAM = 'sham',
  JMS = 'jms',
  FIDELIS_AND_VERAX = 'fidelis-and-verax',
  QALEV = 'qalev',
  SAVED_BY_CHRIST = 'saved-by-christ',
  PROTOCOLE = 'protocole',
  DEMS = 'dems',
  GZN = 'gzn',
  TINO = 'Al Salib-Domini'
}

export enum AuthorTeamEnum {
  NULL = '',
  UNKNOW = 'inconnu',
  COLISEUM = 'coliseum',
  THEOPHILOS = 'theophilos',
  AL_SALIB_DOMINI = 'Al Salib-Domini'
}

export type TagEnum = ThemeEnum | AuthorEnum | AuthorTeamEnum | string

export interface IPdf {
  tags: TagEnum[]
  author: AuthorEnum
  slug: string
  title: string
}

export enum FormatEnum {
  UNKNOW = 'UNKNOW',
  EPUB = 'EPUB',
  PDF = 'PDF',
  DOCX = 'DOCX',
  PNG = 'PNG',
  JPG = 'JPG',
  WEBP = 'WEBP'
}

export interface IThumbnail {
  srcset: IImageSrcset
  src: IImageSrc
  alt: string
}
export interface ISourceFile {
  author: AuthorEnum
  format: FormatEnum
  slug?: string
  thumbnail: IThumbnail
  href: string
  title: string
}

export enum DebatPlateformEnum {
  UNKNOW = 'inconnu',
  YOUTUBE = 'YouTube',
  TIKTOK = 'TikTok',
  DISCORD = 'Discord'
}

export enum DebatReligionEnum {
  UNKNOW = 'inconnu',
  CHRISTIAN = 'Chrétien',
  MUSLIM = 'Musulman',
  JEWISH = 'Juif'
}

export interface IDebaterProfils {
  id: number
  pseudo?: string
  name?: string
  religion?: DebatReligionEnum
}

export interface IDebater extends IDebaterProfils {
  team?: Number
}
export interface IDebat {
  topics?: string[]
  date: string
  url: string
  subject: string
  debaters: IDebater[]
  mediator?: IDebater
  plateform: DebatPlateformEnum
}

export enum SearchPlateformEnum {
  UNKNOW = 'inconnu',
  EMCITV = 'emcitv',
  TOP_CHRETIEN = 'topchretien',
  FAMILLE_CHRETIENNE = 'famillechretienne',
  JCSR = 'jcsr',
  ALETEIA = 'aleteia'
}

export interface SearchResult {
  href: string
  title: string
  image?: string
  author?: string
  plateform: SearchPlateformEnum
}

export enum LanguageEnum {
  FR = 'Français',
  EN = 'Anglais',
  DE = 'Allemand',
  IT = 'Italien'
}

export interface ISource {
  formats: FormatEnum[]
  slug: string
  title: string
}

export interface IAsset {
  formats: FormatEnum[]
  href: string
  thumbnail: string
  title: string
}

export enum RatioEnum {
  SQUARE = '1:1',
  DOUBLE = '2:1',
  WIDE_SCREEN = '16:9',
  MOBILE_VERTICAL = '9:16'
}

export interface IGalleryImage {
  ratio: RatioEnum
  id: string
}
