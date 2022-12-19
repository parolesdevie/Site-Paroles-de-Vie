import { ITopic } from '~/types'

export default class TopicService {
  constructor() {}

  static getAll(): ITopic[] {
    return [
      {
        cover: {
          color: '#707377',
          src: 'search',
        },
        to: '/search/',
        title: 'Recherche',
      },
      {
        cover: {
          color: '#538E9C',
          src: 'questions-answer',
        },
        to: '/questions-answer/',
        title: 'Tu as une questions ?',
      },
      {
        cover: {
          color: '#C2B17D',
          src: 'manuscript',
        },
        to: '/manuscripts/',
        title: 'Manuscrits',
      },
      {
        cover: {
          color: '#AFA69E',
          src: 'read-the-bible',
        },
        to: '/read-the-bible/',
        title: 'Lire la Bible',
      },
      {
        cover: {
          color: '#6A5847',
          src: 'gospel',
        },
        to: '/gospel/',
        title: 'Louanges',
      },
      {
        cover: {
          color: '#A66B38',
          src: 'paraclete',
        },
        to: '/paraclete/',
        title: 'Le Paraclet',
      },
      {
        cover: {
          color: '#7F8269',
          src: 'the-parable-of-the-winegrowers',
        },
        to: '/the-parable-of-the-winegrowers/',
        title: 'La parabole des vignerons',
      },
      {
        cover: {
          color: '#3D342E',
          src: 'debates-tips',
        },
        to: '/debates-tips/',
        title: 'Conseils de débats',
      },
      {
        cover: {
          color: '#8A7A6F',
          src: 'the-divinity-of-jesus',
        },
        to: '/the-divinity-of-jesus/',
        title: 'La divinité de Jésus',
      },
      {
        cover: {
          color: '#6A574D',
          src: 'the-falsification-of-the-bible',
        },
        to: '/the-falsification-of-the-bible/',
        title: 'La falsification de la bible',
      },
      {
        cover: {
          color: '#97A09C',
          src: 'the-crucifixion-in-the-bible',
        },
        to: '/the-crucifixion-in-the-bible/',
        title: 'La crucifixion dans la bible',
      },
      {
        cover: {
          color: '#CABA8C',
          src: 'free-will',
        },
        to: '/free-will/',
        title: 'Le libre arbitre',
      },
      {
        cover: {
          color: '#9D928C',
          src: 'documents',
        },
        to: '/documents/',
        title: 'Documents',
      },
      {
        cover: {
          color: '#59463B',
          src: 'books',
        },
        to: '/books/',
        title: 'Livres Recommandés',
      },
      {
        cover: {
          color: '',
          src: 'sites',
        },
        to: '/sites/',
        title: 'Sites Recommandés',
      },
      {
        cover: {
          color: '#ACB0BB',
          src: 'magazines',
        },
        to: '/magazines/',
        title: 'Magazines',
      },
      {
        cover: {
          color: '#64575A',
          src: 'social-networks',
        },
        to: '/social-networks/',
        title: 'Réseaux sociaux',
      },
    ]
  }

  static getBySlug(slug: string): ITopic | undefined {
    return this.getAll().find((topic) => topic.to === slug)
  }
}
