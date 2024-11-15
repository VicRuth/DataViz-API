// Générer la carte avec l'API maps de LeafLet
let map;
let tiles;
let layer_group;

function GenerateMap() {
    map = L.map("map").setView([48.85837, 2.34], 13);
    tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
}
GenerateMap();

// Fonction pour récupérer les données
async function get_datas(film_name) {
    const api_url = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?`;
    const response = await fetch(`${api_url}&where=nom_tournage="${film_name}"&limit=100`);
    const lieux_tournage = await response.json();
    //console.log(lieux_tournage);
    return lieux_tournage;
}
/*
const film = "UN VOYAGE EN HIVER";
const resultat = await get_datas(film);
console.log(resultat);*/

// Fonction main
async function main(film_name) {
    // Test nécessaire afin de vérifier l'existance de layer_group : si layer_group existe, alors, on le remove
    if (layer_group) {
        layer_group.removeFrom(map);
    }

    // Appel de la fonction get_datas
    const resultat = await get_datas(film_name);
    console.log(resultat);

    // Appel de la fonction add_markers
    add_markers(resultat);

    // Appel de la fonction add_criteres
    add_criteres(resultat);
}

// Fonction pour ajouter les marqueurs et leurs descriptions sur la carte
function add_markers(object) {
    const results = object.results;
    layer_group = L.layerGroup().addTo(map);
    for (let i = 0; i < results.length; i++) {
        let marker = L.marker([results[i].geo_point_2d.lat, results[i].geo_point_2d.lon]).addTo(layer_group);

        // Ajouter une popup avec les informations du lieu
        let description = `
        <b>Adresse:</b> ${results[i].adresse_lieu}<br>
        <b>Arrondissement:</b> ${results[i].ardt_lieu} Paris<br>
        <b>Date de tournage:</b> ${results[i].date_debut} au ${results[i].date_fin}`;
        marker.bindPopup(description);
    }
    return layer_group;
}
//add_markers(resultat);

function add_criteres(object) {
    const results = object.results;
    for (let i = 0; i < results.length; i++) {
        // Mettre à jour les informations sous le bouton de recherche
        // On récupère les balises

        // On récupère le type de tournage
        const type_tournage = document.getElementById("type_tournage");
        // On accède à l'indice i du tableau pour configurer le type de tournage
        type_tournage.innerText = results[i].type_tournage;

        // On récupère le nom de l'oeuvre ou du film
        const nom_oeuvre = document.getElementById("nom_oeuvre");
        // On accède à l'indice i du tableau pour configurer le nom de l'oeuvre
        nom_oeuvre.innerText = results[i].nom_tournage;

        // On récupère l'année de tournage
        const annee_tournage = document.getElementById("annee_tournage");
        // On accède à l'indice i du tableau pour configurer l'année de tournage
        annee_tournage.innerText = results[i].annee_tournage;

        //document.getElementById('date_tournage').innerText = ${results[i].date_debut}  & "au" & ${results[i].date_fin}; (ajouter une balise)

        // On récupère l'année de tournage
        const nom_producteur = document.getElementById("nom_prod");
        // On accède à l'indice i du tableau pour configurer l'année de tournage
        nom_producteur.innerText = results[i].nom_producteur;

        // On récupère l'année de tournage
        const nom_realisateur = document.getElementById("nom_real");
        // On accède à l'indice i du tableau pour configurer au nom du réalisateur
        nom_realisateur.innerText = results[i].nom_realisateur;
    }
}
//add_criteres(resultat);

// Appel de la fonction main

// Essai sans bouton recherche et sans le input
//const film = "UN VOYAGE EN HIVER";
//main(film);

function click_button() {
    const search_input = document.getElementById("input");
    const search_button = document.getElementById("search");

    search_button.addEventListener("click", function (event) {
        const search_movie = search_input.value;
        console.log(`Nous cherchons "${search_movie}"`);
        main(search_movie);
        //return search_movie;
    });
    search_input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            search_button.click();
        }
    });
}

click_button();

// Fonction afin de récupérer une liste de tous les noms de tournage uniques
async function sort_data() {
    const response = await fetch("lieux-de-tournage-a-paris.json");
    const json = await response.json();
    const nom_films = [];
    for (let i = 0; i < json.length; i++) {
        let element = json[i];
        nom_films.push(element.nom_tournage);
    }
    console.log(nom_films);
    const nom_films_unitaire = [...new Set(nom_films)].sort();
    console.log(nom_films_unitaire);
}

sort_data();
