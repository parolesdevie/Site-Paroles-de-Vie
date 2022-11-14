import { ILink } from "~/types";

export default class MenuService {
    constructor() {
    }

    static getMainMenu(): ILink[] {
        return [
            {
                to: '/',
                name: 'Accueil',
            },
            {
                to: '/documents',
                name: 'Documents',
            },
            {
                to: '/books',
                name: 'Livres',
            },
            {
                to: '/sites',
                name: 'Sites',
            },
            {
                to: '/magazines',
                name: 'Magazine',
            },
        ]
    }

    static getDiscordMenu(): ILink[] {
        return [
            {
                to: 'https://discord.gg/ezWDkJn5M7',
                name: 'Collectif Théophilos',
            },
            {
                to: 'https://discord.gg/Qu4sqnpYFz',
                name: 'Coliseum',
            },
        ]
    }
}