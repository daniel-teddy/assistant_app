import React from "react";
import {
    Pressable,
    View,
  } from "react-native";
  import Ionicons from "@expo/vector-icons/Ionicons";
  import navstyle from "../_styles/navbarStyle";

  import { useNavigation } from '@react-navigation/native';
  
export default function Navbar (){
  const navigation = useNavigation();
    return (
        <View style={[navstyle.items]}>
          <Pressable style={navstyle.bottomNav} onPress={() => navigation.navigate('Home')}>
            <Ionicons
              name="finger-print-outline"
              style={{ color: "#fff", fontSize: 30, fontWeight: 800 }}
              size={25}
            />
          </Pressable>
          <Pressable style={navstyle.bottomNav} onPress={() => navigation.navigate('Finance')}>
            <Ionicons
              name="cart-outline"
              style={{ color: "#fff", fontSize: 30, fontWeight: 600 }}
              size={25}
            />
          </Pressable>
          {/* <Pressable style={navstyle.bottomNav} onPress={() => navigation.navigate('Home')}>
            <Ionicons
              name="flame-outline"
              style={{ color: "#fff", fontSize: 30, fontWeight: 600 }}
              size={25}
            />
          </Pressable> */}
          <Pressable style={navstyle.bottomNav} onPress={() => navigation.navigate('Todo')}>
            <Ionicons
              name="notifications-outline"
              style={{ color: "#fff", fontSize: 30, fontWeight: 600 }}
              size={25}
            />
          </Pressable>
          <Pressable style={navstyle.bottomNav} onPress={() => navigation.navigate('Setting')}>
            <Ionicons
              name="settings-outline"
              style={{ color: "#fff", fontSize: 30, fontWeight: 600 }}
              size={25}
            />
          </Pressable>
        </View>
    )
}

