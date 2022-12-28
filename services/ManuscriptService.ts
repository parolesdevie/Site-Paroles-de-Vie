import { IVideoLink, LanguageEnum, VideoLinkEnum } from '~~/types'
import { ManuscriptsPlateformEnum } from './WebSiteService'
import manuscriptVideosJson from './json/manuscript-videos.json'

export default class ManuscriptService {
  static getVideos(): IVideoLink[] {
    return manuscriptVideosJson.map((m: any) => {
      const { name, id } = m
      const lang = m.lang as LanguageEnum
      const source = m.source as VideoLinkEnum
      let url, thumbnail

      switch (source) {
        case VideoLinkEnum.YOUTUBE:
          url = 'https://youtu.be/' + id
          thumbnail = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
          break
        case VideoLinkEnum.DAILYMOTION:
          url = 'https://dai.ly/' + id
          thumbnail = 'https://www.dailymotion.com/thumbnail/video/' + id
          break
        default:
          url = ''
          thumbnail = ''
          break
      }

      return {
        lang,
        source,
        name,
        url,
        thumbnail,
      }
    })
  }

  static getPlateforms(): { name: ManuscriptsPlateformEnum; icon: string }[] {
    return [
      {
        name: ManuscriptsPlateformEnum.CODEX_SINATICUS_ORG,
        icon: 'logo-codexsinaiticus',
      },
      {
        name: ManuscriptsPlateformEnum.CENTER_STUDY_NT,
        icon: 'logo-center-study-nt',
      },
      {
        name: ManuscriptsPlateformEnum.DIGITAL_VATICAN_LIBRARY,
        icon: 'logo-vatlib',
      },
      {
        name: ManuscriptsPlateformEnum.BRITISH_LIBRARY,
        icon: 'logo-british-library',
      },
    ]
  }
}
