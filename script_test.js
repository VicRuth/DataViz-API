const encoded = encodeURI(
    `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?where=nom_tournage="L'Attaché"&limit=100`
);

console.log(encoded);
