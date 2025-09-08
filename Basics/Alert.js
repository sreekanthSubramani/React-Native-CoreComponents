import {Alert, View, ScrollView, Text, Button} from 'react-native'

export default function Alerts(){
    
    function handleAlert(){
        Alert.alert("Alert Title", 'Alert Message', [
            {
                text : "Show Alert",
                onPress : ()=>{console.log('Showed Alert Option')},
                style : "destructive"
            },
            {
                text : "Close",
                style : "cancel"
            }
        ])
    }
    
    
    return(
        <View>
            <Text>Alert Functionality !!</Text>
            <Button title='Alert Open' onPress={handleAlert} />
        </View>
    )
}


