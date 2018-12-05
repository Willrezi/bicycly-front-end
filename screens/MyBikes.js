import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { ExpoConfigView } from "@expo/samples";

export default class MyBikesScreen extends React.Component {
  static navigationOptions = {
    title: "Mes vélos"
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Text>This is the My Bikes screen with the map</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("StartRent");
              }}
            >
              <Text>Demarrer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("EndRent");
              }}
            >
              <Text>Terminer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("AddBike");
              }}
            >
              <Text>Modifier</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Tchat");
              }}
            >
              <Text>Contacter</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});