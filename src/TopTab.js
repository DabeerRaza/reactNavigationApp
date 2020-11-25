import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Text, View } from 'react-native';

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

function BalanceScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>BalanceScreen!</Text>
        </View>
    );
}
function HistoryScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>HistoryScreen!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
            <Tab.Screen name="BalanceScreen" component={BalanceScreen} />
            <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
        </Tab.Navigator>
    );
}
