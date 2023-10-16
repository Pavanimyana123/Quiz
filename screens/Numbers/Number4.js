import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React,{useState} from 'react';

const Number4 = () => {
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
      <Text style={styles.heading}> Number 4</Text>
      <Text style={styles.title} onPress={BasicInfotoggleParaVisibility}>Basic Info</Text>
      {isBasicInfoParaVisible && (
        <>
      <Text style={styles.para}>The science of numbers, numerology has been studied, perfected, and used widely since ages. Everything in the universe has
        a numerical relevance, just like your date of birth. And with every alphabet in your name being associated with a number, 
        certain numbers are bound to have more impact and influence in your life.</Text>
      <Text style={styles.para}>Numerologists use the study of numbers to identify what numbers hold relevance in your life and shape your personality and
        future.</Text>
      <View style={{alignItems:'center'}}>
      <Image
        source={require('../assets/Number-4.png')}
        style={styles.image}
      />
      </View>
      <Text style={styles.para}>Number 4 numerology is also associated with stability and balance. Number 4 also represents the moon with
       its 4 phases and seasons, and the number of rivers flowing into paradise from the corners of the Earth. The number 4 is also
       significant of the 4 basic elements – fire, water, earth, and air.</Text>
      <Text  style={styles.para}>You are well informed, wise and have information on almost everything. You are well-spoken and have the
       gift of the gab. Number 4 controls intellect and therefore you have all that it takes to be successful. As a number 4, you tend to
        have firm opinions that do not follow that of the crowd. You are courageous and determined, being both traditionally-led and
        incorporating modern aspects of living. You are an innovator striving to improve the social strictures by encouraging practical
        thinking.</Text>
        </>
    )}
        <Text style={styles.title} onPress={PositiveTraitstoggleParaVisibility}>Positive Traits</Text>
        {isPositiveTraitsParaVisible && (
        <Text style={styles.para}>Number 4s are hard-working, loyal and ambitious and have a great deal of common sense and a practical approach to life. Number 4 Destiny/Life Path people are careful and unlikely to make a decision without giving the matter a great deal of thought. Once number 4s have reached a decision they will be determined on their decided course of action and will follow through. </Text>
        )} 
        <Text style={styles.title} onPress={NegativeTraitstoggleParaVisibility}>Negative Traits</Text>
        {isNegativeTraitsParaVisible &&( 
        <Text style={styles.para}>Number 4s are very traditional and find and challenges to the status quo difficult to accept. They find it hard to disguise their disapproval of flighty and superficial people or of people living alternative lifestyles. Number 4s have a distrust of the unknown and are far more comfortable with things within their ken (understanding /traditions /beliefs /values). This can lead to intolerance of other people who choose to follow a different path. Number 4s should try to be more open to change and accept others for what they are.</Text>
        )}
        <Text style={styles.title} onPress={CharactertoggleParaVisibility}>Character</Text>
        {isCharacterParaVisible &&( 
        <Text style={styles.para}>Individuals with the number 4 in their numerology chart are often seen as stable, dependable, and practical. They are valued for their ability to manage tasks and projects effectively and are known for their strong sense of responsibility. Their loyalty, trustworthiness, and traditional values contribute to their reputation as dependable friends and individuals.</Text>
        )}
        <Text style={styles.title} onPress={RelationshipstoggleParaVisibility}>Relationships</Text>
        {isRelationshipsParaVisible &&(
        <Text style={styles.para}>Number 4s approach love and relationships seriously and they are unlikely to play the field. Long-term commitment is likely to be the priority for number 4s, and other people will be attracted by the stability and security offered by them, and in turn number 4s will be attracted to vulnerable people who need more control and stability in their lives. Generally, number 4s are loving, considerate and caring partners and they will be protective of their chosen partners and will be faithful and dependable.</Text>
        )}
        <Text style={styles.title} onPress={ParenthoodtoggleParaVisibility}>Parenthood</Text>
        {isParenthoodParaVisible &&(
        <Text style={styles.para}>Number 4 parents care a great deal about their children and want the best for them. Family traditions are important to number 4s, and they will want their children to be involved in family activities. Difficulties may arise as their children become teenagers and want to explore the alternative options that life has to offer. Number 4 parents want the best for their children and will believe that they know what the right course of action. It is important that as parents, they accept their children's right to make independent decisions whatever they may be.</Text>
        )}
        <Text style={styles.title} onPress={HometoggleParaVisibility}>Home and Leisure</Text>
        {isHomeParaVisible &&(
        <Text style={styles.para}>Home is important to Number 4s. They can relax only in an organized and orderly environment and will go to great lengths to make their home and surrounds suitable. Number 4s will get satisfaction from housework, gardening and other pursuits with visual benefits. Spending time organizing and tidying is very therapeutic for number 4s and can be developed as a form of stress management.</Text>
        )}
        <Text style={styles.title} onPress={LuckyElementstoggleParaVisibility}>Lucky Elements</Text>
        {isLuckyElementsParaVisible &&(
    <View style={styles.listTable}>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Days:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Saturday</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Stone:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Blue Sapphire</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Colour:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Blue</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Friendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>2, 4, 8</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Unfriendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>5, 7</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Relationship:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>2, 6</Text>
      </View>
    </View>
    <Text style={styles.para}>Numerology views the number 4 as a symbol of stability, dependability, and practicality. Individuals with this number are often the reliable anchors in their families and social circles, providing a sense of security and structure to those around them.</Text>
    </View>
    )}
        <Text style={styles.title} onPress={CareertoggleParaVisibility}>Career</Text>
        {isCareerParaVisible &&(
          <>
        <Text style={styles.para}>•	Number 4s are very career-minded and are highly ambitious in this area. They are focused upon success and will let nothing stand in the way of achieving it. In return for hard work and loyalty number 4s will expect appreciation and recognition, but if number 4s feel that their efforts are not being acknowledged they can become ill-tempered and frustrated. They can be insensitive towards the feelings of others who may get in their way.</Text>
        <Text style={styles.para}>•	Number 4s will be happiest in a smaller firm where their loyalty and determination is more likely to be noticed and rewarded. If number 4s feel that they are working together towards a common goal they will be able to focus their determination towards the benefit of the company. </Text>
        <Text style={styles.para}>•	Number 4s are often successful at setting up their own businesses. As their own bosses they are able to be clear about the focus of their efforts and will be able to measure the extent of their success. As bosses, number 4s are fair and reasonable leaders as they have the unusual gift of being able to learn from their mistakes and recognizing that they may have been in the wrong, which is invaluable as an employer.</Text>
        
        {/* <Text style={styles.title}>Number 4 stands for the planet Rahu.</Text>
        <Text style={styles.para}>Number 4s can have conflicting opinions while being rooted in tradition.You are gentle, loving and soft. You will always attract secret enemies and people who will tend to spoil your name. All your good efforts turn completely futile and you get back negative for all the good you give.</Text>
        <Text style={styles.para}>Even when you help people with a genuine concern you will attract a bad name. You go out of your way to help others and do it from genuine concern but never get back anything for all your love and affection. When you loan people money to help them with their problems they never return it back to you. On the contrary, you get blamed, a bad name or some false allegation.</Text>
        <Text style={styles.para}>In Relationships, you give too much and never get love in return.  Number 4’s have unfulfilling marriages unless they marry another number 4. They need to combat the energy of Rahu from their constant failure hurt and dejection pattern.</Text>
        <Text style={styles.para}>You are very emotional and too soft as a person and easily hurt. It is not easy for you to make money. You struggle with your earnings. It takes you a lot more effort to achieve positive results with your career because of the number 4 influence. While you are great at analysing numbers and jobs that require dealing in numbers such as that of an accountant, business administrative, etc., your lack of street smarts keeps you from making quick money. However, you are hard-working and skilled enough to live a comfortable life.</Text>
        <Text style={styles.para}>Name correction is mandatory for a number 4 to negate its weak nature. Name numbers are given in 1, 5 and 6 depending on the life path number.</Text>
        <Text style={styles.para}>Planet Venus is your only hope. A numerology remedy for increasing venus and negating Rahu is given to Number 4s and a Victory Name Correction is prescribed.</Text>
        <Text style={styles.para}>As someone influenced by number 4 numerology, you have a number of strengths and weaknesses that you are unaware of. These are better identified with the help of a trusted numerologist to guide you. A consultation for numerology 4 with Sheelaa M Bajaj will give you more insights into your life that are personal to your life and circumstances. You can choose to have your sessions online or schedule a face-to-face appointment by contacting us and sending in your query.</Text>
         */}
         </>
         )}
        </View>
        </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        // alignItems: 'center',
        width: '90%',
        // borderColor: 'green',
        // borderWidth: 2,
        // borderRadius: 10,
        padding: 10,
        marginTop:10
      },
      subcontainer:{
        borderColor:'grey',
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
         backgroundColor:'grey',
         color:'black',
         marginBottom:10
        //  borderColor:'black',
        //  borderWidth:1
        
      },
      title1: {
        fontSize: 26,
        marginBottom:5,
        color:'blue'  
      },
      para:{
        fontSize: 20,
          marginBottom: 7,
      },
      image: {
        width: 200,
        height: 200,
        marginBottom:10
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

export default Number4