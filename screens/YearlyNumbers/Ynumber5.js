import { View, Text, StyleSheet   } from 'react-native'
import React from 'react'

const Ynumber5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Number 5</Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Freedom: </Text>Number 5 individuals value their independence and freedom. They are adventurous and 
      enjoy exploring new horizons.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Adaptability:</Text>They are highly adaptable and flexible, able to adjust to different situations 
      and environments with ease.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Curiosity: </Text>Number 5 individuals are naturally curious and open to new experiences. They have 
      a thirst for knowledge and a desire to learn.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Versatility: </Text>They are versatile and have a range of interests and talents. They can excel in multiple areas.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Communication: </Text>They are excellent communicators and can express themselves effectively. They 
      often have a gift for persuasion and negotiation.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Sociability:</Text>They enjoy social interactions and often have a wide circle of friends. They are 
      charismatic and make friends easily.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Restlessness:</Text>Number 5 individuals may have a restless nature and a desire for constant change and excitement.
      </Text><Text style={styles.para}>
      <Text style={styles.boldText}>Travel: </Text>They are often drawn to travel and exploring different cultures. Travel is a way for 
      them to satisfy their sense of adventure.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Resourcefulness: </Text>They are resourceful problem solvers, able to think on their feet and find creative solutions.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Independence: </Text> Independence is highly valued. They prefer to make their own decisions and carve their own path in life.
      </Text>
      
      
      
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
    borderColor:'green',
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


export default Ynumber5