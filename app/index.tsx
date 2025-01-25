import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

export default function () {
	const router = useRouter();
	return (
		<View style={styles.container}>
			<Button
				title="Native tab example"
				onPress={() => router.navigate("/(tabs)/recents")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
