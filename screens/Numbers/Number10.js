import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Number10 = () => {
  const [isParaVisible, setIsParaVisible] = useState(false); // Initially set to visible

  const toggleParaVisibility = () => {
    setIsParaVisible(!isParaVisible);
  };

  return (
    <View>
        <Text style={styles.title}  onPress={toggleParaVisibility}>Character</Text>
     
      {isParaVisible && (
        <Text style={styles.para}>
          Clear self-identity and values, resolute, desires action, seeks new paths, takes on duties and responsibilities
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'orange',
    color: 'black',
  },
  para: {
    fontSize: 20,
    marginBottom: 7,
  },
});

export default Number10;
