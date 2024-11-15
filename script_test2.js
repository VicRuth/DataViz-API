/*
const lieu_tournage = {
    id_lieu: "2019-233",
    annee_tournage: "2019",
    type_tournage: "Long métrage",
    nom_tournage: "UN VOYAGE EN HIVER",
    nom_realisateur: "Claus DREXLER",
    nom_producteur: "MANEKI FILMS",
    adresse_lieu: "rue d'arcole, 75004 paris",
    ardt_lieu: "75004",
    date_debut: "2019-03-11",
    date_fin: "2019-03-11",
    coord_x: 2.34975569,
    coord_y: 48.85438158,
    geo_shape: {
        type: "Feature",
        geometry: {
            coordinates: [2.34975568632739, 48.8543815799304],
            type: "Point",
        },
        properties: {},
    },
    geo_point_2d: {
        lon: 2.34975568632739,
        lat: 48.8543815799304,
    },
};

console.log(lieu_tournage.nom_producteur);
console.log(lieu_tournage.geo_point_2d.lon);

//let marker = L.marker([lieu_tournage.geo_point_2d.lat, lieu_tournage.geo_point_2d.lon]).addTo(map);

const lieux_tournage = [
    {
        id_lieu: "2019-233",
        annee_tournage: "2019",
        type_tournage: "Long métrage",
        nom_tournage: "UN VOYAGE EN HIVER",
        nom_realisateur: "Claus DREXLER",
        nom_producteur: "MANEKI FILMS",
        adresse_lieu: "rue d'arcole, 75004 paris",
        ardt_lieu: "75004",
        date_debut: "2019-03-11",
        date_fin: "2019-03-11",
        coord_x: 2.34975569,
        coord_y: 48.85438158,
        geo_shape: {
            type: "Feature",
            geometry: {
                coordinates: [2.34975568632739, 48.8543815799304],
                type: "Point",
            },
            properties: {},
        },
        geo_point_2d: {
            lon: 2.34975568632739,
            lat: 48.8543815799304,
        },
    },
    {
        id_lieu: "2019-245",
        annee_tournage: "2019",
        type_tournage: "Série TV",
        nom_tournage: "L'Attaché",
        nom_realisateur: "Eli Ben-David",
        nom_producteur: "SKM Productions",
        adresse_lieu: "5 rue des ecoles, 75005 paris",
        ardt_lieu: "75005",
        date_debut: "2019-03-12",
        date_fin: "2019-03-12",
        coord_x: 2.35213077,
        coord_y: 48.84753797,
        geo_shape: {
            type: "Feature",
            geometry: {
                coordinates: [2.35213077294237, 48.8475379729516],
                type: "Point",
            },
            properties: {},
        },
        geo_point_2d: {
            lon: 2.35213077294237,
            lat: 48.8475379729516,
        },
    },
    {
        id_lieu: "2019-247",
        annee_tournage: "2019",
        type_tournage: "Série TV",
        nom_tournage: "L'Attaché",
        nom_realisateur: "Eli Ben-David",
        nom_producteur: "SKM Productions",
        adresse_lieu: "108 quai de jemmapes, 75010 paris",
        ardt_lieu: "75010",
        date_debut: "2019-03-12",
        date_fin: "2019-03-12",
        coord_x: 2.36364776,
        coord_y: 48.87412826,
        geo_shape: {
            type: "Feature",
            geometry: {
                coordinates: [2.36364775765072, 48.8741282623939],
                type: "Point",
            },
            properties: {},
        },
        geo_point_2d: {
            lon: 2.36364775765072,
            lat: 48.8741282623939,
        },
    },
    {
        id_lieu: "2018-904",
        annee_tournage: "2018",
        type_tournage: "Série TV",
        nom_tournage: "Osmosis",
        nom_realisateur: "Julis Berge - Philippe Larue",
        nom_producteur: "CAPA SERIES",
        adresse_lieu: "rue watt, 75013 paris",
        ardt_lieu: "75013",
        date_debut: "2018-07-31",
        date_fin: "2018-07-31",
        coord_x: 2.38006077,
        coord_y: 48.82700045,
        geo_shape: {
            type: "Feature",
            geometry: {
                coordinates: [2.38006076958208, 48.8270004471307],
                type: "Point",
            },
            properties: {},
        },
        geo_point_2d: {
            lon: 2.38006076958208,
            lat: 48.8270004471307,
        },
    },
    {
        id_lieu: "2018-910",
        annee_tournage: "2018",
        type_tournage: "Long métrage",
        nom_tournage: "It Must Be Heaven",
        nom_realisateur: "Elia Suleiman",
        nom_producteur: "Rectangle Productions",
        adresse_lieu: "72 rue montmartre, 75002 paris",
        ardt_lieu: "75002",
        date_debut: "2018-08-08",
        date_fin: "2018-08-09",
        coord_x: 2.34469545,
        coord_y: 48.86604714,
        geo_shape: {
            type: "Feature",
            geometry: {
                coordinates: [2.34469544596908, 48.8660471384716],
                type: "Point",
            },
            properties: {},
        },
        geo_point_2d: {
            lon: 2.34469544596908,
            lat: 48.8660471384716,
        },
    },
    {
        id_lieu: "2016-2655",
        annee_tournage: "2016",
        type_tournage: "Série TV",
        nom_tournage: "LEO MATTEI/N°13 ET 14",
        nom_realisateur: "SEBASTIEN CIRADE",
        nom_producteur: "LGM CINEMA",
        adresse_lieu: "43  RUE  CUVIER",
        ardt_lieu: "75005",
        date_debut: "2016-03-14",
        date_fin: "2016-03-14",
        coord_x: 2.35725,
        coord_y: 48.84491,
        geo_shape: {
            type: "Feature",
            geometry: {
                coordinates: [2.35724999939496, 48.8449099996101],
                type: "Point",
            },
            properties: {},
        },
        geo_point_2d: {
            lon: 2.35724999939496,
            lat: 48.8449099996101,
        },
    },
    {
        id_lieu: "2016-2659",
        annee_tournage: "2016",
        type_tournage: "Série TV",
        nom_tournage: "10%/SAISON 2",
        nom_realisateur: "JEANNE HERRY",
        nom_producteur: "MON VOISIN PRODUCTIONS",
        adresse_lieu: "AVENUE  TRUDAINE",
        ardt_lieu: "75009",
        date_debut: "2016-09-06",
        date_fin: "2016-09-06",
        coord_x: 2.343211,
        coord_y: 48.881143,
        geo_shape: {
            type: "Feature",
            geometry: {
                coordinates: [2.34321099962205, 48.8811430000081],
                type: "Point",
            },
            properties: {},
        },
        geo_point_2d: {
            lon: 2.34321099962205,
            lat: 48.8811430000081,
        },
    },
    {
        id_lieu: "2020-1090",
        annee_tournage: "2020",
        type_tournage: "Long métrage",
        nom_tournage: "STELLA EST AMOUREUSE",
        nom_realisateur: "Sylvie Verheyde",
        nom_producteur: "ATELIER DE PRODUCTION",
        adresse_lieu: "rue des cinq diamants, 75013 paris",
        ardt_lieu: "75013",
        date_debut: "2020-12-22",
        date_fin: "2020-12-22",
        coord_x: 2.35076218,
        coord_y: 48.8288281,
        geo_shape: {
            type: "Feature",
            geometry: {
                coordinates: [2.35076218034357, 48.828828099592],
                type: "Point",
            },
            properties: {},
        },
        geo_point_2d: {
            lon: 2.35076218034357,
            lat: 48.828828099592,
        },
    },
];

//let machine = input.value;

const reponse = await fetch(
    `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?where=nom_tournage="UN VOYAGE EN HIVER"&limit=100`
);

const lieux_tournage2 = await reponse.json();

const results = lieux_tournage2.results;

for (let i = 0; i < results.length; i++) {
    let marker = L.marker([results[i].geo_point_2d.lat, results[i].geo_point_2d.lon]).addTo(map);

     // Ajouter une description (popup) au marqueur (Test)
    //marker.bindPopup("<b>Bonjour!</b><br>Ceci est un marqueur à Paris.").openPopup();

    // Ajouter une popup avec les informations du lieu
        //let description = `<b>${results[i].adresse_lieu}</b><br>${results[i].ardt_lieu} Paris`;
        var description = `
        <b>Nom du tournage:</b> ${results[i].nom_tournage}<br>
        <b>Adresse:</b> ${results[i].adresse_lieu}<br>
        <b>Arrondissement:</b> ${results[i].ardt_lieu} Paris<br>
        <b>Date de tournage:</b> ${results[i].date_debut} au ${results[i].date_fin}`;
        marker.bindPopup(description);

}*/

/* for (let lieu of lieux_tournage2) {
    let marker = L.marker([lieu.geo_point_2d.lat, lieu.geo_point_2d.lon]).addTo(map);
} */
//console.log("lieux de tournage c'est ça : ", lieux_tournage2);

/* async function api_call() {
    const lieux_tournage2 = await fetch(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?limit=100"
    );
    const lieux_tournage2_json = await lieux_tournage2.json();
    return lieux_tournage2_json;
}

console.log(api_call()); */

/* const oui = "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?where=nom_tournage"

let nom_film = input.value

let url_api_to_call = oui+nom_film

"https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?where=nom_tournage=L'Attaché" */
