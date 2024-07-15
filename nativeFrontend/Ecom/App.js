import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './Navigations/AppNavigator';
import { Provider } from 'react-redux';
import store from './redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
