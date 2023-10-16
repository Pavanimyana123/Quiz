import { View, Image, Text ,StyleSheet, ScrollView} from 'react-native'
import React,{useState} from 'react';

const Number2 = () => {
  const [isParaVisible, setIsParaVisible] = useState(false); // Initially set to visible
  const [isBasicInfoParaVisible, setIsBasicInfoParaVisible] = useState(false);
  const [isPositiveTraitsParaVisible, setIsPositiveTraitsParaVisible] = useState(false);
  const [isNegativeTraitsParaVisible, setIsNegativeTraitsParaVisible] = useState(false);
  const [isCharacterParaVisible, setIsCharacterParaVisible] = useState(false); 
  const [isRelationshipsParaVisible, setIsRelationshipsParaVisible] = useState(false);
  const [isParenthoodParaVisible, setIsParenthoodParaVisible] = useState(false);
  const [isHomeParaVisible, setIsHomeParaVisible] = useState(false);
  const [isLuckyElementsParaVisible, setIsLuckyElementsParaVisible] = useState(false);
  const [isCareerParaVisible, setIsCareerParaVisible] = useState(false);

  const BasicInfotoggleParaVisibility = () => {
    setIsBasicInfoParaVisible(!isBasicInfoParaVisible); 
    setIsPositiveTraitsParaVisible(false);
    setIsNegativeTraitsParaVisible(false); 
    setIsCharacterParaVisible(false); 
    setIsRelationshipsParaVisible(false); 
    setIsParenthoodParaVisible(false); 
    setIsHomeParaVisible(false);
    setIsLuckyElementsParaVisible(false);
    setIsCareerParaVisible(false);
  };
  const PositiveTraitstoggleParaVisibility = () => {
    setIsPositiveTraitsParaVisible(!isPositiveTraitsParaVisible); 
    setIsBasicInfoParaVisible(false); 
    setIsNegativeTraitsParaVisible(false); 
    setIsCharacterParaVisible(false); 
    setIsRelationshipsParaVisible(false); 
    setIsParenthoodParaVisible(false); 
    setIsHomeParaVisible(false);
    setIsLuckyElementsParaVisible(false);
    setIsCareerParaVisible(false);
  };
  const NegativeTraitstoggleParaVisibility = () => {
    setIsNegativeTraitsParaVisible(!isNegativeTraitsParaVisible);
    setIsBasicInfoParaVisible(false); 
    setIsPositiveTraitsParaVisible(false); 
    setIsCharacterParaVisible(false); 
    setIsRelationshipsParaVisible(false); 
    setIsParenthoodParaVisible(false); 
    setIsHomeParaVisible(false);
    setIsLuckyElementsParaVisible(false);
    setIsCareerParaVisible(false);
  };
  const CharactertoggleParaVisibility = () => {
    setIsCharacterParaVisible(!isCharacterParaVisible);
    setIsBasicInfoParaVisible(false); 
    setIsPositiveTraitsParaVisible(false);
    setIsNegativeTraitsParaVisible(false); 
    setIsRelationshipsParaVisible(false); 
    setIsParenthoodParaVisible(false); 
    setIsHomeParaVisible(false);
    setIsLuckyElementsParaVisible(false);
    setIsCareerParaVisible(false);
  };
  const RelationshipstoggleParaVisibility = () => {
    setIsRelationshipsParaVisible(!isRelationshipsParaVisible); 
    setIsBasicInfoParaVisible(false); 
    setIsPositiveTraitsParaVisible(false);
    setIsNegativeTraitsParaVisible(false);
    setIsCharacterParaVisible(false);
    setIsParenthoodParaVisible(false); 
    setIsHomeParaVisible(false);
    setIsLuckyElementsParaVisible(false);
    setIsCareerParaVisible(false);
  };
  const ParenthoodtoggleParaVisibility = () => {
    setIsParenthoodParaVisible(!isParenthoodParaVisible);
    setIsBasicInfoParaVisible(false); 
    setIsPositiveTraitsParaVisible(false);
    setIsNegativeTraitsParaVisible(false); 
    setIsCharacterParaVisible(false);
    setIsRelationshipsParaVisible(false); 
    setIsHomeParaVisible(false);
    setIsLuckyElementsParaVisible(false);
    setIsCareerParaVisible(false);
  };
  const HometoggleParaVisibility = () => {
    setIsHomeParaVisible(!isHomeParaVisible);
    setIsBasicInfoParaVisible(false); 
    setIsPositiveTraitsParaVisible(false);
    setIsNegativeTraitsParaVisible(false); 
    setIsCharacterParaVisible(false);
    setIsRelationshipsParaVisible(false); 
    setIsParenthoodParaVisible(false); 
    setIsLuckyElementsParaVisible(false);
    setIsCareerParaVisible(false); 
  };
  const LuckyElementstoggleParaVisibility = () => {
    setIsLuckyElementsParaVisible(!isLuckyElementsParaVisible);
    setIsBasicInfoParaVisible(false); 
    setIsPositiveTraitsParaVisible(false);
    setIsNegativeTraitsParaVisible(false); 
    setIsCharacterParaVisible(false);
    setIsRelationshipsParaVisible(false); 
    setIsParenthoodParaVisible(false);
    setIsHomeParaVisible(false);
    setIsCareerParaVisible(false);  
  };
  const CareertoggleParaVisibility = () => {
    setIsCareerParaVisible(!isCareerParaVisible);
    setIsBasicInfoParaVisible(false); 
    setIsPositiveTraitsParaVisible(false);
    setIsNegativeTraitsParaVisible(false); 
    setIsCharacterParaVisible(false);
    setIsRelationshipsParaVisible(false); 
    setIsParenthoodParaVisible(false);
    setIsHomeParaVisible(false);
    setIsLuckyElementsParaVisible(false);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subcontainer}>
      <Text style={styles.heading}>Number 2</Text>
      <Text style={styles.title} onPress={BasicInfotoggleParaVisibility}>Basic Info</Text>
      {isBasicInfoParaVisible && (
        <>
      <Text style={styles.para}>The number 2 symbolises union. This could be a union of anything that aims to put an end to division.</Text>
      <Text style={styles.para}>Number 2s, you are ruled by 2 if your birth number is 2 or your life path number is 2. As someone falling under numerology 2, you have
        a strong bonding with the Earth and seek peace.</Text>
        <View style={{alignItems:'center'}}>
      <Image
        source={require('../assets/two.png')}
        style={styles.image}
      />
      </View>
      <Text style={styles.para}>Number 2 represents the Moon. It influences your mind, thoughts, and imagination. Like Moon waxes and
       wanes each fortnight, you have altered moods of elation and depression. You possess a mercurial temperament. You toe the line of
        someone and toil hard for him in business than to work for your own profits. Just like the moon doesn’t shine with its own light
        and gets it from the sun. The number 2 gets its glory from someone else. You tend to be doubtful, suspicious and have a tendency
        to be dominated or dominate if given the authority. You also have a tendency to be cheated and deceived easily by falling for
        flattery. You tend to have good intuition. A number 2  needs to get professional help with a name as a slight error can enhance
        its highly-strung emotions.</Text>
      <Text style={styles.para}>You are more a visionary than a warrior, rational in your thinking. You are also often led by your
       emotions, having extreme emotions. You also tend to overthink a lot, which gets you stuck when making decisions. Expecting perfection
        from yourself is also a trait that you, as a number 2, often show, which makes you feel like you are not enough. You also often
        refrain from speaking up for fear of being taken in the wrong way. You are a peacemaker, rather than someone who confronts.</Text>
      <View style={{alignItems:'center'}}>
      <Image
        source={require('../assets/moon.png')}
        style={styles.image}
      />
      </View>
      <Text style={styles.para}>Unlike number 1, number 2 is soft and feminine. People with ruling numerology 2 understand unity are not led by
       ego. Number 2s crave companionship and support and their love language is serving. Numbers 2s tend to put others first. They are
        also sensitive and empathetic. However, they are far from weak. Their strength lies in their ability to serve others and they will
        not hesitate to fight for their loved ones’ safety and happiness.</Text>
      <Text style={styles.para}>More about numerology 2 can be determined by identifying other ruling numbers in their lives and the 
      compatibility between these numbers. You can get an appointment with Sheelaa M Bajaj to know more about what life has in store
      for you through a numerology consultation.</Text>
      </>
)}
      <Text style={styles.title} onPress={PositiveTraitstoggleParaVisibility}>Positive Traits</Text>
      {isPositiveTraitsParaVisible && (
        <>
      <Text style={styles.para}>•	People born with the Destiny Number 2 are often skilled diplomats. They have a wonderful ability to compromise and negotiate.</Text>
      <Text style={styles.para}>•	Those following a Number 2 Destiny Life Path tend to be diplomatic, sensitive individuals make great judges, mediators, lawyers counsellors or social workers as they bring harmony to all group situations.</Text>
      <Text style={styles.para}>•	Number 2s are charming and considerate of others, which makes them popular. They tend to be peace-loving and are able to co-operate with others in order to maintain harmony in their lives.</Text>
      <Text style={styles.para}>•	Number 2 people are often compassionate and caring with a strong sense of right and wrong. They tend to be selfless as they are focused on the greater good of all.</Text>
      <Text style={styles.para}>•	It is very important for people with the 2 Destiny to get out and socialize with humanity.</Text>
      <Text style={styles.para}>•	Your challenge is to confront, rather than avoid, difficult situations.</Text>
      <Text style={styles.para}>•	Your purpose is to be a peacemaker.</Text>
      </>
)}
      <Text style={styles.title} onPress={NegativeTraitstoggleParaVisibility}>Negative Traits</Text>
      {isNegativeTraitsParaVisible && (
        <>
      <Text style={styles.para}>•	Number 2s will naturally shy away from conflict, and this can result in issues not being resolved.</Text>
      <Text style={styles.para}>•	People born with the Destiny Number 2 will often not fulfill their potential in their careers as they lack the motivation to pursue success even if they have the desire and the ability to succeed.</Text>
      <Text style={styles.para}>•	Number 2s can lack confidence in themselves and their ideas, despite the respect of others. Self-doubt can often influence the actions of Number 2s, and they often do not act decisively.</Text>
      <Text style={styles.para}>•	Number 2s should be wary of becoming pessimistic and cynical because this will hold them back unnecessarily</Text>
      </>
)}
      <Text style={styles.title} onPress={CharactertoggleParaVisibility}>Character</Text>
      {isCharacterParaVisible && (
      <Text style={styles.para}>The silent-knower, calm, just, intuitively aware, social, peace-maker.</Text>
)}
      <Text style={styles.title} onPress={RelationshipstoggleParaVisibility}>Relationships</Text>
      {isRelationshipsParaVisible && (
        <>
      <Text style={styles.para}>•	Number 2s are committed and faithful to their partners and will expect the same in return. People born with the 2 Destiny Number will make every effort to ensure that their relationships are successful and will not be likely to make a break in any situation. For this reason, Number 2s should be wary of making a commitment to the wrong person and should consider a relationship seriously before settling down.</Text>
      <Text style={styles.para}>•	Number 2s enjoy socializing and are generally well liked and are often noted for their sense of humor. Number 2s will find that they have many admirers, but should check their compatibility with a potential partner before becoming involved. Number 2s need security in their lives and should look for a partner who will provide this.</Text>
      <Text style={styles.para}>•	Once a relationship, Number 2s are adaptable and open to change as long as they feel happy and secure within the relationship. Mutual respect and appreciation are of utmost importance to Number 2s in relationships. Without this, insecurity will begin to cast a shadow over them. Number 2s will react very badly to infidelity or betrayal of trust, and they may become bitter and jealous.</Text>
      </>
)}
      <Text style={styles.title} onPress={ParenthoodtoggleParaVisibility}>Parenthood</Text>
      {isParenthoodParaVisible && (
        <>
      <Text style={styles.para}>•	Number 2 Destiny people, as parents, will ensure that their children are raised in a warm and loving environment. Their children will feel secure and supported by their parents, who will allow them freedom to develop independently but will always be there if needed. As the home is so important to Number 2s they will strive to create the most comfortable and secure home for their families.</Text>
      <Text style={styles.para}>•	Number 2 parents should be honest with their children if there are domestic difficulties for they will feel inclined to try to cover up any difficulties to maintain the feeling of security and happiness. Children will be aware that they are being left out and may resent this.</Text>
      </>
)}
      <Text style={styles.title} onPress={HometoggleParaVisibility}>Home and Leisure</Text>
      {isHomeParaVisible && (
        <>
      <Text style={styles.para}>•	The home is an important place for Number 2s, and they will spend a great deal of time making the most of it. Many Number 2s have leisure interests related to the home, such as DIY, sewing, flower arranging, gardening and the like. Number 2s find a sense of reward from spending time on an activity that has tangible results.</Text>
      <Text style={styles.para}>•	Number 2s enjoy socializing and will seldom find themselves short of invitations. People consider Number 2s to be good friends and will want to spend time with them.</Text>
      <Text style={styles.para}>•	Number 2s are health-conscious and have an interest in alternative lifestyles. Many Number 2s are vegetarians and have an interest in aromatherapy, acupuncture, reflexology and the like.</Text>
   
      </>
)}   
 <Text style={styles.title} onPress={LuckyElementstoggleParaVisibility}>Lucky Elements</Text>
 {isLuckyElementsParaVisible && (
        <>
    <View style={styles.listTable}>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Days:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Monday</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Stone:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Moonstone</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Colour:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>White or Silver</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Friendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>2, 4, 6</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Unfriendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>1, 7</Text>
      </View>
      </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Relationship:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>3, 9</Text>
      </View>
    </View>
    </View>
    <Text style={styles.para}>Overall, those with the number 2 tend to be gentle, kind-hearted individuals who exhibit tenderness and care in their interactions with others. Numerology offers insights into personality traits and characteristics, although it's essential to remember that individual experiences and choices play a significant role in shaping a person's personality. Numerology is a belief system that provides guidance for self-reflection and personal growth, but it is not a scientific discipline.</Text>
    </>
)}   
      <Text style={styles.title} onPress={CareertoggleParaVisibility}>Career</Text>
      {isCareerParaVisible && (
        <>
      <Text style={styles.para}>•	The Number 2s temperament is well suited to the caring professions and they will often find themselves employed as social workers, doctors, nurses, careers etc. Success comes through using their gifts of teaching, healing and counselling abilities and musical and writing talents.</Text>
      <Text style={styles.para}>•	Working for voluntary organizations will also appeal to Number 2s, who need to feel a sense of purpose in their work. Number 2s will settle well in careers where they feel they are benefiting others.</Text>
      <Text style={styles.para}>•	Number 2s will not flourish in a competitive work environment as they will not respond well to wrangling and disputes. Number 2s who find themselves in such situations will become disillusioned and their motivation will evaporate. </Text>
      </>
)}   
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // alignItems: 'center',
    width: '90%',
    // borderColor: 'pink',
    // borderWidth: 2,
    // borderRadius: 10,
    padding: 10,
    marginTop:10
  },
  subcontainer:{
    borderColor:'blue',
    width:'110%',
    borderWidth:1,
    padding:7,
    borderRadius: 10,
    marginBottom:10
  },
  heading:{
    textAlign:'center',
    fontSize:40,
    marginBottom:10
  },
  title: {
    textAlign:'center',
    fontSize:30,
     backgroundColor:'blue',
     color:'white',
     marginBottom: 10
    //  borderColor:'black',
    //  borderWidth:1
    
  },
title1: {
  fontSize: 26,
  marginBottom:5,
  color:'green'  
},
para:{
  fontSize: 20,
    marginBottom: 7,
},
image: {
  width: 200,
  height: 250,
  marginBottom:7
},
listTable: {
  borderWidth: 1,
  borderColor: 'lightgray',
  borderRadius: 5,
  marginVertical: 10,
  backgroundColor: 'white',
},
listRow: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderColor: 'lightgray',
},
listCell: {
  flex: 1,
  paddingVertical: 8,
  paddingHorizontal: 12,
},
listLabel: {
  fontWeight: 'bold',
  fontSize: 18,
},
listContent: {
  fontSize: 18,
},
});
export default Number2