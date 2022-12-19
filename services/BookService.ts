import { IBook } from '~/types'

export default class BookService {
  constructor() {}

  static getAll(): IBook[] {
    return [
      {
        title: 'Nouveau Testament Interlinéaire grec-français',
        slug: 'nouveau-testament-interlineaire-grec-francais',
        amazon: '3W8ugcZ',
      },
      {
        title: 'Bible Nestle-Aland',
        slug: 'bible-nestle-aland',
        amazon: '3hzadoT',
      },
      {
        title: 'La Bible. Traduction officielle liturgique',
        slug: 'la-bible-traduction-officielle-liturgique',
        amazon: '3YLdGSj',
      },
      {
        title: 'La Bible de Jérusalem',
        slug: 'la-bible-de-jerusalem',
        amazon: '3PEqNAc',
      },
      {
        title: 'La Bible : Segond 21',
        slug: 'la-bible-segond-21',
        amazon: '3jffW3A',
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

  static getBible(): IBook[] {
    return this.getAll().filter((book) => book.slug.includes('bible'))
  }
}
