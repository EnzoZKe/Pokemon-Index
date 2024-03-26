import React, {useState, useEffect} from 'react'
import {Text, View, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native'
import TypeIcon from './TypeIcon'

const Dex = () =>{

    const [id, setId] = useState(1)
    const [urlImagem, setUrlImagem] = useState('')
    const [curentIMG, setCurentIMG] = useState('')
    const [nomePKM, setNomePKM] = useState('')
    const [findPKM, setFindPKM] = useState('')
    const [pkmType, setPkmType] = useState([])
    const [shinyPKM, setShinyPKM] = useState('')
    const [backPKM, setBackPKM] = useState('')
    const [backShinyPKM, setBackShinyPKM] = useState('')

    const FetchURL = async (url) => {
        const resposta = await fetch(url)
        const dados = await resposta.json()
        return dados
    }

    const searchPKM = async () =>{

        try {
            let data = await FetchURL(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)
            setUrlImagem(data['sprites']['front_default'])
            setCurentIMG(data['sprites']['front_default'])
            setNomePKM(data['pokemon']['name'])
            setPkmType(data['types'])
            setShinyPKM(data['sprites']['front_shiny'])
            setBackPKM(data['sprites']['back_default'])
            setBackShinyPKM(data['sprites']['back_shiny'])

        } catch (error) {
            console.log(error);
        }
    
    }

    useEffect( () => {
        searchPKM()
    }, [id])

    useEffect(() =>{
        BuscarPeloNome()
    }, [findPKM])

    const previous = () =>{
        if (id > 1) {
            setId(id => id - 1)
        }
    }

    const next = () =>{
        if (id < 1025){
            setId(id => id + 1)
        }
    }

    const shiny = () =>{
        setCurentIMG(shinyPKM)
    }

    const back = () =>{
        setCurentIMG(backPKM)
    }

    const shinyBack = () =>{
        setCurentIMG(backShinyPKM)
    }

    const Normal = () =>{
        setCurentIMG(urlImagem)
    }

    const BuscarPeloNome = async () => {
        try {
            dados = await FetchURL('https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1025')
            let Pokemons = dados["results"]

            Pokemons.forEach( async (Pokemon) => {
                if(Pokemon["name"] == findPKM.toLowerCase()) {

                    const dadosPokemon = await FetchURL(Pokemon["url"])
                    setId(dadosPokemon['id'])
                    setPkmType(dadosPokemon['types'])
                }
            });

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <View style={styles.centerAll}>
            <View style={styles.centerTXT}>
                <Text style={styles.title}>WELCOME TO THE POKEDEX!</Text>
                <TextInput style={styles.textINP} placeholder='Type the pokemon name' onChangeText={setFindPKM} value={findPKM} />

                <Text style={styles.otherTXT}>Pokemon Name: {nomePKM}</Text>
                <Text style={styles.otherTXT}>Pokemon ID: {id}</Text>
                <View style={styles.fixTypes}>
                   {
                    pkmType.map((type, i) => (
                            <TypeIcon key={i} TypeText={type['type']['name']}/>
                    ))
                } 
                </View>
                
            </View>
            
            <View style={styles.centerIMG}>
                <Image style={styles.imgSize} source={{uri: curentIMG}}/>
            </View>

            {/* Botões */}
            <View style={styles.center_BTN}>
                <TouchableOpacity style={styles.butao_Prev} onPress={previous}>
                    <Text>Previous</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.butao_Next} onPress={next}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>

            {/* Front Shiny and Normal Back */}
            <View style={styles.center_BTN}>
                <TouchableOpacity style={styles.shiny} onPress={shiny}>
                    <Text>Shiny sprite</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.back} onPress={back}>
                    <Text>Back Sprite</Text>
                </TouchableOpacity>
            </View>
            {/* Back shiny and Normal sprite */}
            <View style={styles.center_BTN}>
                <TouchableOpacity style={styles.back} onPress={shinyBack}>
                    <Text>Shiny back sprite</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.butao_Next} onPress={Normal}>
                    <Text>Normal</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.centerTXT}>
                <Text style={styles.otherTXT}> ALL RIGHTS TO NINTENDO AND POKEMON COMPANY. THIS IS A SCHOOL PROJECT.</Text>
                <View style={styles.centerWorkers}>
                    <Image style={styles.workersLogo} source={{uri: 'https://avatars.githubusercontent.com/u/71941970?v=4'}}/>
                    <Image style={styles.workersLogo} source={{uri: 'https://raw.githubusercontent.com/EnzoZKe/pudim/master/imgs/E_logo-2.png'}}/>
                </View>
            </View>
        </View>
    )
}

export default Dex

const styles = StyleSheet.create({
    butao_Next: {
        backgroundColor: '#BFEA7C',
        padding: 10,
        borderWidth: 2,
        borderColor: '#114232',
        textAlign: 'center',
        borderRadius: 20
    },
    butao_Prev: {
        backgroundColor: '#FF204E',
        padding: 10,
        borderWidth: 2,
        borderColor: '#5D0E41',
        textAlign: 'center',
        borderRadius: 20,
        

    },
    center_BTN:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    imgSize: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        backgroundColor: '#211C6A',
        marginBottom: 10,
        borderRadius: 30,
        padding: 10
    },
    centerAll: {
        backgroundColor: '#8B93FF',
        flex: 1,
        overflow: 'scroll'
    },
    centerTXT: {
        alignItems: 'center',
    },
    centerIMG: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
        backgroundColor: '#211C6A',
        padding: 10,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        color: '#C5FFF8'
    },
    textINP: {
        borderBottomWidth: 3,
        borderBottomColor: '#280274',
        width: 260,
        textAlign: 'center',
        marginBottom: 5,
        backgroundColor: '#DCF2F1',
        borderTopEndRadius: 6,
        borderStartStartRadius: 6,
        padding: 3
    },
    otherTXT: {
        fontSize: 20,
        color: '#001B79'
    },
    shiny: {
        backgroundColor: '#6420AA',
        padding: 10,
        borderWidth: 2,
        borderColor: '#5E1675',
        textAlign: 'center',
        borderRadius: 20,
    },

    back: {
        backgroundColor: '#F7418F',
        padding: 10,
        borderWidth: 2,
        borderColor: '#5E1675',
        textAlign: 'center',
        borderRadius: 20,
    },
    workersLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    centerWorkers: {
        flexDirection: 'row'
    },
    fixTypes: {
        flexDirection: 'row'
    }
})