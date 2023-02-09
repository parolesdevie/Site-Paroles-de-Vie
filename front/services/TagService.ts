import { AuthorEnum, AuthorTeamEnum, ITag, TagEnum, ThemeEnum } from '~~/types'
import PdfService from './PdfService'

export default class TagService {
  constructor() {}

  static getAll(): ITag[] {
    return [
      {
        slug: ThemeEnum.DILEMME,
        author: 'Dilemme',
        pdfCount: this.getPdfCountByTagSlug(ThemeEnum.DILEMME)
      },
      {
        slug: ThemeEnum.REFUTATION,
        author: 'Réfutation',
        pdfCount: this.getPdfCountByTagSlug(ThemeEnum.REFUTATION)
      },
      {
        slug: ThemeEnum.THEOLOGY,
        author: 'Théologie',
        pdfCount: this.getPdfCountByTagSlug(ThemeEnum.THEOLOGY)
      },
      {
        slug: AuthorTeamEnum.COLISEUM,
        author: 'Coliseum',
        pdfCount: this.getPdfCountByTagSlug(AuthorTeamEnum.COLISEUM)
      },
      {
        slug: AuthorTeamEnum.THEOPHILOS,
        author: 'Theophilos',
        pdfCount: this.getPdfCountByTagSlug(AuthorTeamEnum.THEOPHILOS)
      },
      {
        slug: AuthorEnum.UNKNOW,
        author: 'Auteur Inconnu',
        pdfCount: this.getPdfCountByTagSlug(AuthorTeamEnum.UNKNOW)
      },
      {
        slug: AuthorEnum.JOZUA,
        author: 'Jozua',
        pdfCount: this.getPdfCountByTagSlug(AuthorEnum.JOZUA)
      },
      {
        slug: AuthorEnum.JMS,
        author: 'Jms',
        pdfCount: this.getPdfCountByTagSlug(AuthorEnum.JMS)
      },
      {
        slug: AuthorEnum.FIDELIS_AND_VERAX,
        author: 'Fidelis & Verax',
        pdfCount: this.getPdfCountByTagSlug(AuthorEnum.FIDELIS_AND_VERAX)
      },
      {
        slug: AuthorEnum.BENEVOLENCE,
        author: 'Benevolence',
        pdfCount: this.getPdfCountByTagSlug(AuthorEnum.BENEVOLENCE)
      },
      {
        slug: AuthorEnum.SHAM,
        author: 'Sham',
        pdfCount: this.getPdfCountByTagSlug(AuthorEnum.SHAM)
      },
      {
        slug: AuthorEnum.QALEV,
        author: 'Qalev',
        pdfCount: this.getPdfCountByTagSlug(AuthorEnum.QALEV)
      },
      {
        slug: AuthorEnum.SAVED_BY_CHRIST,
        author: 'Saved By Christ',
        pdfCount: this.getPdfCountByTagSlug(AuthorEnum.SAVED_BY_CHRIST)
      },
      {
        slug: AuthorEnum.PROTOCOLE,
        author: 'Protocole',
        pdfCount: this.getPdfCountByTagSlug(AuthorEnum.PROTOCOLE)
      }
    ]
  }

  static getPdfCountByTagSlug(slug: TagEnum): Number {
    return PdfService.getAll().filter((pdf) => pdf.tags.includes(slug)).length
  }
}
