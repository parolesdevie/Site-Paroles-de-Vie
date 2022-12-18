import { IBook } from '~/types'

export default class BookService {
  constructor() {}

  static getAll(): IBook[] {
    return [
      {
        title: 'Bible Nestle-Aland',
        slug: 'bible-nestle-aland',
        amazon: '3hzadoT',
      },
      {
        title: 'Paroles et exemples des anciens',
        slug: 'paroles-et-exemples-des-anciens',
      },
      {
        title: 'Le feu sacré',
        slug: 'le-feu-sacre',
        amazon: '3v19hwU',
      },
      {
        title: 'Le secours des saints',
        slug: 'le-secours-des-saints',
        amazon: '3HHVAuc',
      },
      {
        title: "La foi, la liturgie et la vie de l'église orthodoxe",
        slug: 'la-foi-la-liturgie-et-la-vie-de-l-eglise-orthodoxe',
      },
      {
        title: 'Necessary Existance',
        slug: 'necessary-existance',
        amazon: '3VdhCYF',
      },
      {
        title: 'The logic of the Trinity',
        slug: 'the-logic-of-the-trinity',
        amazon: '3v0SwSn',
      },
      {
        title: 'Les versets sataniques',
        slug: 'les-versets-sataniques',
        amazon: '3BGYqf6',
      },
    ]
  }
}
