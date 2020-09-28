import React, { Component } from 'react'
import SwitchExample from './SwitchExample.js'
import Input from './input.js'
import { StyleSheet, Text, View } from 'react-native';


export default class HomeContainer extends Component {
   constructor() {
      super();
      this.state = {
         switch1Value: false,
      }
   }
   toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
      console.log('Switch 1 is: ' + value)
   }
   render() {
      return (
         <View style = {styles.container}>
            <SwitchExample
            toggleSwitch1 = {this.toggleSwitch1}
            switch1Value = {this.state.switch1Value}/>
            <Text>Hi vincent</Text>
                        <Text>Every change on JS file will automatic change on browser view</Text>

         </View>

      );
   }

}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection : 'column' ,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',

   },
});