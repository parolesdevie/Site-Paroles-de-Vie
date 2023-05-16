import { DebatPlateformEnum, DebatReligionEnum, IDebat } from '~~/types'
import DebaterService from './DebaterService'
import debatsJson from './json/debats.json'

export default class DebateService {
  constructor() {}

  static getAll(): IDebat[] {
    return [
      {
        topics: ['ahmad', 'open-mic'],
        date: '28/04/2023',
        url: 'https://youtu.be/Ufl9W1Mi9Ac?t=381',
        subject: "Jésus n'a jamais annoncer Ahmad [Open Mic 2023]",
        debaters: [
          { ...DebaterService.getByPseudo('Bénévolence'), team: 0 },
          {
            ...DebaterService.getByPseudo('Islam'),
            team: 1
          },
          {
            ...DebaterService.getByPseudo('Alheurelahess'),
            team: 1
          },
          {
            ...DebaterService.getByPseudo('Bilel ibn ahmed'),
            team: 1
          }
        ],
        plateform: DebatPlateformEnum.DISCORD
      },
      {
        topics: ['the-paraclet'],
        date: '28/04/2023',
        url: 'https://youtu.be/Ufl9W1Mi9Ac?t=3395',
        subject: "Jésus n'a jamais annoncer Ahmad [Open Mic 2023]",
        debaters: [
          { ...DebaterService.getByPseudo('Bénévolence'), team: 0 },
          {
            ...DebaterService.getByPseudo(undefined), // Fête à la hess
            team: 1
          }
        ],
        plateform: DebatPlateformEnum.DISCORD
      },
      {
        topics: ['the-paraclet'],
        date: '01/03/2023',
        url: 'https://youtu.be/h_15wSEgfMQ',
        subject:
          "Qui est le paraclet annoncé par Jésus dans son discours d'adieux dans le corpus johannique ?",
        debaters: [
          { ...DebaterService.getByPseudo('Bénévolence'), team: 0 },
          {
            ...DebaterService.getByPseudo('Ayman'),
            team: 1
          }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-paraclet'],
        date: '30/01/2023', // date aproximative
        url: 'https://youtu.be/YOckPkg8Km4',
        subject:
          "Qui est le paraclet annoncé par Jésus dans son discours d'adieux dans le corpus johannique ?",
        debaters: [
          { ...DebaterService.getByPseudo('Bénévolence'), team: 0 },
          {
            ...DebaterService.getByPseudo("Les élèves d'Abdoul Madjid"),
            team: 1
          }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-paraclet'],
        date: '05/01/2023',
        url: 'https://youtu.be/tyI_g0RL4FQ',
        subject:
          "Qui est le paraclet annoncé par Jésus dans son discours d'adieux dans le corpus johannique ?",
        debaters: [
          { ...DebaterService.getByPseudo('Bénévolence'), team: 0 },
          { ...DebaterService.getByPseudo('Cheikh Adam'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-parable-of-the-winegrowers'],
        date: '27/10/2022',
        url: 'https://youtu.be/PVMAeP2virw',
        subject: 'La Parabole des Vignerons',
        debaters: [
          { ...DebaterService.getByPseudo('JMS'), team: 0 },
          { ...DebaterService.getByPseudo('Hanane'), team: 1 },
          { ...DebaterService.getByPseudo('Ali'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-parable-of-the-winegrowers'],
        date: '07/07/2022',
        url: 'https://youtu.be/PVMAeP2virw',
        subject: 'La Parabole des Vignerons',
        debaters: [
          { ...DebaterService.getByPseudo('Sham'), team: 0 },
          { ...DebaterService.getByPseudo('Mengo'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-parable-of-the-winegrowers'],
        date: '07/07/2022',
        url: 'https://youtu.be/qm9e5onmH-Y',
        subject: "JESUS A ANNONCE L'ISLAM PART 5",
        debaters: [
          {
            ...DebaterService.getByPseudo(undefined),
            religion: DebatReligionEnum.CHRISTIAN,
            team: 0
          },
          { ...DebaterService.getByPseudo('Bénévolence'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-parable-of-the-winegrowers'],
        date: '07/07/2022',
        url: 'https://youtu.be/iZ3CGDNSVdw',
        subject: "JESUS A ANNONCE L'ISLAM PART 5",
        debaters: [
          {
            ...DebaterService.getByPseudo(undefined),
            religion: DebatReligionEnum.CHRISTIAN,
            team: 0
          },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-parable-of-the-winegrowers'],
        date: '02/07/2022',
        url: 'https://youtu.be/euB4WhtCem4',
        subject: "DÉBAT INTER-RELIGIEUX : L'ISLAM EST DANS LA BIBLE ! PART III",
        debaters: [
          { ...DebaterService.getByPseudo('Bénévolence'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-parable-of-the-winegrowers'],
        date: '26/06/2022',
        url: 'https://youtu.be/-YhEqfCW_sc',
        subject: "DÉBAT INTER-RELIGIEUX : L'ISLAM EST DANS LA BIBLE ! PART II",
        debaters: [
          { ...DebaterService.getByPseudo('Bénévolence'), team: 0 },
          {
            ...DebaterService.getByPseudo(undefined),
            religion: DebatReligionEnum.CHRISTIAN,
            team: 0
          },
          { ...DebaterService.getByPseudo('Izanami'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 },
          { ...DebaterService.getByPseudo('Ayman'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-parable-of-the-winegrowers'],
        date: '25/06/2022',
        url: 'https://youtu.be/fFo4sKl6BJk',
        subject: "DÉBAT INTER-RELIGIEUX : L'ISLAM EST DANS LA BIBLE !",
        debaters: [
          { ...DebaterService.getByPseudo('Georges Autran'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-crucifixion-in-the-bible'],
        date: '10/09/2022',
        url: 'https://youtu.be/xms5pzrT_7Y',
        subject: 'DEBAT MUSLIM - CHRETIEN SUR LA MORT DE JESUS !',
        debaters: [
          { ...DebaterService.getByPseudo('Georges Autran'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-crucifixion-in-the-bible'],
        date: '20/08/2022',
        url: 'https://youtu.be/PjN6y_P1INg',
        subject: 'Collectif Theophilos La crucifixiondans la bible',
        debaters: [
          { ...DebaterService.getByPseudo('Fidelis Verax'), team: 0 },
          { ...DebaterService.getByPseudo('Qalev'), team: 0 },
          { ...DebaterService.getByPseudo('Raph'), team: 0 },
          { ...DebaterService.getByPseudo('Jacques'), team: 0 },
          { ...DebaterService.getByPseudo('Daniel'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-crucifixion-in-the-bible'],
        date: '20/08/2022',
        url: 'https://youtu.be/0beBalbM_nM',
        subject: 'Collectif Theophilos La crucifixiondans la bible',
        debaters: [
          {
            ...DebaterService.getByPseudo(undefined),
            religion: DebatReligionEnum.CHRISTIAN,
            team: 0
          },
          { ...DebaterService.getByPseudo('Izanami'), team: 0 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['biblical-textual-criticism'],
        date: '19/07/2019',
        url: 'https://youtu.be/oHv9pSlRe9s',
        subject: 'Jésus est Dieu ? Jean 14,14 et la Critique Textuelle',
        debaters: [
          { ...DebaterService.getByPseudo('Fidelis Verax'), team: 0 },
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-divinity-of-jesus'],
        date: '24/09/2018',
        url: 'https://youtu.be/6MIN6jjDgWo',
        subject: 'Débat interreligieux : la Divinité de Jesus',
        debaters: [
          { ...DebaterService.getByPseudo('Arnaud Dumouch'), team: 0 },
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo('Morgan Priest'),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-divinity-of-jesus'],
        date: '13/06/2018',
        url: 'https://youtu.be/V9eCfAVnQJY',
        subject: 'Débat : "Jesus, Dieu sauveur du monde ?" A PARTAGER !',
        debaters: [
          { ...DebaterService.getByPseudo('Alex'), team: 0 },
          { ...DebaterService.getByPseudo('Sam Shamoun'), team: 0 },
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 1 },
          { ...DebaterService.getByPseudo(undefined), team: 1 }
        ],
        mediator: DebaterService.getByPseudo('Said Oujibou'),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: [undefined],
        date: '21/01/2018',
        url: 'https://youtu.be/K6292d9PdGo',
        subject:
          '1er débat Athée/Musulman francophone : Karim al-Hanifi & Jean Bricmont, 2018 à partager !',
        debaters: [
          { ...DebaterService.getByPseudo(undefined), team: 0 },
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 1 }
        ],
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-legitimacy-of-the-prophet-muhammad'],
        date: '07/07/2017',
        url: 'https://youtu.be/aHwW7FfRNzI',
        subject:
          'Débat Rabbin et Musulman 2017 "Muhammad est-il un vrai prophète de Dieu annoncé dans la Torah ?"',
        debaters: [
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 0 },
          { ...DebaterService.getByPseudo('Gabriel Hagaï'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo('Said Oujibou'),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-dawa-in-islam'],
        date: '08/04/2017',
        url: 'https://youtu.be/aHwW7FfRNzI',
        subject: 'Débat sur le débat interreligieux',
        debaters: [
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 0 },
          { ...DebaterService.getByPseudo('Metmati Maamar'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo(undefined),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-divinity-of-jesus'],
        date: '11/07/2016',
        url: 'https://youtu.be/aHwW7FfRNzI',
        subject:
          'Débat inter-religieux Morgan Priest / Karim al-Hanifi 11 Septembre 2016',
        debaters: [
          { ...DebaterService.getByPseudo('Morgan Priest'), team: 0 },
          { ...DebaterService.getByPseudo('Guillaume'), team: 0 },
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 1 },
          { ...DebaterService.getByPseudo('Abdullah al-Hanifi'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo('Said Oujibou'),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-divinity-of-jesus'],
        date: '28/05/2016',
        url: 'https://youtu.be/aHwW7FfRNzI',
        subject:
          'Débat inter-religieux : "La légitimité de l\'Islam", Morgan Priest / \'Abdullah & Karim al-Hanifi',
        debaters: [
          { ...DebaterService.getByPseudo('Morgan Priest'), team: 0 },
          { ...DebaterService.getByPseudo('Guillaume'), team: 0 },
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 1 },
          { ...DebaterService.getByPseudo('Abdullah al-Hanifi'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo('Said Oujibou'),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-legitimacy-of-the-prophet-muhammad'],
        date: '05/01/2016',
        url: 'https://youtu.be/SiW5hBJJCgk',
        subject:
          'Débat Inter-religieux : "Muhammad est-il un vrai prophète de Dieu ?" Abbé Pagès et Karim al-Hanifi',
        debaters: [
          { ...DebaterService.getByPseudo('Guy Pages'), team: 0 },
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo(undefined),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-falsification-of-the-bible'],
        date: '28/03/2016',
        url: 'https://youtu.be/SiW5hBJJCgk',
        subject:
          'Débat inter-religieux : "la préservation de la Bible" Abbé Guy Pagès & Karim al-Hanifi',
        debaters: [
          { ...DebaterService.getByPseudo('Guy Pages'), team: 0 },
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo(undefined),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['islam'],
        date: '23/03/2016',
        url: 'https://youtu.be/Y3-D5lKNLP8',
        subject: 'Débat inter-religieux : "L\'Islam au risque de l\'histoire"',
        debaters: [
          { ...DebaterService.getByPseudo('Odon Lafontaine'), team: 0 },
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo(undefined),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-divinity-of-jesus'],
        date: '21/03/2016',
        url: 'https://youtu.be/6f5N4nWKAdg',
        subject:
          "Débat inter-religieux : Jesus est-il Le Vrai Dieu ? L'Abbé Guy Pagès & Karim al-Hanifi",
        debaters: [
          { ...DebaterService.getByPseudo('Guy Pages'), team: 0 },
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo(undefined),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-legitimacy-of-the-prophet-muhammad'],
        date: '30/01/2016',
        url: 'https://youtu.be/4ehCG4tLfpM',
        subject:
          'Débat David Wood / Karim al-Hanifi : Muhammad est-il un vrai prophète de Dieu ?',
        debaters: [
          { ...DebaterService.getByPseudo('David wood'), team: 0 },
          { ...DebaterService.getByPseudo('Alex'), team: 0 },
          { ...DebaterService.getByPseudo('Karim al-Hanifi'), team: 1 },
          { ...DebaterService.getByPseudo('Zakaria'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo('Said Oujibou'),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-messiah-of-jesus'],
        date: '23/05/2022',
        url: 'https://youtu.be/lemQfH9LNBc',
        subject:
          'Débat interreligieux (chrétien - juif) Remi Gomez vs Moshe Louzon - Almah, vierge ou pas ?',
        debaters: [
          { ...DebaterService.getByPseudo('Remi Gomez'), team: 0 },
          { ...DebaterService.getByPseudo('jplt'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo(undefined),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-messiah-of-jesus'],
        date: '17/02/2021',
        url: 'https://youtu.be/znkwFUTw8Fw',
        subject:
          'Débat interreligieux (chrétien - juif) Remi Gomez vs Moshe Louzon - la Tribu par le père',
        debaters: [
          { ...DebaterService.getByPseudo('Remi Gomez'), team: 0 },
          { ...DebaterService.getByPseudo('jplt'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo(undefined),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-messiah-of-jesus'],
        date: '08/12/2020',
        url: 'https://youtu.be/YB2RVKyymeQ',
        subject:
          "DEBAT // Remi vs Moshe Louzon // Jésus est-il le Messie annoncé dans l'Ancien Testament ?",
        debaters: [
          { ...DebaterService.getByPseudo('Remi Gomez'), team: 0 },
          { ...DebaterService.getByPseudo('jplt'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo(undefined),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-divinity-of-jesus'],
        date: '12/12/2020',
        url: 'https://youtu.be/eNix2Gm2BLM',
        subject: 'JESUS EST-IL DIEU? DEBAT COLLECTIF AL HANIFIYYAH VS APOLOGIA',
        debaters: [
          { ...DebaterService.getByPseudo('Remi Gomez'), team: 0 },
          { ...DebaterService.getByPseudo('Yamad Al Hanifi'), team: 1 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 },
          { ...DebaterService.getByPseudo('Ayman'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo('Joêl Thibault et Jacques Faty'),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-divinity-of-jesus'],
        date: '12/12/2020',
        url: 'https://youtu.be/B5nUNrJtnoc',
        subject: 'DEBAT // Collectif APOLOGIA vs COLLECTIF HANIFIYYAH',
        debaters: [
          { ...DebaterService.getByPseudo('Remi Gomez'), team: 0 },
          { ...DebaterService.getByPseudo('Yamad Al Hanifi'), team: 1 },
          { ...DebaterService.getByPseudo('Ismaïl al Hanifi'), team: 1 },
          { ...DebaterService.getByPseudo('Ayman'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo('Joêl Thibault et Jacques Faty'),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['christology'],
        date: '25/08/2019',
        url: 'https://youtu.be/HrKy8oxdzPs',
        subject: '/// Debat intra-religieux // Modalisme vs Trinite',
        debaters: [
          { ...DebaterService.getByPseudo('Olivier Imbernon'), team: 0 },
          { ...DebaterService.getByPseudo('Samy de Christ'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo('Remi Gomez'),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['purgatory'],
        date: '08/05/2019',
        url: 'https://youtu.be/HrKy8oxdzPs',
        subject:
          'APOLOGIA [02] // FAUT-IL CROIRE AU PURGATOIRE ? // Rémi GOMEZ VS Abbé Guy PAGES',
        debaters: [
          { ...DebaterService.getByPseudo('Remi Gomez'), team: 0 },
          { ...DebaterService.getByPseudo('Guy Pages'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo(undefined),
        plateform: DebatPlateformEnum.YOUTUBE
      },
      {
        topics: ['the-crucifixion-in-the-bible'],
        date: '24/04/2019',
        url: 'https://youtu.be/vX6NAvdCRvA',
        subject:
          'APOLOGIA [01] // JESUS EST-IL MORT A LA CROIX?// Rémi GOMEZ VS Nasseer Ahmed SHAHID',
        debaters: [
          { ...DebaterService.getByPseudo('Remi Gomez'), team: 0 },
          { ...DebaterService.getByPseudo('Nasseer Ahmed Saïd'), team: 1 }
        ],
        mediator: DebaterService.getByPseudo('Joêl Thibault'),
        plateform: DebatPlateformEnum.YOUTUBE
      }
    ]
  }

  static getByDebaterId(debaterId: number): IDebat[] | undefined {
    return this.getAll().filter(
      (debate) =>
        debate.debaters.findIndex((debater) => debater.id === debaterId) !==
          -1 || debate.mediator?.id === debaterId
    )
  }

  static getByTopic(topic: string): IDebat[] | undefined {
    return this.getAll().filter((debate) => debate.topics?.includes(topic))
  }

  static getDebatArgumentsById(id: number): unknown[] {
    return debatsJson.find((debat) => debat.id === id)?.arguments
  }
}
