import { ITag } from '~/types'

export default class TagService {
  constructor() {}

  static getAll(): ITag[] {
    return [
      {
        slug: 'coliseum',
        author: 'Coliseum',
        pdfCount: 2,
      },
      {
        slug: 'theophilos',
        author: 'Theophilos',
        pdfCount: 4,
      },
      {
        slug: '',
        author: 'Auteur Inconnu',
        pdfCount: 45,
      },
      {
        slug: 'jozua',
        author: 'Jozua',
        pdfCount: 45,
      },
      {
        slug: 'jms',
        author: 'Jms',
        pdfCount: 11,
      },
      {
        slug: 'fidelis-and-verax',
        author: 'Fidelis & Verax',
        pdfCount: 4,
      },
      {
        slug: 'benevolence',
        author: 'Benevolence',
        pdfCount: 3,
      },
      {
        slug: 'sham',
        author: 'Sham',
        pdfCount: 2,
      },
      {
        slug: 'qalev',
        author: 'Qalev',
        pdfCount: 2,
      },
      {
        slug: 'saved-by-christ',
        author: 'Saved By Christ',
        pdfCount: 1,
      },
      {
        slug: 'protocole',
        author: 'Protocole',
        pdfCount: 1,
      },
    ]
  }
}
