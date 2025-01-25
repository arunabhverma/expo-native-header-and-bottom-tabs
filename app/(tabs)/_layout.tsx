import { Tabs } from "@/components/BottomTabs";
import React from "react";

export default function TabLayout() {
	return (
		<Tabs
			translucent
			sidebarAdaptable
			hapticFeedbackEnabled
			scrollEdgeAppearance="transparent"
			initialRouteName="browse"
		>
			<Tabs.Screen
				name="recents"
				options={{
					title: "Recents",
					tabBarIcon: () => ({ sfSymbol: "clock.fill" }),
				}}
			/>
			<Tabs.Screen
				name="shared"
				options={{
					title: "Shared",
					tabBarIcon: () => ({ sfSymbol: "folder.fill.badge.person.crop" }),
				}}
			/>
			<Tabs.Screen
				name="browse"
				options={{
					title: "Browse",
					tabBarIcon: () => ({ sfSymbol: "folder.fill" }),
				}}
			/>
		</Tabs>
	);
}
