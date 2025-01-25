import { useScreenOptions } from "@/hooks/useScreenOptions";
import { Stack } from "expo-router";

export default function () {
	const screenOptions = useScreenOptions("Shared");
	return <Stack screenOptions={screenOptions} />;
}
