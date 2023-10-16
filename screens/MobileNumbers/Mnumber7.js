import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const NumerologyMeanings = [
  "Spirituality", "Introspection", "Intuition", "Analysis", "Wisdom"
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  item: {
    backgroundColor: 'brown',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    // alignItems:'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },
  heading:{
    textAlign:'center',
    fontSize:35
  }
});

export default function NumerologyList() {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.heading}>Number 7</Text>
      {NumerologyMeanings.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
