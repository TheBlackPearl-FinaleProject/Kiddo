// frontend/screens/VideoLists.js
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { sendvideocat } from "./redux/actions";

// This component renders all the categories of videos for the user to select one
class Videolists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  pressHandler = (x) => {
    this.props.sendvideocat(x.item);
    this.props.navigation.navigate("Videos");
  };
  render() {
    const list = [
      {
        key: "a1",
        item: "funny",
        pic: { uri: "https://i.imgur.com/cXuZxf2.jpg" },
      },
      {
        key: "a2",
        item: "cartoon",
        pic: { uri: "https://i.imgur.com/RKGP04e.jpg" },
      },
      {
        key: "a3",
        item: "song",
        pic: { uri: "https://i.imgur.com/q55umGJ.jpg" },
      },
    ];
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            {list.map((x, i) => {
              var y = x.key;
              return (
                <TouchableOpacity onPress={() => this.pressHandler(x)} key={i}>
                  <View style={styles[y]}>
                    <View style={styles.cardContent}>
                      <Image
                        source={x.pic}
                        style={{ width: 180, height: 180 }}
                      />
                      <Text style={styles.text}>{x.item}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  a1: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    backgroundColor: "#ffe631",
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 6,
    width: 250,
    marginLeft: 80,
    marginTop: 33,
  },
  a2: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    backgroundColor: "#93d4fe",
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 6,
    width: 250,
    marginLeft: 80,
  },
  a3: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    backgroundColor: "#fc84dd",
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 6,
    width: 250,
    marginLeft: 80,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 35,
  },
});

// Redux
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendvideocat: (z) => {
      dispatch(sendvideocat(z));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Videolists);
