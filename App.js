import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card title='1'></Card>
      <Card title='2'></Card>
      <Card title='3'></Card>
      <Card title='4'></Card>
      <Card title='5'></Card>
      <Card title='6'></Card>     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 20,
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
});
