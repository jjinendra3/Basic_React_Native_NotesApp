import {useState} from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";
const Notes=({navigation, route})=>{
const [Title, onChangeTitle] = useState('');
const [Desc, onChangeDesc] = useState('');
const [id, setid] = useState(11);
const note_adder=()=>{
    const dum=[...route.params.arr];
    dum.push({
        id:id,
        title:Title,
        desc:Desc
    });
    route.params.setnotes(dum);
}
    return(
    <>
<View>
        <Text style={style.head}>Add A Note</Text>
        <View style={{margin:10,padding:20,
        backgroundColor: 'white',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
            <TextInput
              type="text"
              className="form-control"
              placeholder="Title"
              id="title"
              name="title"
              aria-describedby="emailHelp"
        onChangeText={onChangeTitle}
        value={Title}
            /></View>
            <View style={{margin:10,padding:20,
        backgroundColor: 'white',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
            <TextInput
              type="text"
              multiline
              placeholder="Description"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
        onChangeText={onChangeDesc}
        value={Desc}
            /></View>
          <TouchableOpacity style={style.button} onPress={()=>{
            console.log(id,Title,Desc);
            setid(id+1);
            note_adder();
            onChangeTitle('');
            onChangeDesc('');
            navigation.goBack();
          }}
          >
            <Text style={style.button}>Add Note</Text>
            
          </TouchableOpacity>
      </View>
    </>

    )
}
const style=StyleSheet.create({
    
    button:{
        backgroundColor: '#4CAF50',
  color: 'white',
  padding: 15,
  fontSize:20,
  textAlign:'center',
    },
    head:{
  color: 'black',
  padding: 15,
  fontSize:20,
  textAlign:'center',
    }
})
export default Notes;