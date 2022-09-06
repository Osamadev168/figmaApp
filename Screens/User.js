import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { userAuth } from "../Context/AuthContext";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "../Firebase/config";
const User = ({ route }) => {
  const { createUser } = userAuth();
  const Signup = async () => {
    try {
      await createUser(email, password);
      updateProfile(getAuth(app).currentUser, {
        displayName: "New User",
      });
      console.log(getAuth(app).currentUser.displayName);
    } catch (e) {
      alert(e);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome </Text>
        <Text>Make an account</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.userName}>Email</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputForm}
            placeholder="Enter your email"
            keyboardType="email-address"
            onChangeText={(email) => setEmail(email)}
          ></TextInput>
        </View>
        <Text style={styles.userPassword}>Password</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputForm}
            placeholder="Enter your Password"
            keyboardType="password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          Signup();
        }}
        style={styles.button}
      >
        <View>
          <Text style={styles.buttonText}>Confirm</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(62, 60, 60, 1)",
  },
  header: {
    justifyContent: "center",

    alignItems: "center",
    marginTop: 80,
  },
  headerText: {
    fontSize: 30,
    color: "white",
  },
  userName: {
    fontSize: 24,
    fontFamily: "Inter_100Thin",
    color: "rgba(131, 210, 255, 1)",
  },
  userPassword: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: "Inter_100Thin",
    color: "rgba(131, 210, 255, 1)",
  },
  form: {
    marginTop: 100,
    marginLeft: 30,
  },
  formContainer: {
    marginTop: 30,
  },
  inputForm: {
    width: 340,
    height: 38,
    backgroundColor: "rgba(184, 183, 172, 1)",
    borderRadius: 50,
    textAlign: "center",
    color: "black",
  },
  button: {
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 230,
    // // marginBottom: 40,
    // backgroundColor: "white",
    // width: 274,
    // height: 44,
    // borderRadius: 40,
    // marginLeft: 63,
    // flex: 1,
    width: "100%",
    height: 50,
    backgroundColor: "rgba(131, 210, 255, 1)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
    // justifyContent: "space-between",
  },
  buttonText: {
    fontFamily: "Inter_500Medium",
    fontSize: 20,
  },
});
