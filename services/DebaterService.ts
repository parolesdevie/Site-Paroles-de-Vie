import { IDebaterProfils } from '~/types'

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
        religion: 'Musulman',
      },
      {
        id: 2,
        pseudo: 'Georges Autran',
        name: 'Georges Autran',
        religion: 'Chrétien',
      },
      {
        id: 3,
        pseudo: 'Izanami',
        name: 'Izanami',
        religion: 'Chrétien',
      },
      {
        id: 4,
        pseudo: 'JMS',
        name: 'JMS',
        religion: 'Chrétien',
      },
      {
        id: 5,
        pseudo: 'Sham',
        name: 'Sham',
        religion: 'Chrétien',
      },
      {
        id: 6,
        pseudo: 'Mengo',
        name: 'Mengo',
        religion: 'Musulman',
      },
      {
        id: 7,
        pseudo: 'Hanane',
        name: 'Hanane',
        religion: 'Musulman',
      },
      {
        id: 8,
        pseudo: 'Ali',
        name: 'Ali',
        religion: 'Musulman',
      },
      {
        id: 9,
        pseudo: 'Ayman',
        name: 'Ayman',
        religion: 'Musulman',
      },
      {
        id: 10,
        pseudo: 'Bénévolence',
        name: 'Bénévolence',
        religion: 'Chrétien',
      },
      {
        id: 11,
        pseudo: 'Fidelix Verax',
        name: 'Fidelix Verax',
        religion: 'Chrétien',
      },
      {
        id: 12,
        pseudo: 'Qalev',
        name: 'Qalev',
        religion: 'Chrétien',
      },
      {
        id: 13,
        pseudo: 'Raph',
        name: 'Raph',
        religion: 'Chrétien',
      },
      {
        id: 14,
        pseudo: 'Jacques',
        name: 'Jacques',
        religion: 'Chrétien',
      },
      {
        id: 15,
        pseudo: 'Daniel',
        name: 'Daniel',
        religion: 'Musulman',
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
