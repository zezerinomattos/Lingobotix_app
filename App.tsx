import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

// MY IMPORTS
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar backgroundColor='#023E73' barStyle='light-content' translucent={false} />
      <Routes />
    </NavigationContainer>
  );
}

