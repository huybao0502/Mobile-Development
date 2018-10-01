import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'History',
  };
  
  render() {
    
    const{ params} = this.props.navigation.state;
    console.log(params);
    return(
      <View style={styles.container}>
      <Text>History</Text>
      <FlatList 
        data={params.data}
        renderItem={({item}) =><Text>{item.key}</Text>}
    /> 
    </View>)
    ;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});