import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import A from './src/screens/TelaA.tsx';
import B from './src/screens/TelaB.tsx';
import C from './src/screens/TelaC.tsx';
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="A" component={A} />
      <Drawer.Screen name="B" component={B} />
      <Drawer.Screen name="C" component={C} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
      <NavigationContainer>
        <MyDrawer></MyDrawer>
      </NavigationContainer >
  );
}

export default App;