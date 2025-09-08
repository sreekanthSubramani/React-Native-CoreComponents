import { Modal, View, StyleSheet, Button, Text, Pressable } from "react-native"
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import { useState } from "react"


export default function Modals(){

    const [modalVisible, setmodalVisible] = useState(false)

    function openModal(){
        setMod((prev)=> !prev)
    }   

    function closeMod(){
        setMod((prev)=> !prev)
    }


    return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>

        <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={()=>{
            setmodalVisible((prev)=> !prev)
        }}
        animationType="slide">

             <View style={{position : "absolute", bottom : 20, height : "auto", backgroundColor : "grey", width : "100%"}}>
                <View style={{display : "flex", flexDirection: "column", justifyContent : "center", alignItems : "center", borderColor : "green", borderWidth : 3}}>
                <Text>Showing Modal</Text>
                <Text>Modal Executed Successfully !!</Text>
                <Button title="Close Modal" onPress={()=> setmodalVisible((prev)=> !prev)} />
                </View>
            </View>

        </Modal>

        <Button title="Open Modal" onPress={()=> setmodalVisible((prev)=> !prev)} />

      </SafeAreaView>
    </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
