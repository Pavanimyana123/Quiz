import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const NumerologyMeanings = [
  "Cooperation",
  "Harmony",
  "Balance",
  "Partnerships",
  "Duality"
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  item: {
    backgroundColor: 'blue',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    color:'white'
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
        <Text style={styles.heading}>Number 2</Text>
      {NumerologyMeanings.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
