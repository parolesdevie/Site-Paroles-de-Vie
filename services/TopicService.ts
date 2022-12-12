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
      {
        cover: 'the-parable-of-the-winegrowers',
        to: '/the-parable-of-the-winegrowers/',
        title: 'La parabole des vignerons',
      },
      // {
      //   cover: 'the-falsification-of-the-bible',
      //   to: '/the-falsification-of-the-bible/',
      //   title: 'La falsification de la bible',
      // },
    ]
  }
}
