import React from 'react';
import { View, Image, Text } from 'react-native';
import { Tabs } from 'expo-router';
import icons from "../../constants/icons"


const TabIcons = ({ icon, color, name, focused }) => {
  return (
    <View className='flex-1 items-center'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-sm w-full`} style={{ color: color }}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveBackgroundColor: "CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          paddingTop:18,
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84
        }
      }}
    > 
      <Tabs.Screen
        name='home'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              icon={icons.home}
              color={color}
              name={"home"}
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
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              icon={icons.bookmark}
              color={color}
              name={"bookmark"}
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
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              icon={icons.plus}
              color={color}
              name={"create"}
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
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              icon={icons.profile}
              color={color}
              name={"profile"}
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
