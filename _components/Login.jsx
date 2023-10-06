import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'yourUsername' && password === 'yourPassword') {
      navigation.replace('Home', { isAuthenticated: true });
    } else {
      alert('Wrong credentials');
    }
  };

  const toggleSecureEntry = () => {
    setIsSecureTextEntry((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerAll}>
        <Text style={styles.mainText}>Login</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Enter your username"
          placeholderTextColor="#000"
          id="username"
          name="username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.textInputs}
          placeholder="Enter your password"
          placeholderTextColor="#000"
          id="password"
          name="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={isSecureTextEntry}
        />
      </View>
      <View style={styles.items}>
        <Pressable style={styles.itemSmallView} onPress={toggleSecureEntry}>
          <View style={styles.pressableRound} />
          <Text>{isSecureTextEntry ? 'Show Password' : 'Hide Password'}</Text>
        </Pressable>
        <View>
          <Pressable>
            <Text style={styles.resetPass}>Reset password</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Pressable onPress={handleLogin}>
          <Text style={styles.fullBtn}>Login</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#e1e2e2",
    alignItems: "center",
    justifyContent: "center",
  },
  containerAll: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInputs: {
    borderRadius: 3.45,
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: 300,
    marginBottom: 15,
  },
  items: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
  },
  pressableRound: {
    backgroundColor: "#7deae7",
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  itemSmallView: {
    display: "flex",
    flexDirection: "row",
    width: 125,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  resetPass: {
    color: "#544bdb",
  },
  fullBtn: {
    backgroundColor: "#544bdb",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    width: 300,
    fontSize: 20,
  },
});

export default LoginScreen;
