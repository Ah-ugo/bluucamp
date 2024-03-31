import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import VideoPage from '../screens/VideoPage';
import Xd from '../screens/Xd';
import CourseList from '../screens/CourseList';
import Cources from '../screens/Cources';
import Chapters from '../screens/Chapters';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VideoPage" component={VideoPage} />
        <Stack.Screen name="xd" component={Xd} />
        <Stack.Screen name="courseList" component={CourseList} />
        <Stack.Screen name="courses" component={Cources} />
        <Stack.Screen name="chapters" component={Chapters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
