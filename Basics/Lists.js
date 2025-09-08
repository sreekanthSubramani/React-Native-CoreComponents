import {View, StyleSheet, FlatList, SectionList, VirtualizedList, Button, Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

export default function Lists(){
    
        const bigData = [
            {
                id : 1,
                name : "Sreekanth",
                prof : "Software Engineer"
            },
            {
                id : 2,
                name : "Surya",
                prof : "Data Engineer"
            },
            {
                id : 3,
                name : "Sakthi",
                prof : "HR"
            },
            {
                id : 4,
                name : "Yamni",
                prof : "Cloud Engineer"
            },
            {
                id : 5,
                name : "Sriram",
                prof : "Cybersecurity Engineer"
            },
            {
                id : 6,
                name : "Kumaran",
                prof : "3D Designer"
            },
            {
                id : 7,
                name : "Jayesh Thirumal",
                prof : "The CTO"
            },
            {
                id : 8,
                name : "Uma Subramani",
                prof : "The CEO"
            },
            {
                id : 9,
                name : "TP Kumar",
                prof : "External Business Head"
            },
            {
                id : 10,
                name : "Karthik",
                prof : "AI Engineer"
            },

        ]
    

const sections = [
  { title: "Engineers", data: ["Sreekanth", "Surya", "Karthik"] },
  { title: "HR", data: ["Sakthi"] },
  { title: "Management", data: ["Jayesh", "Uma", "Kumar"] },
];

    
    return(
        <SafeAreaView style={{flex : 1}}>
            <View style={{display : "flex", flexDirection : "column", justifyContent : "center", alignContent : "center"}}>

    <FlatList
            data={bigData}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={({item})=>(
                <View style={{display : "flex", padding : 50}}>
                    <Text>{item.name}</Text>
                    <Text>{item.prof}</Text>
                </View>
            )} 
            showsVerticalScrollIndicator={false}
            />

        <SectionList
        sections={sections}
        keyExtractor={(item, index)=> item + index}
        renderItem={({item})=>(
            <Text>{item}</Text>
        )}
        renderSectionHeader={({section})=>(
            <Text style={{fontSize : 30}}>{section.title}</Text>
    )} 
    showsVerticalScrollIndicator={false}
    /> 


    <VirtualizedList
    data={bigData}
    keyExtractor={(item)=> item.id}
    renderItem={({item})=>(
        <Text>{item.name}</Text>
    )}
    initialNumToRender={4}
    getItem={(data, index)=> data[index]}
    getItemCount={(data)=> data.length}
    />


            </View>name
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

})            


