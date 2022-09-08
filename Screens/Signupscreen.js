import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/config";
const Signupscreen = ({ navigation, route }) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then((user) => {
        console.log(user);
        alert("Account Created successfully!");
        navigation.navigate("Creds", { name: name });
      });
    } catch (e) {
      alert(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HeaderText}>
        <Text style={styles.text1}>Welcome to Escape!</Text>
        <Text style={styles.text2}>Lets get you on board</Text>
      </View>
      <View style={styles.forms}>
        <TextInput
          style={styles.inputForm}
          placeholder="Full name"
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput style={styles.inputForm} placeholder="Password" />
        <TextInput
          style={styles.inputForm}
          placeholder="Repeat Password"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.Button} onPress={createUser}>
        <Text style={styles.ButtonText}>Confrim</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Signupscreen;

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
