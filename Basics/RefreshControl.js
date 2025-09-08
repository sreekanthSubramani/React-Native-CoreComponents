import {useState, useCallback} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';



export default function RefreshControls(){

    const [ refreshing, setRefreshing ] = useState(false)
    const onRefresh = useCallback(()=>{
        setRefreshing(true)
        setTimeout(()=>{
            setRefreshing(false)
        },2000)
    },[])


    return(
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{flex : 1, alignContent : "center", justifyContent : "center"}}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                showsVerticalScrollIndicator={false}
            >
                <Text>Pull Down for Refreshing Activity</Text>
            </ScrollView>
        </SafeAreaView>
    )
}