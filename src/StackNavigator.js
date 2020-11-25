import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigation from './TabNavigator';
import TopTab from './TopTab';

function HomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Home Detail Screen"
                onPress={() =>
                    navigation.navigate('details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })
                }
            />
            <View style={{ marginTop: 20 }}>
                <Button
                    title="Go to Home Tab Navigation"
                    onPress={() => navigation.navigate('tabNavigation')}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Button
                    title="Go to Home Top Tab Navigation"
                    onPress={() => navigation.navigate('TopTab')}
                />
            </View>
        </View>
    );
}

function HomeDetailScreen({ route, navigation }) {
    const { itemId, otherParam } = route.params;

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>itemId: {itemId}</Text>
            <Text>otherParam: {otherParam}</Text>
            <Button
                title="Go to Home Detail Screen"
                onPress={() => navigation.navigate('Home')}
            />
            <View style={{ margin: 10 }}>
                <Button
                    color="#ff5c5c"
                    title="Press to see changes"
                    onPress={() => navigation.setOptions({ title: 'Updated!' })}
                />
            </View>
        </View>
    );
}

const Stack = createStackNavigator();

export default function StackNavigator({ navigation }) {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: 'yellow',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        textAlign: 'center',
                    },
                    headerLeft: () => (
                        <TouchableHighlight
                            onPress={() => navigation.toggleDrawer()}>
                            <View>
                                <Ionicons
                                    name={'ios-information-circle'}
                                    size={25}
                                    color={'red'}
                                />
                            </View>
                        </TouchableHighlight>
                    ),
                    headerRight: () => (
                        <Button
                            style={{ margin: 2 }}
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#000"
                        />
                    ),
                }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: 'gray',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: 'center',
                        },
                    }}
                />
                <Stack.Screen
                    name="details"
                    component={HomeDetailScreen}
                    options={({ route }) => ({
                        title: route.params.otherParam,
                    })}
                />
                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: 'gray',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: 'center',
                        },
                        headerRight: () => null,
                    }}
                    name="tabNavigation"
                    component={TabNavigation}
                />
                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: 'gray',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: 'center',
                        },
                        headerRight: () => null,
                    }}
                    name="TopTab"
                    component={TopTab}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
