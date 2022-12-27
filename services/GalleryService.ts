import { IGalleryImage, RatioEnum } from '~/types'
import galleryJson from './json/gallery-images.json'

export default class GalleryService {
  static getAll(): IGalleryImage[] {
    return galleryJson.map((image: any) => {
      const { id } = image
      const ratio = image.ratio as RatioEnum

      return {
        id,
        ratio,
      }
    })
  }
}
