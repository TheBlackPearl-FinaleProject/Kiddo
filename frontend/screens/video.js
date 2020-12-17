import React, { Component, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {WebView} from 'react-native-webview'
import { connect } from 'react-redux';
 class Video extends Component{
     constructor(props){
         super(props)
         this.state={
         }
     }
     render(){
         console.log(this.props.videolink)
    return(
      
      <WebView
      style = {styles.vid}
      source={{
        uri:this.props.videolink
      }}
/>

    )
}}

const styles = StyleSheet.create({
  container:{
    flex : 1,
  }, 
  vid:{
      width:500,
      height:500
    }
})
const mapStateToProps = (state) => {
    return {
       videolink: state.videolink,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Video);  