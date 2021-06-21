import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Root} from 'native-base';
import React from 'react';
import {appContext} from '../../app/context/appContext';
import CharactersListScreen from '../screens/CharactersList';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';
import {navigationRef} from './NavigationService';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return <Root>{Navigation}</Root>;
};

const Navigation = () => {
  return (
    <appContext.Provider value={null}>
      <NavigationContainer ref={navigationRef}>
        <CommonNavigation />
      </NavigationContainer>
    </appContext.Provider>
  );
};

const CommonNavigation = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="CharactersList" component={CharactersListScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
