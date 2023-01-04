import { FormatEnum, IAsset, ISource } from '~~/types'

export default class SourceService {
  static getAll(): ISource[] {
    return [
      {
        // author: AuthorEnum.BENEVOLENCE,
        formats: [FormatEnum.PDF, FormatEnum.EPUB, FormatEnum.DOCX],
        // thumbnail: '/images/pdf/le-paraclet',
        slug: 'le-paraclet',
        title: 'Le Paraclet'
      },
      {
        // author: AuthorEnum.BENEVOLENCE,
        formats: [FormatEnum.PDF, FormatEnum.EPUB, FormatEnum.DOCX],
        // thumbnail: '/images/pdf/le-paraclet',
        slug: 'le-soreg',
        title: 'Le Soreg'
      }
    ]
  }

  static getByDebat(debat: string): IAsset[] {
    switch (debat) {
      case 'paraclet':
        return [
          {
            formats: [FormatEnum.PNG],
            href: '/debats/2023/05-01-paraclet/p75.png',
            thumbnail: '/debats/2023/05-01-paraclet/p75.png',
            title: 'Papyrus P75'
          },
          {
            formats: [FormatEnum.JPG],
            href: '/debats/2023/05-01-paraclet/p75-paraclet-zoom-1.jpg',
            thumbnail: '/debats/2023/05-01-paraclet/p75-paraclet-zoom-1.jpg',
            title: 'Paraclet Zoom 1'
          },
          {
            formats: [FormatEnum.JPG],
            href: '/debats/2023/05-01-paraclet/p75-paraclet-zoom-2.jpg',
            thumbnail: '/debats/2023/05-01-paraclet/p75-paraclet-zoom-2.jpg',
            title: 'Paraclet Zoom 2'
          }
        ]
      default:
        return []
    }
  }
}
