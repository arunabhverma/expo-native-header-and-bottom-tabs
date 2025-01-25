import { useScreenOptions } from "@/hooks/useScreenOptions";
import { Stack } from "expo-router";

export default function () {
	const screenOptions = useScreenOptions("Browse");
	return <Stack screenOptions={screenOptions} />;
}
