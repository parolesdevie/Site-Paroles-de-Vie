export default class StoriesService {
  constructor() {}

  static getAll(): any[] {
    return [
      {
        alt: 'paraclet',
        slug: 'paraclet',
        title: 'Le Paraclet',
        stroriesCount: 103,
        imgSlug: 'Paraclet – '
      },
      {
        alt: 'le-dilemme-de-l-adultere',
        slug: 'le-dilemme-de-l-adultere',
        title: "Le dilemme de l'adultere",
        stroriesCount: 6,
        imgSlug: "Story Dilemme de l'adultère – "
      },
      {
        alt: 'le-dilemme-du-paradis',
        slug: 'le-dilemme-du-paradis',
        title: 'Le dilemme du Paradis',
        stroriesCount: 6,
        imgSlug: 'Story Dilemme du Paradis – '
      }
    ]
  }
}
