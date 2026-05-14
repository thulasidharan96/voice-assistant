import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Card, Screen, TextField } from '@libreassistant/ui';
import { InMemoryNoteRepository } from '@libreassistant/storage';

const noteRepository = new InMemoryNoteRepository();

export function NotesScreen(): JSX.Element {
  const [query, setQuery] = useState('');
  const [notes, setNotes] = useState<{ id: string; content: string }[]>([]);

  useEffect(() => {
    void noteRepository.list().then((items) => setNotes(items.map((item) => ({ id: item.id, content: item.content }))));
  }, []);

  return (
    <Screen>
      <TextField value={query} onChangeText={setQuery} placeholder="Search notes" />
      <Button
        label="Create Sample Note"
        onPress={async () => {
          const now = new Date().toISOString();
          await noteRepository.create({ id: crypto.randomUUID(), title: 'Sample', content: 'Sample note', tags: [], createdAt: now, updatedAt: now });
          const items = await noteRepository.list();
          setNotes(items.map((item) => ({ id: item.id, content: item.content })));
        }}
      />
      <ScrollView>
        {notes
          .filter((note) => note.content.toLowerCase().includes(query.toLowerCase()))
          .map((note) => (
            <Card key={note.id} style={{ marginTop: 10 }}>
              <View>
                <Text style={{ color: '#F4F7FF' }}>{note.content}</Text>
              </View>
            </Card>
          ))}
      </ScrollView>
    </Screen>
  );
}
