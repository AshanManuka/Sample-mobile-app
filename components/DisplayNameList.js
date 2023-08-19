import {View, Text, StyleSheet} from 'react-native';

const DisplayNameList = (props) =>{
    return(
        <View>
            <Text style={styles.nameLi}>{props.text}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    
    nameLi:{
      padding: 5,
      backgroundColor : '#79255B',
      marginBottom : 3,
      color: 'white'
    }
  });

  export default DisplayNameList;