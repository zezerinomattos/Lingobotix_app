import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

// MY IMPORTS
import Routes from './src/routes';

import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer >

      <AuthProvider>

        <StatusBar backgroundColor='#023E73' barStyle='light-content' translucent={false} />
        <Routes />
        
      </AuthProvider>

    </NavigationContainer>
  );
}

