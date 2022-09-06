import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  useFonts,
  Inter_400Regular,
  Inter_100Thin,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
export default function WelcomeScreen({ navigation, route }) {
  const [userName, setUserName] = useState("");
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_100Thin,
    Inter_500Medium,
  });

  if (fontsLoaded) {
    {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Welcome to Escape</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.userName}>User name</Text>
            <View style={styles.formContainer}>
              <TextInput
                style={styles.inputForm}
                placeholder="Enter your username"
                onChangeText={(text) => setUserName(text)}
              ></TextInput>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("User", { name: userName ? userName : "" });
            }}
            style={styles.button}
          >
            <View>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(62, 60, 60, 1)",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Inter_400Regular",
    color: "rgba(251, 250, 228, 1)",
  },
  userName: {
    fontSize: 24,
    fontFamily: "Inter_100Thin",
    color: "rgba(131, 210, 255, 1)",
  },
  form: {
    marginTop: 200,
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
