import axios from 'axios'
import { IQuestion, QuestionPlateformEnum } from '~/types'

export default class QRService {
  constructor() {}

  static getAll(): IQuestion[] {
    return [
      {
        title: 'Comment faire des crêpes ?',
        slug: 'comment-faire-des-crepes',
        response: `Voici <a class="underline" href="https://www.marmiton.org/recettes/recette_pate-a-crepes_12372.aspx" target="_blank" rel="noopener noreferrer">comment faire des crêpes</a>.`,
      },
      {
        title: "C'est qui le goat ?",
        slug: 'cest-qui-le-goat',
        response: `C'est qui le patron ? <a class="underline" href="https://youtu.be/mF3NWS_m_FY" target="_blank" rel="noopener noreferrer">C'est moi</a>.`,
      },
    ]
  }

  static async searchOnGotQuestions(keyWord: string): Promise<IQuestion[]> {
    let response
    try {
      response = await axios({
        method: 'get',
        url: `http://localhost:5000/searchOnGotQuestions/?search=${this.slugify(
          keyWord
        )}`,
      })
    } catch (err) {
      console.error(err)
    }

    return response?.data.map((result: any) => ({
      ...result,
      plateform: QuestionPlateformEnum.GOT_QUESTIONS,
    }))
  }

  static slugify(value: string): string {
    const a =
      'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b =
      'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return value
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(p, (c) => b.charAt(a.indexOf(c)))
      .replace(/&/g, '-and-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
  }
}
