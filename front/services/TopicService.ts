import { ITopic } from '~~/types'

export default class TopicService {
  constructor() {}

  static getAll(): ITopic[] {
    return [
      {
        cover: {
          color: '#8F6C4D',
          src: 'schilo'
        },
        to: '/schilo/',
        title: 'Le Schilo'
      },
      {
        cover: {
          color: '#A3917B',
          src: 'gospel-of-barnabas'
        },
        to: '/gospel-of-barnabas/',
        title: "L'Évangile de Barnabé"
      },
      {
        cover: {
          color: '#A3917B',
          src: 'deuteronomy-18-18'
        },
        to: '/deuteronomy-18-18/',
        title: 'Deutéronome 18:18'
      },
      {
        cover: {
          color: '#77875B',
          src: 'the-parable-of-the-winegrowers'
        },
        to: '/the-parable-of-the-winegrowers/',
        title: 'La parabole des vignerons'
      },
      // {
      //   cover: {
      //     color: '#356193',
      //     src: 'live'
      //   },
      //   to: '/live/',
      //   title: 'LIVE'
      // },
      {
        cover: {
          color: '#8E7B6E',
          src: 'stories'
        },
        to: '/stories/',
        title: 'Stories'
      },
      {
        cover: {
          color: '#68513A',
          src: 'almanach'
        },
        to: '/almanach/',
        title: 'Almanach'
      },
      {
        cover: {
          color: '#9D928C',
          src: 'documents'
        },
        to: '/documents/',
        title: 'Documents PDF'
      },
      {
        cover: {
          color: '#',
          src: 'podcast'
        },
        to: '/podcast/',
        title: 'Podcast'
      },
      {
        cover: {
          color: '#C2B17D',
          src: 'manuscript'
        },
        to: '/manuscripts/',
        title: 'Manuscrits'
      },
      {
        cover: {
          color: '#625241',
          src: 'biblical-textual-criticism'
        },
        to: '/biblical-textual-criticism/',
        title: 'Critique textuelle'
      },
      {
        cover: {
          color: '#6A5847',
          src: 'gospel'
        },
        to: '/gospel/',
        title: 'Louanges'
      },
      {
        cover: {
          color: '#887D6D',
          src: 'soreg'
        },
        to: '/soreg/',
        title: 'Le Soreg'
      },
      {
        cover: {
          color: '#A66B38',
          src: 'paraclete'
        },
        to: '/paraclete/',
        title: 'Le Paraclet'
      },
      {
        cover: {
          color: '#78674A',
          src: 'ahmad'
        },
        to: '/ahmad/',
        title: 'ahmad'
      },
      {
        cover: {
          color: '#8A7A6F',
          src: 'the-divinity-of-jesus'
        },
        to: '/the-divinity-of-jesus/',
        title: 'La divinité de Jésus'
      },
      {
        cover: {
          color: '#6A574D',
          src: 'the-falsification-of-the-bible'
        },
        to: '/the-falsification-of-the-bible/',
        title: 'La falsification de la bible'
      },
      {
        cover: {
          color: '#97A09C',
          src: 'the-crucifixion-in-the-bible'
        },
        to: '/the-crucifixion-in-the-bible/',
        title: 'La crucifixion dans la bible'
      },

      {
        cover: {
          color: '#967D7A',
          src: 'youtube'
        },
        to: '/youtube/',
        title: 'Chaîne Youtube Recommandées'
      },
      {
        cover: {
          color: '#59463B',
          src: 'books'
        },
        to: '/books/',
        title: 'Livres Recommandés'
      },
      {
        cover: {
          color: '#CB885F',
          src: 'sites'
        },
        to: '/sites/',
        title: 'Sites Recommandés'
      },
      {
        cover: {
          color: '#AFA69E',
          src: 'read-the-bible'
        },
        to: '/read-the-bible/',
        title: 'Lire la Bible'
      },
      {
        cover: {
          color: '#64575A',
          src: 'social-networks'
        },
        to: '/social-networks/',
        title: 'Réseaux sociaux'
      },
      {
        cover: {
          color: '#ACB0BB',
          src: 'magazines'
        },
        to: '/magazines/',
        title: 'Magazines'
      },
      {
        cover: {
          color: '#B18F66',
          src: 'gallery'
        },
        to: '/gallery/',
        title: "Galerie d'images"
      },
      {
        cover: {
          color: '#514A3C',
          src: 'coliseum'
        },
        to: '/coliseum/',
        title: 'Coliseum'
      },
      // {
      //   cover: {
      //     color: '#000',
      //     src: 'placeholder' // the-messiah-of-jesus
      //   },
      //   to: '/the-messiah-of-jesus/',
      //   title: 'La messianité de Jésus'
      // },
      // {
      //   cover: {
      //     color: '#3D342E',
      //     src: 'placeholder' // debates-tips
      //   },
      //   to: '/debates-tips/',
      //   title: 'Conseils de débats'
      // },
      // {
      //   cover: {
      //     color: '#CABA8C',
      //     src: 'placeholder' // free-will
      //   },
      //   to: '/free-will/',
      //   title: 'Le libre arbitre'
      // },
      // {
      //   cover: {
      //     color: '#707377',
      //     src: 'placeholder' // search
      //   },
      //   to: '/search/',
      //   title: 'Recherche'
      // },
      // {
      //   cover: {
      //     color: '#707377',
      //     src: 'placeholder'
      //   },
      //   to: '/template/',
      //   title: 'template'
      // },
      {
        cover: {
          color: '#A3917B',
          src: 'name-jesus'
        },
        to: '/name-jesus/',
        title: 'Nom de Jésus'
      },
      {
        cover: {
          color: '#A3917B',
          src: 'name-god'
        },
        to: '/name-god/',
        title: 'Nom de Dieu'
      }
      // {
      //   cover: {
      //     color: '#538E9C',
      //     src: 'questions-answer'
      //   },
      //   to: '/questions-answer/',
      //   title: 'Tu as une questions ?'
      // }
    ]
  }

  static getBySlug(slug: string): ITopic | undefined {
    return this.getAll().find((topic) => topic.to === slug)
  }
}
