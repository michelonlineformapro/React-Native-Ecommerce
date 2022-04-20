import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ProduitsListe} from "./screens/ProduitsListe";
import {ProduitDetails} from "./screens/ProduitDetails";
import {Cart} from "./screens/Cart";
import {CartIcon} from "./component/CartIcon";
import {CartProvider} from "./CartContext";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <CartProvider>
          <NavigationContainer>
          <Stack.Navigator>
                <Stack.Screen name="Products" component={ProduitsListe}
                  options={({navigation}) => ({
                    title: 'Produits',
                    headerTitleStyle: styles.headerTitle,
                    headerRight: () => <CartIcon navigation={navigation}/>,
                  })} />
              <Stack.Screen name='ProductDetails' component={ProduitDetails}
                            options={({ navigation }) => ({
                                title: 'Détails du produit',
                                headerTitleStyle: styles.headerTitle,
                                headerRight: () => <CartIcon navigation={navigation}/>,
                            })} />
              <Stack.Screen name='Cart' component={Cart}
                            options={({ navigation }) => ({
                                title: 'Mon panier',
                                headerTitleStyle: styles.headerTitle,
                                headerRight: () => <CartIcon navigation={navigation}/>,
                            })} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle:{
    fontSize: 20
  }
});
