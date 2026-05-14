import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Screen, TextField } from '@libreassistant/ui';
import { AssistantOrb } from '../../components/assistant/AssistantOrb';
import { VoiceButton } from '../../components/assistant/VoiceButton';
import { PrivacyBadge } from '../../components/settings/PrivacyBadge';
import { sendAssistantText } from '../../services/assistantClient';

export function HomeScreen(): JSX.Element {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'listening' | 'speaking'>('idle');
  const [result, setResult] = useState('Try: hello, save note buy milk, remind me to call mom');

  return (
    <Screen>
      <View style={{ alignItems: 'center', gap: 14 }}>
        <PrivacyBadge />
        <AssistantOrb state={status} />
        <Text style={{ color: '#F4F7FF', fontSize: 24, fontWeight: '700' }}>LibreAssistant</Text>
        <Text style={{ color: '#B4C0DD' }}>{result}</Text>
      </View>
      <View style={{ marginTop: 18, gap: 10 }}>
        <TextField value={input} onChangeText={setInput} placeholder="Ask anything" />
        <Button
          label="Send"
          onPress={async () => {
            setStatus('speaking');
            setResult(await sendAssistantText(input));
            setStatus('idle');
            setInput('');
          }}
        />
        <VoiceButton onPress={() => setStatus(status === 'listening' ? 'idle' : 'listening')} />
      </View>
    </Screen>
  );
}
