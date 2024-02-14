import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');

  const addNote = () => {
    if (inputText.trim() !== '') {
      setNotes([...notes, inputText]);
      setInputText('');
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My App</Text>
      <Text style={styles.promptText}>Enter your note:</Text>
      <TextInput
        style={styles.input}
        placeholder="Write something..."
        value={inputText}
        onChangeText={setInputText}
      />
      <TouchableOpacity style={styles.addButton} onPress={addNote}>
        <Text style={styles.buttonText}>Add Note</Text>
      </TouchableOpacity>
      <ScrollView style={styles.notesContainer}>
        {notes.map((note, index) => (
          <View key={index} style={styles.noteItem}>
            <Text>{note}</Text>
            <TouchableOpacity onPress={() => deleteNote(index)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#C2185B',
  },
  promptText: {
    marginBottom: 10,
    fontSize: 16,
    color: '#888',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#0288D1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  notesContainer: {
    flex: 1,
  },
  noteItem: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButton: {
    color: 'red',
  },
});

export default HomePage;
