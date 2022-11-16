import { IPdf } from "~/types";

enum AuthorEnum {
  JOZUA = 'jozua',
  BENEVOLENCE = 'benevolence',
  SHAM = 'sham',
  JMS = 'jms',
}

export default class PdfService {
    constructor() {
    }

    static getAll(): IPdf[] {
        return [
            {
                author: AuthorEnum.BENEVOLENCE,
                slug: 'model-document-1',
                title: 'Model Document 1',
            },
            {
                author: AuthorEnum.JOZUA,
                slug: 'colonialisme',
                title: 'Colonialisme',
            },
            {
                author: AuthorEnum.JOZUA,
                slug: "l-heresie-du-sabellianisme",
                title: "L'hérésie du sabellianisme"
            },
            {
                slug: "l-islam-est-le plagiat-d-autres-religions",
                author: AuthorEnum.JOZUA,
                title: "L’islam est le plagiat d’autres religions"
            },
            // {
            //     author: 'benevolence',
            //     slug: 'ar-rahik-al-makhtoum-le-nectar-cachete-safiyyu-ar-rahman-al-mubarakfuri-z-liborg',
            //     title:
            //         'AR-RAHIK AL-MAKHTOUM Le nectar cachete (Safiyyu Ar-Rahman Al Mubarakfuri) (z-lib.org)',
            // },
            // {
            //     slug: "le-resume-de-zad-al-maad-ibn-qayyim-al-jawziyyah",
            //     author: "benevolence",
            //     title: "Le résumé de Zad Al-Ma'ad - Ibn Qayyim Al-Jawziyyah"
            // },
            // {
            //     slug: "lauthentique-de-la-medecine-prophetique-de-ibn-al-qayyim",
            //     author: "benevolence",
            //     title: "L'authentique de La Médecine Prophétique de Ibn Al-Qayyim"
            // },
            // {
            //     slug: "l-evangile-l-ancien-testament-et-la-tradition-orale",
            //     author: AuthorEnum.JOZUA,
            //     title: "L’Évangile, l’Ancien Testament et la tradition orale"
            // },
            // {
            //     slug: "la-notion-d-hypostase",
            //     author: "jms",
            //     title: "la-notion-d-hypostase"
            // },
            // {
            //     slug: "the-logical-problem-of-the-trinity",
            //     author: "jms",
            //     title: "the-logical-problem-of-the-trinity"
            // },
            // {
            //     slug: "le-contexte-historique-du-nouveau-testament",
            //     author: "jms",
            //     title: "Le contexte historique du Nouveau Testament"
            // },
            // {
            //     slug: "la-trinite-est-elle-biblique",
            //     author: "saved-by-christ",
            //     title: "La Trinité est-elle biblique?"
            // },
            // {
            //     slug: "refutation-almah",
            //     author: "jms",
            //     title: "Réfutation Almah"
            // },
            // {
            //     slug: "messianite-de-esaie-53",
            //     author: "jms",
            //     title: "Messianité de Esaïe 53"
            // },
            // {
            //     slug: "refutation-jesus-na-pas-ete-oint-dhuile",
            //     author: "jms",
            //     title: "Réfutation Jésus n’a pas été oint d’huile"
            // },
            // {
            //     slug: "refutation-jesus-nest-pas-descendance-de-david",
            //     author: "jms",
            //     title: "Réfutation Jésus n’est pas descendance de David"
            // },
            // {
            //     slug: "refutation-animaux-interdits",
            //     author: "jms",
            //     title: "Réfutation animaux interdits"
            // },
            // {
            //     slug: "aristotle-in-aquinass-theology",
            //     author: "jms",
            //     title: "Aristotle in Aquinass theology"
            // },
            // {
            //     slug: "etudes-de-theologie-positive-sur-la-sainte-trinite-volume-2",
            //     author: "jms",
            //     title: "Études de théologie positive sur la sainte Trinité, Volume 2"
            // },
            // {
            //     slug: "yahweh-translittere-en-arabe",
            //     author: "jms",
            //     title: "Yahweh translittéré en arabe"
            // },
            // {
            //     slug: "le-dilemme-de-ladultere",
            //     author: "sham",
            //     title: "Le Dilemme de l'adultère"
            // },
            // {
            //     slug: "le-tetragramme-sacre",
            //     author: "sham",
            //     title: "Le tétragramme sacré"
            // },
            // {
            //     slug: "fatwas",
            //     author: "dems",
            //     title: "Fatwas"
            // },
            // {
            //     slug: "oui-elie-doit-venir-mais-les-chretiens-y-croient-ils-encore",
            //     author: AuthorEnum.JOZUA,
            //     title: "Oui, Élie doit venir"
            // },
            // {
            //     slug: "elie-et-la-conversion-finale-du-peuple-juif",
            //     author: AuthorEnum.JOZUA,
            //     title: "Élie et la conversion finale du peuple juif, d’après les sources rabbiniques et patristiques"
            // },
            // {
            //     slug: "elie-viendra-t-il-dabord-comme-la-affirme-jesus",
            //     author: AuthorEnum.JOZUA,
            //     title: "Élie viendra-t-il d'abord, comme l'a affirmé Jésus ?"
            // },
            // {
            //     slug: "dieu-se-pourvoira-lui-meme-de-lagneau",
            //     author: AuthorEnum.JOZUA,
            //     title: "Dieu pourvoira lui-même l’agneau"
            // },
            // {
            //     slug: "le-coran-production-litteraire-de-lantiquite-tardive",
            //     author: AuthorEnum.JOZUA,
            //     title: "Le Coran, production littéraire de l’Antiquité tardive"
            // },
            // {
            //     slug: "introduction-aux-droits-arabo-musulman",
            //     author: AuthorEnum.JOZUA,
            //     title: "Introduction aux droits arabo-musulman"
            // },
            // {
            //     slug: "erreurs-linguistiques-dans-le-coran",
            //     author: AuthorEnum.JOZUA,
            //     title: "Erreurs linguistiques dans le coran"
            // },
            // {
            //     slug: "le-signe-de-saul-pour-un-temps-dapostasie",
            //     author: AuthorEnum.JOZUA,
            //     title: "Le signe de Saül pour un temps d'apostasie"
            // },
            // {
            //     slug: "frapper-sa-femme-exegese-complete",
            //     author: AuthorEnum.JOZUA,
            //     title: "Frapper sa femme. exegese complete"
            // },
            // {
            //     slug: "nulle-contrainte-dans-la-religion",
            //     author: AuthorEnum.JOZUA,
            //     title: "Nulle contrainte dans la religion"
            // },
            // {
            //     slug: "genese-179-ismael",
            //     author: "qalev",
            //     title: "Genèse 179 Ismaël"
            // },
            // {
            //     slug: "genese-179-ismael-2",
            //     author: "qalev",
            //     title: "Genèse 179 Ismaël 2"
            // },
            // {
            //     slug: "la-parabole-des-vignerons-1ere-partie",
            //     author: "fidelis-and-verax",
            //     title: "La Parabole des vignerons 1ére partie"
            // },
            // {
            //     slug: "la-parabole-des-vignerons-2eme-partie",
            //     author: "fidelis-and-verax",
            //     title: "La Parabole des vignerons 2éme partie"
            // },
            // {
            //     slug: "jesus-le-verbe-incarne",
            //     author: "fidelis-and-verax",
            //     title: "Jésus, le Verbe incarné"
            // },
            // {
            //     slug: "le-monotheisme-des-patriarches",
            //     author: "fidelis-and-verax",
            //     title: "Le monothéisme des Patriarches"
            // },
            // {
            //     slug: "citations-patristiques",
            //     author: AuthorEnum.JOZUA,
            //     title: "Citations Patristiques"
            // },
            // {
            //     slug: "mohammed-est-il-annonce-dans-la-torah",
            //     author: "protocole",
            //     title: "Mohammed est-il annoncé dans la Torah ?"
            // },
            // {
            //     slug: "les-sanctions-dans-lislam",
            //     author: AuthorEnum.JOZUA,
            //     title: "Les sanctions dans l’islam"
            // },
            // {
            //     slug: "coran-sami-awad-aldeeb-abu-sahlieh",
            //     author: AuthorEnum.JOZUA,
            //     title: "Coran, Sami Awad ALDEEB ABU-SAHLIEH"
            // },
            // {
            //     slug: "lettre-dun-rabbin-converti",
            //     author: AuthorEnum.JOZUA,
            //     title: "LETTRE D'UN RABBIN CONVERTI"
            // },
            // {
            //     slug: "lettre-dun-rabbin-converti-2",
            //     author: AuthorEnum.JOZUA,
            //     title: "LETTRE D'UN RABBIN CONVERTI 2"
            // },
            // {
            //     slug: "evangile-de-matthieu-en-hebreu-shem-tov",
            //     author: AuthorEnum.JOZUA,
            //     title: "Evangile de matthieu en hébreu shem tov"
            // },
            // {
            //     slug: "le-gouvernement-mondial-de-lantechrist",
            //     author: AuthorEnum.JOZUA,
            //     title: "Le gouvernement mondial de l’antechrist"
            // },
            // {
            //     slug: "lopposition-entre-la-chair-et-lesprit-en-galates-517",
            //     author: AuthorEnum.JOZUA,
            //     title: "L'opposition entre la chair et l'Esprit en Galates 5.17"
            // },
            // {
            //     slug: "le-nom-de-yahushua-attaque",
            //     author: AuthorEnum.JOZUA,
            //     title: "Le nom de Yahushua attaqué"
            // },
            // {
            //     slug: "tous-les-musulmans-iront-en-enfer-sourate-19-71",
            //     author: AuthorEnum.JOZUA,
            //     title: "Tous les musulmans iront en enfer sourate 19 :71"
            // },
            // {
            //     slug: "la-mort-des-apotres",
            //     author: AuthorEnum.JOZUA,
            //     title: "La mort des apôtres"
            // },
            // {
            //     slug: "le-livre-dhenoch",
            //     author: AuthorEnum.JOZUA,
            //     title: "Le livre d’Hénoch"
            // },
            // {
            //     slug: "le-palimpseste-de-sana",
            //     author: AuthorEnum.JOZUA,
            //     title: "Le palimpseste de Sana"
            // },
            // {
            //     slug: "levangile-de-barnabe",
            //     author: AuthorEnum.JOZUA,
            //     title: "L’évangile de Barnabé"
            // },
            // {
            //     slug: "islam-jihad",
            //     author: AuthorEnum.JOZUA,
            //     title: "Islam Jihad"
            // },
            // {
            //     slug: "le-talmud-de-jerusalem",
            //     author: AuthorEnum.JOZUA,
            //     title: "Le talmud de jérusalem"
            // },
            // {
            //     slug: "613-commandements",
            //     author: AuthorEnum.JOZUA,
            //     title: "613 Commandements"
            // },
            // {
            //     slug: "de-saint-polycarpe-eveque-de-smyrne-et-saint-martyr",
            //     author: AuthorEnum.JOZUA,
            //     title: "De saint Polycarpe, évêque de Smyrne et saint martyr"
            // },
            // {
            //     slug: "les-origines-du-dogme-mahometan",
            //     author: AuthorEnum.JOZUA,
            //     title: "Les origines du dogme mahometan"
            // },
            // {
            //     slug: "connaitre-mohammed-et-jesus",
            //     author: AuthorEnum.JOZUA,
            //     title: "Connaître Mohammed et Jésus"
            // },
            // {
            //     slug: "le-grand-secret-de-lislam",
            //     author: AuthorEnum.JOZUA,
            //     title: "Le grand secret de l’islam"
            // },
            // {
            //     slug: "temoins-de-jehovah-manuel-pratique-dauto-defense",
            //     author: AuthorEnum.JOZUA,
            //     title: "Témoins de jéhovah : manuel pratique d’auto-défense"
            // },
            // {
            //     slug: "tableau-des-copies-des-manuscrits-les-plus-anciens-qui-existent-encore",
            //     author: AuthorEnum.JOZUA,
            //     title: "Tableau des copies des manuscrits les plus anciens qui existent encore"
            // },
            // {
            //     slug: "paul-selon-paul",
            //     author: AuthorEnum.JOZUA,
            //     title: "Paul selon Paul"
            // },
            // {
            //     slug: "la-bible-a-t-elle-ete-alteree",
            //     author: AuthorEnum.JOZUA,
            //     title: "La Bible a-t-elle été altérée?"
            // },
            // {
            //     slug: "le-schisme-primordial-entre-juifs-et-chretiens",
            //     author: AuthorEnum.JOZUA,
            //     title: "Le schisme primordial entre Juifs et Chrétiens"
            // },
            // {
            //     slug: "islamologie-etude-de-lislam-par-ses-textes",
            //     author: AuthorEnum.JOZUA,
            //     title: "Islamologie – Étude de l’islam par ses textes"
            // },
            // {
            //     slug: "des-pions-sur-lechiquier",
            //     author: AuthorEnum.JOZUA,
            //     title: "Des pions sur l’échiquier"
            // },
            // {
            //     slug: "chretiens-et-juifs-pour-aller-plus-loin",
            //     author: AuthorEnum.JOZUA,
            //     title: "Chrétiens et Juifs : pour aller plus loin"
            // },
            // {
            //     slug: "lenseignement-de-yeshua-et-de-ses-apotres",
            //     author: AuthorEnum.JOZUA,
            //     title: "L'enseignement de Yeshua et de ses apotres"
            // },
            // {
            //     slug: "alma-et-parthenos-dans-lunivers-de-la-bible",
            //     author: AuthorEnum.JOZUA,
            //     title: "Almâ et parthenos dans l’univers de la Bible"
            // }
        ]
    }
}