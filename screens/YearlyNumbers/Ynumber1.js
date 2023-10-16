import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ynumber1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Number 1</Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Leadership:</Text> People with the numerology number 1 often have strong leadership qualities.
      They are independent and tend to take charge in various aspects of their lives.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Independence: </Text>  Number 1 individuals value their independence and are self-reliant. They
      prefer to make their own decisions and do not rely heavily on others.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Ambition:</Text> They are highly ambitious and have a strong desire to achieve their goals. They
      are determined and persistent in their pursuits.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Innovation: </Text> Number 1 individuals are often innovative and creative thinkers. They have a 
      unique approach to problem-solving and can come up with original ideas.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Courage:</Text> They tend to be courageous and are not afraid to take risks. They have the 
      confidence to face challenges head-on.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Assertiveness:</Text> Number 1 individuals are assertive and can be competitive. They have a strong 
      desire to succeed and can be quite competitive in their endeavors.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Positive Energy: </Text> They typically exude positive energy and have an optimistic outlook on life.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Initiative:</Text> Number 1 individuals are proactive and take the initiative to start new projects or ventures.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Self-Expression:</Text>  They are expressive and have a strong sense of self. They are not afraid to
      express their opinions and ideas.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Individuality:</Text>Individuality and uniqueness are important to those with the numerology number 1.
      They often strive to stand out from the crowd.
      </Text>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
    borderColor:'orange',
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

export default Ynumber1