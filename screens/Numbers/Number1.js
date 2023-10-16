import React,{useState} from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
const Number1 = () => {  
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
      <Text style={styles.heading} >Number 1</Text>
      <Text style={styles.title} onPress={BasicInfotoggleParaVisibility}>Basic Info</Text>
      {isBasicInfoParaVisible && (
        <>
      <Text style={styles.para}>Number one is the 1st number in the series of numbers from which all other numbers were created.</Text>
      <Text style={styles.para}>It can also be referred to as a line between Heaven and Earth, the creative power, the First Cause touching the Earth plane.
        Pythagoras, a Greek philosopher and also known as the father of numerology identified this number with godhead as it is the
        base of all numbers. It is so magical that it contains everything and yet everything is derived from it. It also represents
        the positive side of life and its creation.</Text>
        
      <View style={{alignItems:'center'}}>
      <Image
        source={require('../assets/Number1.png')}
        style={styles.image}
      />
      </View>
      <Text style={styles.title1}>If you are born with Number 1, you are ruled by the Sun.</Text>
      <Text style={styles.para}>You control and command people around you. You are influential, honest, bold outspoken, confident and a born leader. No task
        is impossible for you to achieve. Luck is on your side and you will always excel at what you take on. You are not meant to obey
        but to lead. A born leader and successful businessman. Name numbers must vibrate with 1 or 6.</Text>
      <Text  style={styles.para}>The stiff and grounded appearance of number 1 with a head held high indicates strength and confidence. Number 1 is the base
        of all numbers, therefore, there is planning, ambition, and assertion. It is also a number of success and power, achieved by
        determination and willpower. Though number 1 is the 1st numberin the series of odd numbers, there is a lot of positiveness in it.
        It has a direction and it does not doubt its course of action. It is stubborn and it has strong opinions about what is right and
        what is wrong. It has a high energy, dynamic force that drives relentlessly towards its destiny. It is the instigator, denotes
        change and pioneering work. It also indicates willpower to achieve one’s goal. </Text>
      <View style={{alignItems:'center'}}>
      <Image
        source={require('../assets/summer.png')}
        style={styles.image1}
      /></View>
      <Text  style={styles.para}>Number 1 in Vedic numerology is ruled by the planet Sun which is the main driving force of this entire
        universe. Sun being a hot planet also makes the number one hot-headed and rough. It is a number of high moral values, leadership,
        and determination.</Text>
      <Text style={styles.para}>People born on 1, 10, 19, 28 of any month are number 1 persons. The nature of number one makes them
        highly confident and born leader. These people are strongly built with heavy bones and big red eyes. They can be tall and full
        of flesh with fair complexion and thin hair. Their forehead is usually big and they possess a grace on their face which is
        luring for everyone who comes in contact with them. Their diplomacy and tact make them stand out from the crowd since they are
        deep thinkers and their decisions are mostly correct. They may have a bold voice that is attractive, sensual and admired by 
        others. They can be the perfect elder siblings because of their responsible nature or even if they are not the elder ones their
        maturity makes them act like elders.</Text>
        </>
)}
        <Text style={styles.title} onPress={PositiveTraitstoggleParaVisibility}>Positive Traits</Text>
        {isPositiveTraitsParaVisible && (
        <>
        <Text style={styles.para}>•	Number 1 resonates with the vibrations and attributes of new beginnings, creation, independence, uniqueness, motivation, striving forward and progress, ambition and will power, positivity and positivizes. Number 1 also resonates with the energies of pioneering, raw energy, force, activity, self-leadership and assertiveness, initiative, instinct and intuition.</Text>
        <Text style={styles.para}>•	Number 1 carries the energies of the masculine attributes, organization, achievement and success, strength and self-reliance, tenacity, forcefulness and authority, and love. Number 1 also resonates with inspiration, attainment, glory, happiness, fame, fulfilment and omniscience, assertive, ambitious, successful, self, independent, leadership, originality, initiative, organizer, instinct, love, intuition, courageous achiever, strength, creativity, self-reliance, tenacious, forceful, authorities, inspirational, strong willpower, lenient, attainment, happiness, glory, fame, unique, omniscience, fulfilment, unity, the divine presence, thesis, opportunity, will and focused consciousness, ability to use personal resources.</Text>
        <Text style={styles.para}>•	Number 1 encourages us to step out of our comfort zones and reminds us that we create our own reality with our thoughts, beliefs and actions.</Text>
        </>
        )}
        <Text style={styles.title} onPress={NegativeTraitstoggleParaVisibility}>Negative Traits</Text>
        {isNegativeTraitsParaVisible && (
        <>
        <Text style={styles.para}>•	Negatively, number 1 relates to single-mindedness, intolerance, conceit, narrow-mindedness, lacking in emotion and being weak-willed, dependence, passivity, aggression, arrogance and dominance. self-satisfied, inconsiderate, stubbornness, single-minded, intolerant, conceited, narrow-minded, stubborn, controlling, lacking in emotion, passive, follower, aggressive, dependent, weak-willed, arrogance, being overly dominant.</Text>
        <Text style={styles.para}>•	The need of 1 is to learn to stand on their own feet and develop independence. The number 1 is considered is masculine and introverted. The ruling planet of the number 1 is the Sun, and it is related to the star sign Aries. The Magician Tarot card is representative of the number 1.</Text>
        <Text style={styles.para}>•	1 being the number of new is the number from which all manifestation begins. It is the energy that begins all actions and leads the way in new directions. New ideas, new projects and the desire for expansion all allow the number 1 to go forth with courage, originality and decisiveness.</Text>
        <Text style={styles.para}>•	Many opportunities are presented for the 1 energy, as they see a need to open up to the new in all ways. This vibration is very independent and will do things their own way. A set routine or pattern is not comfortable for a person with the 1 vibration, as they see new ways of accomplishing tasks, and needs the opportunity to analyze their system.</Text>
        <Text style={styles.para}>•	The 1 energy has many talents and this is expressed in many ways. If the 1 energy does not live up to the full potential of their leadership, they may become a timid and shy person because of their lack of self-confidence. They may also find that there will sometimes be a holding back of opinions and ideas because of this.</Text>
        <Text style={styles.para}>•	The 1 energy appreciates relationships in both business and marriage, as they need the social contact of others. In relationships the person with the 1 vibration is a good companion, but needs the support of their partner. In marriage they are extremely loyal, but not particularly romantic. To the 1 energy, deeds rather than words show love. The love-filled creative flow of the 1 vibration, coupled with the need to help all humanity, allows for compassion and warmth, which softens the energy of the 1. 1 is a natural leader who needs love and affection in the domestic arena, as they see this as support.</Text>
        <Text style={styles.para}>•	The 1 vibration needs to be aware of others as they are sensitive, and have a keen perception and clear insights. At times, the 1 vibration's strong convictions can become a barrier in their relationships with others.</Text>
        <Text style={styles.para}>•	The 1 energy must learn that life does not unfold all at once, but rather, they must find their true being, and have patience until unfoldment.</Text>
        <Text style={styles.para}>•	On the lower plane, the 1 energy may function as a person with aggressive self-will and egotism. To the extreme, they may become a braggart. They can become controlling and appear lacking in emotion. </Text>
        <Text style={styles.para}>•	1 fears being over-looked and they have a strong desire to always be Number 1. They are critical of themselves, and as a result, can be critical of others. They usually have issues with their self-esteem - they just do not believe that they are good enough. Because of this, they need praise from others. If you believe in them then there is nothing they cannot achieve. If you do not, they have a tendency to rebel. 1 will not tolerate laziness from the people they choose to spend their time with, and they are people who don't like to ask for help from others. </Text>
        <Text style={styles.para}>•	On the higher plane, the 1 energy will express themselves through honesty and integrity. When a person under the 1 energy has won a personal victory, their happiness is evident as their faces radiate with pure joy. </Text>
        <Text style={styles.para}>•	The 1 energy is respected and looked up to as they have great self-respect and are aware that this demands respect from others. A natural leader, the 1 person is assertive, daring, ambitious, and at times, a risk-taker. 1s are likely to be successful at anything they put their mind to. Multi-tasking is something they tend to be very good at, and keeping busy is important to them.</Text>
        <Text style={styles.para}>•	When used in a leadership capacity, the 1 energy has many talents and skills. They are never satisfied working for others, so therefore need a good education to enable them to take control of their own lives.</Text>
        <Text style={styles.para}>•	The 1 energy never knows defeat, and those who are under the influence of the number 1 have learned that the only failure is in ceasing to try. The 1 vibration person has a deep-seated desire to maintain their goals, individuality and independence. The 1 energy person needs to acknowledge their own positive attributes and to understand who they are in essence, for they are to become trailblazers. They must learn to visualize, and to do many untried actions on the material level. They need to learn to anticipate positive results through trial and error - they must learn that life unfold slowly, and to stand on their own two feet and develop independence.  </Text>
        <Text style={styles.para}>•	The number 1 symbolizes the principle of beginning or initiation. It signifies that a person must learn to be assertive and achieve recognition for their talents. Therefore, the number 1 is ambitious and is an achiever, and fares best when they are allowed to demonstrate their own ideas. They are self-sufficient, inventive, willful and dominant, focused and rational.</Text>
        </>
        )}
        <Text style={styles.title}  onPress={CharactertoggleParaVisibility}>Character</Text>
        {isCharacterParaVisible && (
        <Text style={styles.para}>
          Clear self-identity and values, resolute, desires action, seeks new paths, takes on duties and responsibilities
        </Text>
      )}
        <Text style={styles.title} onPress={RelationshipstoggleParaVisibility}>Relationships</Text>  
        {isRelationshipsParaVisible && (
        <>    
        <Text style={styles.para}>•	Destiny Number 1s will often find that they have many relationships before they settle down as they have high expectations of their partners and will often be disappointed if they find that their mate does not meet these expectations. Number 1s should be aware that they may be seeking a perfect partner who does not exist.</Text>
        <Text style={styles.para}>•	It would be wise for number 1s to assess what they really want from a relationship and with whom they are likely to achieve this. Number 1s should accept their own limitations as well as their partners in order for a relationship to succeed. To maintain a happy and healthy relationship, Number 1s will need to make a concerted effort to prioritize their relationships and allow time in their lives to spend with their partners.</Text>
        <Text style={styles.para}>•	People born with the Number 1 Destiny often need a lot of reassurance and praise from their partners in order to boost their self-esteem. Number 1s should remember, however, that their partners will need this to be reciprocated.</Text>
        <Text style={styles.para}>•	Relationships will tend not to be the priority in the lives of Destiny Number 1s as they do not regard it as an area in which success can be measured. The focus of their lives will tend to be careers or material gain and this can put relationships in the background. As a result Number 1s are frequently loners and are often content to be so.</Text>
        <Text style={styles.para}>•	Number 1s who stray from their paths often end up in clingy co-dependent relationships.</Text>
        </>
        )}
        <Text style={styles.title} onPress={ParenthoodtoggleParaVisibility}>Parenthood</Text>
        {isParenthoodParaVisible && (
        <>  
        <Text style={styles.para}>•	Number 1s are loving and dedicated parents who tend to be committed to the rearing of their children. Family is important to Number 1s and they will want to have a strong bond with their children.</Text>
        <Text style={styles.para}>•	As parents, Number 1s will wish to be involved in their childrens lives and will encourage them to fulfil their potential. They should be wary not to dominate their children by allowing them the opportunity to develop their own interests. Number 1 parents should not have overly high expectations for their children as they may not be able to hide their frustrations if they are disappointed. As long as Number 1s parents allow their children plenty of growing space they should have a good relationship.</Text>
        </>
        )}
        <Text style={styles.title} onPress={HometoggleParaVisibility}>Home and Leisure</Text>
        {isHomeParaVisible && (
        <> 
        <Text style={styles.para}>•	It is important for Number 1s to have a comfortable and warm home where they can relax. Number 1s should try to relax as much as possible when at home. They may find that by developing their creative talents they enjoy writing, music, and art. It is unlikely that a Number 1 would not have creative talents that could be developed as most people with this Destiny number are gifted in some way.</Text>
        <Text style={styles.para}>•	Number 1s enjoy a good time and can often live life to excess. They are often guilty of burning the candle at both ends, which may eventually take its toll. Number 1s should be aware of their excesses and try to balance them in their lives.</Text>
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
        <Text style={styles.listContent}>Sunday, Monday</Text>
      </View>
      </View>
      <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Gemstone:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Ruby, amber</Text>
      </View>
      </View>
      <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Colour:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Orange</Text>
      </View>
      </View>
      <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Friendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>1, 2, 3</Text>
      </View>
      </View>
      <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Unfriendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>4, 7</Text>
      </View>
      </View>
      <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Relationship:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>2, 3, 6, 7, 9</Text>
      </View>
      </View>
      
    </View>
    <Text style={styles.para}>Wearing the lucky gemstones on the ring finger of your right hand can bring in positive energies and keep
     your health in check. Topaz is yet another element that could be helpful. If you’re a number 1 needing more insights into your
     personal life, finances, or professional paths, a numerology consultation can bring your positive and negative traits to light.
     Sheelaa M Bajaj provides both offline and online consultations to help you find solutions to your problems while also offering
     services like tarot reading and vaastu. Find out all you need to know about numerology 1 with Sheelaa M Bajaj by getting in touch
     with us.</Text>
     </>
        )}
     
        <Text style={styles.title} onPress={CareertoggleParaVisibility}>Career</Text>
        {isCareerParaVisible && (
        <>
        <Text style={styles.para}>•	 A leader, risk-taker and original thinker, you have great drive and can succeed against all the odds. Destiny Number 1s are suited to careers that make the most of their creative talents, but also allow them the opportunity to excel and succeed. You are able to excel anywhere you can display your leadership qualities. Number 1s often become great leaders and for this reason, and they make great entrepreneurs, freelancers, generals, commanders, CEOs and producers.</Text>
        <Text style={styles.para}>•	 They should be aware that they do not work well as part of a team because they are fiercely ambitious and need to dominate a group. Destiny Number 1s need time on their own and space to be creative in their work.</Text>
        <Text style={styles.para}>•  Number 1s will often find themselves drawn towards the performing arts as they will be the focus of attention and their success will be obvious to all. It is important to recognize that this is a highly competitive area of work and that not everyone can succeed in this field. However, Number 1s are more likely than most to find success in this environment.</Text>
        <Text style={styles.para}>•	 Other careers that would suit Number 1s are those of designer, journalist, writer and engineer. Number 1s will often know the career that they are interested in following and will pursue their goals in this area.</Text>
        </>
        )}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // alignItems: 'center',
    width: '90%',
    // borderColor: 'lightblue',
    // borderWidth: 2,
    // borderRadius: 10,
    padding: 10,
    marginTop:10
  },
  subcontainer:{
    borderColor:'orange',
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
     backgroundColor:'orange',
     color:'black',
     marginBottom:10
  },
  para: {
    fontSize: 20,
    marginBottom: 7,
  },
  title1: {
    fontSize: 23,
    marginBottom:5,
    color:'black'
  },
  image: {
    width: 200,
    height: 250,
  }, 
  image1: {
    width: 250,
    height: 250,
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

export default Number1;
