import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function EditProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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

export default EditProfileScreen;
