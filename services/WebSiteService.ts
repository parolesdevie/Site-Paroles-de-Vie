import { IWebSite } from "~/types";

export default class WebSiteService {
    constructor() {
    }

    static getAll(): IWebSite[] {
        return [
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
        ]
    }
}