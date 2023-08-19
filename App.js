import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import DisplayNameList from './components/DisplayNameList';
import Nameinput from './components/NameInput';


export default function App() {
  const [nameList,setNameList] = useState([]);

const addBtnFunction = (enteredText) =>{
  setNameList((currentNameList) => [...currentNameList,{text : enteredText, id : Math.random.toString()}]);

} 


  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hello friends!</Text>
      <Text style={styles.Text}>This is my first Mobile Application</Text>

      <Nameinput onAddName={addBtnFunction} />

    <FlatList data={nameList} keyExtractor={(item,index) => item.id} renderItem={itemData => {
      return(
          <DisplayNameList text={itemData.item.text}/>
        )
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
