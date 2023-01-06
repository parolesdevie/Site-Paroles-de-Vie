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
            formats: [FormatEnum.PDF],
            href: '/debats/2023/05-01-paraclet/le-paraclet-23.06.01.pdf',
            thumbnail: '/debats/2023/05-01-paraclet/le-paraclet-23.06.01.png',
            title: 'Le PDF de réfutation vers 23.06.01'
          },
          {
            formats: [FormatEnum.WEBP],
            href: '/debats/2023/05-01-paraclet/paraclet-tableau-comparatif.webp',
            thumbnail:
              '/debats/2023/05-01-paraclet/paraclet-tableau-comparatif.webp',
            title: 'Tableau Comparatif'
          },
          {
            formats: [FormatEnum.WEBP],
            href: '/debats/2023/05-01-paraclet/paraclet-tableau-comparatif-2.webp',
            thumbnail:
              '/debats/2023/05-01-paraclet/paraclet-tableau-comparatif-2.webp',
            title: 'Tableau Comparatif 2'
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
          },
          {
            formats: [FormatEnum.WEBP],
            href: '/debats/2023/05-01-paraclet/bailly-dictionnaire-grec-francais.webp',
            thumbnail:
              '/debats/2023/05-01-paraclet/bailly-dictionnaire-grec-francais.webp',
            title: 'Définition périklitos'
          },
          {
            formats: [FormatEnum.WEBP],
            href: '/debats/2023/05-01-paraclet/lexicon/come-from-father.png',
            thumbnail:
              '/debats/2023/05-01-paraclet/lexicon/come-from-father.png',
            title: 'Lexicon John 15:26'
          },
          {
            formats: [FormatEnum.WEBP],
            href: '/debats/2023/05-01-paraclet/dilemmes/dilemme-de-l-adultere.webp',
            thumbnail:
              '/debats/2023/05-01-paraclet/dilemmes/dilemme-de-l-adultere.webp',
            title: "Dilemme de l'adultére"
          },
          {
            formats: [FormatEnum.WEBP],
            href: '/debats/2023/05-01-paraclet/dilemmes/dilemme-de-l-adultere-bis.webp',
            thumbnail:
              '/debats/2023/05-01-paraclet/dilemmes/dilemme-de-l-adultere-bis.webp',
            title: "Dilemme de l'adultére bis"
          },
          {
            formats: [FormatEnum.WEBP],
            href: '/debats/2023/05-01-paraclet/dilemmes/dilemme-du-paradis.webp',
            thumbnail:
              '/debats/2023/05-01-paraclet/dilemmes/dilemme-du-paradis.webp',
            title: 'Dilemme du Paradis'
          },
          {
            formats: [FormatEnum.PNG],
            href: 'https://www.tiktok.com/@jms_ichtus/video/7132162754017856773',
            thumbnail:
              '/debats/2023/05-01-paraclet/dilemmes/dilemme-du-paradis-video-cover.png',
            title: 'Dilemme du Paradis - Vidéo TikTok'
          },
          {
            formats: [FormatEnum.PNG],
            href: 'https://www.tiktok.com/@unchamite/video/7128047782358830341?is_from_webapp=1&sender_device=pc&web_id=7182639293248161286',
            thumbnail:
              '/debats/2023/05-01-paraclet/dilemmes/dilemme-de-l-adultere-video-cover.png',
            title: "Dilemme de l'adultére - Vidéo TikTok"
          }
        ]
      default:
        return []
    }
  }
}
