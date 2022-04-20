import React from 'react';
//Elements de react native
import {Text, Image, View, StyleSheet, TouchableOpacity} from "react-native";

export function Produit({nom_produit, prix_produit, image_produit, onPress}){
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.thumb} source={{uri: image_produit}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.nom}>{nom_produit}</Text>
                <Text styme={styles.prix}>{prix_produit} €</Text>
            </View>
        </TouchableOpacity>

    )
}

//le css
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
    thumb:{
        height: 300,
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16,
        width: '100%',
        paddingVertical:8,
        paddingHorizontal:8

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
        fontWeight: 'bold'
    }

});