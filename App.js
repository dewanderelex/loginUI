import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Dimensions
 } from 'react-native';
 import { Button } from 'react-native-elements'
import { Font } from 'expo';

import Background from './src/res/img/img.jpg';

const { width: WIDTH } = Dimensions.get('window');

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentDidMount (){
    await Font.loadAsync({
      'RaleWay': require(
        './assets/fonts/Raleway-Black.ttf'
      )
    });
    this.setState({fontLoaded : true});
  }

  render() {
    return (
    <ImageBackground style = {styles.backgroundContainer} source = {Background}>
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <Text style = {[styles.logo, {fontFamily: 'RaleWay', fontSize: 30, color: 'white'}]}>Alex DZ</Text>
        ) : null
        }
        <Button
          large
          raised
          icon={{name: 'sc-facebook', color: 'white', type: 'evilicon', size: 17}}
          title='Login With Facebook'
          buttonStyle = {styles.button}
          containerStyle={{ marginTop: 20, borderRadius: 10, }}
          />

        <Button
          large
          raised
          icon={{name: 'mobile', color: 'white', type: 'entypo', size: 15}}
          title='Login With Phone'
          buttonStyle = {styles.button}
          containerStyle={{ marginTop: 20, borderRadius: 10, }}
          />

      </View>
    

    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
  },
  button: {
    width: WIDTH - 55,
    borderColor: "transparent",
    backgroundColor: "rgba(92, 99,216, 1)",
    borderRadius: 10,
  }
});
