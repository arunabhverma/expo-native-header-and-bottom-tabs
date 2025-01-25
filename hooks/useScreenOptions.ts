import { PlatformColor, useColorScheme } from "react-native";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useState } from "react";

export const useScreenOptions = (
	title?: string,
): NativeStackNavigationOptions => {
	const [searchString, setSearchString] = useState("");
	const colorScheme = useColorScheme();
	return {
		title,
		//Search bar style
		headerSearchBarOptions: {
			onChangeText: (e) => setSearchString(e.nativeEvent.text),
		},
		//Large header style
		headerTransparent: true,
		headerLargeTitle: true,
		headerBlurEffect: "prominent",
		headerShadowVisible: true,
		headerLargeTitleShadowVisible: false,
		headerLargeStyle: {
			backgroundColor: PlatformColor(
				"systemGroupedBackgroundColor",
			) as unknown as string,
		},
		headerStyle: {
			backgroundColor:
				colorScheme === "dark" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
		},
	};
};
