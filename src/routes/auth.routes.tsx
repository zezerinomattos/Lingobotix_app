import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// MY IMPORTS 
import SignIn from '../pages/SignIn';
import UserRegister from '../pages/UserRegister';

export type StackParamsList = {
    SignIn: undefined;
    UserRegister: undefined;
}

const Stack  = createNativeStackNavigator<StackParamsList>();

function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='SignIn' component={SignIn} options={ { headerShown: false} }/>
            <Stack.Screen name='UserRegister' component={UserRegister} options={{ 
                title: 'JÁ TENHO UMA CONTA',
                headerStyle:{ backgroundColor: '#083359' },
                headerTintColor: '#FFF',
            }}
        />
        </Stack.Navigator>
    );
}

export default AuthRoutes;