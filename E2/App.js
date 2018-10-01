import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      guess:'', 
      number: Math.floor(Math.random() * 100) + 1,
      message: 'Guess a number between 1-100',
      numofguess: 1
    }
  }

  buttonPressed=()=>{
    let txt = 'Your guess ' + this.state.guess + ' is ';
    this.setState({numofguess: this.state.numofguess + 1});
    
    if(this.state.guess < this.state.number) {
      txt = txt +'too low' /* + this.state.number */;
      this.setState(() => {
        return { 
          message: txt,
          guess: '',
         }
      });
    }
    else {
      if(this.state.guess > this.state.number) {
        txt = txt +'too high' /* + this.state.number */;
        this.setState(() => {
          return { 
            message: txt,
            guess: '',
           }
        });
      }
      else{
        Alert.alert('You guessed the number in ' + this.state.numofguess + ' guesses');
        this.setState(() => {
          return { 
            guess:'', 
            number:Math.floor(Math.random() * 100) + 1,
            message: 'Guess a number between 1-100',
            numofguess: 1
           }
        });
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
       <Text> {this.state.message}</Text>
        <TextInput style={{width:200  , borderColor: 'gray',   borderWidth:1}}
         value={this.state.guess}
         onChangeText={(guess) => this.setState({guess})}
         keyboardType="numeric"
        />
        <Button onPress={this.buttonPressed} title="MAKE GUESS"/>
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
