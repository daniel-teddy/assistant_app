// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{top: 0}}>
      <Text>Welcome to Home</Text>
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />
    </View>
  );
};

export default HomeScreen;
