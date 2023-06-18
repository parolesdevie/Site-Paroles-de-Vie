import { AuthorEnum, AuthorTeamEnum, IPdf, ThemeEnum } from '~~/types'

export default class PdfService {
  static getAll(): IPdf[] {
    return [
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          ThemeEnum.REFUTATION,
          AuthorEnum.BENEVOLENCE
        ],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'deuteronomy-18-18',
        title: 'Deutéronome 18_18'
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          ThemeEnum.REFUTATION,
          AuthorEnum.BENEVOLENCE
        ],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'gospel-of-barnabas',
        title: 'L’ Évangile de Barnabé'
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          ThemeEnum.THEOLOGY,
          ThemeEnum.REFUTATION,
          AuthorEnum.JMS,
          AuthorEnum.PROTOCOLE,
          AuthorEnum.SHAM
        ],
        author: AuthorEnum.JMS,
        slug: 'argument-contre-les-salafis-et-les-athari',
        title: 'Argument contre les salafis et les athari'
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          ThemeEnum.THEOLOGY,
          AuthorEnum.SHAM,
          AuthorEnum.BENEVOLENCE
        ],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'les-pieds-d-Allah',
        title: "Les pieds d'Allah"
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          AuthorEnum.BENEVOLENCE,
          ThemeEnum.DILEMME
        ],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'le-dilemme-de-la-gestation',
        title: 'Le dilemme la gestation'
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          AuthorEnum.BENEVOLENCE,
          ThemeEnum.DILEMME
        ],
        author: AuthorEnum.GZN,
        slug: 'la-pericope-de-la-femme-adultere',
        title: 'La péricope de la femme adultère'
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          AuthorEnum.BENEVOLENCE,
          ThemeEnum.DILEMME
        ],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'le-dilemme-du-bapteme',
        title: 'Le dilemme du Baptême'
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          AuthorEnum.BENEVOLENCE,
          ThemeEnum.DILEMME
        ],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'le-dilemme-de-l-eucharistie',
        title: 'Le dilemme de l’Eucharistie'
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          AuthorEnum.BENEVOLENCE,
          ThemeEnum.DILEMME
        ],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'le-dilemme-du-fils-de-dieu',
        title: 'Le dilemme du Fils de Dieu'
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          AuthorEnum.BENEVOLENCE,
          ThemeEnum.DILEMME
        ],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'le-dilemme-de-la-crucifixion',
        title: 'Le dilemme de la Crucifixion'
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          AuthorEnum.BENEVOLENCE,
          ThemeEnum.DILEMME
        ],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'dilemme-du-paradis',
        title: 'Le dilemme du Paradis'
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          AuthorEnum.BENEVOLENCE,
          ThemeEnum.DILEMME
        ],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'dilemme-de-l-adultere',
        title: "Le dilemme de l'adultère"
      },
      {
        tags: [
          AuthorTeamEnum.COLISEUM,
          AuthorEnum.BENEVOLENCE,
          ThemeEnum.REFUTATION
        ],
        slug: 'le-paraclet',
        author: AuthorEnum.BENEVOLENCE,
        title: 'Le Paraclet'
      },
      {
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JMS, ThemeEnum.REFUTATION],
        author: AuthorEnum.JMS,
        slug: 'genese-17-20-vs-genese-suna',
        title: 'GENESE 17 :20 VS GENESE DE LA SUNNA ISLAMIQUE'
      },
      {
        tags: [
          AuthorTeamEnum.THEOPHILOS,
          AuthorEnum.FIDELIS_AND_VERAX,
          ThemeEnum.REFUTATION
        ],
        slug: 'la-parabole-des-vignerons-1ere-partie',
        author: AuthorEnum.FIDELIS_AND_VERAX,
        title: 'La Parabole des vignerons 1ére partie'
      },
      {
        tags: [
          AuthorTeamEnum.THEOPHILOS,
          AuthorEnum.FIDELIS_AND_VERAX,
          ThemeEnum.REFUTATION
        ],
        slug: 'la-parabole-des-vignerons-2eme-partie',
        author: AuthorEnum.FIDELIS_AND_VERAX,
        title: 'La Parabole des vignerons 2éme partie'
      },
      {
        tags: [
          AuthorTeamEnum.THEOPHILOS,
          AuthorEnum.FIDELIS_AND_VERAX,
          ThemeEnum.REFUTATION
        ],
        slug: 'jesus-le-verbe-incarne',
        author: AuthorEnum.FIDELIS_AND_VERAX,
        title: 'Jésus, le Verbe incarné'
      },
      {
        tags: [
          AuthorTeamEnum.THEOPHILOS,
          AuthorEnum.FIDELIS_AND_VERAX,
          ThemeEnum.REFUTATION
        ],
        slug: 'le-monotheisme-des-patriarches',
        author: AuthorEnum.FIDELIS_AND_VERAX,
        title: 'Le monothéisme des Patriarches'
      },
      {
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JOZUA],
        author: AuthorEnum.JOZUA,
        slug: 'l-islam-est-le plagiat-d-autres-religions',
        title: 'L’islam est le plagiat d’autres religions'
      },
      {
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JOZUA],
        author: AuthorEnum.JOZUA,
        slug: 'colonialisme',
        title: 'Colonialisme'
      },
      {
        tags: [AuthorEnum.JOZUA],
        author: AuthorEnum.NULL,
        slug: 'l-unicite-de-dieu',
        title: 'L’unicité de dieu'
      },
      {
        tags: [AuthorEnum.JOZUA],
        author: AuthorEnum.NULL,
        slug: 'l-heresie-du-sabellianisme',
        title: "L'hérésie du sabellianisme"
      },
      {
        tags: [AuthorEnum.UNKNOW, ThemeEnum.THEOLOGY],
        author: AuthorEnum.JMS,
        slug: 'la-notion-d-hypostase',
        title: "La notion d'hypostase"
      },
      {
        tags: [AuthorEnum.JMS, ThemeEnum.THEOLOGY],
        author: AuthorEnum.JMS,
        slug: 'the-logical-problem-of-the-trinity',
        title: 'The logical problem of the trinity'
      },
      {
        tags: [AuthorEnum.SAVED_BY_CHRIST, ThemeEnum.THEOLOGY],
        author: AuthorEnum.SAVED_BY_CHRIST,
        slug: 'la-trinite-est-elle-biblique',
        title: 'La Trinité est-elle biblique ?'
      },
      {
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JMS, ThemeEnum.REFUTATION],
        author: AuthorEnum.JMS,
        slug: 'refutation-jesus-na-pas-ete-oint-dhuile',
        title: 'Réfutation Jésus n’a pas été oint d’huile'
      },
      {
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JMS, ThemeEnum.REFUTATION],
        author: AuthorEnum.JMS,
        slug: 'refutation-animaux-interdits',
        title: 'Réfutation animaux interdits'
      },
      {
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JMS, ThemeEnum.REFUTATION],
        author: AuthorEnum.JMS,
        slug: 'refutation-jesus-nest-pas-descendance-de-david',
        title: 'Réfutation Jésus n’est pas descendance de David'
      },
      {
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JMS],
        author: AuthorEnum.JMS,
        slug: 'messianite-de-esaie-53',
        title: 'Messianité de Esaïe 53'
      },
      {
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.SHAM],
        author: AuthorEnum.SHAM,
        slug: 'le-dilemme-de-ladultere',
        title: "Le dilemme de l'adultère"
      },
      {
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JMS, ThemeEnum.REFUTATION],
        author: AuthorEnum.JMS,
        slug: 'refutation-almah',
        title: 'Réfutation Almah'
      },
      {
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.SHAM],
        author: AuthorEnum.SHAM,
        slug: 'le-tetragramme-sacre',
        title: 'Le tétragramme sacré'
      },
      {
        tags: [AuthorTeamEnum.UNKNOW],
        author: AuthorEnum.UNKNOW,
        slug: 'la-mort-de-zacharie-memoire-juive-et-memoire-chretienne',
        title: 'La mort de Zacharie : mémoire juive et mémoire chrétienne*'
      },
      {
        tags: [AuthorTeamEnum.UNKNOW],
        author: AuthorEnum.UNKNOW,
        slug: 'catechisme-du-concile-de-trente',
        title: 'Catéchisme du Concile de Trente'
      },
      {
        tags: [AuthorTeamEnum.UNKNOW],
        author: AuthorEnum.UNKNOW,
        slug: 'somme-contre-les-gentils-thomasdaquin',
        title: 'Somme contre les Gentils Thomasd’Aquin'
      },

      //
      {
        tags: [AuthorTeamEnum.UNKNOW, ThemeEnum.HERETIC_THESIS],
        author: AuthorEnum.UNKNOW,
        slug: 'le-paraclet-chez-les-chretiens',
        title: 'Le Paraclet chez les chrétiens ?'
      },
      // suite
      // {
      //   tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.BENEVOLENCE],
      //   author: AuthorEnum.BENEVOLENCE,
      //   slug: 'ar-rahik-al-makhtoum-le-nectar-cachete-safiyyu-ar-rahman-al-mubarakfuri-z-liborg',
      //   title:
      //     'AR-RAHIK AL-MAKHTOUM Le nectar cachete (Safiyyu Ar-Rahman Al Mubarakfuri) (z-lib.org)',
      // },
      // {
      //   tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.BENEVOLENCE],
      //   author: AuthorEnum.BENEVOLENCE,
      //   slug: 'le-resume-de-zad-al-maad-ibn-qayyim-al-jawziyyah',
      //   title: "Le résumé de Zad Al-Ma'ad - Ibn Qayyim Al-Jawziyyah",
      // },
      // {
      //   tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.BENEVOLENCE],
      //   author: AuthorEnum.BENEVOLENCE,
      //   slug: 'lauthentique-de-la-medecine-prophetique-de-ibn-al-qayyim',
      //   title: "L'authentique de La Médecine Prophétique de Ibn Al-Qayyim",
      // },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.UNKNOW, // AuthorEnum.JOZUA,
        slug: 'l-evangile-l-ancien-testament-et-la-tradition-orale',
        title: 'L’Évangile, l’Ancien Testament et la tradition orale'
      },
      {
        slug: 'le-contexte-historique-du-nouveau-testament',
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JMS],
        author: AuthorEnum.JMS,
        title: 'Le contexte historique du Nouveau Testament'
      },
      {
        slug: 'aristotle-in-aquinass-theology',
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JMS],
        author: AuthorEnum.JMS,
        title: 'Aristotle in Aquinass theology'
      },
      {
        slug: 'etudes-de-theologie-positive-sur-la-sainte-trinite-volume-2',
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JMS],
        author: AuthorEnum.JMS,
        title: 'Études de théologie positive sur la sainte Trinité, Volume 2'
      },
      {
        slug: 'yahweh-translittere-en-arabe',
        tags: [AuthorTeamEnum.COLISEUM, AuthorEnum.JMS],
        author: AuthorEnum.JMS,
        title: 'Yahweh translittéré en arabe'
      },
      {
        tags: [AuthorEnum.DEMS],
        author: AuthorEnum.DEMS,
        slug: 'fatwas',
        title: 'Fatwas'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'oui-elie-doit-venir-mais-les-chretiens-y-croient-ils-encore',
        title: 'Oui, Élie doit venir'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'elie-et-la-conversion-finale-du-peuple-juif',
        title:
          'Élie et la conversion finale du peuple juif, d’après les sources rabbiniques et patristiques'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'elie-viendra-t-il-dabord-comme-la-affirme-jesus',
        title: "Élie viendra-t-il d'abord, comme l'a affirmé Jésus ?"
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'dieu-se-pourvoira-lui-meme-de-lagneau',
        title: 'Dieu pourvoira lui-même l’agneau'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'le-coran-production-litteraire-de-lantiquite-tardive',
        title: 'Le Coran, production littéraire de l’Antiquité tardive'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'introduction-aux-droits-arabo-musulman',
        title: 'Introduction aux droits arabo-musulman'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'erreurs-linguistiques-dans-le-coran',
        title: 'Erreurs linguistiques dans le coran'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'le-signe-de-saul-pour-un-temps-dapostasie',
        title: "Le signe de Saül pour un temps d'apostasie"
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'frapper-sa-femme-exegese-complete',
        title: 'Frapper sa femme. exegese complete'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'nulle-contrainte-dans-la-religion',
        title: 'Nulle contrainte dans la religion'
      },
      {
        tags: [AuthorEnum.QALEV],
        author: AuthorEnum.QALEV,
        slug: 'genese-179-ismael',
        title: 'Genèse 179 Ismaël'
      },
      {
        tags: [AuthorEnum.QALEV],
        author: AuthorEnum.QALEV,
        slug: 'genese-179-ismael-2',
        title: 'Genèse 179 Ismaël 2'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'citations-patristiques',
        title: 'Citations Patristiques'
      },
      {
        tags: [AuthorEnum.PROTOCOLE],
        author: AuthorEnum.PROTOCOLE,
        slug: 'mohammed-est-il-annonce-dans-la-torah',
        title: 'Mohammed est-il annoncé dans la Torah ?'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'les-sanctions-dans-lislam',
        title: 'Les sanctions dans l’islam'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'coran-sami-awad-aldeeb-abu-sahlieh',
        title: 'Coran, Sami Awad ALDEEB ABU-SAHLIEH'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'lettre-dun-rabbin-converti',
        title: "LETTRE D'UN RABBIN CONVERTI"
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'lettre-dun-rabbin-converti-2',
        title: "LETTRE D'UN RABBIN CONVERTI 2"
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.UNKNOW,
        slug: 'evangile-de-matthieu-en-hebreu-shem-tov',
        title: 'Evangile de matthieu en hébreu shem tov'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'le-gouvernement-mondial-de-lantechrist',
        title: 'Le gouvernement mondial de l’antechrist'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'lopposition-entre-la-chair-et-lesprit-en-galates-517',
        title: "L'opposition entre la chair et l'Esprit en Galates 5.17"
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'le-nom-de-yahushua-attaque',
        title: 'Le nom de Yahushua attaqué'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'tous-les-musulmans-iront-en-enfer-sourate-19-71',
        title: 'Tous les musulmans iront en enfer sourate 19 :71'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'la-mort-des-apotres',
        title: 'La mort des apôtres'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'le-livre-dhenoch',
        title: 'Le livre d’Hénoch'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'le-palimpseste-de-sana',
        title: 'Le palimpseste de Sana'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'levangile-de-barnabe',
        title: 'L’évangile de Barnabé'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'islam-jihad',
        title: 'Islam Jihad'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'le-talmud-de-jerusalem',
        title: 'Le talmud de jérusalem'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: '613-commandements',
        title: '613 Commandements'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'de-saint-polycarpe-eveque-de-smyrne-et-saint-martyr',
        title: 'De saint Polycarpe, évêque de Smyrne et saint martyr'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'les-origines-du-dogme-mahometan',
        title: 'Les origines du dogme mahometan'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'connaitre-mohammed-et-jesus',
        title: 'Connaître Mohammed et Jésus'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'le-grand-secret-de-lislam',
        title: 'Le grand secret de l’islam'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'temoins-de-jehovah-manuel-pratique-dauto-defense',
        title: 'Témoins de jéhovah : manuel pratique d’auto-défense'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'tableau-des-copies-des-manuscrits-les-plus-anciens-qui-existent-encore',
        title:
          'Tableau des copies des manuscrits les plus anciens qui existent encore'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'paul-selon-paul',
        title: 'Paul selon Paul'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'la-bible-a-t-elle-ete-alteree',
        title: 'La Bible a-t-elle été altérée?'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'le-schisme-primordial-entre-juifs-et-chretiens',
        title: 'Le schisme primordial entre Juifs et Chrétiens'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'islamologie-etude-de-lislam-par-ses-textes',
        title: 'Islamologie – Étude de l’islam par ses textes'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'des-pions-sur-lechiquier',
        title: 'Des pions sur l’échiquier'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'chretiens-et-juifs-pour-aller-plus-loin',
        title: 'Chrétiens et Juifs : pour aller plus loin'
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'lenseignement-de-yeshua-et-de-ses-apotres',
        title: "L'enseignement de Yeshua et de ses apotres"
      },
      {
        tags: [AuthorEnum.UNKNOW],
        author: AuthorEnum.JOZUA,
        slug: 'alma-et-parthenos-dans-lunivers-de-la-bible',
        title: 'Almâ et parthenos dans l’univers de la Bible'
      },
      {
        tags: [AuthorEnum.BENEVOLENCE],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'la-kaaba',
        title: 'La Kaaba'
      },
      {
        tags: [AuthorEnum.BENEVOLENCE],
        author: AuthorEnum.BENEVOLENCE,
        slug: 'la-pierre-noire',
        title: 'La Pierre Noire'
      }
    ]
  }
}
