import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React, { FC } from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 50,
          position: "absolute",
          overflow: "hidden",
          // borderWidth: 1,
          borderColor: "#0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Home" icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Search" icon={icons.search} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Saved" icon={icons.save} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Profile" icon={icons.person} />
          ),
        }}
      />
    </Tabs>
  );
};
interface TabIconProps {
  focused: boolean;
  title: string;
  icon: any;
}

const TabIcon: FC<TabIconProps> = ({ title, focused, icon }) => {
  return focused ? (
    <ImageBackground
      source={images.highlight}
      className="flex flex-row w-full flex-1 min-w-[90px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
    >
      <Image source={icon} className="size-5" tintColor="#151312" />
      <Text
        children={title}
        className="text-secondary text-base font-semibold ml-2"
      />
    </ImageBackground>
  ) : (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};

export default _layout;
