API LINK:
https://303b3722-2459-4aa3-abf5-7d9d7f683f26-00-14o7hxfmxv1pp.picard.replit.dev/
Link Replit:
https://replit.com/join/toncvbpaus-alphafox2


const Dex = () =>{

    const [findPKM, setFindPKM] = useState('') // ! Nome do pokemon para pesquisa

    const [id, setId] = useState(1) // ! Id do poquemon pode ser usado para pesquisa
    const [nomePKM, setNomePKM] = useState('') // ! Nome do pokemon 
    const [pkmType, setPkmType] = useState([]) // ! Tipos do pokemon
    const [PkmShinyImage, setShinyPKM] = useState('') // ! Imagem Shiny do pokemon
    const [PkmImage, setUrlImagem] = useState('') // ! Imagem normal do pokemon

    const [curentIMG, setCurentIMG] = useState('')

    const FetchURL = async (url) => {
        const resposta = await fetch(url)
        let data = await resposta.json()
        return data
    }
    
    const GetPokemonData = async () => {
        let data = await FetchURL("https://303b3722-2459-4aa3-abf5-7d9d7f683f26-00-14o7hxfmxv1pp.picard.replit.dev/pokemon/1")

        console.log(data);

        setId(data['PokeId'])
        setNomePKM(data['Name'])
    }

    useEffect(()=>{
        GetPokemonData()
    },[id])

    return(
        <View style={styles.centerAll}>
            <View style={styles.centerTXT}>
                <Text style={styles.title}>WELCOME TO THE POKEDEX!</Text>
                <TextInput style={styles.textINP} placeholder='Type the pokemon name' onChangeText={setFindPKM} value={findPKM} />

                <Text style={styles.otherTXT}>Pokemon Name: {nomePKM}</Text>
                <Text style={styles.otherTXT}>Pokemon ID: {id}</Text>

            </View>
            
            <View style={styles.centerIMG}>
                <Image style={styles.imgSize} source={{uri: curentIMG}}/>
            </View>


           {
            /*
                <View style={styles.centerTXT}>
                    <Text> ALL RIGHTS TO NINTENDO AND POKEMON COMPANY. THIS IS A SCHOOL PROJECT</Text>
                    <View>
                        <Text>MADE BY:</Text>
                        <Image style={styles.imgSize} source={{uri: 'https://avatars.githubusercontent.com/u/71941970?v=4'}}/>
                        <Image/>
                    </View>
                </View>
            */
           }
        </View>
    )
}
