import { IBook } from '~~/types'

export default class BookService {
  constructor() {}

  static getAll(): IBook[] {
    return [
      {
        title: 'Les Pères Apostoliques',
        alt: 'Un livre',
        slug: 'les-peres-apostoliques',
        amazon: '3mXElgb'
      },
      {
        title: "Histoire d'une âme",
        alt: 'Un livre',
        slug: 'histoire-dune-ame',
        amazon: '428ADQO'
      },
      {
        title: "Le paraclet, mémoire de l'Eglise",
        alt: 'Un livre',
        slug: 'le-paraclet-memoire-de-leglise-regard-sur-la-mission-de-lesprit-a-la-lumiere-du-quatrieme-evangile',
        amazon: '42iYBJ6'
      },
      {
        title: 'Pères apostoliques',
        alt: 'Un livre',
        slug: 'peres-apostoliques',
        amazon: '3mUwlwu'
      },
      {
        title: 'Le prix à payer',
        alt: 'Un livre',
        slug: 'le-prix-a-payer',
        amazon: '3TjOX4V'
      },
      {
        title: 'Bible Codex Vaticanus Évangiles',
        alt: 'Un livre',
        slug: 'the-vaticanus-bible-gospels',
        amazon: '3PPPytw'
      },
      {
        title: 'Bible Codex Vaticanus Actes et Épîtres',
        alt: 'Un livre',
        slug: 'the-vaticanus-bible-acts-and-epistles',
        amazon: '3ve4Qi6'
      },
      {
        title: 'Bible Nestle-Aland',
        alt: 'Un livre',
        slug: 'bible-nestle-aland',
        amazon: '3hzadoT'
      },
      {
        title: 'SEPTUAGINTA RELIE SKIVERTEX ',
        alt: 'Un livre',
        slug: 'septuaginta-relie-skivertex',
        amazon: '3PTTKbx'
      },
      {
        title: 'Nouveau Testament Interlinéaire grec-français',
        alt: 'Un livre',
        slug: 'nouveau-testament-interlineaire-grec-francais',
        amazon: '3W8ugcZ'
      },
      {
        title: "Je croyais en Issa. J'ai rencontré Jésus",
        alt: 'Un livre',
        slug: 'je-croyais-en-issa-jai-rencontre-jesus',
        amazon: '3FH2DR0'
      },
      {
        title: 'Le texte des premiers manuscrits grecs du Nouveau Testament',
        alt: 'Un livre',
        slug: 'the-text-of-the-earliest-new-testament-greek-manuscripts',
        amazon: '3jreoUd'
      },
      {
        title:
          "Youcat français : Catéchisme de l'Eglise catholique pour les jeunes",
        alt: 'Un livre',
        slug: 'youcat',
        amazon: '3v1qjuI'
      },
      {
        title: "Catéchisme de l'Église catholique",
        alt: 'Un livre',
        slug: 'catechisme-de-leglise-catholique',
        amazon: '3YztAiw'
      },
      {
        title: 'La Bible. Traduction officielle liturgique',
        alt: 'Un livre',
        slug: 'la-bible-traduction-officielle-liturgique',
        amazon: '3YLdGSj'
      },
      {
        title: 'La Bible de Jérusalem',
        alt: 'Un livre',
        slug: 'la-bible-de-jerusalem',
        amazon: '3PEqNAc'
      },
      {
        title: 'La Bible : Segond 21',
        alt: 'Un livre',
        slug: 'la-bible-segond-21',
        amazon: '3jffW3A'
      },
      {
        title: "La divinité de Christ face à l'islam",
        alt: 'Un livre',
        slug: 'la-divinite-de-christ-face-a-lislam',
        amazon: '3GsGiak'
      },
      {
        title: 'Paroles et exemples des anciens',
        alt: 'Un livre',
        slug: 'paroles-et-exemples-des-anciens'
      },
      {
        title: 'Le feu sacré',
        alt: 'Un livre',
        slug: 'le-feu-sacre',
        amazon: '3v19hwU'
      },
      {
        title: 'Le secours des saints',
        alt: 'Un livre',
        slug: 'le-secours-des-saints',
        amazon: '3HHVAuc'
      },
      {
        title: "La foi, la liturgie et la vie de l'église orthodoxe",
        alt: 'Un livre',
        slug: 'la-foi-la-liturgie-et-la-vie-de-l-eglise-orthodoxe'
      },
      {
        title: 'Necessary Existance',
        alt: 'Un livre',
        slug: 'necessary-existance',
        amazon: '3VdhCYF'
      },
      {
        title: 'The logic of the Trinity',
        alt: 'Un livre',
        slug: 'the-logic-of-the-trinity',
        amazon: '3v0SwSn'
      },
      {
        title: 'Les versets sataniques',
        alt: 'Un livre',
        slug: 'les-versets-sataniques',
        amazon: '3BGYqf6'
      }
    ]
  }

  static getBible(): IBook[] {
    return this.getAll().filter((book) => book.slug.includes('bible'))
  }

  static getDivinity(): IBook[] {
    return this.getAll().filter(
      (book) =>
        book.slug.includes('divinite') ||
        book.slug.includes('catechisme') ||
        book.slug.includes('trinity')
    )
  }

  static getBySlug(slug: string): IBook[] {
    // return this.getAll().filter((book) => book.slug.includes(slug))
    return this.getAll().filter((book) => book.slug === slug)
  }
}
