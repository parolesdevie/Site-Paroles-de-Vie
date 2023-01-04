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
            formats: [FormatEnum.WEBP],
            href: '/debats/2023/05-01-paraclet/paraclet-tableau-comparatif.webp',
            thumbnail:
              '/debats/2023/05-01-paraclet/paraclet-tableau-comparatif.webp',
            title: 'Tableau Comparatif'
          },
          {
            formats: [FormatEnum.PNG],
            href: '/debats/2023/05-01-paraclet/p75.png',
            thumbnail: '/debats/2023/05-01-paraclet/p75.png',
            title: 'Papyrus P75'
          },
          {
            formats: [FormatEnum.JPG],
            href: '/debats/2023/05-01-paraclet/p75-bis.jpg',
            thumbnail: '/debats/2023/05-01-paraclet/p75-bis.jpg',
            title: 'Papyrus P75 bis'
          },
          {
            formats: [FormatEnum.JPG],
            href: '/debats/2023/05-01-paraclet/codex-alexandrinus.jpg',
            thumbnail: '/debats/2023/05-01-paraclet/codex-alexandrinus.jpg',
            title: 'Codex Alexandrinus'
          },
          {
            formats: [FormatEnum.JPG],
            href: '/debats/2023/05-01-paraclet/parakletos/p75-paraclet-zoom-1.jpg',
            thumbnail:
              '/debats/2023/05-01-paraclet/parakletos/p75-paraclet-zoom-1.jpg',
            title: 'Paraclet Zoom 1'
          },
          {
            formats: [FormatEnum.JPG],
            href: '/debats/2023/05-01-paraclet/parakletos/p75-paraclet-zoom-2.jpg',
            thumbnail:
              '/debats/2023/05-01-paraclet/parakletos/p75-paraclet-zoom-2.jpg',
            title: 'Paraclet Zoom 2'
          },
          {
            formats: [FormatEnum.PNG],
            href: '/debats/2023/05-01-paraclet/parakletos/codex-vaticanus-paraclet.png',
            thumbnail:
              '/debats/2023/05-01-paraclet/parakletos/codex-vaticanus-paraclet.png',
            title: 'Paraclet Zoom 3'
          },
          {
            formats: [FormatEnum.PNG],
            href: '/debats/2023/05-01-paraclet/parakletos/codex-vaticanus-paraclet-2.png',
            thumbnail:
              '/debats/2023/05-01-paraclet/parakletos/codex-vaticanus-paraclet-2.png',
            title: 'Paraclet Zoom 4'
          },
          {
            formats: [FormatEnum.JPG],
            href: '/debats/2023/05-01-paraclet/agion/agion-p75.jpg',
            thumbnail: '/debats/2023/05-01-paraclet/agion/agion-p75.jpg',
            title: 'Esprit Saint Zoom 1'
          },
          {
            formats: [FormatEnum.JPG],
            href: '/debats/2023/05-01-paraclet/agion/agion-p75-bis.jpg',
            thumbnail: '/debats/2023/05-01-paraclet/agion/agion-p75-bis.jpg',
            title: 'Esprit Saint Zoom 1 bis'
          },
          {
            formats: [FormatEnum.JPG],
            href: '/debats/2023/05-01-paraclet/agion/agion-sinaticus.jpg',
            thumbnail: '/debats/2023/05-01-paraclet/agion/agion-sinaticus.jpg',
            title: 'Esprit Saint Zoom 2'
          },
          {
            formats: [FormatEnum.JPG],
            href: '/debats/2023/05-01-paraclet/agion/agion-alexandrinus.jpg',
            thumbnail:
              '/debats/2023/05-01-paraclet/agion/agion-alexandrinus.jpg',
            title: 'Esprit Saint Zoom 3'
          },
          {
            formats: [FormatEnum.JPG],
            href: '/debats/2023/05-01-paraclet/agion/agion-vaticanus.png',
            thumbnail: '/debats/2023/05-01-paraclet/agion/agion-vaticanus.png',
            title: 'Esprit Saint Zoom 7'
          },
          {
            formats: [FormatEnum.PNG],
            href: '/debats/2023/05-01-paraclet/sira-ibn-ishaq/refutation.png',
            thumbnail:
              '/debats/2023/05-01-paraclet/sira-ibn-ishaq/refutation.png',
            title: 'Erreur de Ibn Ishaq'
          },
          {
            formats: [FormatEnum.PNG],
            href: '/debats/2023/05-01-paraclet/montanisme/263.png',
            thumbnail: '/debats/2023/05-01-paraclet/montanisme/263.png',
            title: 'Montanisme Page 263'
          },
          {
            formats: [FormatEnum.PNG],
            href: '/debats/2023/05-01-paraclet/montanisme/cover.png',
            thumbnail: '/debats/2023/05-01-paraclet/montanisme/cover.png',
            title: 'Montanisme Page Cover'
          },
          {
            formats: [FormatEnum.PNG],
            href: '/debats/2023/05-01-paraclet/montanisme/265.png',
            thumbnail: '/debats/2023/05-01-paraclet/montanisme/265.png',
            title: 'Montanisme Page 265'
          },
          {
            formats: [FormatEnum.PNG],
            href: '/debats/2023/05-01-paraclet/montanisme/267.png',
            thumbnail: '/debats/2023/05-01-paraclet/montanisme/267.png',
            title: 'Montanisme Page 267'
          },
          {
            formats: [FormatEnum.PNG],
            href: '/debats/2023/05-01-paraclet/montanisme/268.png',
            thumbnail: '/debats/2023/05-01-paraclet/montanisme/268.png',
            title: 'Montanisme Page 268'
          },
          {
            formats: [FormatEnum.PNG],
            href: '/debats/2023/05-01-paraclet/montanisme/270.png',
            thumbnail: '/debats/2023/05-01-paraclet/montanisme/270.png',
            title: 'Montanisme Page 270'
          }
        ]
      default:
        return []
    }
  }
}
