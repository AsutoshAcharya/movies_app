import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React, { FC } from "react";
import { Image, ImageBackground, Text } from "react-native";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{ headerShown: false, title: "Search" }}
      />
      <Tabs.Screen
        name="saved"
        options={{ headerShown: false, title: "Saved" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, title: "Profile" }}
      />
    </Tabs>
  );
};
interface TabIconProps {
  focused: boolean;
  title: string;
}

const TabIcon: FC<TabIconProps> = ({}) => {
  return (
    <ImageBackground
      source={images.highlight}
      className="flex flex-row w-full flex-1 min-w-[112px] min-h-12 mt-4 justify-center items-center rounded-full overflow-hidden"
    >
      <Image source={icons.home} className="size-5" tintColor="#151312" />
      <Text
        children="Home"
        className="text-secondary text-base font-semibold ml-2"
      />
    </ImageBackground>
  );
};

export default _layout;
