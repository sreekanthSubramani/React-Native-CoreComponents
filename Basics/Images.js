import {View, Image, Button, Text, StyleSheet} from 'react-native'
import image from '../assets/images.png'

export default function Images(){

    const onlineImage = "https://i0.wp.com/everyday.codes/wp-content/uploads/2019/06/react-native-1024x631.png?resize=1024%2C631&ssl"

    return(
        <>
            <View style={styles.mainView}>
                <Text>This is used for rendering image !!</Text>
                <Image source={image} style={{height: 200, width : 300}} />
                <Image 
                source={{uri : onlineImage }} 
                style={styles.insideImage}
                resizeMode='cover'/>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    mainView : {
        display : "flex",
        flexDirection : "column",
        gap : 30,
        justifyContent : "center",
        alignItems : "center"
    },
    insideImage : {
        height : 100,
        width : 100
    }
})