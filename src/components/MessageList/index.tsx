import React from "react";

import { ScrollView } from "react-native";
import { styles } from "./styles";
import { MotiView } from "moti";
import { Text, View } from "react-native";
import { UserPhoto } from "../UserPhoto";

export function MessageList() {
  const message = {
    id: "1",
    text: "Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥",
    user: {
      name: "Dianne Russell",
      avatar_url: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 700 }}
        style={styles.containerMoti}
      >
        <Text style={styles.message}>{message.text}</Text>
        <View style={styles.footer}>
          <UserPhoto imageUri={message.user.avatar_url} sizes="SMALL" />
          <Text style={styles.userName}>{message.user.name}</Text>
        </View>
      </MotiView>
    </ScrollView>
  );
}
