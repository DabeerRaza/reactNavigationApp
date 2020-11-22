import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';

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
                        otherParam: 'anything',
                    })
                }
            />
        </View>
    );
}

function HomeDetailScreen({ route, navigation }) {
    const { itemId, otherParam } = route.params;

    const [count, setCount] = React.useState(0);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() => setCount((c) => c + 1)}
                    title="Update count"
                />
            ),
        });
    }, [navigation]);

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
                <Text>Count: {count}</Text>
            </View>
        </View>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
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
                    headerRight: () => (
                        <View style={{ marginRight: 10 }}>
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Info"
                                color="#000"
                            />
                        </View>
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
