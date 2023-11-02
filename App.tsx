import * as React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme,DarkTheme } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './components/screens/HomeScreen';
import FavoritesScreen from './components/screens/FavoritesScreen';
import SearchScreen from './components/screens/SearchScreen';
import Player from './components/Player';
import PlayerProvider from './providers/PlayerProvider';


const Tab = createBottomTabNavigator();
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Icon>['name'];
  color: string;
}) {
  return <Icon size={22} style={{ marginBottom: -3 }} {...props} />;
}

export default function App() {
  const scheme = useColorScheme();
  return (
    <PlayerProvider>
    <NavigationContainer  theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
       tabBar={(props) => (
        <View>
          <Player />
          <BottomTabBar {...props} />
        </View>
      )}>
        <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color}/> }}/>
        <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{headerShown:false,
        tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color}/>}}/>
        <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color}/> }} />
      </Tab.Navigator>
    </NavigationContainer>
    </PlayerProvider>
  );
}