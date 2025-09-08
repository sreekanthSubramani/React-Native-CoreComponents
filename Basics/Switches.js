import {View, StyleSheet, Switch, Text} from 'react-native'
import { useState } from 'react'

export default function Switches(){

    const [enableSwitch, setEnableSwitch] = useState(false)

    function handleSwitch(){
        setEnableSwitch((prev)=> !prev)
    }




    return(
        <View>
            <View style={{margin: "auto"}}>
            <Switch
            trackColor={{false: 'grey', true: 'green'}}
            thumbColor={enableSwitch ? 'green' : 'grey'}
            onValueChange={handleSwitch}
            value={enableSwitch}
            />
            </View>

            <View style={{paddingTop : 30}}>
            {enableSwitch ?
            <Text>Switch Enabled !</Text>
            :
            <Text> </Text>}
            </View>

        </View>
    )
}