import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { db } from "../Firebase/config";
import { addDoc, collection } from "firebase/firestore";
const UserCredentialsScreen = ({ route, navigation }) => {
  const [userName, setUserName] = useState("");
  const [Gender, setGender] = useState("");
  const [Country, setCountry] = useState("");
  const [Interests, setInterests] = useState("");
  const [Addional, setAddional] = useState("");
  const [Loading, setLoading] = useState(false);
  const addCreds = async () => {
    setLoading(true);

    try {
      const DocRef = await addDoc(collection(db, "Users"), {
        username: userName,
        gender: Gender,
        country: Country,
        interests: Interests,
        addional: Addional,
      }).then(() => {
        alert("Profile Info Added!");
        setLoading(false);
        navigation.push("Home");
      });
    } catch (e) {
      alert(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HeaderText}>
        <Text style={styles.text1}>
          {/* Welcome {route.params.name ? route.params.name : ""}! */}
        </Text>
        <Text style={styles.text2}>
          We need some more information to get to know you :)
        </Text>
      </View>
      <View style={styles.forms}>
        <TextInput
          style={styles.inputForm}
          placeholder="User name"
          onChangeText={(text) => setUserName(text)}
        />

        <TextInput
          style={styles.inputForm}
          placeholder="Gender"
          onChangeText={(text) => setGender(text)}
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Country"
          onChangeText={(text) => setCountry(text)}
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Interests"
          onChangeText={(text) => setInterests(text)}
        />
        <TextInput
          style={styles.inputForm}
          placeholder="What are you doing these days"
          onChangeText={(text) => setAddional(text)}
        />
      </View>
      <TouchableOpacity style={styles.Button} onPress={addCreds}>
        {Loading ? (
          <ActivityIndicator size={"small"} color="green" />
        ) : (
          <Text style={styles.ButtonText}>Finish</Text>
        )}
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
    top: 560,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
