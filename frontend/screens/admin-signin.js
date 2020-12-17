import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, Text, View, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native';



const [STORAGE_KEY] = '@save_token'
class Signin extends React.Component {
    constructor({navigation, frn}){
        super({navigation, frn});
        this.state = {
           username: '',
           password:'',
           flag:0
        }
    }

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    
     handleSubmit = () => {
        
        console.log('****************************')
        console.log(this.state.username + "   " + this.state.password)
        // fetch('http://127.0.0.1:5000/signin', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: username,
        //         password: password
        //     })
        // }); 
        //for then---> alert

     
 var raw = JSON.stringify({"username":this.state.username,"password":this.state.password});
var requestOptions = {
  method: 'POST',
  body: raw ,
  headers: {
    "Content-Type": "application/json"
  },
  redirect: 'follow'
};
//fetch("http://localhost:8000/auth/login/", requestOptions)
fetch("https://blackpearl2.ew.r.appspot.com/auth/login/", requestOptions)
  .then(response => response.json())
  .then( (result) => {
        //this.props.setUser(results.data)
        if(result.token !== undefined){
    
          // AsyncStorage.setItem('@storage_Key', result.token)
          console.log(result.token)
          AsyncStorage.setItem('@token', result.token)
         
          .then(()=>{
           // location.reload();
           //this.setState({flag: 1})
            console.log(this.props.navigation)
            console.log('********** frn from admin-signin ', this.props.frn)
            //RestartAndroid.restart()
            RNRestart.Restart();
          //  this.props.navigation.push('Home');
            //this.props.navigation.navigate('Home')
          })
          console.log('*******************||**||*********************')
          //  console.log(AsyncStorage.getItem('@token'))
          } 
            
        }  
        )
  .catch(error => console.log('error', error));
        
         //setUsername('')
        // setPassword('')
    }
    
    render(){
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
                console.log('disspacito')
            }}
        >
            <View style={styles.container}>

                <Text style={styles.logo}>Kiddo</Text>

                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="username..."
                        onChangeText={text => //setUsername(text)
                            this.setState({username: text})
                        } />
                </View>

                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        onChangeText={text => //setPassword(text)
                            this.setState({password: text})
                        } />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={this.handleSubmit}>
                    <Text  style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        </TouchableWithoutFeedback>
    );
}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "black",
        marginBottom: 40
    },
    inputView: {
        backgroundColor: "#dcdcdc",
        width: "80%",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "black",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        borderColor: 'black',
        backgroundColor: 'pink',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "black"
    }
});
export default Signin
//headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),