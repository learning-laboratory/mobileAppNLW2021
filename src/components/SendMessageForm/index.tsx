import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
} from "react-native";
import { api } from "../../services/api";
import { COLORS } from "../../theme";
import { Button } from "../Button";
import { styles } from "./styles";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();
    if (messageFormatted.length <= 0) {
      Alert.alert("O campo mensagem é obrigatório.");
    } else {
      setSendingMessage(true);
      await api.post("/messages", { message: messageFormatted });
      Keyboard.dismiss;
      setMessage("");
      setSendingMessage(false);
      Alert.alert("Mensagem enviada.");
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <TextInput
          keyboardAppearance="dark"
          placeholder="Qual e a sua expectativa para o evento."
          placeholderTextColor={COLORS.GRAY_PRIMARY}
          multiline
          maxLength={140}
          style={styles.input}
          onChangeText={setMessage}
          value={message}
          editable={!sendingMessage}
        />
        <Button
          title="Enviar Mensagem"
          backgroundColor={COLORS.PINK}
          color={COLORS.WHITE}
          isLoading={sendingMessage}
          onPress={handleMessageSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
