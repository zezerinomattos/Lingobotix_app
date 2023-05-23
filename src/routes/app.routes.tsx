import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// MY IMPORTS 
import Home from '../pages/Home';
import Conversation from '../pages/Conversation';

export type StackParamsList = {
    Home: undefined;
    Conversation: undefined;
}

const Stack  = createNativeStackNavigator();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={ { headerShown: false} }/>
            <Stack.Screen name='Conversation' component={Conversation} options={ { headerShown: false} }/>
        </Stack.Navigator>
    );
}

export default AppRoutes;