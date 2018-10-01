import React from 'react';
import{createStackNavigator} from'react-navigation';
import HomeScreen from'./HomeScreen';
import SettingScreen from'./SettingScreen';


export default class App extends React.Component {
  render() {
    return (
      <MyApp/>
    );
  }
}

const MyApp = createStackNavigator({
  Home: {screen: HomeScreen},
  History: {screen: SettingScreen}
});

