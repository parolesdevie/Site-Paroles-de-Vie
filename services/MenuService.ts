import { ILink } from '~/types'

export default class MenuService {
  constructor() {}

  static getMainMenu(): ILink[] {
    return [
      {
        to: '/',
        name: 'Accueil',
      },
      {
        to: '/questions-answer/',
        name: 'Questions/Réponses',
      },
      {
        to: '/documents/',
        name: 'Documents',
      },
      {
        to: '/books/',
        name: 'Livres',
      },
      {
        to: '/sites/',
        name: 'Sites',
      },
      {
        to: '/magazines/',
        name: 'Magazine',
      },
    ]
  }

  static getDiscordMenu(): ILink[] {
    return [
      {
        to: 'https://discord.gg/ezWDkJn5M7',
        name: 'Collectif Théophilos',
      },
      {
        to: 'https://discord.gg/Qu4sqnpYFz',
        name: 'Coliseum',
      },
    ]
  }

  static getTikTokMenu(): ILink[] {
    return [
      {
        to: 'https://www.tiktok.com/@paroles.de.vie',
        name: 'Chaîne Paroles de Vie',
      },
      {
        to: 'https://www.tiktok.com/@chaine.coliseum',
        name: 'Chaîne Coliseum',
      },
    ]
  }

  static getPodcastMenu(): ILink[] {
    return [
      {
        to: 'https://open.spotify.com/show/5XnBOuPu5fUW0DROVinvbg',
        name: 'Spotify',
      },
      {
        to: 'https://anchor.fm/paroles-de-vie',
        name: 'Anchor',
      },
    ]
  }
}
