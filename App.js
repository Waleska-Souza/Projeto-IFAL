import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MealPlannerScreen from './src/pages/MealPlanner';
import BreakfastScreen from './src/pages/Breakfast';
import BluebarryPancakeScreen from './src/pages/BluebarryPancake';
import MealScheduleScreen from './src/pages/MealSchedule';
import SleepTrackerScreen from './src/pages/SleepTracker';
import SleepScheduleScreen from './src/pages/SleepSchedule';
import AddAlarmScreen from './src/pages/AddAlarm';
import ProgressPhotoScreen from './src/pages/ProgressPhoto';
import ComparisonScreen from './src/pages/Comparison';
import ResultScreen from './src/pages/Result';
import Result1Screen from './src/pages/Result1';
import Tela6Screen from './src/pages/Tela6';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"MealPlanner"}>
        <Stack.Screen name="Meal Planner"
          component={MealPlannerScreen}
          options={{
          title: 'Meal Planner',
          headerTitleAlign: 'center', 
        }} />
        <Stack.Screen name="Breakfast" 
          component={BreakfastScreen}
          options={{
          title: 'Breakfast',
          headerTitleAlign: 'center'
        }} /> 
        <Stack.Screen name="Bluebarry Pancake"
          component={BluebarryPancakeScreen}
          options={{
          title: 'Bluebarry Pancake',
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="Meal Schedule" 
          component={MealScheduleScreen}
          options={{
          title: 'Meal Schedule',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Sleep Tracker" 
          component={SleepTrackerScreen}
          options={{
          title: 'Sleep Tracker',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Sleep Schedule" 
          component={SleepScheduleScreen}
          options={{
          title: 'Sleep Schedule',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Add Alarm" 
          component={AddAlarmScreen}
          options={{
          title: 'Add Alarm',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Progress Photo" 
          component={ProgressPhotoScreen}
          options={{
          title: 'Progress Photo',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Comparison" 
          component={ComparisonScreen}
          options={{
          title: 'Comparison',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Result" 
          component={ResultScreen}
          options={{
          title: 'Result',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Result1" 
          component={Result1Screen}
          options={{
          title: 'Result',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Tela 6" 
          component={Tela6Screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


