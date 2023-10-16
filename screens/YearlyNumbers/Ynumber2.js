import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ynumber2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Number 2</Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Harmony and Cooperation:</Text> Number 2 individuals are often known for their ability to create 
      harmony and balance in their relationships and surroundings. They value cooperation and seek to maintain peace in their interactions 
      with others.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Diplomacy:</Text>They are diplomatic and skilled at resolving conflicts and differences. They have a 
      knack for finding common ground and mediating disputes.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Sensitivity: </Text>Number 2 individuals are highly sensitive and empathetic. They are attuned to the 
      emotions and needs of others, making them compassionate and caring.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Partnership: </Text>The number 2 is often associated with partnerships and collaboration. Those with 
      this numerology number tend to thrive in cooperative environments and value close relationships.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Supportive:</Text>They are often supportive and nurturing, offering a helping hand to those in need. 
      They enjoy being there for others and providing emotional support.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Intuition: </Text>Number 2 individuals often have strong intuition and can rely on their instincts when 
      making decisions. They are perceptive and have a deep understanding of human nature.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Adaptability: </Text>They are adaptable and flexible, able to adjust to different situations and people. 
      They have a talent for going with the flow.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Empathy: </Text>Number 2 individuals are empathetic and can easily put themselves in others' shoes. 
      This empathy helps them build strong and meaningful connections.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Balance: </Text>Maintaining balance in their lives is important to those with the numerology number 2. 
      They strive for equilibrium in all aspects of life.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Patience: </Text>They are patient and understanding, willing to wait for the right timing and outcomes.
      </Text>  
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
    borderColor:'blue',
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

export default Ynumber2