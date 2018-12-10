import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class UserProfile extends React.Component {
  static navigationOptions = {
    title: "Son profil",
    headerTitleStyle: {
      fontFamily: "Karla-Bold",
      fontSize: 18,
      color: "#262626"
    },
    headerStyle: {
      backgroundColor: "#f8f8f8",
      borderBottomColor: "#f8f8f8"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the UserProfile screen</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("List");
          }}
        >
          <Text>Voir ses vélos</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8"
  }
});

export default UserProfile;
