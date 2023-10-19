import { IArgument, IArgumentTopic } from '~/types'
import argumentJson from './json/arguments.json'

export default class ArgumentService {
  constructor() {}

  static getAll(): IArgument[] {
    return argumentJson as IArgument[]
  }

  static getAllTopics(): unknown[] {
    return [
      {
        title: 'Légitimité de Muhammad',
        slug: 'legitimacy-of-muhammad',
        cover: {
          srcset: {
            mobile:
              '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@1x.webp, /images/arguments/topics/SiW5hBJJCgk/mobile/cover@1.5x.webp 1.5x, /images/arguments/topics/SiW5hBJJCgk/mobile/cover@2x.webp 2x, /images/arguments/topics/SiW5hBJJCgk/mobile/cover@3x.webp 3x, /images/arguments/topics/SiW5hBJJCgk/mobile/cover@4x.webp 4x',
            desktop:
              '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@1x.webp, /images/arguments/topics/SiW5hBJJCgk/desktop/cover@1.5x.webp 1.5x, /images/arguments/topics/SiW5hBJJCgk/desktop/cover@2x.webp 2x, /images/arguments/topics/SiW5hBJJCgk/desktop/cover@3x.webp 3x, /images/arguments/topics/SiW5hBJJCgk/desktop/cover@4x.webp 4x'
          },
          src: {
            mobile: {
              '1x': '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@1x.webp',
              '1.5x':
                '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@1.5x.webp',
              '2x': '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@2x.webp',
              '3x': '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@3x.webp',
              '4x': '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@4x.webp'
            },
            desktop: {
              '1x': '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@1x.webp',
              '1.5x':
                '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@1.5x.webp',
              '2x': '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@2x.webp',
              '3x': '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@3x.webp',
              '4x': '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@4x.webp'
            }
          },
          alt: ''
        }
      },
      {
        title: "Légitimité de l'Islam",
        slug: 'legitimacy-of-islam',
        cover: {
          srcset: {
            mobile:
              '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@1x.webp, /images/arguments/topics/SiW5hBJJCgk/mobile/cover@1.5x.webp 1.5x, /images/arguments/topics/SiW5hBJJCgk/mobile/cover@2x.webp 2x, /images/arguments/topics/SiW5hBJJCgk/mobile/cover@3x.webp 3x, /images/arguments/topics/SiW5hBJJCgk/mobile/cover@4x.webp 4x',
            desktop:
              '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@1x.webp, /images/arguments/topics/SiW5hBJJCgk/desktop/cover@1.5x.webp 1.5x, /images/arguments/topics/SiW5hBJJCgk/desktop/cover@2x.webp 2x, /images/arguments/topics/SiW5hBJJCgk/desktop/cover@3x.webp 3x, /images/arguments/topics/SiW5hBJJCgk/desktop/cover@4x.webp 4x'
          },
          src: {
            mobile: {
              '1x': '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@1x.webp',
              '1.5x':
                '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@1.5x.webp',
              '2x': '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@2x.webp',
              '3x': '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@3x.webp',
              '4x': '/images/arguments/topics/SiW5hBJJCgk/mobile/cover@4x.webp'
            },
            desktop: {
              '1x': '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@1x.webp',
              '1.5x':
                '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@1.5x.webp',
              '2x': '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@2x.webp',
              '3x': '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@3x.webp',
              '4x': '/images/arguments/topics/SiW5hBJJCgk/desktop/cover@4x.webp'
            }
          },
          alt: ''
        }
      },
      {
        title: 'Vrai Sauveur',
        slug: 'true-saver',
        cover: {
          srcset: {
            mobile:
              '/images/arguments/topics/V9eCfAVnQJY/mobile/cover@1x.webp, /images/arguments/topics/V9eCfAVnQJY/mobile/cover@1.5x.webp 1.5x, /images/arguments/topics/V9eCfAVnQJY/mobile/cover@2x.webp 2x, /images/arguments/topics/V9eCfAVnQJY/mobile/cover@3x.webp 3x, /images/arguments/topics/V9eCfAVnQJY/mobile/cover@4x.webp 4x',
            desktop:
              '/images/arguments/topics/V9eCfAVnQJY/desktop/cover@1x.webp, /images/arguments/topics/V9eCfAVnQJY/desktop/cover@1.5x.webp 1.5x, /images/arguments/topics/V9eCfAVnQJY/desktop/cover@2x.webp 2x, /images/arguments/topics/V9eCfAVnQJY/desktop/cover@3x.webp 3x, /images/arguments/topics/V9eCfAVnQJY/desktop/cover@4x.webp 4x'
          },
          src: {
            mobile: {
              '1x': '/images/arguments/topics/V9eCfAVnQJY/mobile/cover@1x.webp',
              '1.5x':
                '/images/arguments/topics/V9eCfAVnQJY/mobile/cover@1.5x.webp',
              '2x': '/images/arguments/topics/V9eCfAVnQJY/mobile/cover@2x.webp',
              '3x': '/images/arguments/topics/V9eCfAVnQJY/mobile/cover@3x.webp',
              '4x': '/images/arguments/topics/V9eCfAVnQJY/mobile/cover@4x.webp'
            },
            desktop: {
              '1x': '/images/arguments/topics/V9eCfAVnQJY/desktop/cover@1x.webp',
              '1.5x':
                '/images/arguments/topics/V9eCfAVnQJY/desktop/cover@1.5x.webp',
              '2x': '/images/arguments/topics/V9eCfAVnQJY/desktop/cover@2x.webp',
              '3x': '/images/arguments/topics/V9eCfAVnQJY/desktop/cover@3x.webp',
              '4x': '/images/arguments/topics/V9eCfAVnQJY/desktop/cover@4x.webp'
            }
          },
          alt: ''
        }
      },
      {
        title: 'Divinité de Jésus',
        slug: 'divinity-of-jesus',
        cover: {
          srcset: {
            mobile:
              '/images/arguments/topics/6MIN6jjDgWo/mobile/cover@1x.webp, /images/arguments/topics/6MIN6jjDgWo/mobile/cover@1.5x.webp 1.5x, /images/arguments/topics/6MIN6jjDgWo/mobile/cover@2x.webp 2x, /images/arguments/topics/6MIN6jjDgWo/mobile/cover@3x.webp 3x, /images/arguments/topics/6MIN6jjDgWo/mobile/cover@4x.webp 4x',
            desktop:
              '/images/arguments/topics/6MIN6jjDgWo/desktop/cover@1x.webp, /images/arguments/topics/6MIN6jjDgWo/desktop/cover@1.5x.webp 1.5x, /images/arguments/topics/6MIN6jjDgWo/desktop/cover@2x.webp 2x, /images/arguments/topics/6MIN6jjDgWo/desktop/cover@3x.webp 3x, /images/arguments/topics/6MIN6jjDgWo/desktop/cover@4x.webp 4x'
          },
          src: {
            mobile: {
              '1x': '/images/arguments/topics/6MIN6jjDgWo/mobile/cover@1x.webp',
              '1.5x':
                '/images/arguments/topics/6MIN6jjDgWo/mobile/cover@1.5x.webp',
              '2x': '/images/arguments/topics/6MIN6jjDgWo/mobile/cover@2x.webp',
              '3x': '/images/arguments/topics/6MIN6jjDgWo/mobile/cover@3x.webp',
              '4x': '/images/arguments/topics/6MIN6jjDgWo/mobile/cover@4x.webp'
            },
            desktop: {
              '1x': '/images/arguments/topics/6MIN6jjDgWo/desktop/cover@1x.webp',
              '1.5x':
                '/images/arguments/topics/6MIN6jjDgWo/desktop/cover@1.5x.webp',
              '2x': '/images/arguments/topics/6MIN6jjDgWo/desktop/cover@2x.webp',
              '3x': '/images/arguments/topics/6MIN6jjDgWo/desktop/cover@3x.webp',
              '4x': '/images/arguments/topics/6MIN6jjDgWo/desktop/cover@4x.webp'
            }
          },
          alt: ''
        }
      }
    ]
  }
}
