const PRODUITS = [
    {
        id: 1,
        nom_produit: 'Table en bois',
        prix_produit: 250.25,
        image_produit: '../assets/img/table.jpg',
        description_produit: 'Table de marque IKEA en bois et fer forgé'
    },
    {
        id: 2,
        nom_produit: 'Chaise en bois',
        prix_produit: 150.25,
        image_produit: '../assets/img/chaise.webp',
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