import { ITopic } from '~~/types'

export default class TopicService {
  constructor() {}

  static getAll(): ITopic[] {
    return [
      {
        cover: {
          color: '#57402B',
          src: 'dilemmas',
          alt: 'Un homme entre deux livre'
        },
        to: '/dilemmas/',
        title: 'Les Dilemmes'
      },
      {
        cover: {
          color: '#8F6C4D',
          src: 'schilo',
          alt: 'Le Schilo'
        },
        to: '/schilo/',
        title: 'La Bible'
      },
      {
        cover: {
          color: '#A3917B',
          src: 'gospel-of-barnabas',
          alt: 'Un parchemin'
        },
        to: '/gospel-of-barnabas/',
        title: "L'Évangile de Barnabé"
      },
      {
        cover: {
          color: '#A3917B',
          src: 'deuteronomy-18-18',
          alt: 'La bible'
        },
        to: '/deuteronomy-18-18/',
        title: 'Deutéronome 18:18'
      },
      {
        cover: {
          color: '#77875B',
          src: 'the-parable-of-the-winegrowers',
          alt: 'Une vigne'
        },
        to: '/the-parable-of-the-winegrowers/',
        title: 'La parabole des vignerons'
      },
      // {
      //   cover: {
      //     color: '#356193',
      //     src: 'live'
      //   ,,alt: 'LIVE'
      //   },
      //   to: '/live/',
      //   title: 'LIVE'
      // },
      {
        cover: {
          color: '#8E7B6E',
          src: 'stories',
          alt: 'Une gallerie photo'
        },
        to: '/stories/',
        title: 'Stories'
      },
      // {
      //   cover: {
      //     color: '#68513A',
      //     src: 'almanach',
      //     alt: 'Almanach'
      //   },
      //   to: '/almanach/',
      //   title: 'Almanach'
      // },
      {
        cover: {
          color: '#9D928C',
          src: 'documents',
          alt: 'Un parchemin'
        },
        to: '/documents/',
        title: 'Documents PDF'
      },
      {
        cover: {
          color: '#',
          src: 'podcast',
          alt: 'Un micro au premier plan et un arriére plan flou'
        },
        to: '/podcast/',
        title: 'Podcast'
      },
      {
        cover: {
          color: '#C2B17D',
          src: 'manuscript',
          alt: 'Un manuscrit ancien'
        },
        to: '/manuscripts/',
        title: 'Manuscrits'
      },
      {
        cover: {
          color: '#625241',
          src: 'biblical-textual-criticism',
          alt: 'Un vieux homme barbu'
        },
        to: '/biblical-textual-criticism/',
        title: 'Critique textuelle'
      },
      {
        cover: {
          color: '#6A5847',
          src: 'gospel',
          alt: 'Une choral chrétienne'
        },
        to: '/gospel/',
        title: 'Louanges'
      },
      {
        cover: {
          color: '#887D6D',
          src: 'soreg',
          alt: 'Un mur'
        },
        to: '/soreg/',
        title: 'Le Soreg'
      },
      {
        cover: {
          color: '#A66B38',
          src: 'paraclete',
          alt: 'Un feu dans une main'
        },
        to: '/paraclete/',
        title: 'Le Paraclet'
      },
      {
        cover: {
          color: '#78674A',
          src: 'ahmad',
          alt: 'Jésus qui fait une annonce'
        },
        to: '/ahmad/',
        title: 'ahmad'
      },
      {
        cover: {
          color: '#8A7A6F',
          src: 'the-divinity-of-jesus',
          alt: 'Jésus qui vol dans le ciel'
        },
        to: '/the-divinity-of-jesus/',
        title: 'La divinité de Jésus'
      },
      {
        cover: {
          color: '#6A574D',
          src: 'the-falsification-of-the-bible',
          alt: 'La falsification de la bible'
        },
        to: '/the-falsification-of-the-bible/',
        title: 'Un manuscrit'
      },
      {
        cover: {
          color: '#97A09C',
          src: 'the-crucifixion-in-the-bible',
          alt: 'Un manuscrit'
        },
        to: '/the-crucifixion-in-the-bible/',
        title: 'La crucifixion dans la bible'
      },

      {
        cover: {
          color: '#967D7A',
          src: 'youtube',
          alt: 'Une camera'
        },
        to: '/youtube/',
        title: 'Chaîne Youtube Recommandées'
      },
      {
        cover: {
          color: '#59463B',
          src: 'books',
          alt: 'Des livres'
        },
        to: '/books/',
        title: 'Livres Recommandés'
      },
      {
        cover: {
          color: '#CB885F',
          src: 'sites',
          alt: 'Un site internet'
        },
        to: '/sites/',
        title: 'Sites Recommandés'
      },
      {
        cover: {
          color: '#AFA69E',
          src: 'read-the-bible',
          alt: 'Une Bible'
        },
        to: '/read-the-bible/',
        title: 'Lire la Bible'
      },
      {
        cover: {
          color: '#64575A',
          src: 'social-networks',
          alt: "Ume icon d'appli"
        },
        to: '/social-networks/',
        title: 'Réseaux sociaux'
      },
      {
        cover: {
          color: '#ACB0BB',
          src: 'magazines',
          alt: 'Un magazine'
        },
        to: '/magazines/',
        title: 'Magazines'
      },
      {
        cover: {
          color: '#B18F66',
          src: 'gallery',
          alt: 'Une galerie de tableaux'
        },
        to: '/gallery/',
        title: "Galerie d'images"
      },
      {
        cover: {
          color: '#514A3C',
          src: 'coliseum',
          alt: 'Le logo de Coliseum'
        },
        to: '/coliseum/',
        title: 'Coliseum'
      },
      // {
      //   cover: {
      //     color: '#000',
      //     src: 'placeholder' // the-messiah-of-jesus
      //   ,,alt: 'La messianité de Jésus'
      //   },
      //   to: '/the-messiah-of-jesus/',
      //   title: 'La messianité de Jésus'
      // },
      // {
      //   cover: {
      //     color: '#3D342E',
      //     src: 'placeholder' // debates-tips
      //   ,,alt: 'Conseils de débats'
      //   },
      //   to: '/debates-tips/',
      //   title: 'Conseils de débats'
      // },
      // {
      //   cover: {
      //     color: '#CABA8C',
      //     src: 'placeholder' // free-will
      //   ,,alt: 'Le libre arbitre'
      //   },
      //   to: '/free-will/',
      //   title: 'Le libre arbitre'
      // },
      // {
      //   cover: {
      //     color: '#707377',
      //     src: 'placeholder' // search
      //   ,,alt: 'Recherche'
      //   },
      //   to: '/search/',
      //   title: 'Recherche'
      // },
      // {
      //   cover: {
      //     color: '#707377',
      //     src: 'placeholder'
      //   ,,alt: 'template'
      //   },
      //   to: '/template/',
      //   title: 'template'
      // },
      {
        cover: {
          color: '#A3917B',
          src: 'name-jesus',
          alt: 'Une Bible'
        },
        to: '/name-jesus/',
        title: 'Nom de Jésus'
      },
      {
        cover: {
          color: '#A3917B',
          src: 'name-god',
          alt: 'Une Bible'
        },
        to: '/name-god/',
        title: 'Nom de Dieu'
      }
      // {
      //   cover: {
      //     color: '#538E9C',
      //     src: 'questions-answer'
      //   ,alt: 'Tu as une questions ?'
      //   },
      //   to: '/questions-answer/',
      //   title: 'Tu as une questions ?',
      // }
    ]
  }

  static getBySlug(slug: string): ITopic | undefined {
    return this.getAll().find((topic) => topic.to === slug)
  }
}
