import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {n1:'', n2:'', result:''}
  }
  
  buttonPressed1=()=>{
    const { n1, n2 } = this.state;

    this.setState({
      result: Number(n1) + Number(n2)
    });
  }
  buttonPressed2=()=>{
    const { n1, n2 } = this.state;

    this.setState({
      result: Number(n1) - Number(n2)
    });
  }
  render() {
  
    
    return (
      <View style={styles.container}>
        <Text>Result: {this.state.result}</Text>
        <TextInput style={{width:200  , borderColor: 'gray',   borderWidth:1}}
         value={this.state.n1}
         onChangeText={(n1) => this.setState({n1})}
         keyboardType="numeric"
        />
       <TextInput style={{width:200  , borderColor: 'gray',   borderWidth:1}}
         value={this.state.n2}
         onChangeText={(n2) => this.setState({n2})}
         keyboardType="numeric"
        />
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Button onPress={this.buttonPressed1} title="+"/>
        <Button onPress={this.buttonPressed2} title="-"/>
        </View>
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
