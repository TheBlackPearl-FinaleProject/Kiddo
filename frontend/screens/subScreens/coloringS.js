import React, { Component, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {WebView} from 'react-native-webview'
import { connect } from 'react-redux';
 class ColoringS extends Component{
     constructor(props){
         super(props)
         this.state={
         }
     }
     render(){
         console.log(this.props.coloringlink)
    return(
        <WebView
        source={{
          uri:this.props.coloringlink
        }}
/>
    )
}}

const styles = StyleSheet.create({
    
})
const mapStateToProps = (state) => {
    return {
       coloringlink: state.coloringlink,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ColoringS);