import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Whishlist from '../screens/Wishlist';
import Search from '../screens/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TAB_ICON_MAP: {[key: string]: {focused: string; unfocused: string}} = {
  Home: {focused: 'home', unfocused: 'home-outline'},
  Search: {focused: 'search', unfocused: 'search-outline'},
  Whishlist: {focused: 'heart', unfocused: 'heart-outline'},
  Profile: {focused: 'person', unfocused: 'person-outline'},
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          const iconConfig = TAB_ICON_MAP[route.name];
          if (!iconConfig) {
            return <Ionicons name="help-circle" size={size} color={color} />;
          }
          const iconName = focused ? iconConfig.focused : iconConfig.unfocused;

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#F3C15D',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          position: 'absolute',
          bottom: 1,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#000000',
          borderRadius: 15,
          height: 70,
          borderTopWidth: 0,
          shadowOpacity: 0,
          paddingBottom: 30,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Gilroy-medium',
          marginVertical: 5,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Whishlist" component={Whishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
