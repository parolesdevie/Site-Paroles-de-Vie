import { IPdf } from "~/types";

export default class PdfService {
    constructor() {
    }

    static getAll(): IPdf[] {
        return [
            {
                author: 'benevolence',
                slug: 'model-document-1',
                title: 'Model Document 1',
            },
            // {
            //     author: 'jozua',
            //     slug: 'colonialisme',
            //     title: 'Colonialisme',
            // },
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
            //     slug: "l-heresie-du-sabellianisme",
            //     author: "jozua",
            //     title: "L'HÉRÉSIE DU SABELLIANISME"
            // },
            // {
            //     slug: "l-evangile-l-ancien-testament-et-la-tradition-orale",
            //     author: "jozua",
            //     title: "L’Évangile, l’Ancien Testament et la tradition orale"
            // },
            // {
            //     slug: "l-islam-est-le plagiat-d-autres-religions",
            //     author: "jozua",
            //     title: "L’islam est le plagiat d’autres religions"
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
            //     author: "jozua",
            //     title: "Oui, Élie doit venir"
            // },
            // {
            //     slug: "elie-et-la-conversion-finale-du-peuple-juif",
            //     author: "jozua",
            //     title: "Élie et la conversion finale du peuple juif, d’après les sources rabbiniques et patristiques"
            // },
            // {
            //     slug: "elie-viendra-t-il-dabord-comme-la-affirme-jesus",
            //     author: "jozua",
            //     title: "Élie viendra-t-il d'abord, comme l'a affirmé Jésus ?"
            // },
            // {
            //     slug: "dieu-se-pourvoira-lui-meme-de-lagneau",
            //     author: "jozua",
            //     title: "Dieu pourvoira lui-même l’agneau"
            // },
            // {
            //     slug: "le-coran-production-litteraire-de-lantiquite-tardive",
            //     author: "jozua",
            //     title: "Le Coran, production littéraire de l’Antiquité tardive"
            // },
            // {
            //     slug: "introduction-aux-droits-arabo-musulman",
            //     author: "jozua",
            //     title: "Introduction aux droits arabo-musulman"
            // },
            // {
            //     slug: "erreurs-linguistiques-dans-le-coran",
            //     author: "jozua",
            //     title: "Erreurs linguistiques dans le coran"
            // },
            // {
            //     slug: "le-signe-de-saul-pour-un-temps-dapostasie",
            //     author: "jozua",
            //     title: "Le signe de Saül pour un temps d'apostasie"
            // },
            // {
            //     slug: "frapper-sa-femme-exegese-complete",
            //     author: "jozua",
            //     title: "Frapper sa femme. exegese complete"
            // },
            // {
            //     slug: "nulle-contrainte-dans-la-religion",
            //     author: "jozua",
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
            //     author: "jozua",
            //     title: "Citations Patristiques"
            // },
            // {
            //     slug: "mohammed-est-il-annonce-dans-la-torah",
            //     author: "protocole",
            //     title: "Mohammed est-il annoncé dans la Torah ?"
            // },
            // {
            //     slug: "les-sanctions-dans-lislam",
            //     author: "jozua",
            //     title: "Les sanctions dans l’islam"
            // },
            // {
            //     slug: "coran-sami-awad-aldeeb-abu-sahlieh",
            //     author: "jozua",
            //     title: "Coran, Sami Awad ALDEEB ABU-SAHLIEH"
            // },
            // {
            //     slug: "lettre-dun-rabbin-converti",
            //     author: "jozua",
            //     title: "LETTRE D'UN RABBIN CONVERTI"
            // },
            // {
            //     slug: "lettre-dun-rabbin-converti-2",
            //     author: "jozua",
            //     title: "LETTRE D'UN RABBIN CONVERTI 2"
            // },
            // {
            //     slug: "evangile-de-matthieu-en-hebreu-shem-tov",
            //     author: "jozua",
            //     title: "Evangile de matthieu en hébreu shem tov"
            // },
            // {
            //     slug: "le-gouvernement-mondial-de-lantechrist",
            //     author: "jozua",
            //     title: "Le gouvernement mondial de l’antechrist"
            // },
            // {
            //     slug: "lopposition-entre-la-chair-et-lesprit-en-galates-517",
            //     author: "jozua",
            //     title: "L'opposition entre la chair et l'Esprit en Galates 5.17"
            // },
            // {
            //     slug: "le-nom-de-yahushua-attaque",
            //     author: "jozua",
            //     title: "Le nom de Yahushua attaqué"
            // },
            // {
            //     slug: "tous-les-musulmans-iront-en-enfer-sourate-19-71",
            //     author: "jozua",
            //     title: "Tous les musulmans iront en enfer sourate 19 :71"
            // },
            // {
            //     slug: "la-mort-des-apotres",
            //     author: "jozua",
            //     title: "La mort des apôtres"
            // },
            // {
            //     slug: "le-livre-dhenoch",
            //     author: "jozua",
            //     title: "Le livre d’Hénoch"
            // },
            // {
            //     slug: "le-palimpseste-de-sana",
            //     author: "jozua",
            //     title: "Le palimpseste de Sana"
            // },
            // {
            //     slug: "levangile-de-barnabe",
            //     author: "jozua",
            //     title: "L’évangile de Barnabé"
            // },
            // {
            //     slug: "islam-jihad",
            //     author: "jozua",
            //     title: "Islam Jihad"
            // },
            // {
            //     slug: "le-talmud-de-jerusalem",
            //     author: "jozua",
            //     title: "Le talmud de jérusalem"
            // },
            // {
            //     slug: "613-commandements",
            //     author: "jozua",
            //     title: "613 Commandements"
            // },
            // {
            //     slug: "de-saint-polycarpe-eveque-de-smyrne-et-saint-martyr",
            //     author: "jozua",
            //     title: "De saint Polycarpe, évêque de Smyrne et saint martyr"
            // },
            // {
            //     slug: "les-origines-du-dogme-mahometan",
            //     author: "jozua",
            //     title: "Les origines du dogme mahometan"
            // },
            // {
            //     slug: "connaitre-mohammed-et-jesus",
            //     author: "jozua",
            //     title: "Connaître Mohammed et Jésus"
            // },
            // {
            //     slug: "le-grand-secret-de-lislam",
            //     author: "jozua",
            //     title: "Le grand secret de l’islam"
            // },
            // {
            //     slug: "temoins-de-jehovah-manuel-pratique-dauto-defense",
            //     author: "jozua",
            //     title: "Témoins de jéhovah : manuel pratique d’auto-défense"
            // },
            // {
            //     slug: "tableau-des-copies-des-manuscrits-les-plus-anciens-qui-existent-encore",
            //     author: "jozua",
            //     title: "Tableau des copies des manuscrits les plus anciens qui existent encore"
            // },
            // {
            //     slug: "paul-selon-paul",
            //     author: "jozua",
            //     title: "Paul selon Paul"
            // },
            // {
            //     slug: "la-bible-a-t-elle-ete-alteree",
            //     author: "jozua",
            //     title: "La Bible a-t-elle été altérée?"
            // },
            // {
            //     slug: "le-schisme-primordial-entre-juifs-et-chretiens",
            //     author: "jozua",
            //     title: "Le schisme primordial entre Juifs et Chrétiens"
            // },
            // {
            //     slug: "islamologie-etude-de-lislam-par-ses-textes",
            //     author: "jozua",
            //     title: "Islamologie – Étude de l’islam par ses textes"
            // },
            // {
            //     slug: "des-pions-sur-lechiquier",
            //     author: "jozua",
            //     title: "Des pions sur l’échiquier"
            // },
            // {
            //     slug: "chretiens-et-juifs-pour-aller-plus-loin",
            //     author: "jozua",
            //     title: "Chrétiens et Juifs : pour aller plus loin"
            // },
            // {
            //     slug: "lenseignement-de-yeshua-et-de-ses-apotres",
            //     author: "jozua",
            //     title: "L'enseignement de Yeshua et de ses apotres"
            // },
            // {
            //     slug: "alma-et-parthenos-dans-lunivers-de-la-bible",
            //     author: "jozua",
            //     title: "Almâ et parthenos dans l’univers de la Bible"
            // }
        ]
    }
}