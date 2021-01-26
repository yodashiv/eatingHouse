import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import { BottomTabParamList, HomeParamlist, DiscoveryParamList, CollaborateParamList } from '../types';
import CollaborateScreen from '../screens/CollaborateScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={DiscoveryNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-restaurant-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={CollaborateNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-people-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamlist>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

const DiscoveryStack = createStackNavigator<DiscoveryParamList>();

function DiscoveryNavigator() {
  return (
    <DiscoveryStack.Navigator>
      <DiscoveryStack.Screen
        name="TabTwoScreen"
        component={DiscoveryScreen}
        options={{ headerTitle: 'Discovery' }}
      />
    </DiscoveryStack.Navigator>
  );
}

const CollaborateStack = createStackNavigator<CollaborateParamList>();

function CollaborateNavigator() {
  return (
    <CollaborateStack.Navigator>
      <CollaborateStack.Screen
        name="TabThreeScreen"
        component={CollaborateScreen}
        options={{ headerTitle: 'Collaborate' }}
      />
    </CollaborateStack.Navigator>
  );
}
