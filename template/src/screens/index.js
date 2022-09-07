import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screens
import Welcome from './welcome/welcome'

//Stact Navigator
const Stack = createNativeStackNavigator()

const RootScreens = () => {
    const Screens = () => {
        return (
            <>
                <Stack.Screen name="Welcome" component={Welcome}/>
            </>
        )
    }

    return (
        <Stack.Navigator initialRouteName="Welcome">
            {Screens()} 
        </Stack.Navigator>
    )
}

export {RootScreens}
