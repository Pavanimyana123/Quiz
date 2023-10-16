import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React,{useState} from 'react';

const Number5 = () => {
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
     <Text style={styles.heading}>Number 5 </Text>
     <Text style={styles.title} onPress={BasicInfotoggleParaVisibility}>Basic Info</Text>
     {isBasicInfoParaVisible && ( 
      <>
     <Text style={styles.para}>Number 5 is ruled by mercury.</Text>
     <Text style={styles.para}>You are gutsy, highly intellectual and enterprising. Your performance at work is like lightning. An asset to your boss.
      You are successful and have the ability to reach the top of any organisation. You are the boss material.</Text>
      <Text style={styles.para}>You don’t like taking instructions but are good at giving it. You come up with ideas that would normally take people months. Solutions to problems are your forte.</Text>
      <Text style={styles.para}>You can never fail unless your life path or birth number is mixed with a 7, 8 or your name number ends up being malefic 2, 4, and 7 or 8 e.g.: Rahul is a number 8 even though he may be a birth number 5.</Text>
      <View style={{alignItems:'center'}}>
      <Image
        source={require('../assets/five.png')}
        style={styles.image}
      />
      </View>     
      <Text style={styles.para}>You will always excel in business if you decide to tread that path. Losses are unlikely unless your business partner’s numerology doesn’t suit you.</Text>
      <Text style={styles.para}>You tend to have a series of relationships and number 5s have trouble conceiving children.</Text>
      <Text style={styles.para}>You are generally very dominating and are a natural boss in every situation. According to the Tarot, you are the hierophant. When you marry another number 5 there is way too much chaos. You are not fit to work with people. Instead, you are a born leader and head. You are not meant to take orders and dislike it from your very core.</Text>
      <Text style={styles.para}>If you are not meeting your career goals the problem is either the other number in ur dob or LPN ( life path number ) or a malefic name.</Text>
      <Text style={styles.para}>Number 5 people are extremely lucky when it comes to career success and money. They have it in their número personality to be successful unlike a number 4, 7 or 8.</Text>
      <Text style={styles.para}>They are very good at solving people’s problems and giving advice. People turn to them for a problem and they are very good at it as well.</Text>
      <Text style={styles.para}>They make good administrators, teachers, counsellors, business consultants, and CEOs.</Text>
      <Text style={styles.para}>Number 5 people can adapt to change quickly and seek new experiences but this can also have a negative effect on your life and career prospects. Being impulsive is a weakness that you need to work on. Being monotonous or making commitments can be a strenuous task for a number 5.</Text>
      <Text style={styles.para}>Your tendency to change with the tide makes you more suited for careers that are profitable yet unpredictable. As a numerology 5 person, you are also a good orator, opening many other career opportunities for you.</Text>
      <Text style={styles.para}>While you love your independence, being in solitude is not something you take well to.</Text>
      <Text style={styles.para}>Number 5s thrive in social settings which will make building relationships easier. A numerology 5 individual seeks adventures and thrills which could cause relationships to fizzle out over time. Finding someone who shares the same interests can help keep relationships strong.</Text>
      <Text style={styles.para}>Number 5 individuals love their freedom and cannot be shackled. If you are married to a number 5, be prepared to be bossed around by them…</Text>
      <Text style={styles.para}>The energy of a number 5 is powerful but only needs to be channelled In the right direction.</Text>
      <Text style={styles.para}>Being ambitious and inquisitive can take you far but also make you seem inaccurate and inconsistent. Balancing your weaknesses can help improve your circumstances.</Text>
      <Text style={styles.para}>If you have the number 5 in your numerology charts and yearn to know more, a consultation with Sheelaa M Bajaj can help. Get in touch with us to book a consultation.</Text>
      </>
     )}
      <Text style={styles.title} onPress={PositiveTraitstoggleParaVisibility}>Positive Traits</Text>
      {isPositiveTraitsParaVisible && (
        <>
      <Text style={styles.para}>•	Body, sensuality, conflict, the five senses, fingers and toes, able to learn and teach from direct experience, health, expansion, fecundity, grounded in the world, challenges faced in learning from experience, freedom-loving, action and activity, influence, adventurer, sensualist, promoter, natural flair, vivacious, courageous, healthy, sympathetic, motivational, change, idealistic, unconventional, curiosity, magnetic, intellectual, telepathic, experience, pleasure-loving, vitality, visionary, expansion, opportunity, story-telling, imagination, individualism, healing, choice, mercy, kindness, invention, resourceful, magnetic, competitive, the adventurer, passionate, responsive, quick to grasp and learn, sympathetic, great traveller and/or explorer.</Text>
      <Text style={styles.para}>•	A person with the number 5 name energy is the thinker and the observer. They are clever, versatile, analytical and a very quick thinker and no one pulls the wool over your eyes! You have the ability to do so many things well and with the influences of the number 5 Name energy you are highly flexible and well equipped to making and accepting change. With the 5 energy you always seek excitement and are sometimes a bit of a risk-taker. You are imaginative, and often, through your unconventional way of thinking, are naturally able to solve complex problems with ease.</Text>
      </>
      )}
      <Text style={styles.title} onPress={NegativeTraitstoggleParaVisibility}>Negative  Traits</Text>
      {isNegativeTraitsParaVisible && (
        <>
      <Text style={styles.para}>•	Rash, irresponsible, dislikes confinement and routine, inconsistent, unreliable, thoughtless, restless, non-committal, inactivity, stagnation, fear of change, rigid in thought, lacks vitality, fickle, endlessly distracted.</Text>
      <Text style={styles.para}>•	Too much of the 5 personality could bring out the tendency to become restless and impatient, which may make you inconsistent and unable to stay focused on any one direction or project for too long. You may have the tendency to become overly-sensitive to boundaries that you may feel are being place upon or around you. This could be displayed more noticeably if you sense that your freedom of speech or action is being thwarted or restricted</Text>
      </>
      )} 
      <Text style={styles.title} onPress={CharactertoggleParaVisibility}>Character</Text>
      {isCharacterParaVisible && (
        <>
      <Text style={styles.para}>The adventurer, courageous, passionate, responsive, quick to grasp and learn, sympathetic, great traveller and/or explorer.</Text>
      </>
      )}
      <Text style={styles.title} onPress={RelationshipstoggleParaVisibility}>Relationships</Text>
      {isRelationshipsParaVisible && (
        <>
      <Text style={styles.para}>•	In relationships, people with a 5 Life Path or Destiny need to have plenty of personal space and room to move, for without their personal freedom they become restless and irritable.</Text>
      <Text style={styles.para}>•	Number 5s are likely to have many relationships and experiencing a series of broken relationships is often a part of their path. They are adventurous in the area of romance and want to have a wide variety of experiences and their easy-going natures and genuine interest in people means that they will never be short of admirers. Number 5s find most people attractive and interesting and so will take up many of the offers.</Text>
      <Text style={styles.para}>•	Number 5s are naturally wary of commitment and responsibility and will be reluctant to settle down. They will not give their partners false hope, however, and they will not make promises that they do not intend to keep. The partner of a number 5 Destiny will know where he or she stands. If Number 5s declare their love for their partners then this will be an indication that they are serious and wish to make a commitment.</Text>
      <Text style={styles.para}>•	If Life Path Number 5s experience difficulties in their relationships they will be likely to avoid the problem/s and may look for solace elsewhere. However, number 5s will find no pleasure from infidelities as the problems that they were trying to run away from will still exist and they will have introduced new difficulties to the situation. Honesty and openness can strengthen a relationship and avoid future difficulties.</Text>
      <Text style={styles.para}>•	Number 5s are loving and caring and partners can be sure that life will never be dull with a number 5 in their lives. Once a common understanding has been achieved, relationships between Number 5s and their partners will generally be harmonious.</Text>
      </>
      )}
      <Text style={styles.title} onPress={ParenthoodtoggleParaVisibility}>Parenthood</Text>
      {isParenthoodParaVisible && (
      <Text style={styles.para}>Number 5s are committed to being good parents and will give their children all the support and encouragement that they need. As parents, Destiny Number 5s are aware of the importance of allowing their children space and respect to choose their own directions. Number 5s and their children will generally enjoy relationships based upon mutual respect.</Text>
      )}
      <Text style={styles.title} onPress={HometoggleParaVisibility}>Home and Leisure</Text>
      {isHomeParaVisible && (
        <>
      <Text style={styles.para}>•	Number 5s have a wide diversity of interests and will spend their leisure time expanding their knowledge and experiences. They are keen to learn about alternative lifestyles and have an interest in politics but lack the commitment to become fully involved in either. They spend a great deal of time dipping into books, watching films, documentaries and discussing what they have learned with friends and peers.</Text>
      <Text style={styles.para}>•	Number 5s will accept invitations to gatherings where they will be able to get into discussions with other people and their love of conversation means that they will not want to go to noisy nightclubs.</Text>
      <Text style={styles.para}>•	Travel is a common interest for Life Path Number 5s and they will frequently plan their next adventures on their way home from their most recent journeys. Travel for number 5s should be an opportunity to expand their knowledge of other cultures, and package holidays will leave them cold. More exotic destinations are likely to appeal to Number 5s or, if finances do not allow this, they will want to go somewhere away from the usual tourist resorts closer to home.</Text>
      <Text style={styles.para}>•	Home could be anywhere to Destiny Number 5s, and they are able to put down roots and feel comfortable wherever they find themselves. Number 5s will not spend their time creating the perfect home because they could easily pack up and move on at a moment’s notice.</Text>
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
        <Text style={styles.listContent}>Wednesday</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Stone:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Emerald</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Colour:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Green</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Friendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>1, 3, 5</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Unfriendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>4, 8</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Relationship:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>1, 3</Text>
      </View>
    </View>
    <Text style={styles.para}>Numerology views the number 5 as a symbol of adventure, versatility, and change. People with this number often lead exciting and varied lives, seeking constant growth and new experiences. They bring a sense of dynamism and positivity to their interactions and have a natural ability to inspire and engage others.</Text>
    </View>
    </>
      )}
      <Text style={styles.title} onPress={CareertoggleParaVisibility}>Career</Text>
      {isCareerParaVisible && (
        <>
      <Text style={styles.para}>•	Careers are not all that important to Number 5s and they view work and employment as merely a means to an end to fund their lifestyle and allow them the money to travel. Number 5s do not like responsibility and will not feel a sense of commitment to their employers. They need freedom in their lives and find the routine structure of work a bind. Number 5s are disinclined to tackle any difficulties in their workplace and if they are unhappy they will simply move on.</Text>
      <Text style={styles.para}>•	Number 5s do best when they have careers that incorporate their interests and talents. Careers in the travel business have an obvious attraction, and number 5s flourish as travel agents and holiday representatives. Occupations that allow number 5s to make the most of their communication skills are equally suitable, and they can become accomplished teachers and lecturers.</Text>
      <Text style={styles.para}>•	People born with the Destiny Number 5 will probably change careers many times, especially in their twenties and thirties. Later in life Destiny Number 5s are more likely to feel able to settle down to one career once they have explored many of their interests.</Text>
      <Text style={styles.para}>•	Freedom is of the utmost importance to the 5 Life Path person, and they enjoy being self-employed.</Text>
      </>
      )}
      </View>
    </ScrollView>
  )
}
 const styles= StyleSheet.create({
    container: {
        flexGrow: 1,
        // alignItems: 'center',
        width: '90%',
        // borderColor: 'orange',
        // borderWidth: 2,
        // borderRadius: 10,
        padding: 10,
        marginTop:10
      },
      subcontainer:{
        borderColor:'green',
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
         backgroundColor:'green',
         color:'white',
         marginBottom:10
        //  borderColor:'black',
        //  borderWidth:1
        
      },
      para:{
        fontSize: 20,
          marginBottom: 7,
      },
      image: {
        width: 230,
        height: 200,
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
export default Number5