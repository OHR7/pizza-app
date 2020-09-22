import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


const Stack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{header: () => null}}
                />
                <Stack.Screen
                    name='Product'
                    component={ProductScreen}
                    options={{header: () => null}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
