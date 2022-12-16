import axios from 'axios'
import { IQuestion, QuestionPlateformEnum } from '~/types'

const PROTOCOLE = 'https://'
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
        response: `<p>C'est qui le patron ? <a class="underline" href="https://youtu.be/mF3NWS_m_FY" target="_blank" rel="noopener noreferrer">C'est moi</a>.`,
      },
    ]
  }

  static async searchOnGotQuestions(keyWord: string): Promise<IQuestion[]> {
    // var bodyFormData = new FormData()
    // bodyFormData.append('searchTerm', keyWord)

    // let response
    // try {
    //   response = await axios({
    //     method: 'post',
    //     url: 'https://www.gotquestions.net/admin/BackendOrg/PopulateDropdownSearch?lid=6',
    //     data: bodyFormData,
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //   })
    // } catch (err) {
    //   console.error(err)
    // }
    // console.log('response>', response)
    const data = [
      {
        label: 'Dieu me pardonnera-t-il ? Dieu peut-il me pardonner ?',
        value:
          'https://www.gotquestions.org/Francais/Dieu-me-pardonnera-t-il.html',
      },
      {
        label: 'Quel est le lien entre le salut et le pardon ?',
        value: 'https://www.gotquestions.org/Francais/salut-et-pardon.html',
      },
      {
        label:
          "Comment les Juifs espèrent-ils recevoir le pardon de Dieu alors qu'ils n'offrent plus de sacrifices d'animaux ?",
        value: 'https://www.gotquestions.org/Francais/sacrifices-juifs.html',
      },
      {
        label: 'Comment pardonner à ceux qui pèchent contre moi ?',
        value: 'www.gotquestions.org/Francais/pardonner-aux-autres.html',
      },
      {
        label:
          'Dieu continuera-t-il de vous pardonner si vous commettez encore et encore le même péché ?',
        value:
          'https://www.gotquestions.org/Francais/pardonner-meme-peche.html',
      },
      {
        label:
          'Dieu pardonne-t-il les grands péchés ? Pardonnerait-il à un meurtrier ?',
        value:
          'https://www.gotquestions.org/Francais/Dieu-pardonne-grands-peches.html',
      },
    ]

    return data.map(({ label, value }) => ({
      plateform: QuestionPlateformEnum.GOT_QUESTIONS,
      title: label,
      href: value.startsWith(PROTOCOLE) ? value : PROTOCOLE + value,
    }))
  }
}
