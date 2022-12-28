import { AuthorEnum, FormatEnum, ISource } from '~~/types'

export default class SourceService {
  static getAll(): ISource[] {
    return [
      {
        // author: AuthorEnum.BENEVOLENCE,
        formats: [FormatEnum.PDF, FormatEnum.EPUB, FormatEnum.DOCX],
        // thumbnail: '/images/pdf/le-paraclet',
        slug: 'le-paraclet',
        title: 'Le Paraclet',
      },
      {
        // author: AuthorEnum.BENEVOLENCE,
        formats: [FormatEnum.PDF, FormatEnum.EPUB, FormatEnum.DOCX],
        // thumbnail: '/images/pdf/le-paraclet',
        slug: 'le-soreg',
        title: 'Le Soreg',
      },
    ]
  }
}
