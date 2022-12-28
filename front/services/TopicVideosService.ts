import { IVideoLink, LanguageEnum, VideoLinkEnum } from '~~/types'
import topicVideosJson from './json/topic-videos.json'

export default class TopicVideosService {
  static getAll(): IVideoLink[] {
    return topicVideosJson.map((m: any) => {
      const { name, id, topic } = m
      const lang = m.lang as LanguageEnum
      const source = m.source as VideoLinkEnum
      let url, thumbnail

      switch (source) {
        case VideoLinkEnum.YOUTUBE:
          url = 'https://youtu.be/' + id
          thumbnail = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
          break
        case VideoLinkEnum.YOUTUBE_SHORT:
          url = `https://youtube.com/shorts/${id}`
          thumbnail = `http://i3.ytimg.com/vi/${id}/mqdefault.jpg`
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
        topic,
      }
    })
  }

  static getVideosByTopic(topicName: string): IVideoLink[] {
    return this.getAll().filter(({ topic }) => topic === topicName)
  }
}
