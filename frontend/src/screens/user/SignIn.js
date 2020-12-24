// frontend/src/screens/user/SignIn.js
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { senduser } from "../redux/actions";
import Animated, { Easing } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TapGestureHandler, State } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

// for the animations Setting
const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  concat,
  Extrapolate,
} = Animated;
function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };
  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };
  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position,
  ]);
}

// Sign In
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      flag: 0,
    };
    // functions to controll motion + styling
    this.buttonOpacity = new Value(1);
    // control the white box when it is open
    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            ),
          ]),
      },
    ]);
    // control closing action when press on X
    this.onCloseState = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
            ),
          ]),
      },
    ]);
    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP,
    });
    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: Extrapolate.CLAMP,
    });
    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    this.rotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP,
    });
  }
  onchange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    });

    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
      headers: myHeaders,
    };

    fetch("https://blackpearl2.ew.r.appspot.com/jwt/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.token !== undefined) {
          AsyncStorage.setItem("@token", result.token).then(() => {
            AsyncStorage.setItem("@user", this.state.username).then(() => {
              location.reload();
              this.props.navigation.navigate("Profile");
            });
          });
        } else {
          alert("signed in failed" + "\n" + "username or password : incorrect");
        }
      })
      .catch((error) => console.error(error));
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundImage: require("./Login.png"),
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {/* Landpage Content */}
        <View style={{ height: height / 3, alignItems: "center", justifyContent: "center" }}>
          {/* Sign in button 1 control the main animation*/}
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                width: '90vw',
                backgroundColor: "#42a7f5",
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }],
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN IN</Text>
            </Animated.View>
          </TapGestureHandler>
          {/* Sign up button */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SignUp");
            }}
          >
            <Animated.View
              style={{
                ...styles.button,
                width: '90vw',
                backgroundColor: "#dc962e",
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }],
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                SIGN UP
              </Text>
            </Animated.View>
          </TouchableOpacity>
          {/* White Box Settings + Styleing */}
          <Animated.View
            style={{
              zIndex: this.textInputZindex,
              opacity: this.textInputOpacity,
              transform: [{ translateY: this.textInputY }],
              height: height / 3,
              ...StyleSheet.absoluteFill,
              top: null,
              justifyContent: "center",
            }}
          >
            {/* Email input */}
            <TextInput
              placeholder="User Name"
              value={this.state.username}
              onChangeText={(text) => this.onchange("username", text)}
              style={styles.textInput}
              placeholderTextColor="black"
            ></TextInput>
            {/* Password input */}
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(text) => this.onchange("password", text)}
              style={styles.textInput}
              placeholderTextColor="black"
            ></TextInput>
            {/* Signin Botton 2  */}
            <TouchableOpacity onPress={this.handleSubmit}>
              <Animated.View style={styles.button}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  SIGN IN
                </Text>
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    height: 70,
    width: 350,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -20,
    left: width / 2 - 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
  },
});

// Redux
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    senduser: (z) => {
      dispatch(senduser(z));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
