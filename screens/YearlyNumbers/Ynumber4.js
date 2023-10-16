import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ynumber4 = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Number 4</Text>
    <Text style={styles.para}>
    <Text style={styles.boldText}>Stability: </Text> Number 4 individuals are often known for their stability and dependability. They 
    provide a solid and reliable foundation for themselves and others.
    </Text>
    <Text style={styles.para}>
      <Text style={styles.boldText}>Hard Work:</Text>They are hardworking and diligent. They believe in putting in the effort and 
      persistence 
      to achieve their goals.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Practicality: </Text>Number 4 individuals are practical and down-to-earth. They have a strong sense 
      of realism and prefer to deal with concrete, tangible matters.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Organization: They are well-organized and pay attention to detail. They thrive in structured 
      environments and have a methodical approach to tasks.</Text>They are well-organized and pay attention to detail. They thrive 
      in structured environments and have a methodical approach to tasks.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Responsibility: </Text>Those with the numerology number 4 take their responsibilities seriously. 
      They are dependable and fulfill their obligations.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Discipline: </Text>They have a strong sense of discipline and self-control. They can resist 
      temptations and distractions in pursuit of their objectives.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Traditional Values: </Text>Number 4 individuals often hold traditional values and beliefs. They respect and 
      honor established customs and practices.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Conservatism: </Text>They tend to be conservative in their views and behaviors. Change may be 
      embraced cautiously.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Security:</Text>Security is important to them, whether it's financial, emotional, or physical. 
      They work diligently to create stable and secure lives.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Problem Solving:</Text>They have excellent problem-solving skills and can find practical 
      solutions to challenges.
      </Text>
    </View>
)
}


const styles=StyleSheet.create({
  container:{
  borderColor:'grey',
  width:'90%',
  borderWidth:1,
  padding:7,
  borderRadius: 10,
  marginBottom:10
  },
  heading:{
      textAlign:'center',
      fontSize:30,
      marginBottom:10
  },
  para:{
    fontSize: 20,
    marginBottom: 7,
  },
  boldText: {
    fontWeight: 'bold',
  },
})


export default Ynumber4