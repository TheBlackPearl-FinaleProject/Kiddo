// frontend/App.js

// Imports

// Navigator
import * as React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./screens/redux/reducers";
import { SafeAreaProvider } from "react-native-safe-area-context";
const store = createStore(rootReducer);
// Home Screen
import Art from "./screens/Art";
import Game from "./screens/Game";
import Home from "./screens/Home";
import Learn from "./screens/Learn";
import Video from "./screens/Video";
import Album from "./screens/Album";
import Games from "./screens/Games";
import Videos from "./screens/Videos";
import Videolists from "./screens/VideoLists";
// Learn Catagories
import Fruits from "./screens/subScreens/Fruits";
import Colors from "./screens/subScreens/Colors";
import Animals from "./screens/subScreens/Animals";
import Numbers from "./screens/subScreens/Numbers";
import Alphabet from "./screens/subScreens/Alphabet";
import BodyPart from "./screens/subScreens/BodyPart";
import Vegatables from "./screens/subScreens/Vegatables";
// Art Catagories
import Draw from "./screens/subScreens/Draw";
import Drawing from "./screens/subScreens/Drawing";
import Coloring from "./screens/subScreens/Coloring";
import Colorings from "./screens/subScreens/Colorings";
// Drawer Pages
import Donate from "./screens/Donate";
import Profile from "./screens/Profile";
import DrawerContent from "./screens/DrawerContent";
// User
import Edit from "./screens/user/Edit";
import History from "./screens/History";
import SignIn from "./screens/user/SignIn";
import SignUp from "./screens/user/SignUp";
// Navigation
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SignUpStack = createStackNavigator();
const DonateStack = createStackNavigator();
const SignInStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const EditStack = createStackNavigator();
// Home Stack
const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Kiddo",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={"#f4511e"}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Learn"
        component={Learn}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Art"
        component={Art}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Video"
        component={Video}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Videolists"
        component={Videolists}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Videos"
        component={Videos}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Album"
        component={Album}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Games"
        component={Games}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Game"
        component={Game}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      {/* Learn Catagories  */}
      <HomeStack.Screen
        name="Alphabet"
        component={Alphabet}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Numbers"
        component={Numbers}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="BodyPart"
        component={BodyPart}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Fruits"
        component={Fruits}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Vegatables"
        component={Vegatables}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Colors"
        component={Colors}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Animals"
        component={Animals}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      {/* Art Catagories  */}
      <HomeStack.Screen
        name="Coloring"
        component={Coloring}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Colorings"
        component={Colorings}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Drawing"
        component={Drawing}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Draw"
        component={Draw}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
// Donation Stack
const DonateStackScreen = ({ navigation }) => {
  return (
    <DonateStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <DonateStack.Screen
        name="Donate"
        component={Donate}
        options={{
          title: "Kiddo",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={"#f4511e"}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() => navigation.navigate("Home")}
            />
          ),
        }}
      />
    </DonateStack.Navigator>
  );
};
// Profile Stack
const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Kiddo",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={"#f4511e"}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() => navigation.navigate("Home")}
            />
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};
// SignUp Stack
const SignUpStackScreen = ({ navigation }) => {
  return (
    // SignUp
    <SignUpStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <SignUpStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Kiddo",
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            />
          ),
        }}
      />
    </SignUpStack.Navigator>
  );
};
// SignIn Stack
const SignInStackScreen = ({ navigation }) => {
  return (
    <SignInStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <SignInStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Kiddo",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={"#f4511e"}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() => navigation.navigate("Home")}
            />
          ),
        }}
      />
    </SignInStack.Navigator>
  );
};
// History Stack
const HistoryStackScreen = ({ navigation }) => {
  return (
    <HistoryStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HistoryStack.Screen
        name="History"
        component={History}
        options={{
          title: "Kiddo",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={"#f4511e"}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() => navigation.navigate("Home")}
            />
          ),
        }}
      />
    </HistoryStack.Navigator>
  );
};
// Edit Stack
const EditStackScreen = ({ navigation }) => {
  return (
    <EditStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <EditStack.Screen
        name="Edit"
        component={Edit}
        options={{
          title: "Kiddo",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={"#f4511e"}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name="ios-home"
              size={20}
              backgroundColor={"#f4511e"}
              onPress={() => navigation.navigate("Home")}
            />
          ),
        }}
      />
    </EditStack.Navigator>
  );
};
// The App
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: "",
    };
  }

  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Drawer.Navigator
              drawerContent={(props) => {
                return <DrawerContent {...props} />;
              }}
            >
              <Drawer.Screen name="Home" component={HomeStackScreen} />
              <Drawer.Screen name="Donate" component={DonateStackScreen} />
              <Drawer.Screen name="SignIn" component={SignInStackScreen} />
              <Drawer.Screen name="SignUp" component={SignUpStackScreen} />
              <Drawer.Screen name="Profile" component={ProfileStackScreen} />
              <Drawer.Screen name="History" component={HistoryStackScreen} />
              <Drawer.Screen name="Edit" component={EditStackScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default App;
