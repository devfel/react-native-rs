import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `New Project ${Date.now()}`,
      owner: 'Feliz',
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <StatusBar backgroundColor="#00F" barStyle="light-content" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(elem) => elem.id}
          renderItem={({item: project}) => (
            <Text style={styles.title}>{project.title}</Text>
          )}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddProject}>
          <Text style={styles.buttonText}>Add Project</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  title: {
    color: '#FF0',
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
