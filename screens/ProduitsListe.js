import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from "react-native";
import {Produit} from "../component/Produit";
import {getProducts} from "../services/ProduitsService";
export function ProduitsListe({navigation}){

    function renderProduct({item: product}){
        return(
            <Produit {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', {
                        productId: product.id
                    })
                }}
            />
        );
    }

    //les hooks = getters + setters
    const [products, setProducts] = useState([]);
    useEffect(() => {
        //Le setter est = a produitService = getProduct() = recup tous les produits
        setProducts(getProducts());
    });
    return(
        <FlatList
            //appel du css
            style={styles.productList}
            contentContainerStyle={styles.productListContainer}
            //Extrait une clé unique obligatoire dans chaque liste
            keyExtractor={(item) => item.id.toString()}
            //data est obligatoire et représente un tableau de données
            data={products}
            //appel de la fonction ci-dessus + appel des elements de produits services + affichage
            renderItem={renderProduct}
            />
    );
}


//le css
const styles = StyleSheet.create({
    productList:{
        backgroundColor: "#eeeeee",

    },
    productListContainer:{
        backgroundColor: "#eeeeee",
        paddingVertical: 8,
        marginHorizontal: 8
    },
});