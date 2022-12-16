import { IQuestion } from '~/types'

export default class QRService {
  constructor() {}

  static getAll(): IQuestion[] {
    return [
      {
        title: 'Comment faire des crêpes ?',
        slug: 'comment-faire-des-crepes',
      },
      {
        title: "C'est qui le goat ?",
        slug: 'cest-qui-le-goat',
      },
    ]
  }
}
