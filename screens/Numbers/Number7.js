import { View, Text, Image, ScrollView, StyleSheet  } from 'react-native'
import React,{useState} from 'react';

const Number7 = () => {
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
      <Text style={styles.heading}>Number 7</Text>
      <Text style={styles.title} onPress={BasicInfotoggleParaVisibility}>Basic Info</Text>
      {isBasicInfoParaVisible && (
        <>
      <Text style={styles.para}>The Great Father of mathematics and numerology, Pythagoras considered Seven as a highly spiritual number.
        It is shaped like a shepherd’s crook, the number 7 symbolically represents the flow of the kundalini from the bottom of the spine
        to the third eye in the centre of the forehead between the eyes. The third eye is known in mystical circles as Tisra Til or the 
        Tenth Gate. It is the secret doorway leading to the inner worlds.</Text>
    
      <Text style={styles.subtitle}>Unique Traits of Number 7 in Numerology</Text>
      <Text style={styles.para}>People born on 7, 16, 25 of any month or if the sum total of their Date of Birth reduces seven is deep, introspective, intuitive, private, reclusive, secret, separate, distant, and indifferent to the outer world of phenomena but not to the inner worlds of secrecy, intrigue, hidden mysteries. Seven is highly analytical, inquisitive, perfection-seeking, often critical. It asks why and travels within to find out. Those who desire to know the inner secrets of life, the cosmos and the universe have seven highly active in their vibration matrix.</Text>
      <Text style={styles.para}>The Seven vibrations in its spiritual frequency are sensitive, refined, reserved, stately, quiet, humble, calm, tranquil, serene, pure, and chaste. The way to spiritual insight is through the Seven for it is patient, mystical, wise and, ultimately, self-realized. Seven turns away from the outer world of phenomena and commercialism and, through meditation and prayer, directs itself to the inner regions of mystical light to find Him–often painfully but never regretfully.</Text>
      <View style={{alignItems:'center'}}>
      <Image
        source={require('../assets/seven.png')}
        style={styles.image}
      /></View>
      <Text style={styles.para}>The number seven symbolizes humanity’s deep inner need to find depth, meaning, and spiritual connection. When the creature needs food, self-expression, material and domestic achievements have been met, we turn to the deeper levels of life — to learn, to educate ourselves and to find purpose. They are an investigator, an inventor, and must have solitude in which to find the inner voice. Sevens tend to be different, eccentric, or loners and are very discriminating in all areas.</Text>
      <Text style={styles.subtitle}>Numerology Number 7 in Tarot</Text>
      <Text style={styles.para}>The number 7 in tarot is associated with the Chariot. This card symbolises willpower and determination by bringing in discipline. The 7 card also represents a journey, physical and metaphoric. In tarot, the Chariot signified a need to bring in a balance where there are opposing desires so that the path to success is not obstructed by clashing needs.</Text>
      <Text style={styles.para}>The 7 of cups in tarot symbolises daydreams, choices, and illusions or the need to bring in clarity.</Text>
      <Text style={styles.subtitle}>Numerology Number 7 in Astrology</Text>
      <Text style={styles.para}>The number 7 in astrology refers to the 7th astrological house, which is associated with relationships, partnerships, and marriage and is ruled by Libra. & is also associated with Neptune due to its mystical matter. The seven phases of the moon is also often associated with the number 7 in certain astrological systems.</Text>
      <Text style={styles.subtitle}>Number 7 is ruled by Ketu.</Text>
      <Text style={styles.para}>In Vedic Numerology, relates to the south node of moonie. Ketu. It is generally referred to as a “shadow” planet. Ketu is considered malefic and has been mostly associated with negative things. Most people consider it a difficult planet as it brings a lot of troubles on the material plane. It often brings a sense of detachment, losses, mindlessness, wandering, and confusion in one’s life.</Text>
      </>
      )}
      <Text style={styles.title} onPress={PositiveTraitstoggleParaVisibility}>Positive Traits</Text>
       {isPositiveTraitsParaVisible && (
        <>
       
      <Text style={styles.para}>•	People born with 7 as their Destiny or Life Path Number are sensitive and compassionate. They have a natural wisdom and ability to see to the truth of matters. </Text>
      <Text style={styles.para}>•	Specialist, inventor, loner, eccentric, thoughtful, spiritual, psychic, natural healer, inner-strength, quick-witted, wise, discerning, understanding of others, philosophical, endurance, deep contemplation, solitary, independent, mystic, psychic, keen mind, determination, individualist, knowledge-seeking, non-conformist, persistence of purpose, perfection, the analyst, thinker, science, learning, education, study, the written word, logic, alchemy, secrets, myth, religion, ritual, understanding, knowledge, isolation, chastity, dignity, the ‘Collective Consciousness’, genius.</Text>
      <Text style={styles.para}>•	The 7 energy feels the need to investigate all things themselves so that they are able to come to their own decisions and value systems. They are the thinker, the dreamer and philosopher who can leave the world behind and go into the world of creative imagination. They search for their own belief system.</Text>
      <Text style={styles.para}>•	The mental ability and sensitivity of the 7 person gives them the opportunity to develop their intuitive, clairvoyant and psychic gifts. The 7 is aware of the spiritual side of life and knows that without turning into their inner resources, their outer world is not at peace. The deeper they delve, the more they learn to trust their intuition and to have faith and trust, the more they will reach the higher levels of their wisdom.</Text>
      <Text style={styles.para}>•	Once people get to know a Number 7 they will find an exceptional person who is able to offer warmth, sympathy and understanding. Number 7s take their time to consider problems and weigh up the pros and cons of any given situation before coming to their conclusion. Number 7 Destiny people are adaptable and adjust easily to change. This tends to be because they are generally happy within themselves.</Text>
      <Text style={styles.para}>•	The Destiny of 7 is to use the mind on the mystical side of life and to develop the wisdom of the spiritual aspects of life. 7s are never satisfied until they can link the known with the unknown and this leads to a great deal of investigation, research and analysis.</Text>
      <Text style={styles.para}>•	The Number 7 transcends the barriers of time and space and brings you in touch with the world of the mystic and clairvoyant. On a lower plane of manifestation, it gives a confused sense of timing and a dislike of restrictions.</Text>
      <Text style={styles.para}>•	Your challenge is to overcome your obstacles, particularly bad relationship experiences.</Text>
      <Text style={styles.para}>•	Your purpose is to experience spiritual growth.</Text>
      </>
       )} 
      <Text style={styles.title} onPress={NegativeTraitstoggleParaVisibility}>Negative Traits</Text>
      {isNegativeTraitsParaVisible && (
        <> 
      <Text style={styles.para}>•	Negatively, the vibrations of the number 7 are morbidity and depression, inactivity, pessimistic, dependency and co-dependency, stagnation, lack of persistence, pride, narrow-mindedness, distance, arguments and being argumentative, misanthropic, resentment and being resentful, self-righteousness, unwilling and/or unable to share ideas and compromise, limitations and silence, morbidity, hypercritical, inactive, anti-social, silent, dependency, depression, stagnant, lack of persistence, pride, narrowness, distance, rigidity, argumentative, temper, morbid, misanthropic, unwilling and/or unable to share ideas</Text>
      <Text style={styles.para}>•	7 is a magical vibration and is the number of the occultist and the esoteric. 7s are secretive, mysterious, stand-offish, intuitive and introspective. An unworldly attitude means most 7s need to be protected. The 7 vibration represents rest, contemplation, spirituality, sensitivity, sympathy and mastery. 7 is a number of the mind. </Text>
      <Text style={styles.para}>•	The 7 energy has very strong psychic tendencies and are natural healers with a core of inner-strength. 7 is the sacred spiritual number - the energy of the mystics. They are known to be quick-witted, sometimes with a dry sense of humor.</Text>
      <Text style={styles.para}>•	Number 7 is considered a masculine energy as well as an introvert. The related planet is Mercury and it is related to the star sign Libra. The associated Tarot card is The Chariot.</Text>
      <Text style={styles.para}>•	The 7 vibration represents a special function of human life and indicates the amount of learning one must amass in the form of personal experiences known as sacrifices. </Text>
      <Text style={styles.para}>•	The first cycle of 7 deals with the physical process</Text>
      <Text style={styles.para}>•	The second cycle from ages 7 to 14 is marked by the development of feelings and emotions. </Text>
      <Text style={styles.para}>•	The third cycle from ages 14 to 21 focuses on the spiritual energy. This is with the light of spirit begins to dawn into a maturing consciousness.</Text>
      <Text style={styles.para}>•	The number 7 symbolizes humanitys deep inner-need to find depth, meaning and spiritual connection. When the needs of food, self-expression, material and domestic achievements have been met, the 7 energy turns to the deeper levels of life - to learn, to educate ourselves and to find purpose. The 7 vibration must continue studying the quest of why they are here. 7 asks the bigger questions.</Text>
      <Text style={styles.para}>•	Number 7s often lack confidence in their abilities and do not like to draw attention to themselves, and as a result their talents often go unnoticed. As a result of their lack of confidence many number 7s find it difficult to communicate effectively with other people and can come across as being vague.</Text>
      <Text style={styles.para}>•	There is a tendency for number 7s to be dreamers as they spend so much of their time immersed in their own thoughts. They should be wary of becoming cut off from the outside world and should make the effort to socialize with their friends.</Text>
      <Text style={styles.para}>•	A sign that a number 7 has strayed completely off of his or her life path is a complete withdrawal from society.</Text>
      </>
      )}
      <Text style={styles.title} onPress={CharactertoggleParaVisibility}>Character</Text>
      {isCharacterParaVisible && (
        <Text style={styles.para}>Individuals with the number 7 in their numerology chart are often seen as deep thinkers, introspective, and spiritually inclined. They value intellectual pursuits, seek to understand the mysteries of life, and may embrace a holistic view of the world. Their independent and intuitive nature often sets them apart, making them enigmatic and thought-provoking individuals.</Text>
      )}

      <Text style={styles.title} onPress={RelationshipstoggleParaVisibility}>Relationships</Text>
      {isRelationshipsParaVisible && (
        <>
      <Text style={styles.para}>•	Number 7 people are extremely romantic and fall head over heels in love easily. They have a tendency to declare their undying love in the very early stages of a relationship, and this can be off-putting for the object of their affections who may feel that things are moving too fast for them. Number 7s should try to keep their emotions in check and allow relationships to grow at a more sedate pace. This approach is more likely to allow number 7s to discover if what they are experiencing is love or is in fact a brief infatuation.</Text>
      <Text style={styles.para}>•	Number 7s are demonstrative in their affection and frequently express their love and devotion to their partners. Number 7s will need to be reassured and have their declarations reciprocated from time to time or they will become insecure and begin to doubt their partner’s love. In this situation number 7s should be honest about how they are feeling and let their partners know that they need to be appreciated.</Text>
      <Text style={styles.para}>•	The people who are most likely to be attracted to number 7s are those who find it difficult to express their emotions and feel that their inability can be compensated for by the more than plentiful abilities of 7. This generally is a good balance, but can lead to problems.</Text>
      <Text style={styles.para}>•	Number 7s often choose partners who are less dreamy than themselves, and are more gifted in practical matters, and again, this is a good balance.</Text>
      <Text style={styles.para}>•	Within the marriage or long-term relationship areas of life, 7s need a partner who is understanding, open-minded, supportive and self-aware. 7s can be whimsical, mystical, philosophical and prophetic at times, so a suitable partner would be someone who can relate to 7s worldly and spiritual views, beliefs and perspectives. They would also need to be good listeners and be willing to take on extra responsibilities and tasks that the 7 person may have overlooked or forgotten.</Text>
      <Text style={styles.para}>•	7s love deeply and generally seek to see the best in people … to seek out their inner-light.</Text>
      <Text style={styles.para}>•	As 7s can be quite colourful, eccentric and reclusive at times, an ideal partner would be someone who is happy to go along with their flights of fancy or who are prepared and will for their partners to indulge in their esoteric interests and adventures whilst they pursue other aspirations.</Text>
      <Text style={styles.para}>•	Those influenced by number 7 can sometimes seem aloof, uncaring, selfish and/or preoccupied with their own interests and ideals, and can get caught up in things that intrigue them, unable to grasp why everyone else isn’t as in awe as they are. Their ideal partner may be one who is happy to just nod and smile then leave them to their own devices.</Text>
      <Text style={styles.para}>•	Within a love relationship, an ideal partner for the 7 energy is someone who is interesting, intelligent, intriguing and analytical as 7s love learning new things and bouncing new ideas and theories with others. They are open to others’ opinions, but are inclined to pursue their own line of ideology.</Text>
      <Text style={styles.para}>•	7s sometimes find personal relationships hard to maintain as intimacy can be difficult. </Text>
      </>
      )}
      <Text style={styles.title} onPress={ParenthoodtoggleParaVisibility}>Parenthood</Text>
      {isParenthoodParaVisible && (
        <>
      <Text style={styles.para}>•	Number 7s approach the duties of parenthood very seriously and are committed parents, and the necessity for commitment can make them take a more realistic approach to life. As parents, number 7s will do whatever is necessary to provide their children with what they need, but do this without over-indulging or spoiling their children. Number 7 parents have very strong affection for their children and they will be likely to have a close relationship with them throughout their lives. </Text>
      <Text style={styles.para}>•	The children of number 7 parents will appreciate the love and devotion that they receive and will usually choose to spend a great deal of time at the family home.</Text>
      </>
      )}
      <Text style={styles.title} onPress={HometoggleParaVisibility}>Home and Leisure</Text>
      {isHomeParaVisible && (
        <>
      <Text style={styles.para}>•	Number 7s enjoy outdoor pursuits such as mountain climbing as they love to see dramatic landscapes and enjoy the freedom from the harsh realities of their everyday lives. Sports in general have an attraction for number 7s and they enjoy escaping into the tactics and strategies required by many sports.</Text>
      <Text style={styles.para}>•	Number 7s are also frequently enthusiastic readers, enjoying all types of literature. Number 7s find books that give an insight into human nature to be particularly appealing and they will often be found reading non-fiction, history and autobiographies.</Text>
      <Text style={styles.para}>•	The homes of 7s will reflect their desire for harmony and peace. The furnishings and décor will be soothing and calming but not luxurious or extravagant. Number 7s will spend a lot of time relaxing in their homes and it is an important place for them.</Text>
      <Text style={styles.para}>•	Socializing is not a regular pastime of Number 7s. They can find the effort to communicate quite stressful and may not find it easy to relax in large groups. Smaller social occasions with close friends are more likely to appeal, but even these will not be regular events.</Text>
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
        <Text style={styles.listContent}>Tuesday, Friday</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Stone:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Cat’s eye</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Colour:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}> Grey</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Friendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>3, 7, 9</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Unfriendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>1, 8</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Relationship:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>6, 9</Text>
      </View>
    </View>
    <Text style={styles.para}>Numerology views the number 7 as a symbol of intellectual depth, intuition, and spirituality. Individuals with this number often follow their inner calling, seeking to understand the mysteries of life and the universe. They are independent thinkers and problem solvers who value introspection and the pursuit of knowledge. Their unique perspective on the world can make them enigmatic and thought-provoking individuals.</Text>
    </View>
    </>
      )}
    <Text style={styles.title} onPress={CareertoggleParaVisibility}>Career</Text>
    {isCareerParaVisible && (
      <>
      <Text style={styles.para}>•	Intuitive, quick-witted and persuasive, you make a brilliant lawyer, comedian or debater. 7s intellectual and studious personalities often pursue advanced academic careers. As they love to absorb information they usually require a great deal of private time to cultivate their knowledge. These reserved and analytical deep-thinkers make great mathematicians, engineers, inventors, scientists and doctors.</Text>
      <Text style={styles.para}>•	Number 7s are not driven by ambition and have no desire for excessive material wealth. They are hard-working and committed individuals, but they must feel that their hard work benefits the world at large, and not just themselves. For this reason, number 7s are often found working in voluntary organizations and the caring professions. For some Number 7s their desire for escapism could be met by a career in the travel industry as the opportunity to visit far-off places, combined with ensuring that others enjoy their holiday, can be a very rewarding combination.</Text>
      <Text style={styles.para}>•	Honesty and independence are admirable qualities found in number 7s, but these can cause difficulties in some working environments. Number 7s will never let a dishonest act or an act that offends their sense of integrity go unchallenged. This can lead to number 7s challenging their employers and creating an unwanted scene. It is important for number 7s to accept that there are some professions that require a certain amount of flexibility and that they may not be suited to careers in such areas of work. If they do choose a career in one of these professions, number 7 will need to refrain from challenging their employers if they wish to succeed.</Text>
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
        borderColor: 'green',
        // borderWidth: 2,
        // borderRadius: 10,
        // padding: 10,
        marginTop:10
      },
      subcontainer:{
        borderColor:'brown',
        width:'100%',
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
      title1: {
        fontSize: 26,
        marginBottom:5,
        color:'blue'  
      },
      title: {
        textAlign:'center',
        fontSize:30,
         backgroundColor:'brown',
         color:'white',
         marginBottom:10
        //  borderColor:'black',
        //  borderWidth:1
        
      },
      subtitle: {
        fontSize: 24,
        marginBottom:5,
        color:'green'   
      },
      para:{
        fontSize: 20,
          marginBottom: 7,
      },
      para1:{
        fontSize: 20,
        marginBottom: 7,
        fontWeight:"bold",
      },
      image: {
        width: 230,
        height: 230,
        marginBottom: 7,
        marginTop: 7,
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
export default Number7