import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
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
      </SafeAreaView>

      {/* <ScrollView style={styles.container}>
        {projects.map((elem) => (
          <Text style={styles.title} key={elem.id}>
            {elem.title}
          </Text>
        ))}
      </ScrollView> */}
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
});
