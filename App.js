
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hello friends!</Text>
      <Text style={styles.Text}>This is my first Mobile Application</Text>


    <View style ={styles.inputContriner}>
      <TextInput style={styles.inputs} placeholder='Your Name '/>
      <Button title='Click to Go'/>
    </View>
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
  }
});
