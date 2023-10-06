// Screen3.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen3 = ({ navigation }) => {
  return (
    <View>
      <Text>This is Screen 3</Text>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Screen3;
