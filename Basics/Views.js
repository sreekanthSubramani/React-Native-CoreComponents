import {View, StyleSheet, ScrollView, Text} from 'react-native'
import {SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context'

export default function Views(){
    
        const insets = useSafeAreaInsets()
        console.log(insets)
    
    return(
        <SafeAreaView style={{flex : 1}}>
            <ScrollView>
        <View style={[styles.mainView, {paddingBottom : 10}]}>
            <View style={styles.insideView}>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
            </View>

            <View style={styles.insideView}>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
            </View>

            <View style={styles.insideView}>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
            </View>


            <View style={styles.insideView}>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
            </View>

            <View style={styles.insideView}>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
            </View>


            <View style={styles.insideView}>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
            </View>


            <View style={styles.insideView}>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
            </View>


            <View style={styles.insideView}>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
            </View>

            <View style={styles.insideView}>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
            </View>


            <View style={styles.insideView}>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
                <Text style={styles.contentView}> This is a Text Message </Text>
            </View>


        </View>
        </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    mainView : {
        display : "flex",
        flexDirection : "column",
    },
    insideView :{
        height : 100,
        width : "auto",
        borderColor : 'black',
        borderWidth : 2,
        padding : 10,
        alignContent : "center",
        justifyContent : "center",
        textAlign : "center",
        flexWrap : "nowrap"
    },
    contentView : {
        fontSize : 24
    }
})