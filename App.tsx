import { Text, View, StatusBar } from 'react-native';

// MY IMPORTS
import Home from './src/pages/Home';

export default function App() {
  return (
    <View >
      <StatusBar />
      <Home />
    </View>
  );
}

