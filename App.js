import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import StackNavigator from './src/StackNavigator';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator drawerType="front">
                <Drawer.Screen
                    name="StackNavigator"
                    component={StackNavigator}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
