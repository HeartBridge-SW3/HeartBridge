import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MainScreen;
