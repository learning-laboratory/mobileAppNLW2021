import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";
import avatarImg from "../../assets/avatar.png";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme";

type ImageProps = {
  imageUri: string | undefined;
  sizes?: "SMALL" | "NORMAL";
};

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42,
  },
};

const AVATAR_DEFAULT_URI = Image.resolveAssetSource(avatarImg).uri;
export function UserPhoto({ imageUri, sizes = "NORMAL" }: ImageProps) {
  const { containerSize, avatarSize } = SIZES[sizes];

  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={{ uri: imageUri || AVATAR_DEFAULT_URI }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
}
