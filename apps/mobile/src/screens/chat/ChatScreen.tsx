import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Screen, TextField } from '@libreassistant/ui';
import { ChatBubble } from '../../components/chat/ChatBubble';
import { TypingIndicator } from '../../components/chat/TypingIndicator';
import { sendAssistantText } from '../../services/assistantClient';
import { useAssistantStore } from '../../store/assistantStore';

export function ChatScreen(): JSX.Element {
  const { messages, addMessage, clear } = useAssistantStore();
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(false);

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        {messages.map((message) => (
          <ChatBubble key={message.id} role={message.role} text={message.content} />
        ))}
        {typing ? <TypingIndicator /> : null}
      </ScrollView>
      <View style={{ gap: 8 }}>
        <TextField value={text} onChangeText={setText} placeholder="Type a message" />
        <Button
          label="Send Message"
          onPress={async () => {
            if (!text.trim()) return;
            addMessage({ id: crypto.randomUUID(), role: 'user', content: text });
            setTyping(true);
            const response = await sendAssistantText(text);
            addMessage({ id: crypto.randomUUID(), role: 'assistant', content: response });
            setTyping(false);
            setText('');
          }}
        />
        <Button label="Clear History" onPress={clear} />
      </View>
    </Screen>
  );
}
