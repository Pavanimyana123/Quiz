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
      <Text style={styles.heading}>Number 9</Text>
      <Text style={styles.title} onPress={BasicInfotoggleParaVisibility}>Basic Info</Text>
      {isBasicInfoParaVisible && (
        <>
        
      <Text style={styles.para}>Numerology 9 can be your number if you’re born on the 9th, the 18th, or the 27th. 9 in numerology can 
      also be for anyone whose destiny number adds up to 9.</Text>
      <Text style={styles.para}>Number 9 is ruled by Mars. As a number 9 you fight for a cause, be it war or the country or a movement. 
      You are a giver and seeker of knowledge and your work always must be connected with teaching, people or spirituality. The number 9 
      is a number of completion of karma and hence a name correction must be applied depending on the combination number. A number 9 is a 
      very heavy number to be born under. You face too many life lessons at a very young age.</Text>
      <View style={{alignItems:'center'}}>
      <Image
        source={require('../assets/nine.png')}
        style={styles.image}
      /></View>
      <Text style={styles.para}>Numerology number 9 represents endings and new beginnings, being the last single digit. The number 9 in 
      numerology can signify both chaos and peace, depending on your personality and destiny numbers. A name correction can become
       essential if your destiny number clashes with your life path number.</Text>
      <Text style={styles.para}>With the number 9 holding the essence of both an end and a beginning, 9s have the ability to power through
       their storms and come out victorious, bringing in growth and wisdom through their experience. You are resilient and a problem-solver. 
       While being kind is good, learning to draw a clear boundary is needed to realise when you’re going overboard.</Text>
      <Text style={styles.para}>You are a born fighter with courage. Most number 9’s work with the removal of the old and making of new. 
      Be it a plumber, a carpenter or a reformer. You are highly intelligent but your mars nature makes you stand for what’s right rather than whose
       right. You can be depended on for justice in any situation. A very lucky number if not afflicted by 2, 4, 7 and 8. People with number 9 need a name
        to suit their heavy karmic traits. If not they turn negative and have a hard life.</Text>
        </>
      )}
      <Text style={styles.title} onPress={PositiveTraitstoggleParaVisibility}>Positive Traits</Text> 
      {isPositiveTraitsParaVisible && (
        <>
      <Text style={styles.para}>•	People born with the Number 9 Destiny are independent, courageous and resilient. Optimists by nature, number 9s have a happy-go-lucky approach to life and they are more than able to cope with life’s ups and downs. Number 9s are sure of themselves and are generally content with their lot.</Text>
      <Text style={styles.para}>•	Once set on a course of action, number 9s will follow their chosen course with determination and they will not be put off or disheartened. Their enthusiasm and vitality can have a positive impact on other people who tend to get carried along with number 9s energies.</Text>
      <Text style={styles.para}>•	Number 9s have hidden depths as they have a great deal of sympathy and understanding for their fellow human beings. They are non-judgmental of others and are happy to accept people for what and who they are.</Text>
      <Text style={styles.para}>•	Those on the number 9 Life Path are destined to travel a true humanitarian path. They are here to make sacrifices for those less fortunate than themselves and make for an excellent doctor, scientist or charity worker. These sophisticated individuals are very selfless souls and are often patient, trustworthy and honorable from the very beginning to the end of their lives. They are all about spirituality.</Text>
      <Text style={styles.para}>•	Part of a 9s life path is to express spiritual principles through actions, rather than through preaching or proselytizing.</Text>
      <Text style={styles.para}>•	The karmic responsibility of the 9 on the earth plane is through humanitarian concepts.</Text>
      <Text style={styles.para}>•	Your challenge is to let go of material possession and relationships when they have outlived their purposes.</Text>
      <Text style={styles.para}>•	Your purpose is to work in any field that benefits mankind</Text>
      </>
      )}
      <Text style={styles.title} onPress={NegativeTraitstoggleParaVisibility}>Negative Traits</Text>
      {isNegativeTraitsParaVisible && (
        <>
      <Text style={styles.para}>•	A forceful and uncompromising approach to life will get many number 9s where they want to be but can cause other people great distress. Number 9s do not enjoy conflict or hurting others, and so this aspect of their character needs to be kept in check.</Text>
      <Text style={styles.para}>•	It is important for number 9s to recognize that, unlike themselves, not everyone finds it easy to bounce back from disappointments and that other people may hurt for a long time after they have moved on.</Text>
      <Text style={styles.para}>•	Quick tempers are common among number 9s, as is a tendency to lash out at whoever is nearest.</Text>
      <Text style={styles.para}>•	Number 9s are often guilty of being self-centered and of not listening to others. They have such a belief in themselves that they are not willing to listen to the opinions of others, which can cause resentment.</Text>
      </>
      )}
      <Text style={styles.title} onPress={CharactertoggleParaVisibility}>Character</Text>
      {isCharacterParaVisible && (
        <Text style={styles.para}>The character of number 9 is marked by its deep sense of compassion, its commitment to humanitarian causes, and its quest for spiritual understanding. People with this number often see themselves as agents of positive change in the world, striving to make it a better place through their selfless actions and visionary thinking.</Text>
      )}
      <Text style={styles.title} onPress={RelationshipstoggleParaVisibility}>Relationships</Text>
      {isRelationshipsParaVisible && (
        <>
      <Text style={styles.para}>•	Number 9s have a heightened sense of self-awareness gained through life experience, common sense and intuitive wisdom. They often attract those who seek a teacher, leader, mother or father figure, or those who think that a 9 association may advance them in some way. 9s are generally quick to see through that farad though and will evacuate the offender from their life with haste.</Text>
      <Text style={styles.para}>•	Number 9s are most often an attractive lot and if they lack traditional charms, they will certainly compensate with more than they are fair measure of sex appeal. Never short of admirers, have number 9's tended to enjoy a hectic love life.</Text>
      <Text style={styles.para}>•	Number 9s are in love with the idea of being in love as they adore romantic gestures and are easily won over by candlelit dinners and poetry. Once 9s fall in love they will swear their undying love and devotion, although this will not necessarily be reciprocated by the object of their desire. If they receive a cautious response they may decide that the relationship is not for them and will look elsewhere. Number 9s thrive on passion and excitement and a relationship lacking these qualities is unlikely to satisfy them.</Text>
      <Text style={styles.para}>•	Relationships are very important to number 9s and they will be loving and affectionate partners who will ensure that romance and passion are kept alive in their relationships. However, their emotional and passionate natures can cause problems as they are very susceptible to jealousy and are likely to create scenes and throw tantrums if they feel they have grounds for suspicion or are faced with the behavior of a flirtatious partner.</Text>
      <Text style={styles.para}>•	9s can sometimes be quick to choose to leave a relationship or situation that they feel is no longer positively serving them or has served its purpose in their lives. When they recognize that something is over and done with for them, they take quick action to end it fully. 9 is quick to cut ties. This can seem harsh to those left behind, but ultimately 9 has done them a favor by allowing them the freedom to pursue a more suitable partnership, relationship or situation.</Text>
      <Text style={styles.para}>•	When it comes to matters of the heart, those influences by the number 9 are committed, loving, protective partners who show positive leadership and light within relationships and partnerships, and serve as positive examples for others to follow.</Text>
      <Text style={styles.para}>•	9s love deeply and once committed they like to know that their partner has their back within the relationship as well as out in the wider world. They like to know that it is a true partnership in every way and like to present a picture of unity, equality and togetherness.</Text>
      <Text style={styles.para}>•	An ideal partner for the number 9 individual would be someone who is strong-willed yet flexible, compassionate but not a pushover, and intelligent and supportive of 9s ideals and strong sense of ‘being’.</Text>
      </>
      )}
      <Text style={styles.title} onPress={ParenthoodtoggleParaVisibility}>Parenthood</Text>
      {isParenthoodParaVisible && (
        <>
      <Text style={styles.para}>•	Number 9s will generally have good relationships with their children. Arguments may be commonplace, but they will not be of a serious nature. The only real problem that may arise is if number 9s become jealous of the attention that their children receive. In this situation, number 9s should be honest about their jealous and try to arrange time alone with their partners so that they can fully enjoy the times spent as a family.</Text>
      </>
      )}
      <Text style={styles.title} onPress={HometoggleParaVisibility}>Home and Leisure</Text>
      {isHomeParaVisible && (
        <>
      <Text style={styles.para}>•	Number 9s will have a busy and hectic social life and will never be short of invitations to social gatherings. Small gatherings of close friends are the ideal social occasions for number 9s.</Text>
      <Text style={styles.para}>•	Number 9s have a liking for life’s luxuries and like this of quality and are often found dining out at extravagant restaurants. At home, a bottle of fine wine will usually accompany every meal, and the larder and drinks cabinet will be well-stocked with quality items.</Text>
      <Text style={styles.para}>•	An appreciation of the finer things in life will be reflected throughout the homes of number 9s. If finances permit, number 9s will have a Jacuzzi to bathe in and the best quality bed to sleep on. Number 9s will have the best of everything that they can afford, from top of the range music systems to electric toothbrushes.</Text>
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
        <Text style={styles.listContent}>Tuesday</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Stone:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Red Coral</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Colour:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Red</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Friendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>3, 6, 9</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Unfriendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>1, 5</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Relationship:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>3, 6</Text>
      </View>
    </View>
    <Text style={styles.para}>Numerology views the number 9 as a symbol of compassion, spirituality, and humanitarianism. People with this number are often driven by a deep sense of purpose to serve others and make a positive impact on the world. Their selfless and altruistic nature is a central part of their identity, and they seek to inspire and uplift those around them.</Text>
    </View>
    </>
        )}
      <Text style={styles.title} onPress={CareertoggleParaVisibility}>Career</Text>
      {isCareerParaVisible && (
        <>
      <Text style={styles.para}>•	High pressure jobs appeal to number 9s as they enjoy having to think on their feet and meet tight deadlines. 
      Pressure motivates number 9s and in the right environment they can excel. They have great vision and are prepared to take bold steps that
       more cautious souls would shy away from.</Text>
      <Text style={styles.para}>•	In careers, number 9s like variety and will often change jobs on a regular basis in search of new and 
      bigger challenges. Number 9s need work that constantly presents new challenges in commitment. Once established in a career that
       suits their personalities, number 9's have the potential to rise to the very top.</Text>
      <Text style={styles.para}>•	Number 9s are suited to careers in journalism, the police force or armed forces, the medical profession,
       stockbroker or financial sector. These individuals make great environmentalists, teachers, artists, priests and healers.</Text>
      <Text style={styles.para}>•	In dealing with colleagues, number 9s should try to limit their criticisms and be patient with
       people who do not work at the frantic pace that they opt for. Number 9s will give credit where it is due and will be the first
        to applaud another colleagues hard work and input.</Text>
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
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 2,
    // borderRadius: 10,
    padding: 10,
    marginTop:10,  
  },
  subcontainer:{
    borderColor:'red',
    borderWidth:1,
    padding:7,
    borderRadius: 10
  },
  heading:{
    textAlign:'center',
    fontSize:40,
    marginBottom:10
  },
  title: {
    textAlign:'center',
    fontSize:30,
     backgroundColor:'red',
     color:'white',
     marginBottom:10
    //  borderColor:'black',
    //  borderWidth:1
    
  },
  title1: {
    fontSize: 26,
    marginBottom:5,
    color:'blue'
  },

  image: {
    width: 200,
    height: 250,
    marginBottom: 10,
  },
  para: {
    fontSize: 20,
    marginBottom: 7,
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
