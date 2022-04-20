import React,{useEffect, useState, useContext} from "react";

import {Text,Image, View, ScrollView, SafeAreaView, Button, StyleSheet} from "react-native";

//Recup de tous les produits via les services
import {getProductById, getProducts} from "../services/ProduitsService";
//Appel de la carte Globale contexte
import {CartContext} from "../CartContext";

export function ProduitDetails({route}){
    const {productId} = route.params;
    //Le hook getter et setter retourne un objet
    const [product, setProduct] = useState({});

    //Stock et appel de la carte produit grace au context globale
    const { addItemToCart } = useContext(CartContext);

    //Appel de la fonction apres le 1er render OnComponentDidMount()
    useEffect(() => {
        //Appel de la fonction de ProduitsService -> get By ID
        //En paramètre on passe l'id recup grace a route.params
        //ici on utilise le setter du hook et l'etat des données
        setProduct(getProductById(productId));
    });

    //la fonction ajouter au panier
    function addToCart(){
        addItemToCart(product.id);
    }
    //Affichage
    return(
        <SafeAreaView>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={product.image_produit}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.nom}>{product.nom_produit}</Text>
                    <Text style={styles.prix}>{product.prix_produit} €</Text>
                    <Text style={styles.description}>{product.description_produit}</Text>
                    <Button
                        onPress={addToCart}
                        title="METTRE AU PANIER"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

//Le css
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset:{
            height: 0,
            width: 0
        },
        elevation: 1,
        marginVertical: 20
    },
    image:{
        height:300,
        width: '100%'
    },
    thumb:{
        height: 260,
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16,
        width: '100%'
    },
    infoContainer: {
        padding:16
    },
    nom:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    prix:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom:8
    },
    description:{
        fontSize:16,
        fontWeight:'400',
        color:'#787878',
        marginBottom:16
    }
})