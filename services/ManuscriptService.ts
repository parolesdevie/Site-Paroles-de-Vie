import { ManuscriptsPlateformEnum } from './WebSiteService'

export default class ManuscriptService {
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
