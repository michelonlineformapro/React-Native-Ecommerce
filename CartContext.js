import React, {createContext, useEffect, useState} from "react";
import {getProductById, getProducts} from "./services/ProduitsService";

export const CartContext = createContext();

export function CartProvider(props){
    //Hooks de chaque carte = getter et setter et retourne un tableau
    const [items, setItems] = useState([]);

    //Fonction une carte par produit
    function addItemToCart(id){
        //Appel de la fonction des Services
        const product = getProductById(id);
        //Le setter du hook
        setItems((prevItems) => {
            const item = prevItems.find((item) => (item.id === id));
            //Si item retorune false
            if(!item){
                //Retourne spredOperator(etend un iterable(tableau / chaine de caractère))
                //en lieu et place de plusieurs arguments(fonction) ou plusieur elements (tableau)
                return [...prevItems,{
                    id,
                    qty:1,
                    produit,
                    totalPrice: produit.prix_produit
                }];
            }else{
                //Sinon on retourne un tableau d'item et on incremente la quantité
                return prevItems.map((item) => {
                    //Si les items matche avec id connue
                    if(item.id === id){
                        item.qty++;
                        item.totalPrice += produit.prix_produit;
                    }
                    return item;
                })
            }
        });
    }
    function getItemsCount() {
        return items.reduce((sum,  item) => (sum + item.qty), 0);
    }

    function  getTotalPrice() {
        return items.reduce((sum, item) => (sum + item.totalPrice), 0);
    }

    return(
        <CartContext.Provider
            value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice}}>
            {props.children}
        </CartContext.Provider>
    );
}