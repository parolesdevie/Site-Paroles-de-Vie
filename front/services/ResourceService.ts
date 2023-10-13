import { ISource } from '~~/types'
import resourcesJson from './json/resources.json'

export default class ResourceService {
  static getAll(): ISource[] {
    return resourcesJson.map((topic: any) => topic)
  }

  static getBySlug(slug: string): ISource[] | undefined {
    return this.getAll().filter((resource) => resource.slug === slug)
  }
}
