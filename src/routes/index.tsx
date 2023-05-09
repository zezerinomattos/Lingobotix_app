import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// MY IMPORTS
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes(){
    const isAuthenticated = true;
    const loading = false;

    if(loading){
        return(
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ActivityIndicator size={60} color={'#BF6415'}/>
            </View>
        )
    }

    return(
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    );
}

export default Routes;