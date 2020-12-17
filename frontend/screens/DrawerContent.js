//android restart 
//import RestartAndroid from 'react-native-restart-android'

//Admin Is signedin
import React from 'react';

import { View, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class DrawerContent extends React.Component{
  constructor(props){
    super(props)
      this.state={
        user: {username:'Admin', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FMgEe33BwCdnfLO89QdJEYxWMgc9I982fw&usqp=CAU'}
        ,flag:0
      }
  }

  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");
    myHeaders.append("Cookie", "csrftoken=8D1Sq0vmt6e688rpIH6GYE3e7UPibIdjv3Adw5y7f0n4juVJLHgL6MBl0QdGYamu");
    myHeaders.append("Content-Type", "application/json");


    fetch("https://blackpearl2.ew.r.appspot.com/getid/", 
            {headers: 
                myHeaders
              ,
            redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => {
             //   fetch("http://localhost:8000/users/"+result, {
               fetch("https://blackpearl2.ew.r.appspot.com/users/"+result, {
                    headers: myHeaders,
                    redirect: 'follow'
                   })
                .then(response => response.json())
                .then(result => {
                    this.setState({
                      user: result
                    })
                    console.log(result)})
                .catch(()=> console.log('Err fetch user info'))
            })
            .catch(()=> console.log('Err fetch userid'))
  }
   
 
  signOutHandler = async () => {
    console.log('*****************************************')
    console.log(AsyncStorage.getItem('@token'))
   await AsyncStorage.removeItem('@token')
   console.log(AsyncStorage.getItem('@token'))
   //this.props.setUser({});
   this.setState({user:{}})//jft
   console.log('PROPS:   ',this.props.frn)
   console.log(this.props.nth)
   //RestartAndroid.restart()

   this.props.frn();
   //this.setState({flag: 1})
  // RNRestart.Restart();
   //Restart();
  // this.props.navigation.navigate('Home')

};
    render(){
      console.log( 'dc1 ****** ',this.props.frn)
    return(
        <View style={{flex:1}}>
              <DrawerContentScrollView {...this.props}>
                <View style={styles.drawerContent}>
                    <View  style={styles.userInfoSection}>
                      <View style={{flexDirection:'row',marginTop: 15}}>
                      <Avatar.Image 
                                source={{
                                  uri: this.state.user.thumbnail
                                }}
                                size={50}
                            />
                            <View  style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{this.state.user.username}</Title>
                                <Caption style={styles.caption}>Admin</Caption>
                            </View>
                      </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {this.props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {this.props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="gift-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Donate"
                            onPress={() => {this.props.navigation.navigate('Donate')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView >
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {this.signOutHandler()}}
                />
            </Drawer.Section>
        </View>
    )
}}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
  export default DrawerContent
  
