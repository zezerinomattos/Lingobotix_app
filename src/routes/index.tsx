import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

// MY IMPORTS
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { AuthContext } from '../context/AuthContext';

function Routes(){
    const { isAuthenticated, loadingAuth } = useContext(AuthContext);
    const loading = false;

    if(loadingAuth){
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