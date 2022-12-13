import { DebatPlateformEnum, IDebat } from '~/types'
import DebaterService from './DebaterService'

export default class DebateService {
  constructor() {}

  static getAll(): IDebat[] {
    return [
      {
        topic: 'the-parable-of-the-winegrowers',
        date: '27/10/2022',
        url: 'https://youtu.be/PVMAeP2virw',
        subject: 'La Parabole des Vignerons',
        debaters: [
          { ...DebaterService.getByPseudo('JMS'), team: 0 },
          { ...DebaterService.getByPseudo('Hanane'), team: 1 },
          { ...DebaterService.getByPseudo('Ali'), team: 1 },
        ],
        plateform: DebatPlateformEnum.YOUTUBE,
      },
      {
        topic: 'the-parable-of-the-winegrowers',
        date: '07/07/2022',
        url: 'https://youtu.be/PVMAeP2virw',
        subject: 'La Parabole des Vignerons',
        debaters: [
          { ...DebaterService.getByPseudo('Sham'), team: 0 },
          { ...DebaterService.getByPseudo('Mengo'), team: 1 },
        ],
        plateform: DebatPlateformEnum.YOUTUBE,
      },
      {
        topic: 'the-parable-of-the-winegrowers',
        date: '07/07/2022',
        url: 'https://youtu.be/qm9e5onmH-Y',
        subject: "JESUS A ANNONCE L'ISLAM PART 5",
        debaters: [
          { ...DebaterService.getByPseudo(undefined), team: 0 },
          { ...DebaterService.getByPseudo('Bénévolence'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 },
        ],
        plateform: DebatPlateformEnum.YOUTUBE,
      },
      {
        topic: 'the-parable-of-the-winegrowers',
        date: '07/07/2022',
        url: 'https://youtu.be/iZ3CGDNSVdw',
        subject: "JESUS A ANNONCE L'ISLAM PART 5",
        debaters: [
          { ...DebaterService.getByPseudo(undefined), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 },
        ],
        plateform: DebatPlateformEnum.YOUTUBE,
      },
      {
        topic: 'the-parable-of-the-winegrowers',
        date: '02/07/2022',
        url: 'https://youtu.be/euB4WhtCem4',
        subject: "DÉBAT INTER-RELIGIEUX : L'ISLAM EST DANS LA BIBLE ! PART III",
        debaters: [
          { ...DebaterService.getByPseudo('Bénévolence'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 },
        ],
        plateform: DebatPlateformEnum.YOUTUBE,
      },
      {
        topic: 'the-parable-of-the-winegrowers',
        date: '26/06/2022',
        url: 'https://youtu.be/-YhEqfCW_sc',
        subject: "DÉBAT INTER-RELIGIEUX : L'ISLAM EST DANS LA BIBLE ! PART II",
        debaters: [
          { ...DebaterService.getByPseudo('Bénévolence'), team: 0 },
          { ...DebaterService.getByPseudo(undefined), team: 0 },
          { ...DebaterService.getByPseudo('Izanami'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 },
          { ...DebaterService.getByPseudo('Ayman'), team: 1 },
        ],
        plateform: DebatPlateformEnum.YOUTUBE,
      },
      {
        topic: 'the-parable-of-the-winegrowers',
        date: '25/06/2022',
        url: 'https://youtu.be/fFo4sKl6BJk',
        subject: "DÉBAT INTER-RELIGIEUX : L'ISLAM EST DANS LA BIBLE !",
        debaters: [
          { ...DebaterService.getByPseudo('Georges Autran'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 },
        ],
        plateform: DebatPlateformEnum.YOUTUBE,
      },
      {
        topic: 'the-crucifixion-in-the-bible',
        date: '10/09/2022',
        url: 'https://youtu.be/xms5pzrT_7Y',
        subject: 'DEBAT MUSLIM - CHRETIEN SUR LA MORT DE JESUS !',
        debaters: [
          { ...DebaterService.getByPseudo('Georges Autran'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 },
        ],
        plateform: DebatPlateformEnum.YOUTUBE,
      },
      {
        topic: 'the-crucifixion-in-the-bible',
        date: '20/08/2022',
        url: 'https://youtu.be/PjN6y_P1INg',
        subject: 'Collectif Theophilos La crucifixiondans la bible',
        debaters: [
          { ...DebaterService.getByPseudo('Fidelix Verax'), team: 0 },
          { ...DebaterService.getByPseudo('Qalev'), team: 0 },
          { ...DebaterService.getByPseudo('Raph'), team: 0 },
          { ...DebaterService.getByPseudo('Jacques'), team: 0 },
          { ...DebaterService.getByPseudo('Daniel'), team: 1 },
        ],
        plateform: DebatPlateformEnum.YOUTUBE,
      },
      {
        topic: 'the-crucifixion-in-the-bible',
        date: '20/08/2022',
        url: 'https://youtu.be/0beBalbM_nM',
        subject: 'Collectif Theophilos La crucifixiondans la bible',
        debaters: [
          { ...DebaterService.getByPseudo(undefined), team: 0 },
          { ...DebaterService.getByPseudo('Izanami'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 },
        ],
        plateform: DebatPlateformEnum.YOUTUBE,
      },
    ]
  }

  static getByDebaterId(debaterId: number): IDebat[] | undefined {
    return this.getAll().filter(
      (debate) =>
        debate.debaters.findIndex((debater) => debater.id === debaterId) !== -1
    )
  }

  static getByTopic(topic: string): IDebat[] | undefined {
    return this.getAll().filter((debate) => debate.topic === topic)
  }
}
