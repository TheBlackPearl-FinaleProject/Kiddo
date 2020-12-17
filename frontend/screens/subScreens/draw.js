import React, { Component, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {WebView} from 'react-native-webview'
import { connect } from 'react-redux';
 class Draw extends Component{
     constructor(props){
         super(props)
         this.state={
         }
     }
     render(){
         console.log(this.props.drawlink)
    return(
        <WebView
        source={{
          uri:this.props.drawlink
        }}
/>
    )
}}

const styles = StyleSheet.create({
    
})
const mapStateToProps = (state) => {
    return {
       drawlink: state.drawlink,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Draw);  