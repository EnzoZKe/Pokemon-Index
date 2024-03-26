import React from "react";
import { Image, View } from "react-native"
import { styles } from "./style";


export default function TypeIcon({TypeText}) {
    
    const GetImage = (name) => {

        const images = {
            bug : require('./imgs/bug.png'),
            dark : require('./imgs/dark.png'),
            dragon : require('./imgs/dragon.png'),
            electric : require('./imgs/electric.png'),
            fairy : require('./imgs/fairy.png'),
            fighting : require('./imgs/fighting.png'),
            fire : require('./imgs/fire.png'),
            flying : require('./imgs/flying.png'),
            ghost : require('./imgs/ghost.png'),
            grass : require('./imgs/grass.png'),
            ground : require('./imgs/ground.png'),
            ice : require('./imgs/ice.png'),
            normal : require('./imgs/normal.png'),
            poison : require('./imgs/poison.png'),
            psychic : require('./imgs/psychic.png'),
            rock : require('./imgs/rock.png'),
            steel : require('./imgs/steel.png'),
            water : require('./imgs/water.png')
        }

        return images[name];
    }

    return (
        <View style={styles.container}>
            <View style={{ height: 50, width: 100 }}>
                <Image style={{width: '100%', height: '100%'}}
                resizeMode="contain"
                source={GetImage(TypeText)} />
            </View>
        </View>
    )
}
