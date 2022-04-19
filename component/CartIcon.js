import React,{useContext} from "react";
import {View, Text, StyleSheet} from "react-native";

import {CartContext} from "../CartContext";

export function CartIcon({navigation}){
    const {getItemsCount} = useContext(CartContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}
                  onPress={() => {
                      //Appel Cart.js
                      navigation.navigate('Cart');
                  }}>
                ({getItemsCount()})
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        backgroundColor: 'orange',
        height: 32,
        padding: 12,
        borderRadius: 32 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});