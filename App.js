import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles/Styles';
import Labels from './Components/Labels';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuarios, setUsuarios] = useState('');

  const adicionarUsuario = () => {
    if (nome && telefone) {
      setUsuarios([...usuarios, { nome, telefone }]);
      setNome('');
      setTelefone('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Labels.title}</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>{Labels.name}</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>{Labels.phone}</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.button} onPress={adicionarUsuario}>
          <Text style={styles.buttonText}>{Labels.register}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.userList}>
        <ScrollView>
          {usuarios.map((user, index) => (
            <View key={index} style={styles.userItem}>
              <Text style={styles.userText}>{user.nome}</Text>
              <Text style={styles.userText}>{user.telefone}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}