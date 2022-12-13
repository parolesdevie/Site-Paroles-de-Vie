import { IWebSite } from '~/types'

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
            name: 'Codex Sinaiticus .org',
            href: 'https://codexsinaiticus.org/en/',
          },
          {
            name: 'Center for the Study of New Testament Manuscripts',
            href: 'https://manuscripts.csntm.org/manuscript/Group/GA_01',
          },
          {
            name: 'The British Library',
            href: 'http://www.bl.uk/manuscripts/FullDisplay.aspx?ref=Add_MS_43725',
          },
        ],
      },
      CODEX_ALEXANDRINUS: {
        name: 'Codex Alexandrinus',
        sites: [
          {
            name: 'Center for the Study of New Testament Manuscripts',
            href: 'https://manuscripts.csntm.org/manuscript/View/GA_02',
          },
        ],
      },
      CODEX_VATICANUS: {
        name: 'Codex Vaticanus',
        sites: [
          {
            name: 'Center for the Study of New Testament Manuscripts',
            href: 'https://manuscripts.csntm.org/manuscript/Group/GA_03',
          },
        ],
      },
      OTHERS: [
        {
          name: 'The British Library',
          href: 'https://www.bl.uk/manuscripts/',
        },
        {
          name: 'Center for the Study of New Testament Manuscripts',
          href: 'https://manuscripts.csntm.org/manuscript',
        },
        {
          name: 'Digital Vatican Library',
          href: 'https://digi.vatlib.it/mss/',
        },
      ],
    }
  }

  static getBibles() {
    return [
      {
        name: 'levangile.com',
        href: 'https://www.levangile.com/Affichage-Multi-Bible.php',
      },
      {
        name: 'saintebible.com',
        href: 'https://saintebible.com/',
      },
      {
        name: 'jw.org',
        href: 'https://www.jw.org/fr/biblioth%C3%A8que/bible/nwt/livres/',
      },
    ]
  }
}
