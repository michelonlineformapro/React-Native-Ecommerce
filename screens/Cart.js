import React,{useEffect, useState, useContext} from "react";
import {View, Text, Button, FlatList, StyleSheet} from "react-native";

//La carte et le contexte globale
import {CartProvider} from "../CartContext";

export function Cart({navigation}){
    const {items, getItemsCount, getTotalPrice} = useContext(CartProvider);

    //Le total des commandes
    function Totals(){
        //Hook du total getter et setter de type entier ou number float
        let [total, setTotal] = useState(0);
        //apres le 1er render OnComponentDidMount()
        useEffect(() => {
            setTotal(getTotalPrice());
        });
        //Affichage
        return(
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                <Text style={styles.lineRight}>{total} €</Text>
            </View>
        );
    }

    //Afficher les items
    function renderItem({item}){
        return(
            <View style={styles.cartLine}>
                <Text style={styles.lineLeft}>{item.product.nom_produit} X {item.qty}</Text>
                <Text style={styles.lineRight}>{item.totalPrice} €</Text>
            </View>
        );
    }
    //Afficher la liste des produits au apnier
    return(
        <FlatList data={items} renderItem={renderItem}
                  style={styles.itemList}
                  contentContainerStyle={styles.itemListContainer}
                  keyExtractor={(item) => item.product.id.toString()}
                  ListFooterComponent={Totals}
        />
    )
}


//le css
const styles= StyleSheet.create({
    cartLine:{
        flexDirection:'row'
    },
    cartLineTotal:{
        flexDirection: 'row',
        borderTopColor: '#dddddd',
        borderTopWidth: 2
    },
    lineTotal: {
        fontWeight: 'bold'
    },
    lineLeft:{
        fontSize: 20,
        lineHeight: 40,
        color: '#333333'
    },
    lineRight:{
        flex:1,
        fontSize:20,
        fontWeight: 'bold',
        lineHeight: 40,
        color: '#333333',
        textAlign: 'right'
    },
    itemList:{
        backgroundColor:'#eeeeee'
    },
    itemListContainer:{
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8
    }
})