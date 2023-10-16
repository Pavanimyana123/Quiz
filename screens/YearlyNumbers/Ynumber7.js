import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ynumber7 = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Number 7</Text>
    <Text style={styles.para}>
    <Text style={styles.boldText}>Intellectual: </Text>Number 7 individuals are often highly intellectual and analytical. They have a 
    deep interest in knowledge, philosophy, and abstract thinking.
    </Text>
    <Text style={styles.para}>
    <Text style={styles.boldText}>Introspective: </Text>They are introspective and enjoy self-reflection. They often seek to understand 
    their inner selves and the world around them.
    </Text>
    <Text style={styles.para}>
    <Text style={styles.boldText}>Spirituality:Spirituality and a quest for higher truths are common traits. They may explore spiritual 
    and metaphysical topics.</Text>Spirituality and a quest for higher truths are common traits. They may explore spiritual and metaphysical topics.
    </Text>
    <Text style={styles.para}>
    <Text style={styles.boldText}>Independence:</Text>They value their independence and may prefer solitude at times to pursue 
    Perfectionism: intellectual or spiritual interests.
    </Text>
    <Text style={styles.para}>
    <Text style={styles.boldText}>Perfectionism: </Text>Number 7 individuals often have a strong desire for perfection and excellence in their endeavors.
    </Text>
    <Text style={styles.para}>
    <Text style={styles.boldText}>Analytical Thinking:</Text>They are skilled at analyzing information and finding solutions to complex problems.
    </Text>
    <Text style={styles.para}>
    <Text style={styles.boldText}>Mysticism: </Text>Some number 7 individuals are drawn to mysticism and esoteric subjects. They may 
    have a deep interest in the mysteries of life.
    </Text>
    <Text style={styles.para}>
    <Text style={styles.boldText}>Inner Wisdom: </Text>They have a strong connection to their inner wisdom and intuition, which they 
    trust in decision-making.
    </Text>
    <Text style={styles.para}>
    <Text style={styles.boldText}>Reserved: </Text>They can be reserved and introspective, which may sometimes make it challenging for 
    others to get to know them on a deeper level.
    </Text>
    <Text style={styles.para}>
    <Text style={styles.boldText}>Truth-Seeking: </Text>They are on a continuous quest for truth and understanding. They may be drawn 
    to fields such as science, philosophy, or psychology.
    </Text>
  </View>
)
}


const styles=StyleSheet.create({
  container:{
  borderColor:'brown',
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


export default Ynumber7