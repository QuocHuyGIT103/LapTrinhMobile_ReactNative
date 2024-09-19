import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Color:</Text>
      {/* Add color selection options */}
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
