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

  static getManuscripts(): IWebSite[] {
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
    ]
  }
}
