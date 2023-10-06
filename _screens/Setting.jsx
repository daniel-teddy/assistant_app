import React from 'react'
import styles from '../_style'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import Navbar from '../_components/navBar'
import main from '../_styles/mainStyle'

export default function Setting() {
  return (
    <View style={styles.container}>
        <View style={main.page}>
              
        <TextInput
          style={stylesSet.textInputs}
          placeholder="Enter your username"
          placeholderTextColor="#000"
          id="username"
          name="username"
        />
        <TextInput
          style={stylesSet.textInputs}
          placeholder="Enter your password"
          placeholderTextColor="#000"
          id="password"
          name="password"
        />
        <TextInput
          style={stylesSet.textInputs}
          placeholder="Enter your name"
          placeholderTextColor="#000"
          id="name"
          name="name"
        />
      </View>
        <Navbar />
    </View>
  )
}

const stylesSet = StyleSheet.create({
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