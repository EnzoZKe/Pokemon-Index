import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, Image, StyleSheet, FlatList } from "react-native";

const DexFull = () =>{
    
    const [pokemonData, setPokemonData] = useState('')

    const showPKM = (props) =>{
        return(
           <Image style={[styles.imagem]}/>
        );
    }
    
    const findDadosPKM = async() =>{
            try {
            let response = await fetch(`https://303b3722-2459-4aa3-abf5-7d9d7f683f26-00-14o7hxfmxv1pp.picard.replit.dev/pokemons`)
            let data = await response.json()
            setPokemonData(data)

        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() =>{
        findDadosPKM()
    }, [])

    return(
        <View style={styles.centerAll}>
            <Text>ALL POKEMON</Text>

            <FlatList
                data={pokemonData}
                renderItem={showPKM}
                keyExtractor={item => item.id}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        width: 100,
        height: 100
    },
    tipos: {
        flexDirection: 'row'
    },
    centerAll: {
        flex: 1, 
        alignItems: 'center',
    }
})

export default DexFull