import { useState, useEffect } from 'react';
import { Image, ImageSourcePropType } from 'react-native';

export const useImageSize = (imageSource: ImageSourcePropType, maxWidth:number, maxHeight:number) => {
  const [newDimensions, setNewDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resolvedImage = Image.resolveAssetSource(imageSource);
    const { width, height } = resolvedImage;

    if (width && height) {
      const scalingFactorWidth = maxWidth / width;
      const scalingFactorHeight = maxHeight / height;

      const scalingFactor = Math.min(scalingFactorWidth, scalingFactorHeight);

      const newWidth = width * scalingFactor;
      const newHeight = height * scalingFactor;

      setNewDimensions({ width: newWidth, height: newHeight });
    } else {
      console.error('Invalid image dimensions');
    }
  }, [imageSource, maxWidth, maxHeight]);

  return newDimensions;
};

export default useImageSize;
