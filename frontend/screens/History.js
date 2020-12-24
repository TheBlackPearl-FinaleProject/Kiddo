// frontend/screens/History.js
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import React, { Component, useState } from "react";
import { sendvideo, sendgame, sendcoloring, senddraw } from "./redux/actions";
import {
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
const win = Dimensions.get("window");
// This will render activity history of the current user
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      isFetching: false,
    };
  }
  onRefresh() {
    this.setState({ isFetching: true }, function () {
      this.getHistory();
    });
  }
  deleteHistory = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");

    var raw = "";

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    for (var i = 0; i < this.state.result.length; i++) {
      fetch(
        `https://blackpearl2.ew.r.appspot.com/historys/${this.state.result[i].id}/`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {})
        .catch((error) => console.error(error));
    }
  };
  getHistory() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    fetch(
      `https://blackpearl2.ew.r.appspot.com/historys/?user=${this.props.user?.username}&kind=`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          result: result,
          isFetching: false,
        });
      })
      .catch((error) => console.error(error));
  }
  componentDidMount() {
    this.getHistory();
  }
  go(x) {
    // When clicking on a history item visits the page again
    // if you read this good for you ...I like trains
    if (x.kind === "Video") {
      this.props.sendvideo(x.link);
      this.props.navigation.navigate(x.kind);
    } else if (x.kind === "Game") {
      this.props.sendgame(x.link);
      this.props.navigation.navigate(x.kind);
    } else if (x.kind === "Colorings") {
      this.props.sendcoloring(x.link);
      this.props.navigation.navigate(x.kind);
    } else if (x.kind === "Draw") {
      this.props.senddraw(x.link);
      this.props.navigation.navigate(x.kind);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <FlatList
            data={this.state.result}
            renderItem={({ item, i }) => (
              <TouchableOpacity
                style={styles.container}
                onPress={() => this.go(item)}
                key={i}
              >
                <View>
                  <Image
                    source={{ uri: item.thumbnail }}
                    style={{
                      width: win.width,
                      height: win.width,
                      borderRadius: 8,
                      margin: win.width / 40,
                    }}
                  />
                </View>
              </TouchableOpacity>
            )}
            numColumns={2}
            keyExtractor={(index, key) => {
              return `${key}`;
            }}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.deleteHistory}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Delete History
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: win.width / 3,
    height: win.width / 3,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    backgroundColor: "white",
    flex: 1,
    padding: win.width / 10,
    justifyContent: "center",
    paddingTop: win.width / 50,
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
    sendgame: (z) => {
      dispatch(sendgame(z));
    },
    sendvideo: (z) => {
      dispatch(sendvideo(z));
    },
    sendcoloring: (z) => {
      dispatch(sendvideo(z));
    },
    senddraw: (z) => {
      dispatch(sendvideo(z));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(History);
