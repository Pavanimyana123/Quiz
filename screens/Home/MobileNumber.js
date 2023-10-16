import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import Mnumber1 from '../MobileNumbers/Mnumber1';
import Mnumber2 from '../MobileNumbers/Mnumber2';
import Mnumber3 from '../MobileNumbers/Mnumber3';
import Mnumber4 from '../MobileNumbers/Mnumber4';
import Mnumber5 from '../MobileNumbers/Mnumber5';
import Mnumber6 from '../MobileNumbers/Mnumber6';
import Mnumber7 from '../MobileNumbers/Mnumber7';
import Mnumber8 from '../MobileNumbers/Mnumber8';
import Mnumber9 from '../MobileNumbers/Mnumber9';


function NumerologyCalculator() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [numerologyNumber, setNumerologyNumber] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const mobileNumberInputRef = useRef(null);


  useEffect(()=>{
    mobileNumberInputRef.current.focus();
  },[]);

  useEffect(() => {
    if (mobileNumber.length === 10) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [mobileNumber]);


  const calculateNumerology = () => {
    // Remove non-digit characters and calculate the numerology number
    const cleanNumber = mobileNumber.replace(/\D/g, '');
    let sum = 0;

    for (let i = 0; i < cleanNumber.length; i++) {
      sum += parseInt(cleanNumber[i]);
    }

    while (sum > 9) {
      sum = sum
        .toString()
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    setNumerologyNumber(sum);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.borderBox}>
      <Text style={styles.label}>Enter your mobile number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="numeric"
        onChangeText={(text) => setMobileNumber(text)}
        value={mobileNumber}
        maxLength={10}
        ref={mobileNumberInputRef}
      />
      <Button title="Calculate Numerology"  onPress={calculateNumerology}
      disabled={isButtonDisabled} />
      {numerologyNumber !== null && (
        <Text style={styles.result}>Numerology Number: {numerologyNumber}</Text>
      )}
      </View>
    </View>
      {numerologyNumber !== null && (
          <>
            {/* <Text style={styles.result}>
              Number: {numerologyNumber}
            </Text> */}
            {numerologyNumber === 1 && <Mnumber1 />}
            {numerologyNumber === 2 && <Mnumber2 />}
            {numerologyNumber === 3 && <Mnumber3 />}
            {numerologyNumber === 4 && <Mnumber4 />}
            {numerologyNumber === 5 && <Mnumber5 />}
            {numerologyNumber === 6 && <Mnumber6 />}
            {numerologyNumber === 7 && <Mnumber7 />}
            {numerologyNumber === 8 && <Mnumber8 />}
            {numerologyNumber === 9 && <Mnumber9 />}
            
            
          </>
        )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: 20,
    // marginTop:50,
    // borderColor: 'orange', 
    // borderWidth: 2 ,
    padding:30,
    borderRadius:5,
    // backgroundColor:'white',
    // width: 80,
  },
  borderBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: (5),
    alignSelf: 'center',
    paddingHorizontal: (3.5),
    paddingBottom: (2.5),
    paddingTop: (2.5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: (0.25),
    },
    shadowOpacity: 0.25,
    shadowRadius: (3.84),
    elevation: (1),
    borderColor: 'red',
    borderWidth: (1),
    paddingBottom:10
  },
  label: {
    fontSize: 25,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  result: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default NumerologyCalculator;
