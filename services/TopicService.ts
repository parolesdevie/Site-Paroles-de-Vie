import { ITopic } from '~/types'

export default class TopicService {
  constructor() {}

  static getAll(): ITopic[] {
    return [
      {
        cover: 'manuscript',
        to: '/manuscripts/',
        title: 'Manuscrits',
      },
      {
        cover: 'debates-tips',
        to: '/debates-tips/',
        title: 'Conseils de débats',
      },
      {
        cover: 'paraclete',
        to: '/paraclete/',
        title: 'Le Paraclet',
      },
    ]
  }
}
