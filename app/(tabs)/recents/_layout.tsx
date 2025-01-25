import { useScreenOptions } from "@/hooks/useScreenOptions";
import { Stack } from "expo-router";

export default function () {
	const screenOptions = useScreenOptions("Recents");
	return <Stack screenOptions={screenOptions} />;
}
