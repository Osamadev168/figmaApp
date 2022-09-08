import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const UserCredentialsScreen = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HeaderText}>
        <Text style={styles.text1}>
          Welcome {route.params.name ? route.params.name : ""}!
        </Text>
        <Text style={styles.text2}>
          We need some more information to get to know you :)
        </Text>
      </View>
      <View style={styles.forms}>
        <TextInput style={styles.inputForm} placeholder="Gender" />
        <TextInput style={styles.inputForm} placeholder="Country" />
        <TextInput style={styles.inputForm} placeholder="Interests" />
        <TextInput
          style={styles.inputForm}
          placeholder="What are you doing these days"
        />
      </View>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonText}>Finish</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserCredentialsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(36, 49, 50, 1)",
  },
  HeaderText: {
    marginTop: 60,
    margin: 10,
  },
  text1: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
  },
  text2: {
    color: "white",
    fontSize: 15,
  },
  forms: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  inputForm: {
    backgroundColor: "rgba(155, 182, 190, 1)",
    width: 317,
    height: 38,
    margin: 20,
    borderRadius: 20,
    textAlign: "center",
    color: "black",
  },
  Button: {
    marginTop: 10,
    backgroundColor: "rgba(120, 186, 190, 1)",
    width: 138,
    height: 39,
    position: "absolute",
    right: 0,
    margin: 20,
    marginRight: 40,
    top: 500,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
