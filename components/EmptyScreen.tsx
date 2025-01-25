import React from "react";
import { type SFSymbol, SymbolView } from "expo-symbols";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

interface EmptyScreenProps {
	title: string;
	description: string;
	iconName: SFSymbol;
}

export const EmptyScreen = (props: EmptyScreenProps) => {
	const { title, description, iconName } = props;
	const theme = useTheme();
	return (
		<View style={styles.container}>
			<SymbolView
				name={iconName}
				tintColor={"#8D8D8E"}
				style={styles.symbol}
				type="hierarchical"
			/>
			<Text style={[styles.heading, { color: theme.colors.text }]}>
				{title}
			</Text>
			<Text style={[styles.description, { color: theme.colors.text }]}>
				{description}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	symbol: {
		width: 82,
		height: 82,
	},
	heading: {
		fontSize: 18,
		fontWeight: "bold",
		marginTop: 5,
	},
	description: {
		fontSize: 12,
		opacity: 0.8,
		marginTop: 5,
	},
});
