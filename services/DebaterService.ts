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
        pseudo: 'Fidelix Verax',
        name: 'Fidelix Verax',
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
