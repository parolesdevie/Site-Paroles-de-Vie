import { GospelCategoryEnum, IVideoLink, VideoLinkEnum } from '~/types'
import gospelVideosJson from '~/static/json/gospel-videos.json'

export default class GospelService {
  static getAll(): IVideoLink[] {
    return gospelVideosJson.map((g) => {
      const { name, id } = g
      const category = g.category as GospelCategoryEnum
      const source = g.source as VideoLinkEnum
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
        source,
        category,
        name,
        url,
        thumbnail,
      }
    })
  }

  static getByCategory(categoryName: GospelCategoryEnum): IVideoLink[] {
    return this.getAll().filter(({ category }) => category === categoryName)
  }
}
