import React,{useEffect, useState, useContext} from "react";

import {Text,Image, View, ScrollView, SafeAreaView, Button, StyleSheet} from "react-native";

//Recup de tous les produits via les services
import {getProducts} from "../services/ProduitsService";
//Appel de la carte Globale contexte
import {CartProvider} from "../CartContext";

export function ProduitDetails({route}){
    const {productId} = route.params;
    //Le hook getter et setter retourne un objet
    const [product, setProduct] = useState({});

    //Stock et appel de la carte produit grace au context globale
    const {addItemToCart} = useContext(CartProvider);

    //Appel de la fonction apres le 1er render OnComponentDidMount()
    useEffect(() => {
        setProduct(getProducts(productId));
    });

    //la fonction ajouter a la carte
    function addToCart(){
        addItemToCart(product.id);
    }
    //Affichage
    return(
        <SafeAreaView>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={product.image}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.nom}>{product.nom_produit}</Text>
                    <Text style={styles.prix}>{product.prix_produit} €</Text>
                    <text style={styles.description}>{product.description_produit}</text>
                    <Button
                        onPress={addToCart}
                        title="Plus d'infos"
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