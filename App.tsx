import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component, FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "./app/views/home/home.view";
import ToolbarComponent from "./app/components/toolbar/toolbar.component";
import env from "./config";
import { Provider } from "react-redux";
import storeConf from "./app/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import OthersView from "./app/views/others/others.view";

interface Route {
  path: string;
  component: FunctionComponent<any>;
  options: any;
}

const { store, persistor } = storeConf();
const theme = {
  Button: {
    raised: false,
  },
};

const routes: Route[] = [
  {
    path: "home",
    component: HomeView,
    options: {
      header: () => <ToolbarComponent organization={env.APP_TITLE} />,
    },
  },
  {
    path: "others",
    component: OthersView,
    options: {},
  },
];

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator headerMode="screen" initialRouteName="home">
            {routes.map((route, index) => {
              return (
                <Stack.Screen
                  key={index}
                  name={route.path}
                  component={route.component}
                  options={route.options}
                ></Stack.Screen>
              );
            })}
          </Stack.Navigator>
          <StatusBar backgroundColor="black"></StatusBar>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
