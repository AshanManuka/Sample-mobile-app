import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [enteredText, setEnteredText] = useState(' ');
  const [nameList,setNameList] = useState([]);

const addBtnFunction = () =>{
  setNameList((currentNameList) => [...currentNameList,{text : enteredText, id : Math.random.toString()}]);

}

const inputData = (data) =>{
  setEnteredText(data);

}


  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hello friends!</Text>
      <Text style={styles.Text}>This is my first Mobile Application</Text>


    <View style ={styles.inputContriner}>
      <TextInput style={styles.inputs} placeholder='Your Name ' onChangeText={inputData}/>
      <Button title='Click to Add' onPress={addBtnFunction}/>
    </View>

    <FlatList data={nameList} keyExtractor={(item,index) => item.id} renderItem={itemData => {
      return(
        <Text style={styles.nameLi}>{itemData.item.text}</Text>
      );
    }}>

    </FlatList>
      
    {/* <ScrollView >
      {
        nameList.map((name) =><Text style={styles.nameLi} key={name}>{name}</Text>)
        //<Text>{enteredText}</Text>
      }
    </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1064eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    color : 'white',
    marginBottom: 20
  },
  inputContriner:{
    padding:50,
    flexDirection:'row'
  },
  inputs:{
    marginRight:50,
    borderBottomWidth:2,
    width: 150,
    borderBottomColor: 'yellow'
  },
  nameLi:{
    padding: 5,
    backgroundColor : '#79255B',
    marginBottom : 3,
    color: 'white'
  }
});
