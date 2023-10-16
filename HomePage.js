import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

const HomePage = ({navigation}) => {

  // Function to navigate to DateofBirth screen
  const navigateToDateofBirth = () => {
    navigation.navigate('Date of Birth');
  };
  const navigateToMobileNUmber=()=>{
    navigation.navigate('Mobile Number');
  };
  const navigateToTutorials = () => {
    navigation.navigate('Tutorials');
  };
  const navigateToNameNo= () => {
    navigation.navigate('Name No');
  };
  const navigateToYearlyPrediction = () => {
    navigation.navigate('Yearly Prediction');
  };
  const navigateToMonthly = () => {
    navigation.navigate('Monthly');
  };
  const navigateToNameAnalyser = () => {
    navigation.navigate('Name Analyser');
  };
  const navigateToQueries = () => {
    navigation.navigate('Queries');
  };
  const navigateToMarriageCompatibility = () => {
    navigation.navigate('Marriage Compatibility');
  };

  return (
   
    <View style={styles.container}>
      <Text style={styles.title}>HomePage</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToDateofBirth}>
          <Text style={styles.buttonText}>Date of Birth</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToMobileNUmber}>
          <Text style={styles.buttonText}>Mobile Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToTutorials}>
          <Text style={styles.buttonText}>Tutorials</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToNameNo}>
          <Text style={styles.buttonText}>Name No</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToYearlyPrediction}>
          <Text style={styles.buttonText}>Yearly Prediction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToMonthly}>
          <Text style={styles.buttonText}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToNameAnalyser}>
          <Text style={styles.buttonText}>Name Analyser</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToQueries}>
          <Text style={styles.buttonText}>Queries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToMarriageCompatibility}>
          <Text style={styles.buttonText}>Marriage Compatibility</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Button 10</Text>
        </TouchableOpacity> */}
      </View>
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
    fontSize: 35,
    marginBottom: 10,
    marginTop:10
  },
  
  button: {
    width: 250,
    height: 50,
    margin: 8,
    fontSize:30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 26, // Adjust the font size here
  },
});

export default HomePage;
