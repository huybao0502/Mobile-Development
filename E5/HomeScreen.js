import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
export default class HomeScreen extends React.Component {
    static navigationOptions = { title:'Home',};
    
    constructor(props) {
        super(props);
        this.state = {n1:'', n2:'', result:'', data:[]}
      }

    buttonPressed1=()=>{
        const sum = Number(this.state.n1) + Number(this.state.n2);
    
        this.setState({
          result: sum,
          data:[...this.state.data, {key: this.state.n1 + ' + ' + this.state.n2 + ' = ' + sum}], 
          n1 : '',
          n2 : ''
        });
      }
      buttonPressed2=()=>{
        const sub = Number(this.state.n1) - Number(this.state.n2);
    
        this.setState({
          result: sub,
          data:[...this.state.data, {key: this.state.n1 + ' - ' + this.state.n2 + ' = ' + sub}], 
          n1 : '',
          n2 : ''
        });
        console.log(this.state.data);
      }
    render() {
        const{ navigate } = this.props.navigation;
        return(
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
        <View style={{flexDirection:'row'}}>
        <Button onPress={this.buttonPressed1} title="+"/>
        <Button onPress={this.buttonPressed2} title="-"/>
        <Button onPress={() =>  navigate('History', {data: this.state.data})} title="History"/>
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