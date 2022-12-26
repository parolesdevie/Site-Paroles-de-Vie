import { RatioEnum } from '~/types'
import galleryJson from '~/static/json/gallery-images.json'

export default class GalleryService {
  static getAll(): unknown[] {
    return galleryJson.map((image) => {
      const { id } = image
      const ratio = image.ratio as RatioEnum

      return {
        id,
        ratio,
      }
    })
  }
}
