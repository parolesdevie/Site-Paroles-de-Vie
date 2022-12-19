import { IWebSite } from '~/types'

export enum ManuscriptsPlateformEnum {
  CODEX_SINATICUS_ORG = 'Codex Sinaiticus .org',
  CENTER_STUDY_NT = 'Center for the Study of New Testament Manuscripts',
  DIGITAL_VATICAN_LIBRARY = 'Digital Vatican Library',
  BRITISH_LIBRARY = 'The British Library',
}

export default class WebSiteService {
  constructor() {}

  static getAll(): IWebSite[] {
    return [
      {
        name: 'Codex Sinaiticus',
        href: 'https://codexsinaiticus.org/en/',
      },
      {
        name: 'Codex Alexandrinus',
        href: 'https://manuscripts.csntm.org/manuscript/View/GA_02',
      },
      {
        name: 'Digital Vatican Library',
        href: 'https://digi.vatlib.it/mss/',
      },
      {
        name: 'Somme théologique saint thomas d’aquin (Français)',
        href: 'http://docteurangelique.free.fr/livresformatweb/sommes/1sommetheologique1apars.htm',
      },
      {
        name: "Exégèse des pères de l'église sur l'évangile (Français)",
        href: 'https://www.apologetique.net/EvangilePere/EvangilePere.aspx',
      },
      {
        name: 'Chaîne YouTube BibleProject (Français)',
        href: 'https://www.youtube.com/c/BibleProjectFran%C3%A7ais',
      },
      {
        name: 'Écrits des peres de l’Église (Anglais)',
        href: 'https://www.newadvent.org/fathers/',
      },
      {
        name: 'Sources Chrétiennes',
        href: 'https://sourceschretiennes.org/',
      },
      {
        name: 'jesusmarie',
        href: 'http://jesusmarie.free.fr/',
      },
    ]
  }

  static getManuscripts() {
    return {
      CODEX_SINATICUS: {
        name: 'Codex Sinaiticus',
        sites: [
          {
            name: ManuscriptsPlateformEnum.CODEX_SINATICUS_ORG,
            href: 'https://codexsinaiticus.org/en/',
          },
          {
            name: ManuscriptsPlateformEnum.BRITISH_LIBRARY,
            href: 'http://www.bl.uk/manuscripts/FullDisplay.aspx?ref=Add_MS_43725',
          },
          {
            name: ManuscriptsPlateformEnum.CENTER_STUDY_NT,
            href: 'https://manuscripts.csntm.org/manuscript/Group/GA_01',
          },
        ],
      },
      CODEX_ALEXANDRINUS: {
        name: 'Codex Alexandrinus',
        sites: [
          {
            name: ManuscriptsPlateformEnum.CENTER_STUDY_NT,
            href: 'https://manuscripts.csntm.org/manuscript/View/GA_02',
          },
        ],
      },
      CODEX_VATICANUS: {
        name: 'Codex Vaticanus',
        sites: [
          {
            name: ManuscriptsPlateformEnum.CENTER_STUDY_NT,
            href: 'https://manuscripts.csntm.org/manuscript/Group/GA_03',
          },
        ],
      },
      OTHERS: {
        name: 'Autres',
        sites: [
          {
            name: ManuscriptsPlateformEnum.DIGITAL_VATICAN_LIBRARY,
            href: 'https://digi.vatlib.it/mss/',
          },
          {
            name: ManuscriptsPlateformEnum.BRITISH_LIBRARY,
            href: 'https://www.bl.uk/manuscripts/',
          },
          {
            name: ManuscriptsPlateformEnum.CENTER_STUDY_NT,
            href: 'https://manuscripts.csntm.org/manuscript',
          },
        ],
      },
    }
  }

  static getBibles(): IWebSite[] {
    return [
      {
        name: 'Site levangile.com',
        href: 'https://www.levangile.com/Affichage-Multi-Bible.php',
      },
      {
        name: 'Site saintebible.com',
        href: 'https://saintebible.com/',
      },
      {
        name: 'Site jw.org',
        href: 'https://www.jw.org/fr/biblioth%C3%A8que/bible/nwt/livres/',
      },
      {
        name: 'Association Épiscopale Liturgique pour les pays Francophones',
        href: 'https://www.aelf.org/bible',
      },
      {
        name: 'Septante (Ancien Testament)',
        href: 'https://theotex.org/septuaginta/genese/genese_1.html',
      },
      {
        name: 'Nouveau Testament Grecque Francais',
        href: 'https://theotex.org/ntgf/matthieu/matthieu_1_gf.html',
      },
    ]
  }

  static getYoutubeChannels(): IWebSite[] {
    return [
      {
        name: 'DBK Infinite',
        href: 'https://www.youtube.com/@dbkinfinite',
      },
      {
        name: 'Theoloji',
        href: 'https://www.youtube.com/@Theoloji',
      },
      {
        name: 'Collectif Théophilos',
        href: 'https://www.youtube.com/@collectiftheophilos8273',
      },
      {
        name: 'Collectif Pistos-Yeshoua',
        href: 'https://www.youtube.com/@collectifpistos-yeshoua268',
      },
      {
        name: 'YESHUA MALAK',
        href: 'https://www.youtube.com/@yeshuamalak3706',
      },
      {
        name: 'Coliseum',
        href: 'https://www.youtube.com/@chaine-coliseum',
      },
    ]
  }
}
