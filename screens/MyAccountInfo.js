import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class MyAccountInfo extends React.Component {
  static navigationOptions = {
    title: "Mes informations"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the MyAccountInfo screen</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("MyBikes");
          }}
        >
          <Text>Voir mes vélos</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MyAccountInfo;