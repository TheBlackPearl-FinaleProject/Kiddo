import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions,TextInput ,TouchableOpacity} from 'react-native';



class SignUp extends Component{
    constructor() {
    super()
    this.state = {

    }
}

render() {
      return (
        <View style={styles.container}>
          <Text style={styles.logo1}>
              Kiddo Parents
          </Text>
          <TextInput placeholder='NAME'style={styles.textInput} placeholderTextColor='black'></TextInput>
          <TextInput placeholder='EMAIL'style={styles.textInput} placeholderTextColor='black'></TextInput>
          <TextInput placeholder='PASSWORD'style={styles.textInput} placeholderTextColor='black'></TextInput>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo1: {
        fontWeight: "bold",
        fontSize: 30,
        color: "black",
        marginBottom: 10
    },
    logo: {
        fontSize: 25,
        color: "black",
        marginBottom: 40
    },
    text:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    textInput:{
      height:50,
      width:350,
      borderRadius:25,
      borderWidth:0.5,
      marginHorizontal:20,
      paddingLeft:10,
      marginVertical:5,
      borderColor:'rgba(0,0,0,0.2)'
    },
    button: {
      backgroundColor: 'white',
      height: 70,
      width:350,
      marginHorizontal: 20,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
      shadowOffset:{width:2,height:2},
      shadowColor:'black',
      shadowOpacity:0.2
   }
  });
export default SignUp