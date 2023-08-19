import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hello friends!</Text>
      <Text style={styles.Text}>This is my first Mobile Application</Text>
      <StatusBar style="auto" />

      <Button title='start'/>
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
    color : 'white'
  }
});
