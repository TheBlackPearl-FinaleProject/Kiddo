import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'

//payment
import PaymentScreen from './screens/Stripe/payment-screen'
// or
//import { RestartAndroid } from 'react-native-restart-android'
// or
//const RestartAndroid = require('react-native-restart-android')
//redux
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './screens/redux/reducers.js';
const store = createStore(rootReducer);
// Home Screen Categories
import Home from './screens/home-comp'
import Learn from './screens/learn';
import Art from './screens/art';
import Videos from './screens/videos';
import Video from './screens/video';
import Game from './screens/game';
import Album from './screens/Album';
import Games from './screens/games';
// Learn Catagories 
import Alphabet from './screens/subScreens/Alphabet'
import Numbers from './screens/subScreens/Numbers';
import BodyPart from './screens/subScreens/BodyPart';
import Fruits from './screens/subScreens/Fruits';
import Vegatables from './screens/subScreens/Vegatables';
import Colors from './screens/subScreens/Colors';
import Animals from './screens/subScreens/Animals';
//Art Catagories 
import Coloring from './screens/subScreens/coloring.js';
import Drawing from './screens/subScreens/Drawing';
//Drawer Pages
import Signin from './screens/admin-signin';
import Donate from './screens/donate';
import AdminProfile from './screens/AdminProfile';
//Admin Signed In
import DrawerContent from './screens/DrawerContent';
//Admin Needs to Sign In
import DrawerContent2 from './screens/DrawerContent2';
//Parent
import Parent from './screens/parent/parents-landingpage'
import SignUp from './screens/parent/singUpParents'
import MusicApp from './screens/parent/index'

//Navigation
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SignInstack = createStackNavigator();
const Donatestack = createStackNavigator();
const AdminProfilestack = createStackNavigator();
const ParentStack = createStackNavigator();
//Home Stack 
const HomeStackScreen = ({navigation}) =>{
  return(
    <HomeStack.Navigator 
 initialRouteName="Home"
 screenOptions={{
   headerStyle: {
     backgroundColor: '#f4511e',
   },
   headerTintColor: '#fff',
   headerTitleStyle: {
     fontWeight: 'bold',
   },
 }}
 >
  <HomeStack.Screen
     name="Home"
     component={Home}
     options={{ 
       title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> )
    }}
 />
    <HomeStack.Screen 
    name="Learn" 
    component={Learn} 
    options={{ 
       title: 'Kiddo',
       headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
    }}/>
    <HomeStack.Screen 
    name="Art" 
    component={Art} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
    <HomeStack.Screen 
    name="Video" 
    component={Video} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
    <HomeStack.Screen 
    name="Videos" 
    component={Videos} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
    <HomeStack.Screen 
    name="Album" 
    component={Album} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
    <HomeStack.Screen 
    name="Games" 
    component={Games} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
    <HomeStack.Screen 
    name="Game" 
    component={Game} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
    {/* Learn Catagories  */}
     <HomeStack.Screen 
     name="Alphabet" 
     component={Alphabet} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="Numbers" 
     component={Numbers} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="BodyPart" 
     component={BodyPart} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="Fruits" 
     component={Fruits} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="Vegatables" 
     component={Vegatables} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
  
     <HomeStack.Screen 
     name="Colors" 
     component={Colors}  options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="Animals" 
     component={Animals} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     {/* Art Catagories  */}
     <HomeStack.Screen 
     name="Coloring" 
     component={Coloring}  
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="Drawing" 
     component={Drawing} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
    </HomeStack.Navigator>
  )
}
//SignIn Stack 
const SignInStackScreen = ({navigation}) =>{
  return(
    <SignInstack.Navigator 
  initialRouteName="Home"
  screenOptions={{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  >
    <SignInstack.Screen
     name="Signin"
     component={Signin}
     options={{ 
       title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> )
    }}
 />
    </SignInstack.Navigator>
  )
}
//Donate Stack 
const DonateStackScreen = ({navigation}) =>{
  return(
    <Donatestack.Navigator 
  initialRouteName="Home"
  screenOptions={{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  >
    <Donatestack.Screen
     name="PaymentScreen"
     component={PaymentScreen}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
       headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
    </Donatestack.Navigator>
  )
}
//Admin Stack 
const AdminStackScreen = ({navigation}) =>{
  return(
    <AdminProfilestack.Navigator 
  initialRouteName="Home"
  screenOptions={{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  >
    <AdminProfilestack.Screen
     name="Profile"
     component={AdminProfile}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
     headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
    </AdminProfilestack.Navigator>
  )
}
//Parent Stack 
const ParentStackScreen = ({navigation}) =>{
  return(
    <ParentStack.Navigator 
  initialRouteName="Home"
  screenOptions={{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  >
    <ParentStack.Screen
     name="Parent"
     component={Parent}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
     headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
  <ParentStack.Screen
     name="MusicApp"
     component={MusicApp}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
     headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
  <ParentStack.Screen
     name="SignUp" 
     component={SignUp}  
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
 
    </ParentStack.Navigator>
  )
}
// The App 
class App extends React.Component {
  constructor(){
    super()
    this.state={
      token:'',
      test:false
    }
  }

  frn=()=>{
    console.log(' **********    FRN     ***********')
 //  RestartAndroid.restart()
    this.forceUpdate()
   // this.setState({})
   this.setState({test: 'p'})
  }
  componentDidMount(){
    var assigntoken = async()=>{
    const token = await AsyncStorage.getItem('@token')
    this.setState({
      token:token,
      test:0 
    })}
    assigntoken()
  }

  render(){
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={ (props) => 
       {
       if(this.state.token){
      console.log('DC1:                ',this.state.token)
       return  <DrawerContent {...props} frn={this.frn.bind(this)} nth={this.state.test}/>
       }
       else {
       console.log('DC2:                ',this.state.token)
       return  <DrawerContent2 {...props} frn={this.frn.bind(this)} nth={this.state.test}/> 
       }
       
       //this.setState({flag:1})
      }}> 
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="SignIn" component={SignInStackScreen} />
        <Drawer.Screen name="Donate" component={DonateStackScreen} />
        <Drawer.Screen name="Profile" component={AdminStackScreen} />
        <Drawer.Screen name="Parent"  component={ParentStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  ); 
}}

export default App 

