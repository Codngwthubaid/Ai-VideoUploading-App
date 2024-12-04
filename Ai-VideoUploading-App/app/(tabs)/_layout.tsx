import React from 'react';
import { StyleSheet, View, Image, ImageSourcePropType, Text } from 'react-native';
import { Tabs } from 'expo-router';
import {icons} from "@/constants/icons"

interface TabIconsProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcons: React.FC<TabIconsProps> = ({ icon, color, name, focused }) => {
  return (
    <View className='flex-1 items-center'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor= {color}
        className='w-6 h-6'
      />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-sm w-full`}>{name}</Text>
    </View>
  );
};

const TabsLayout: React.FC = () => {
  return (
    <Tabs 
    screenOptions={{
      tabBarShowLabel: false
    }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabIcons
              icon={icons.home}
              color={color}
              name={"Home"}
              focused={focused}
            />
          )
        }}   
      />
       <Tabs.Screen
        name='bookmark'
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabIcons
              icon={icons.bookmark}
              color={color}
              name={"Bookmark"}
              focused={focused}
            />
          )
        }}
      />
             <Tabs.Screen
        name='create'
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabIcons
              icon={icons.plus}
              color={color}
              name={"Create"}
              focused={focused}
            />
          )
        }}
      />
             <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabIcons
              icon={icons.profile}
              color={color}
              name={"Profile"}
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});

