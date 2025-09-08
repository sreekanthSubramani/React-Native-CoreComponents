import {View, StyleSheet, ImageBackground, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Imagebackgrounds(){

     const onlineImage = "https://i0.wp.com/everyday.codes/wp-content/uploads/2019/06/react-native-1024x631.png?resize=1024%2C631&ssl"
    return(
        <>
                <SafeAreaView style={{flex : 1}}>
                <View style={styles.mainDiv}>
                <ImageBackground source={{uri : onlineImage}} style={styles.imageCap} resizeMode='cover' defaultSource={{uri : onlineImage}}> 
            
                    <Text style={styles.text}> Donald Trump </Text>

                </ImageBackground>
                </View>
                </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    mainDiv : {
        flex : 1,
    },
    imageCap : {
        flex : 1,
        height : "100%",
        width : "100%",
        justifyContent : "center",
        alignItems : "center",
    },
    text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },

})