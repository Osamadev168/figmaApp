import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const User = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome {route.params.name}</Text>
        <Text>Make an account</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.userName}>Email</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputForm}
            placeholder="Enter your email"
            keyboardType="email-address"
          ></TextInput>
        </View>
        <Text style={styles.userPassword}>Password</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputForm}
            placeholder="Enter your Password"
            keyboardType="password"
            secureTextEntry={true}
          ></TextInput>
        </View>
      </View>
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
});
