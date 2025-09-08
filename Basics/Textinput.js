import {View, StyleSheet, TextInput, Text, Keyboard} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useState } from 'react'

export default function TextInputter(){

    const [text, setText] = useState('')
    
    return(
        <SafeAreaView style={{flex : 1}}>

        <View style={{display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center"}}>
        <Text>This is different types of Text Input</Text>
        
        
        <View>
        <Text>Normal Text Input</Text>
        <TextInput style={styles.txtInp1} />
        </View>


        <View>
            <Text>Number Pad Input</Text>
            <TextInput 
            style={styles.txtInp1} 
            keyboardType='number-pad'
            returnKeyType='done'
            onSubmitEditing={()=> Keyboard.dismiss()}
            />
        </View>

        <View>
            <Text>State Management</Text>
            <TextInput 
            style={styles.txtInp1} 
            keyboardType='default'
            onChangeText={(e)=> setText(e)}
            keyboardAppearance='dark'
            clearButtonMode={'always'}
            />
        </View>
        
        <View>
            <Text>{text}</Text>
        </View>


        <View>
            <Text>Multiline Management</Text>
            <TextInput 
            style={styles.txtInp1} 
            keyboardType='default'
            multiline={true}
            keyboardAppearance='dark'
            numberOfLines={10}
            />
        </View>
        
        </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    firstDiv : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignContent : "center",
    },
    txtInp1 : {
        height : 40,
        width : 300,
        borderWidth : 1,
        borderColor : "black"
    }
})