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
      <Text style={styles.heading}>Number 8 </Text>
      <Text style={styles.title} onPress={BasicInfotoggleParaVisibility}>Basic Info</Text>
      {isBasicInfoParaVisible && (
        <>
      <Text style={styles.para}>Those who are born on 8, 17 and 26 of any month or if their date of birth reduces to 8 are number 8 people.
       The nature of number 8 can be cold and dry. He is considered the greatest of fortune. The persons of this number are middle stature.
        Generally a narrow forehead, small eyes, thin beard, black and dark hair, broad chest and shoulders, often having poor legs. The
        temperament is bilious, nervous and slightly sluggish.</Text>
      <Text style={styles.para}>Number 8 people are invariably much misunderstood in their lives and for this reason, they feel intensely lonely at heart. They have a very deep and intense nature, a great role on life’s stage, but usually, one which is fatalistic or as the instrument of fate for others. They often appear cold and undemonstrative though in reality, they have a warm heart towards the oppressed of all classes, they hide their feelings to allow people to think just what pleases them. You face constant obstacles, you struggle through every phase of your life, meet with accidents, get cheated and the fruits of your efforts don’t come back to you. Most of the time people take the benefit of all the hard work you put in.</Text>
      <View style={{alignItems:'center'}}>
      <Image
        source={require('../assets/eight.png')}
        style={styles.image}
      /></View>
      <Text style={styles.para}>Number 8 is a fatalistic number. The stars above govern our condition but this is more certain about number 8 persons. The stars are frequently hostile towards them and they rarely escape their wrath. This does not mean number 8 people do not possess positive luck. They are either very successful or not successful at all. There is no middle way in their case. They are very diligent and self-disciplined. Their constant nature and a profound sense of duty make them the epitome of truth and honour. They have a very intense nature and it is rare to find a number 8 person involved in aimless frivolity.</Text>
      <Text style={styles.para}>They are not normally religious, but if they are then they become fanatics. They are wise, prudent and take a decision after great deliberation. Once the decision is taken, they put tremendous effort in order to achieve their goal. They are an inborn manager with great leadership and organising qualities. Generally, they are not so good with their finances and always struggle to save.</Text>
      <Text style={styles.para}>As per Vedic Numerology, Number 8 relates to planet Saturn. These people are invariably much misunderstood in their lives and perhaps, for this reason, they feel intensely lonely at heart. They have very deep and intense natures, a great strength of individuality; they generally play some important role on life’s stage, but usually, one which is fatalistic, or as the instrument of fate for others.</Text>
      </>
      )}
      <Text style={styles.title} onPress={PositiveTraitstoggleParaVisibility}>Positive Traits</Text>
      {isPositiveTraitsParaVisible && (
        <>
      <Text style={styles.para}>•	People born under the influence of number 8 are generally content and sure of themselves. Such confidence is found in number 8s because they know themselves well and are aware of their strengths and abilities. Focused and practical, Number 8s know what they want from life and know how they are going to achieve their goals.</Text>
      <Text style={styles.para}>•	Number 8s are dependable characters and would never let anyone down.</Text>
      <Text style={styles.para}>•	Responsibility is taken very seriously by number 8s, and they can always be relied upon by others. Determined and strong-willed, number 8s will never betray their own beliefs and principles or anothers trust.</Text>
      <Text style={styles.para}>•	With the 8 dominating your Life Path, you are all about wealth. Number 8s are usually confident, charismatic individuals and most often their life purpose is learning to manipulate money and power - without becoming corrupted in the process. Number 8s have natural leadership qualities and great long term vision and can accumulate a lot of power, prestige and wealth in their lifetimes. They become landowners, buil People born under the influence of number 8 are generally content and sure of themselves. Such confidence is found in number 8s because they know themselves well and are aware of their strengths and abilities. Focused and practical, Number 8s know what they want from life and know how they are going to achieve their goals.</Text>
      <Text style={styles.para}>•	Number 8s are dependable characters and would never let anyone down.</Text>
      <Text style={styles.para}>•	Responsibility is taken very seriously by number 8s, and they can always be relied upon by others. Determined and strong-willed, number 8s will never betray their own beliefs and principles or another’s trust.</Text>
      <Text style={styles.para}>•	With the 8 dominating your Life Path, you are all about wealth. Number 8s are usually confident, charismatic individuals and most often their life purpose is learning to manipulate money and power - without becoming corrupted in the process. Number 8s have natural leadership qualities and great long term visiders and bankers.</Text>
      <Text style={styles.para}>•	8s have tremendous potential for improving the lives of thousands, perhaps millions of people in practical ways. Sometimes the pursuit of riches becomes more important than personal relationships and may cost them their relationships, morality and popularity.</Text>
      <Text style={styles.para}>•	Number 8 is the number of the natural leader, with a good grasp of how to accomplish any goal. </Text>
      <Text style={styles.para}>•	8 is the number of power and people with the 8 Destiny or Life Path vibration do not feel safe unless they have found a way to establish financial security for themselves.</Text>
      <Text style={styles.para}>•	Your challenge is to balance personal relationships against material wealth and to practice tolerance and patience.</Text>
      <Text style={styles.para}>•	Your purpose is to use your commanding power and strength to help others.</Text>
      <Text style={styles.para}>•	The goal of the 8 Destiny or Life Path person is to awaken the Divinity within.</Text>
      </>
      )}
      <Text style={styles.title} onPress={NegativeTraitstoggleParaVisibility}>Negative traits</Text>
      {isNegativeTraitsParaVisible && (
        <>
      <Text style={styles.para}>•	The negative aspects of number 8 are a tendency towards a superiority complex, greed, tactlessness and domineering, sneering, condescending and superior.</Text>
      <Text style={styles.para}>•	The number 8 is considered extrovert and is the highest feminine number. Its attributes are giving and receiving and 8 is the number of karma. The related planet is Saturn and it is related to the star sign Scorpio. The Tarot card linked to the number 8 is the Strength Card.</Text>
      <Text style={styles.para}>•	The number 8 symbolizes the principle of domination, control and achievement represents the executive decision-maker. The 8 person tends to be rather formal, stern and hard-headed. 8 is the number of the natural leader with a good grasp of how to accomplish any goal. More comfortable in the realm of material, tangible facts, the 8 person will be truly exceptional as soon as they develop their spiritual connection and natural intuition. The 8 energy must learn compassion as it is one of their 'life lessons'.</Text>
      <Text style={styles.para}>•	The 8s Life Challenges are to overcome belligerence, manipulation, anger and judgement.</Text>
      <Text style={styles.para}>•	The ultimate accomplishment for the 8 person is to gain wisdom.</Text>
      <Text style={styles.para}>•	Number 8s are single-minded and show good judgment and executive skills, often achieving power and material success. 8 represents justice and balance.</Text>
      <Text style={styles.para}>•	Those under the influence of the powerful and karmic number 8 seem to endure lifes hardships more so than other numbers. They often face abuse (in its many manifestations), rejection, neglect, bullying, discrimination, broken homes and family breakdown and other dis-stabilizing life experiences in their younger, formative years during childhood and often into the teenage and early adult years.</Text>
      <Text style={styles.para}>•	The lessons of this path are many and varied, but generally have to do with learning to overcome adversity and learning about compassion for others through having faced and survived often horrendous life circumstances and/or situations. Although often unpleasant, these life lessons and experiences serve to teach those influenced by 8 to find their inner-strengths and step into their own power. To be a survivor rather than a victim. It brings harsh lessons of right and wrong.</Text>
      <Text style={styles.para}>•	Through adversity, those under the 8s influence learn to face and overcome obstacles and to rise above negativity and use their powerful talents and manifesting abilities for the benefit of the self, others, and humanity as a whole.</Text>
      <Text style={styles.para}>•	8s learn the attributes of resilience, rising above adversity and finding personal success in whatever field or direction their soul chooses in this lifetime. They learn compassion and empathy for their fellow human, and through their own experiences of overcoming obstacles and difficulties are able to tap into a deep well of inner-wisdom and strength. This wisdom and life experience knowledge is to be used to teach, guide and assist others towards better ways of living, doing and being.</Text>
      <Text style={styles.para}>•	The 8 energy is known to be self-confident, ambitious and are often risk-takers. They are often found in authoritarian or managerial positions, and can sometimes become the ruthless workaholic. The 8 energy must watch that it does not become too obsessive.</Text>
      <Text style={styles.para}>•	Number 8 is the number of karma and carries within it the Universal Law of Truth, that is cause and effect - as you reap, so shall you sow. The number 8 is the first number of 'Free Will'- accruing our karma.</Text>
      <Text style={styles.para}>•	Number 8 is the number of financial security. On the positive side, these people are usually quiet, reserved and shy. They do not obviously push ahead, but slowly and surely get to where they want to go, and nothing will stop them achieving their ambition/s.</Text>
      <Text style={styles.para}>•	On the negative side, the 8 energy can become ruthless and materialistic.</Text>
      <Text style={styles.para}>•	The mystery of the 8 is that of the Lemniscuses - the external and continuous spiral of perpetual motion which is the supreme signature of the Universe and all evolutionary cycles.</Text>
      <Text style={styles.para}>•	This number offers no half-measures - it is either personal limitation or spiritual freedom.</Text>
      <Text style={styles.para}>•	8 is the power number which needs always to be used for the good of mankind. The task of the 8 is great - and when awakened and developed, is the Master Energy working for humanity. 8 people must give their all to whatever they undertake, and these people are called upon to lead, to take authority and to take up ideas and plans of others and bring them to accomplishment.</Text>
      <Text style={styles.para}>•	Strength, will and effort are energies of the 8 and their ultimate goal is mastery on all levels and planes of being. There is the opportunity to create a balance between the spiritual and material worlds - as above - so below. </Text>
      <Text style={styles.para}>•	Number 8 people see things in the larger picture and from a higher perspective. They look at life in a practical manner and with discernment. Being the leader and having authority, 8 must have goals and a purpose in life. They can direct the mind of humanity to reach a higher attainment, by giving their all in their undertakings. They can bring an infinite into the finite in harmonious balance.</Text>
      <Text style={styles.para}>•	The 8 vibration has much to give the world as they are a stable, efficient and dependable influence which others need. People with this energy have sound judgement and have a need for their idea of security. The diligent 8 will work tirelessly for a cause they believe in and like to see the results of their energies. </Text>
      <Text style={styles.para}>•	Finances, wealth and power can be the path of the 8, but if the spiritual side is neglected, there may be reverses (or loss) in life.</Text>
      <Text style={styles.para}>•	People of this number will leave an inheritance or legacy in life by all that they accomplish.</Text>
      <Text style={styles.para}>•	The 8 may try to be all things to all people, and needs to learn to delegate to others. There is a great deal of will, courage, integrity, trustworthiness and stability in the nature of 8. The need of this energy, when awakened and developed, is to work for the cause of bettering humanity, the community, the nation and the planet.</Text>
      <Text style={styles.para}>•	The 8 person has a philosophical nature and there is a desire to know about life and its purpose. The 8 is a natural doer and there is a strong driving force that persists to this goal. The intensity in which they work can be overwhelming to some other vibrations. </Text>
      <Text style={styles.para}>•	Relationships are necessary to the 8 person as they need to associate with humanity. They are loyal, true and dependable, frank and honest and they let you know where you stand at all times. 8 needs love and admiration for the rewards of their efforts and achievements. At times they need to slow down to look at the real value of those near and dear to them.</Text>
      <Text style={styles.para}>•	A capacity for hard work can result in self-made success - if so, 8 seldom let’s go. Though greed and miserliness lurk within this number, it is a determined strive.</Text>
      </>
      )}
      <Text style={styles.title} onPress={CharactertoggleParaVisibility}>Character</Text>
      {isCharacterParaVisible && (
        <>
      <Text style={styles.para}>The Boss, powerful drive to succeed, the ability to rise above aversions and adversity, good decision-making, intensely active, seizes opportunities, takes control, wants security, and achieves success.</Text>
      </>
      )}
      <Text style={styles.title} onPress={RelationshipstoggleParaVisibility}>Relationships</Text>  
      {isRelationshipsParaVisible && (
        <>  
      <Text style={styles.para}>•	Number 8s have a fear of expressing their emotions as they are frightened of rejection and being hurt. Anyone involved with a number 8 will need to initiate any discussions about love or commitment as number 8s will never expose themselves emotionally if they are unsure of the response they may receive.</Text>
      <Text style={styles.para}>•	Relationships can be tumultuous as part of 8s life/karmic lessons relate to establishing what they do and what they do not want in their lives. Number 8s must often experience a line of failed romantic relationships in order to learn the lessons that will hold them in good stead throughout the remainder of their lives. This is most often recognized and appreciated in time and with clear hindsight.</Text>
      <Text style={styles.para}>•	Early in life 8s will not be overly concerned with romance or relationships but are more likely to focus their attentions on their ambitions in other areas of their lives. If number 8s do form relationships in their youth they should try to set aside time to spend with their partners in formulating their plans and ambitions for the future.</Text>
      <Text style={styles.para}>•	8s often become workaholics and are happy to spend their time pursuing their career goals. Because of this, within a marriage or long-term relationship, they need a partner who understands and accepts their self-imposed working lifestyle.</Text>
      <Text style={styles.para}>•	Later in life, however, finding a partner and making a firm commitment may become an ambition within itself.</Text>
      <Text style={styles.para}>•	Relationships formed by number 8s later in life are more likely to succeed as they will have more energy and attention to devote to their partners once their other ambitions are realized and they have established themselves and their true wants and desires in life. Once they feel that they have achieved this they are most happy and willing to settle down into a comfortable and supportive long-term relationship with a compatible partner.</Text>
      <Text style={styles.para}>•	Partners need to be aware and accepting of 8s passion and drive to succeed at whatever they set their mind to, as this can cause feelings of separation and lack of care and/or support.</Text>
      <Text style={styles.para}>•	8s can be strong individuals, and because of their energies they often attract those who want/need someone else to take responsibility for them and care of them. They may attract clingy, needy and/or dependent friends and partners who always need their help, guidance, time, attention and financial assistance.</Text>
      <Text style={styles.para}>•	8s make for solid and dependable partners who are intelligent, loving and faithful. They often resonate best with those who carry similar neurological vibrations, such as 2, 4 and 6.</Text>
      </>
      )} 
      <Text style={styles.title} onPress={ParenthoodtoggleParaVisibility}>Parenthood</Text>
      {isParenthoodParaVisible && (
        <>
      <Text style={styles.para}>•	As parents, number 8s will want to ensure that their children are raised in an environment that is secure and comfortable. They will want their children to have the best of everything and will spare no expense in providing for them.</Text>
      <Text style={styles.para}>•	Number 8s find parenthood less stressful later in life when they are more likely to have the financial means to provide for their children. They will also have more time to spend with their children, which they will find very rewarding.</Text>
      <Text style={styles.para}>•	The children of number 8 parents will know that they can always turn to their parents for support and security in all matters.</Text>
      </>
      )}
      <Text style={styles.title} onPress={HometoggleParaVisibility}>Home and Leisure</Text>
      {isHomeParaVisible && (
        <>
      <Text style={styles.para}>•	Sports that have an element of a challenge will appeal to number 8s as they like the excitement and sense of achievement of overcoming the odds, and will often be attracted to sports such as rock climbing and hiking. Any activity that has an obvious finished result will make number 8s happy. Pleasure can also be derived from the simple act of completing a difficult jigsaw puzzle.</Text>
      <Text style={styles.para}>•	The homes of number 8s will reflect their confidence and contentment. 8s will enjoy putting their practical skills to use about the home and surrounds and will take pleasure in DIY projects. Number 8s have a passion for gadgets and new technology and their homes will be full of labor-saving devices. Unlike many people, number 8s will make full use of their appliances.</Text>
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
        <Text style={styles.listContent}>Black</Text>
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
        <Text style={styles.listContent}>2, 4</Text>
      </View>
    </View>
    <Text style={styles.para}>Numerology views the number 8 as a symbol of achievement, ambition, and success. People with this number often strive for financial and material success, and they are willing to put in the effort required to reach their goals. Their leadership abilities, determination, and practical mindset make them effective in various endeavors, particularly in business and finance. Balancing material success with a sense of responsibility and discipline is a central theme in their lives.</Text>
    </View>
    </>
      )}
      <Text style={styles.title} onPress={CareertoggleParaVisibility}>Careers</Text>
      {isCareerParaVisible && (
        <>
      <Text style={styles.para}>•	Number 8s have strong ambitions and a deep desire to succeed and are prepared to work hard and commit themselves totally to their careers in the pursuit of success. Work can in fact become something of an obsession for number 8s and they should try to achieve a better balance between work and pleasure.</Text>
      <Text style={styles.para}>•	Efficient workers who know how to use their initiative, number 8s are valuable employees and have a great deal to offer an employer. The organizational skills, motivation and enthusiasm of number 8s are respected and valued by employers, and number 8s hard work usually results in swift promotions.</Text>
      <Text style={styles.para}>•	As managers, number 8s are skilled and fair. Decision-making does not daunt number 8s and they are happy to make important decisions and to carry the responsibility for the consequences. Number 8s recognize the importance of teamwork and working together towards a common goal and they will encourage members of their team to make the most of their personal abilities and skills for the benefit of all. It is important for number 8s to share power and responsibility in the workplace and not take on all the pressure or glory alone.</Text>
      <Text style={styles.para}>•	Number 8s are well-suited to careers in finance and marketing, but also do well in setting up their own businesses.</Text>
      <Text style={styles.para}>•	8s are natural humanitarians (often despite negative and/or harsh experiences with others in their lifetimes) so strive to bring justice to unjust matters. They often choose careers where their work brings in a solid income, but also serves for the benefit of others.</Text>
      <Text style={styles.para}>•	Many become advocates for the down-trodden, abused and under-privileged either within the realm of their career or business, or in their own time and space. Their ultimate goal is to unite and heal humanity.</Text>
      <Text style={styles.para}>•	8s resonate and excel at any type of professional or executive, business owner, manager, publisher, contractor, engineer, financial analyst, judge.</Text>
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
    borderColor:'black',
    width:'110%',
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
     backgroundColor:'black',
     color:'yellow',
     marginBottom:10
    //  borderColor:'black',
    //  borderWidth:1
    
  },
  title1: {
    fontSize: 26,
    marginBottom:5,
    color:'blue'
  },
  subtitle: {
    fontSize: 24,
    marginBottom:5,
    color:'darkblue'   
  },

  image: {
    width: 250,
    height: 250,
  },
  para: {
    fontSize: 20,
    marginBottom: 7,
  }, 
  para1:{
    fontSize: 20,
    marginBottom: 7,
    fontWeight:"bold"
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
