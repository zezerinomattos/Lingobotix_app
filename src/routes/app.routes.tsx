import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// MY IMPORTS 
import Home from '../pages/Home';
import Conversation from '../pages/Conversation';
import SignIn from '../pages/SignIn';

const Stack  = createNativeStackNavigator();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='SignIn' component={SignIn} options={ { headerShown: false} }/>
        </Stack.Navigator>
    );
}

export default AppRoutes;