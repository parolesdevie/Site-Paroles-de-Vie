import axios from 'axios'
import { SearchPlateformEnum, SearchResult } from '~~/types'

const API_ENDPOINT = 'http://178.170.13.79:8081'

export default class SearchService {
  constructor() {}

  static async searchOnEmcitv(keyWord: string): Promise<SearchResult[]> {
    let response
    try {
      response = await axios({
        method: 'get',
        url: `${API_ENDPOINT}/searchOnEmcitv/?search=${this.slugify(keyWord)}`
      })
    } catch (err) {
      console.error(err)
    }

    return response?.data.map((result: any) => ({
      ...result,
      plateform: SearchPlateformEnum.EMCITV
    }))
  }

  static async searchOnTopChretien(keyWord: string): Promise<SearchResult[]> {
    let response
    try {
      response = await axios({
        method: 'get',
        url: `https://toptv.topchretien.com/themes/histoires-de-la-bible/?complete=1&term=${this.slugify(
          keyWord
        )}`
      })
    } catch (err) {
      console.error(err)
    }

    return response?.data.map((response: any) => ({
      href: 'https://toptv.topchretien.com' + response._source.url,
      title: response._source.title,
      plateform: SearchPlateformEnum.TOP_CHRETIEN
    }))
  }

  static async searchOnFamilleChretienne(
    keyWord: string
  ): Promise<SearchResult[]> {
    let response
    try {
      response = await axios({
        method: 'get',
        url: `${API_ENDPOINT}/searchOnFamilleChretienne/?search=${this.slugify(
          keyWord
        )}`
      })
    } catch (err) {
      console.error(err)
    }

    return response?.data.map((result: any) => ({
      ...result,
      plateform: SearchPlateformEnum.FAMILLE_CHRETIENNE
    }))
  }

  static async searchOnJcsr(keyWord: string): Promise<SearchResult[]> {
    let response
    try {
      response = await axios({
        method: 'get',
        url: `${API_ENDPOINT}/searchOnJcsr/?search=${this.slugify(keyWord)}`
      })
    } catch (err) {
      console.error(err)
    }

    return response?.data.map((result: any) => ({
      ...result,
      plateform: SearchPlateformEnum.JCSR
    }))
  }

  static async searchOnAleteia(keyWord: string): Promise<SearchResult[]> {
    let response
    try {
      response = await axios({
        method: 'get',
        url: `${API_ENDPOINT}/searchOnAleteia/?search=${this.slugify(keyWord)}`
      })
    } catch (err) {
      console.error(err)
    }

    return response?.data.map((result: any) => ({
      ...result,
      plateform: SearchPlateformEnum.ALETEIA
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
