import { DebatReligionEnum, IDebaterProfils } from '~/types'

const UNKNOW_DEBATER: IDebaterProfils = {
  id: -1,
  pseudo: undefined,
  name: undefined,
}

export default class DebaterService {
  constructor() {}

  static getAll(): IDebaterProfils[] {
    return [
      {
        id: 1,
        pseudo: 'Ismaïl al Hanifi',
        name: 'Ismaïl al Hanifi',
        religion: DebatReligionEnum.MUSLIM,
      },
      {
        id: 2,
        pseudo: 'Georges Autran',
        name: 'Georges Autran',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 3,
        pseudo: 'Izanami',
        name: 'Izanami',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 4,
        pseudo: 'JMS',
        name: 'JMS',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 5,
        pseudo: 'Sham',
        name: 'Sham',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 6,
        pseudo: 'Mengo',
        name: 'Mengo',
        religion: DebatReligionEnum.MUSLIM,
      },
      {
        id: 7,
        pseudo: 'Hanane',
        name: 'Hanane',
        religion: DebatReligionEnum.MUSLIM,
      },
      {
        id: 8,
        pseudo: 'Ali',
        name: 'Ali',
        religion: DebatReligionEnum.MUSLIM,
      },
      {
        id: 9,
        pseudo: 'Ayman',
        name: 'Ayman',
        religion: DebatReligionEnum.MUSLIM,
      },
      {
        id: 10,
        pseudo: 'Bénévolence',
        name: 'Bénévolence',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 11,
        pseudo: 'Fidelis Verax',
        name: 'Fidelis Verax',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 12,
        pseudo: 'Qalev',
        name: 'Qalev',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 13,
        pseudo: 'Raph',
        name: 'Raph',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 14,
        pseudo: 'Jacques',
        name: 'Jacques',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 15,
        pseudo: 'Daniel',
        name: 'Daniel',
        religion: DebatReligionEnum.MUSLIM,
      },
      {
        id: 16,
        pseudo: 'Karim al-Hanifi',
        name: 'Karim al-Hanifi',
        religion: DebatReligionEnum.MUSLIM,
      },
      {
        id: 17,
        pseudo: 'Arnaud Dumouch',
        name: 'Arnaud Dumouch',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 18,
        pseudo: 'Sam Shamoun',
        name: 'Sam Shamoun',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 19,
        pseudo: 'Gabriel Hagaï',
        name: 'Gabriel Hagaï',
        religion: DebatReligionEnum.JEWISH,
      },
      {
        id: 20,
        pseudo: 'Metmati Maamar',
        name: 'Metmati Maamar',
        religion: DebatReligionEnum.MUSLIM,
      },
      {
        id: 21,
        pseudo: 'Abdullah al-Hanifi',
        name: 'Abdullah al-Hanifi',
        religion: DebatReligionEnum.MUSLIM,
      },
      {
        id: 22,
        pseudo: 'Morgan Priest',
        name: 'Morgan Priest',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 23,
        pseudo: 'Said Oujibou',
        name: 'Said Oujibou',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 24,
        pseudo: 'Guy Pages',
        name: 'Guy Pages',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 25,
        pseudo: 'Odon Lafontaine',
        name: 'Odon Lafontaine',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 26,
        pseudo: 'David wood',
        name: 'David wood',
        religion: DebatReligionEnum.CHRISTIAN,
      },
      {
        id: 27,
        pseudo: 'Zakaria',
        name: 'Zakaria',
        religion: DebatReligionEnum.MUSLIM,
      },
      {
        id: 28,
        pseudo: 'Alex',
        name: 'Alex',
        religion: DebatReligionEnum.CHRISTIAN,
      },
    ]
  }

  static getByPseudo(pseudo: string | undefined): IDebaterProfils {
    return pseudo
      ? this.getAll().find((debater) => debater.pseudo === pseudo) ||
          UNKNOW_DEBATER
      : UNKNOW_DEBATER
  }

  static getById(id: number | undefined): IDebaterProfils {
    return id
      ? this.getAll().find((debater) => debater.id === id) || UNKNOW_DEBATER
      : UNKNOW_DEBATER
  }
}
