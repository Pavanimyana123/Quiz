import { View, Text, Image, StyleSheet, ScrollView  } from 'react-native'
import React,{useState} from 'react';

const Number3 = () => {
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
          <Text style={styles.heading}>Number 3 </Text>
          <Text style={styles.title} onPress={BasicInfotoggleParaVisibility}>Basic Info</Text>
          {isBasicInfoParaVisible && (
            <>
          <Text style={styles.para}>In numerology, 3 symbolises all the things that come in threes – the past, present, and future; the
           mind, body, and soul; the beginning, the middle, and the end; and so on. Many consider 3 as unlucky because death comes in
           threes. But 3 can be equally magical and good. Believe it or not, according to the Chinese Confucian philosopher, Mencius, the
           best things in life also come in threes!
          </Text>
          <Text style={styles.para}>Number 3 represents Jupiter or guru. He is the big boss of all the devas, career luck, and prosperity.
           Jupiter rules No. 3. He signifies Knowledge, Wisdom, Selflessness, Service, and Sacrifice.</Text>
          <Text style={styles.para}>No. 3 makes you intelligent, hard-working, diligent and honest. You tend to obey your superiors and
           give a lot of importance to the discipline. You are tough on the outside and soft-hearted on the inside. You help others without
            expecting anything in return. You are either full of confidence and attain heights in your career or swing on the opposite side
            where you listen to everyone, get appreciation but never get recognition. A number 3 always needs to see what number it has as a
            life number and get a suitable name to enhance its positives and not become the weak submissive doormat.</Text>
          <View style={{alignItems:'center'}}>
          <Image
            source={require('../assets/Number-3.png')}
            style={styles.image}
           />
           </View>
          <Text style={styles.para}>Numerology 3s also have a hard time focusing. You have a great deal of enthusiasm that makes you 
            want to direct your attention everywhere at once. Susceptivity to poor life choices is also something that is often seen in
            people with numerology 3.</Text>
          <Text style={styles.para}>You are social and artistic but also scatter-brained and naive. But you do have a tendency to live
           life to the fullest.</Text>
          <Text style={styles.para}>Your name numerology and soul number can equally influence your life, which makes it essential for
           you to know the numbers that rule your life. While you can calculate your life path numbers and find out what it means for you,
           only a good numerologist can help you know how other numbers in tandem really shape your life. A numerology consultation can help
           if your name is an ideal one for your future and success and help you turn your life around for the better.</Text>
       </>
    )}
           <Text style={styles.title} onPress={PositiveTraitstoggleParaVisibility}>Positive Traits</Text>
           {isPositiveTraitsParaVisible && (
            <>
           <Text style={styles.para}>•	Number 3s are charming people with a child-like quality of innocence. They have a good sense of humour and a real interest in other people, which makes them very popular. Number 3s have a special talent for interacting with other people, and they enjoy talking to others and making them laugh.</Text>
           <Text style={styles.para}>•	Number 3s are naturally optimistic and tend to enjoy life to the full. They are able to cope with life’s ups and downs and will not be disheartened for long by any setbacks.</Text>
           <Text style={styles.para}>•	The 3 Destiny person's challenge is to channel their energies and not squander their talents.</Text>
           <Text style={styles.para}>•	Their purpose is to use self-discipline to overcome setback, and achieve creative success. The number 3 Life Path is one that is characterized by beauty, excitement, eccentricity and fame.</Text>
           </>
    )}
           <Text style={styles.title} onPress={NegativeTraitstoggleParaVisibility}>Negative Traits</Text>
           {isNegativeTraitsParaVisible && (
            <>
           <Text style={styles.para}>•	A fondness for the limelight can be a fault found in Number 3s. Others can resent the show-off side of the Number 3 character and become resentful. Number 3s are likely to be oblivious to any resentment - they are frequently social butterflies and will move from one social gathering to another with ease, but without getting to know the other people.</Text>
           <Text style={styles.para}>•	Naivety is another aspect of the Number 3s character that can work against people born with this numbers. Number 3s can often be fooled by people who appear to be genuine friends, but who really mean them harm. Number 3s should be wary of accepting people on face value and should try to see behind people’s facades.</Text>
           <Text style={styles.para}>•	Number 3s stray off their life path by giving up their dreams and talents. Many escapes into drug abuse or promiscuity to avoid hearing the nagging voice of their true calling to express their talents. </Text>
           </>
    )}
           <Text style={styles.title} onPress={CharactertoggleParaVisibility}>Character</Text>
           {isCharacterParaVisible && (
           <Text style={styles.para}>Frank, forceful, motivates others.</Text>
           )}
           <Text style={styles.title} onPress={RelationshipstoggleParaVisibility}>Relationships</Text>
           {isRelationshipsParaVisible && (
            <>
           <Text style={styles.para}>•	Destiny Number 3s have high expectations for their partners. Their ideal partners are exceptionally attractive and are individuals who stand out from the crowd. Relationships to Number 3s are very romantic affairs filled with poetry and flowers.</Text>
           <Text style={styles.para}>•	It is not surprising that a Number 3 Destiny person is often disappointed once they settle down into a relationship and find themselves discussing whose turn it is to do the dishes. Number 3s need excitement and romance and if faced with domestic drudgery, may look elsewhere for excitement.</Text>
           <Text style={styles.para}>•	Number 3s are naturally flirtatious people and they will find that they have a great many admirers.</Text>
           <Text style={styles.para}>•	Finding a partner will not be difficult for Number 3s, but they should choose people with similar interests if they are hoping for a long-term commitment. For a lasting relationship, Number 3s need to find someone who shares their fondness for socializing and romance.</Text>
           </>
    )}
           <Text style={styles.title} onPress={ParenthoodtoggleParaVisibility}>Parenthood</Text>
           {isParenthoodParaVisible && (
            <>
           <Text style={styles.para}>•	Number 3s are fun-loving parents. They view their children as equals and will enjoy sharing new experiences together. Number 3 parents will spend a lot of time talking to their children, discussing the exciting events of the day. As parents, Number 3s will encourage their children to be sociable and will put on extravagant parties for their children and their friends.</Text>
           <Text style={styles.para}>•	Number 3 parents should not allow their children to take second place to their social lives, which can be a danger once the novelty of parenthood begins to wear off. Number 3 parents should be there to help to help their children through any difficult patches.</Text>
           </>
    )}
           <Text style={styles.title} onPress={HometoggleParaVisibility}>Home and Leisure</Text>
           {isHomeParaVisible && (
            <>
           <Text style={styles.para}>•	To Number 3 Destiny people the home should be a place that is welcoming to other people and a place where social events can happen. Number 3s will furnish their homes in a haphazard way, with different styles and designs in one room. They have a natural flair, though, and the result tends to be successful.</Text>
           <Text style={styles.para}>•	Number 3s live for socializing - they like nothing better than getting ready to go out to a good party. They are often well known in the local eating and drinking establishments where they will be regular visitors. Number 3s will often be found to be involved in local activities such as coffee mornings and jumble sales where they can meet up with their neighbours. Number 3s will rarely spend time on their own and do not like solitary activities.</Text>
           <Text style={styles.para}>•	Number 3s enjoy team sports that allow them the opportunity to bond with their team-mates. Individual sports generally hold no interest for Number 3s.</Text>
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
        <Text style={styles.listContent}>Thursday</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Stone:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Yellow Topaz</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Colour:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Yellow</Text>
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
        <Text style={styles.listContent}>4, 7</Text>
      </View>
      </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Relationship:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>1, 5</Text>
      </View>
    </View>
    </View>
    <Text style={styles.para}>Number 3 individuals serve as a source of inspiration and motivation for others. Their creative endeavors and positive attitude inspire those around them, and they are known for their ability to express a wide range of emotions, making them compassionate and empathetic. Their dynamic and energetic nature brings vitality and liveliness to their endeavors, making them skilled at multitasking.</Text>
    </>
    )}
           <Text style={styles.title} onPress={CareertoggleParaVisibility}>Career</Text>
           {isCareerParaVisible && (
            <>
           <Text style={styles.para}>•	Number 3s will nearly always be found in careers that involve working with people. Their flair for communication often results in them finding employment as sales representatives, teachers or public relations officers.</Text>
           <Text style={styles.para}>•	Number 3s often have a flair for the written word and are often successful writers.</Text>
           <Text style={styles.para}>•	They are all about performance! The 3 Destiny person is popular and excels in self-expression and make for excellent entertainers of the world as most of them are truly gifted musicians, writers, actors, dancers, public speakers and politicians.</Text>
           <Text style={styles.para}>•	Number 3s should avoid work that does not involve social interaction or that requires regular nine to five attendance. Number 3s will not hold down a routine office job for this type of work.</Text>
           <Text style={styles.para}>•	Number 3s will probably have a variety of careers as they will not be likely to hold down one job for more than a few years. They will find that once they have adapted to one job they will begin to look to the future and gaining some new skill or experience. They will want to broaden their horizons whenever possible. They are unlikely to reach the top of their careers because they frequently change them. This will not dishearten Number 3s, however, as to them, new experiences and variety are far more important than success and material wealth.</Text>
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
      // borderColor: 'lightblue',
      // borderWidth: 2,
      // borderRadius: 10,
      padding: 10,
      marginTop:10
    },
    subcontainer:{
      borderColor:'black',
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
       backgroundColor:'yellow',
       color:'black',
       marginBottom:10
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

export default Number3