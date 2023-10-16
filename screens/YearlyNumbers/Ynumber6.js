import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ynumber6 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Number 6</Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Responsibility: </Text>Number 6 individuals are often seen as responsible and nurturing. They take 
      care of their families and loved ones.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Compassion: </Text>They are compassionate and caring, with a strong desire to help and support others in need.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Family-Centered:</Text>Family is important to them, and they often prioritize the well-being of their family members.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Harmony: </Text>They strive for harmony and balance in their lives and relationships. They work to 
      resolve conflicts and create a peaceful environment.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Service-Oriented: </Text>Number 6 individuals are service-oriented and may be drawn to careers or 
      activities that involve caring for others.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Love and Relationships:</Text>They value love and emotional connections. They are often romantic and nurturing partners.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Artistic and Creative: </Text>They have a creative side and may have a talent for the arts, such as music, painting, or writing.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Appreciation for Beauty: </Text> They appreciate and are drawn to beauty in all its forms, whether 
      it's in art, nature, or human relationships.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Balance: </Text> Maintaining balance between their own needs and the needs of others is important to them.
      </Text>
      <Text style={styles.para}>
      <Text style={styles.boldText}>Community Involvement: </Text>They may be involved in their communities and work to make a positive 
      impact on the lives of those around them.
      </Text>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
    borderColor:'indigo',
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

export default Ynumber6