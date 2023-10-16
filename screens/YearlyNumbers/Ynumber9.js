import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ynumber9 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Number 9</Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Compassion: </Text>Number 9 individuals are known for their deep compassion and empathy. They have 
      a strong desire to help others and make a positive impact on the world.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Humanitarianism: </Text>They are often drawn to humanitarian causes and work to improve the lives 
      of those in need.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Idealism:</Text>Number 9 individuals have a strong sense of idealism and a belief in the goodness 
      of humanity.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Spirituality: </Text>They may have a deep spiritual or philosophical side and seek higher truths 
      and meaning in life.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Selflessness: </Text> They are selfless and may put the needs of others before their own. They are 
      generous with their time and resources.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Wisdom: </Text>They possess wisdom and a deep understanding of the human condition. They can offer 
      valuable insights to those around them.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Creativity:</Text>Many number 9 individuals have creative talents, whether in the arts, music, or 
      other forms of expression.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Healing: </Text>They often have a healing presence and may work in healing professions, such as 
      healthcare or counseling.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Completion:</Text>The number 9 is associated with endings and completion, and those with this 
      numerology number may bring closure to aspects of their lives.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Universal Love: </Text>They have a profound love for humanity and the world. They seek to bring 
      people together and promote unity.
      </Text>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
    borderColor:'red',
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

export default Ynumber9