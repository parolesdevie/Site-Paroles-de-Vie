import { ITopic, ITopicCover } from '~~/types'
import topicJson from './json/topics.json'

const DEFAULT_ITopicCover: ITopicCover = {
  color: '#000',
  srcset: {
    mobile: `https://placehold.co/160x160,
       https://placehold.co/240x240 1.5x,
       https://placehold.co/320x320 2x,
       https://placehold.co/480x480 3x,
       https://placehold.co/640x640 4x`,
    desktop: `https://placehold.co/240x240,
       https://placehold.co/360x360 1.5x,
       https://placehold.co/480x480 2x,
       https://placehold.co/720x720 3x,
       https://placehold.co/960x960 4x`
  },
  src: {
    mobile: {
      '1x': 'https://placehold.co/160x160',
      '1.5x': '',
      '2x': '',
      '3x': '',
      '4x': ''
    },
    desktop: {
      '1x': 'https://placehold.co/240x240',
      '1.5x': '',
      '2x': '',
      '3x': '',
      '4x': ''
    }
  },
  alt: 'alt'
}
export default class TopicService {
  constructor() {}

  static getAll(): ITopic[] {
    return topicJson.filter((topic: any) => !topic.archive) as ITopic[]
  }

  static getBySlug(slug: string): ITopic | undefined {
    return this.getAll().find((topic) => topic.to === slug)
  }

  static getTopicCoverBySlug(slug: string): ITopic | undefined {
    return {
      ...DEFAULT_ITopicCover,
      ...this.getAll().find((topic) => topic.to === slug)?.cover
    }
  }
}
