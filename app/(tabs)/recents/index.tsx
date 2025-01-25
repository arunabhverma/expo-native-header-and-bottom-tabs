import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { FileData, type FileDataType } from "@/constants/FileData";
import { useTheme } from "@react-navigation/native";
import useImageSize from "@/hooks/useImageSize";

const Recents = () => {
  return (
    <FlatList
      numColumns={3}
      data={FileData}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ rowGap: 30, paddingVertical: 30 }}
      renderItem={({ item }) => <RenderItem item={item} />}
    />
  );
};

const ImageSize = 90;

const RenderItem = ({ item }: { item: FileDataType }) => {
  const theme = useTheme();
  const { width: screenWidth } = useWindowDimensions();
  const { width, height } = useImageSize(item.img, 90, 90);

  return (
    <View style={[styles.itemContainer, { width: screenWidth / 3 }]}>
      <View style={styles.imageContainer}>
        <Image
          style={[
            styles.image,
            {
              width,
              height,
              borderColor: theme.colors.border,
            },
          ]}
          source={item.img}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text
          numberOfLines={2}
          style={[styles.fileName, { color: theme.colors.text }]}
        >
          {item.fileName}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.date, { color: theme.colors.text }]}
        >
          {item.date}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.source, { color: theme.colors.text }]}
        >
          {item.source}
        </Text>
      </View>
    </View>
  );
};

export default Recents;

const styles = StyleSheet.create({
  fileName: {
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
  },
  date: {
    fontSize: 13,
    textAlign: "center",
    opacity: 0.7,
  },
  source: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 2,
    opacity: 0.7,
  },
  itemContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: ImageSize,
    aspectRatio: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    borderWidth: 1,
    borderRadius: 5,
  },
  detailsContainer: {
    marginTop: 15,
    gap: 5,
  },
});
