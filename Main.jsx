import React, {useState} from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './_screens/Home';
import Todo from './_screens/Todo';
import Finance from './_screens/Finance';
import LoginScreen from './_components/Login';
import Setting from './_screens/Setting';

const Stack = createNativeStackNavigator();
export default function Main() {

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* {isAuthenticated ? (
            <>  */}
              {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Finance" component={Finance} />
              <Stack.Screen name="Todo" component={Todo} />
              <Stack.Screen name="Setting" component={Setting} />
            {/* </>
           ) : (
            <Stack.Screen name="LoginScreen">
              {props => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
          )}  */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

