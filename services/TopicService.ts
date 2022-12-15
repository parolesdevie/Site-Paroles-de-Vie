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
        cover: 'read-the-bible',
        to: '/read-the-bible/',
        title: 'Lire la Bible',
      },
      {
        cover: 'gospel',
        to: '/gospel/',
        title: 'Louanges',
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
      {
        cover: 'debates-tips',
        to: '/debates-tips/',
        title: 'Conseils de débats',
      },
      {
        cover: 'the-divinity-of-jesus',
        to: '/the-divinity-of-jesus/',
        title: 'La divinité de Jésus',
      },
      {
        cover: 'the-falsification-of-the-bible',
        to: '/the-falsification-of-the-bible/',
        title: 'La falsification de la bible',
      },
      {
        cover: 'the-crucifixion-in-the-bible',
        to: '/the-crucifixion-in-the-bible/',
        title: 'La crucifixion dans la bible',
      },
      {
        cover: 'free-will',
        to: '/free-will/',
        title: 'Le libre arbitre',
      },
    ]
  }
}
