import React, { useState,useRef,useEffect } from 'react';
import { View, TextInput, StyleSheet, Button, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import Number1 from '../Numbers/Number1';
import Number2 from '../Numbers/Number2';
import Number3 from '../Numbers/Number3';
import Number4 from '../Numbers/Number4';
import Number5 from '../Numbers/Number5';
import Number6 from '../Numbers/Number6';
import Number7 from '../Numbers/Number7';
import Number8 from '../Numbers/Number8';
import Number9 from '../Numbers/Number9';
import Number10 from '../Numbers/Number10';
const DateOfBirth = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [totalDigitSum, setTotalDigitSum] = useState(null);
  const [totalDigitSumBreakdown, setTotalDigitSumBreakdown] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

   
  const dayInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);


  useEffect(()=>{
    dayInputRef.current.focus();
  },[]);
  
  useEffect(() => {
    if (dayInputRef.current && day.length === 2) {
      monthInputRef.current.focus();
    }
  }, [day]);

  useEffect(() => {
    if (monthInputRef.current && month.length === 2) {
      yearInputRef.current.focus();
    }
  }, [month]);

  useEffect(() => {
    if (day.length === 2 && month.length === 2 && year.length === 4) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [day, month, year]);

  const handleButtonClick = () => {
    const calculateDigitSum = (input) => {
      return input.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    };

    const dayDigitSum = calculateDigitSum(day);
    const monthDigitSum = calculateDigitSum(month);
    const yearDigitSum = calculateDigitSum(year);

    const totalSum = dayDigitSum + monthDigitSum + yearDigitSum;

    let breakdown = totalSum;
    while (breakdown >= 10) {
      breakdown = breakdown
        .toString()
        .split('')
        .map((digit) => parseInt(digit, 10))
        .reduce((sum, digit) => sum + digit, 0);
    }

    // Update state with the total digit sum and its breakdown
    setTotalDigitSum(totalSum);
    setTotalDigitSumBreakdown(breakdown);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ borderColor: 'orange', borderWidth: 2 ,padding:10,borderRadius:5,backgroundColor:'white'}}>
        <Text style={{textAlign:'center',fontSize:30,marginBottom:10}}>
          Enter your DOB</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Day"
              onChangeText={(text) => {
                if (/^\d{0,2}$/.test(text)) {
                  setDay(text);
                }
              }}
              keyboardType="numeric"
              maxLength={2}
              ref={dayInputRef}
            />
            <TextInput
              style={styles.input}
              placeholder="Month"
              onChangeText={(text) => {
                if (/^\d{0,2}$/.test(text)) {
                  setMonth(text);

                }
                if(text.length==2)
                yearInputRef.current.focus();
              }}
              keyboardType="numeric"
              maxLength={2}
              ref={monthInputRef}
            />
            <TextInput
              style={styles.input}
              placeholder="Year"
              onChangeText={(text) => {
                if (/^\d{0,4}$/.test(text)) {
                  setYear(text);
                }
              }}
              keyboardType="numeric"
              maxLength={4}
              ref={yearInputRef}
            />
          </View>
          <View style={{ width: '50%', marginLeft: 100 }}>
            <Button
              title="Submit"
              onPress={handleButtonClick}
              disabled={isButtonDisabled}
            />
          </View>
        </View>
        {totalDigitSum !== null && (
          <Text style={styles.result}>
            Total Sum of Digits: {totalDigitSum}
          </Text>
        )}
        {totalDigitSumBreakdown !== null && (
          <>
            <Text style={styles.result}>
              Total Sum Breakdown: {totalDigitSumBreakdown}
            </Text>
            {totalDigitSumBreakdown === 1 && <Number1 />}
            {totalDigitSumBreakdown === 2 && <Number2 />}
            {totalDigitSumBreakdown === 3 && <Number3 />}
            {totalDigitSumBreakdown === 4 && <Number4 />}
            {totalDigitSumBreakdown === 5 && <Number5 />}
            {totalDigitSumBreakdown === 6 && <Number6 />}
            {totalDigitSumBreakdown === 7 && <Number7 />}
            {totalDigitSumBreakdown === 8 && <Number8 />}
            {totalDigitSumBreakdown === 9 && <Number9 />}
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120, // Add padding to improve layout
    // margin: 10,
   
  },
  textInputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    // Remove flex: 1 to keep the input fields inline
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
    paddingLeft: 10,
    width: 80, // Adjust the width as needed
  },
  result: {
    marginTop: 3,
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DateOfBirth;
