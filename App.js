import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Task from './components/TaskItems';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Hey, Name!</Text>

        <View style={styles.itemsContainer}>
          {/* This is where the tasks will go */}
          <Text style={styles.sectionTitle}>My Week</Text>
          <Task
            color={'#F5BDA3'}
            category={'Meeting'}
            time={'10:00 AM - 1 PM'}
            notes={'add notes here'}
          />
          <Task
            color={'#F5D5DE'}
            category={'Groceries'}
            time={'1 PM - 3 PM'}
            notes={'add notes here'}
          />
          <Task
            color={'#F5DFB1'}
            category={'Workout'}
            time={'4 PM - 5 PM'}
            notes={'add notes here'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cebfb6'
  },
  tasksWrapper: {
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  itemsContainer: {
    backgroundColor: 'rgb(255,240,227)',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
