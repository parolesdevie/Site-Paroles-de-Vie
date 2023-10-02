import { ILink, IWebSite } from '~~/types'

export default class MenuService {
  constructor() {}

  static getMainMenu(): ILink[] {
    return [
      {
        to: '/',
        name: 'Accueil'
      },
      {
        to: '/books/',
        name: 'Livres'
      },
      {
        to: '/documents/',
        name: 'Documents Numériques'
      },
      {
        to: '/questions-answer/',
        name: 'FAQ' // Questions/Réponses
      }
      // {
      //   to: '/sites/',
      //   name: 'Sites',
      // },
      // {
      //   to: '/magazines/',
      //   name: 'Magazine',
      // },
    ]
  }

  static getDiscordMenu(): IWebSite[] {
    return [
      {
        href: 'https://discord.gg/ezWDkJn5M7',
        name: 'Collectif Théophilos'
      },
      {
        href: 'https://discord.gg/Qu4sqnpYFz',
        name: 'Coliseum'
      }
    ]
  }

  static getTikTokMenu(): IWebSite[] {
    return [
      {
        href: 'https://www.tiktok.com/@paroles.de.vie.2',
        name: 'Chaîne Paroles de Vie'
      },
      {
        href: 'https://www.tiktok.com/@chaine.coliseum.2',
        name: 'Chaîne Coliseum'
      }
    ]
  }

  static getInstagramMenu(): IWebSite[] {
    return [
      {
        href: 'https://www.instagram.com/chaine.paroles.de.vie/',
        name: 'Compte Paroles de Vie'
      },
      {
        href: 'https://www.instagram.com/chaine.coliseum/',
        name: 'Compte Coliseum'
      }
    ]
  }

  static getPodcastMenu(): IWebSite[] {
    return [
      {
        href: 'https://music.amazon.fr/podcasts/0a53af38-888e-43d8-a6b3-3a4fd5255955/paroles-de-vie',
        name: 'Amazon Music'
      },
      {
        href: 'https://open.spotify.com/show/5XnBOuPu5fUW0DROVinvbg',
        name: 'Spotify'
      },
      {
        href: 'https://anchor.fm/paroles-de-vie',
        name: 'Anchor'
      }
    ]
  }
}
