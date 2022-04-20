const PRODUITS = [
    {
        id: 1,
        nom_produit: 'Table en bois',
        prix_produit: 250.25,
        image_produit: 'https://www.ikea.com/fr/fr/images/products/ekedalen-table-extensible-chene__0736964_pe740828_s5.jpg?f=s',
        description_produit: 'Table de marque IKEA en bois et fer forgé'
    },
    {
        id: 2,
        nom_produit: 'Chaise en bois',
        prix_produit: 150.25,
        image_produit: 'https://cdn.habitat.fr/thumbnails/product/1112/1112877/box/850/850/40/F4F4F4/chaise-en-chene-massif-bois-clair_1112877.jpg',
        description_produit: 'Chaise de marque IKEA en bois d\' olivier'
    }
];

//Acces a tous les produits
export function getProducts(){
    return PRODUITS;
}

//Produit par id
export function getProductById(id){
    return PRODUITS.find((produit) => (
        produit.id === id
    ));
}