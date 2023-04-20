export default class StoriesService {
  constructor() {}

  static getAll(): any[] {
    return [
      {
        alt: 'paraclet',
        slug: 'paraclet',
        title: 'Le Paraclet',
        stroriesCount: 103,
        color: '#CDA625',
        imgSlug: 'Paraclet – '
      },
      {
        alt: 'le-dilemme-de-l-adultere',
        slug: 'le-dilemme-de-l-adultere',
        title: "Le dilemme de l'adultere",
        stroriesCount: 6,
        color: '#E56355',
        imgSlug: "Story Dilemme de l'adultère – "
      },
      {
        alt: 'le-dilemme-du-paradis',
        slug: 'le-dilemme-du-paradis',
        title: 'Le dilemme du Paradis',
        stroriesCount: 6,
        color: '#E56355',
        imgSlug: 'Story Dilemme du Paradis – '
      },
      {
        alt: 'le-dilemme-du-fils-de-dieu',
        slug: 'le-dilemme-du-fils-de-dieu',
        title: 'Le dilemme du fils de Dieu',
        stroriesCount: 8,
        color: '#E56355',
        imgSlug: 'Story Dilemme du fils de Dieu – '
      },
      {
        alt: 'les-pieds-d-Allah',
        slug: 'les-pieds-d-Allah',
        title: "Les pieds d'Allah",
        stroriesCount: 9,
        color: '#E56355',
        imgSlug: 'Allah - Pieds – '
      }
    ]
  }
}
