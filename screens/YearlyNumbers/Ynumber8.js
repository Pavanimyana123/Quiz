import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ynumber8 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Number 8</Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Success and Achievement: </Text>Number 8 individuals are often driven by a strong desire for success 
      and achievement. They set ambitious goals and work hard to attain them.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Power and Authority: </Text>They are often associated with power and authority. They may hold positions 
      of leadership and influence in their careers or communities.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Financial Acumen: </Text>Number 8 individuals often have a natural talent for managing finances and 
      investments. They may be financially successful.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Practicality: </Text>They are practical and have a strong sense of realism. They approach 
      challenges with a practical mindset.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Organization:</Text>They are highly organized and skilled at managing complex tasks and responsibilities.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Ambition:</Text>They have a strong drive and ambition to succeed in their endeavors. They do not 
      shy away from hard work.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Determination: </Text>Number 8 individuals are determined and persevering. They are not easily 
      discouraged and have a strong work ethic.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Material Success:</Text>Material wealth and success are often associated with the numerology number 8.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Balance: </Text>They seek a balance between their personal and professional lives. Achieving equilibrium 
      is important to them.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Leadership: </Text>They often have natural leadership qualities and are capable of guiding and motivating others.
      </Text>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
    borderColor:'black',
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


export default Ynumber8