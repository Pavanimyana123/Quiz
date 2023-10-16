import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import DateOfBirth from './screens/Home/DateOfBirth';
import MobileNumber from './screens/Home/MobileNumber';
import Tutorials from './screens/Home/Tutorials';
import NameNo from './screens/Home/NameNo';
import YearlyPrediction from './screens/Home/YearlyPrediction';
import Monthly from './screens/Home/Monthly';
import NameAnalyser from './screens/Home/NameAnalyser';
import Queries from './screens/Home/Queries';
import MarriageCompatibility from './screens/Home/MarriageCompatibility';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen name="LoginPage" component={LoginPage}  options={{ headerShown: false }} />
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
      <Stack.Screen name="Date of Birth" component={DateOfBirth} />
      <Stack.Screen name="Mobile Number" component={MobileNumber} />
      <Stack.Screen name="Tutorials" component={Tutorials} /> 
      <Stack.Screen name="Name No" component={NameNo} />
      <Stack.Screen name="Yearly Prediction" component={YearlyPrediction} />
      <Stack.Screen name="Monthly" component={Monthly} />
      <Stack.Screen name="Name Analyser" component={NameAnalyser} />
      <Stack.Screen name="Queries" component={Queries} />
      <Stack.Screen name="Marriage Compatibility" component={MarriageCompatibility} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
