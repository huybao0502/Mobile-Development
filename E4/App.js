import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {txt:'', data:[]}
  }
  
  buttonPressed1=()=>{

    this.setState({
      data:[...this.state.data, {key: this.state.txt}], 
      txt:''    
    });
  }
  buttonPressed2=()=>{
    this.setState({
      data:[], 
      txt:''    
    });
  }
  render() {
  
    
    return (
      <View style={styles.container}>
        <View style={{flex:1}}></View>
        <TextInput style={{width:200  , borderColor: 'gray',   borderWidth:1}}
         value={this.state.txt}
         onChangeText={(txt) => this.setState({txt})}
        />
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Button onPress={this.buttonPressed1} title="Add"/>
        <Button onPress={this.buttonPressed2} title="Clear"/>
        </View>
        <Text>Shopping list</Text>
        <FlatList data={this.state.data}renderItem={({item}) =><Text>{item.key}</ Text>}/>
      </View>
    );
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
