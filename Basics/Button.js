import {View, Button, StyleSheet, Text, Pressable, TouchableOpacity} from 'react-native'

export default function Buttons(){

    function handleTouch(){
        console.log('Touchable Highlight')
    }



return(
<>
<View>
    <Text>Button Press</Text>
    <Button title='Press' color={'green'} />

    <Pressable  onPress={()=> {console.log('On Press In')}} >
        <Text>Alternate Use Case</Text>
    </Pressable>

    <TouchableOpacity onPress={handleTouch} underlayColor={'green'} activeOpacity={0.85}>
        <View style={styles.button} >
            <Text>Touch Here</Text>
        </View>

    </TouchableOpacity>
</View>
</>
)}``


const styles = StyleSheet.create({
      button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
})