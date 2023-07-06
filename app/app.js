import {useState} from "react";
import { View,Text,ScrollView,StyleSheet,TouchableOpacity,Image } from "react-native";
import { Stack,useRouter } from "expo-router";
const Home=({navigation})=>{
    const router=useRouter();
    const [arr,setnotes]=useState([{id:0,title:'First Note',desc:"Add Notes Now"}]);
    
    return(
        <>   
           <Stack.Screen /> 
            <ScrollView>
              <View>
            {
                arr.map((element)=>{
                    return(
                        <TouchableOpacity onPress={()=>{
                            presser(element.id);
                        }}>
                        <View style={style.item} key={element.id}>
                            <Text style={style.title}>Title:{element.title}</Text>
                            <Text style={style.description}>Description:{element.desc}</Text>
                        </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
        </ScrollView>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('Adder', {arr,setnotes})
        }}>
        <Image source={require('../plus.png')} style={style.adder}/>
        </TouchableOpacity>
        </>

    )
}
const style=StyleSheet.create({
    item:{
        marginTop:24,
        padding:30,
        borderStyle:'solid',
        borderWidth:1,
        border:'5px solid red',
        backgroundColor:'pink'   
    },
    adder:{
        height:65,
        width:65,
        borderRadius:100,
        position:'absolute',
        bottom:30,
        right:30
    },
    title:{
        margin:5,
  fontSize:24
    },
    description:{
        margin:5,
  fontSize:20
    }
})
export default Home;