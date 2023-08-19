import { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const Nameinput = (props) =>{
    const [enteredText, setEnteredText] = useState(' ');

    const inputData = (data) =>{
        setEnteredText(data);
      }

    const addBtnFunction = () =>{
        props.onAddName(enteredText);
    }  

    return(
      <View style ={styles.inputContriner}>
      <TextInput style={styles.inputs} placeholder='Your Name ' onChangeText={inputData}/>
      <Button title='Click to Add' onPress={addBtnFunction}/>
    </View>
    )
}

const styles = StyleSheet.create({
    inputContriner:{
      padding:50,
      flexDirection:'row'
    },
    inputs:{
      marginRight:50,
      borderBottomWidth:2,
      width: 150,
      borderBottomColor: 'yellow'
    }
  });










export default Nameinput;