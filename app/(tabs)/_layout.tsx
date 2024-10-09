import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: '#777',
        tabBarStyle: {
          backgroundColor: '#E3F2FD',
          paddingVertical: 15,  // Increased padding for more spacing
          height: 100,  // Increased height for more room between icons and text
          borderTopWidth: 0,
          // borderRadius: 10, 
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
          marginTop: 5,  // Add margin on top of the label for spacing from the icon
          color: '#000', 
        },
        tabBarIconStyle: {
          marginBottom: 0,  // Set to 0 or increase this for more space between icon and label
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={'#FFB6C1'}
              size={focused ? 28 : 24}  // Adjust icon size when focused
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'search' : 'search-outline'}
              color={color}
              size={focused ? 28 : 24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="capture"
        options={{
          title: 'Capture',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'camera' : 'camera-outline'}
              color={color}
              size={focused ? 28 : 24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="results"
        options={{
          title: 'Results',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'bar-chart' : 'bar-chart-outline'}
              color={color}
              size={focused ? 28 : 24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
