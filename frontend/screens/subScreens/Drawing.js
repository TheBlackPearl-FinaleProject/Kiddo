import React, { Component, useState } from 'react';
import { WebView } from 'react-native-webview'
import { StyleSheet, Image, Text, View, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Button, Alert, Linking } from 'react-native';
import { Dimensions } from 'react-native';
import { senddraw } from '../redux/actions';
import { connect } from 'react-redux';
const wind = Dimensions.get('window');
var vw = wind.width * 0.01
var vh = wind.height * 0.01
class Drawing extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            result: [],
        }
    }
    componentDidMount() {
        var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");
    myHeaders.append("Cookie", "csrftoken=8D1Sq0vmt6e688rpIH6GYE3e7UPibIdjv3Adw5y7f0n4juVJLHgL6MBl0QdGYamu");
    myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        fetch("https://blackpearl2.ew.r.appspot.com/records", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    result
                })
            })
            .catch(error => console.log('error', error));
    }
    
    render() {
       const navigation = this.props.navigation
       const senddraw = this.props.senddraw
        return (
            <View style={styles.container}>
                  <ScrollView>
                {this.state.result.map(function (x, i) {
                    return (
                        <TouchableOpacity onPress={() =>{ 
                             senddraw(x.link);
                             navigation.navigate('draw')
                             }}  key={i} style={{ marginLeft: vw * 7, marginTop: 6 * vh, height: 25 * vh, width: 40 * vw }}>

                            <Image style={{ borderRadius: 15, height: "100%", width: "100%" }}  source={{ uri: x?.thumbnail }} />
                        </TouchableOpacity>
                    )
                })}

                  </ScrollView >
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    img: {
        width: 120,
        height: 120
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

// Redux
const mapStateToProps = (state) => {
    return {
       drawlink: state.drawlink,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      senddraw: (z) => { dispatch(senddraw(z)) },
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Drawing);  