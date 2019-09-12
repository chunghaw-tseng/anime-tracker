/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Settings} from "@screens/Settings";
import {Home} from "@screens/Home";
import {TableView} from "@screens/TableView";

// Navigator Element
const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  SettingScreen: { screen: Settings },
  TableView: { screen: TableView }

});

const App = createAppContainer(AppNavigator);

export default App;

