import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './app/views/home/home.view';
import ToolbarComponent from './app/components/toolbar/toolbar.component';
import config from './config';
import { Provider } from 'react-redux';
import storeConf from './app/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = storeConf();

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator headerMode="screen" initialRouteName="home">
              <Stack.Screen name="Home" component={HomeView} options={{
                header: () => <ToolbarComponent organization={config.APP_TITLE} />
              }} />
            </Stack.Navigator>
            <StatusBar backgroundColor='black'></StatusBar>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}