import React  from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dex from '../dex'
import FullDex from '../DexFull'


const Drawer = createDrawerNavigator()

const DrawerMenu = () =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Pokemon Data" component={Dex}/>
                <Drawer.Screen name="Full Pokedex" component={FullDex}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerMenu