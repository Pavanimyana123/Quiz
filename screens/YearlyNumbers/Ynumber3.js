import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ynumber3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Number 3</Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Creativity: </Text> Number 3 individuals are often highly creative and imaginative. They have a unique 
      way of thinking and are inclined towards artistic expression.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Communication:</Text>They excel in communication and are good at expressing themselves. They may have 
      a talent for writing, speaking, or other forms of expression.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Social and Sociable: </Text>Those with the numerology number 3 are usually social and enjoy being around 
      people. They have an outgoing and friendly nature.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Optimism: </Text>Number 3 individuals tend to have a positive outlook on life. They often see the 
      bright side of situations and inspire others with their optimism.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Enthusiasm:</Text>They are enthusiastic and have a zest for life. They approach tasks and activities 
      with enthusiasm and energy.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Charm:</Text> Number 3 individuals are often charming and charismatic. They can easily win people 
      over with their personalities.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Versatility:</Text>They are versatile and can adapt to various situations and roles. They may have 
      diverse interests and talents.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Sense of Humor: </Text>A good sense of humor is a common trait. They enjoy laughter and often bring 
      humor into their interactions.
      </Text><Text style={styles.para}>
      <Text style={styles.boldText}>Expression of Emotions: </Text> Number 3 individuals are expressive and open about their emotions. 
      They have the ability to connect with others on an emotional level.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Inspiration:</Text>They often inspire and motivate others with their creative ideas and positive energy.
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


export default Ynumber3