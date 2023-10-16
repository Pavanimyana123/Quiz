import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React,{useState} from 'react';

const Number6 = () => {
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
      <Text style={styles.heading}>Number 6 </Text>
      <Text style={styles.title} onPress={BasicInfotoggleParaVisibility}>Basic Info</Text>
      {isBasicInfoParaVisible && (
        <>
      <Text style={styles.para}>Number 6 is ruled by Venus. You are charming, lovable and have an attractive personality and make people attracted to you. It makes you attract all the good things in life. You love luxury and are gifted with a good reputation, fame, and luxury. If any of this isn’t coming to you, your Venus is being suppressed by a negative number and only a name correction can negate the malefic effects.</Text>
      <Text style={styles.para}>Number 6 has many significations and can be related to a hexagon which has 6 sides. In Indian mythology, Vedas has 6 branches. There are 6 Indian seasons. This number makes one devoted and dedicated to the family but also gets overburdened with responsibilities. In their families and friend circles, they are mostly surrounded by women. They dream of an environment, work hard for it, achieve it and life revolves around these desires only. They are mostly family people but do not like the following traditions. They may also be interested in secret knowledge like tantra, witchcraft, black magic and occult.</Text>
      <View style={{alignItems:'center'}}>
      <Image
        source={require('../assets/six.png')}
        style={styles.image}
      /></View>
      <Text style={styles.para}>The number 6 is also related to as a ‘Mother’ (feminine qualities) and is essentially a working, building number. It symbolizes great household/family responsibility and service which needs to be achieved through love, nurturing and protection. There is an innate desire within the 6 individuals to bring harmony, peace, justice, and truth to all experiences in life. 6 thrives on beauty and needs to be comfortable in all areas of their lives – emotionally, spiritually and physically.</Text>
      <Text style={styles.para}>As a number 6 to tend to get more than you give. Others will give you, serve you and work for you and you ultimately enjoy a luxurious life. Some number 6’s extract work from others. Most number 6’s attract a wealthy partner and enjoy wealth because of their rich wife or husband.</Text>
      <Text style={styles.para}>When number 6 is afflicted with a negative name number or a 7 or 8 it can make you deceptive and use other people for your benefit.</Text> 
      <Text style={styles.para1}>As a number 6, you are just born lucky.</Text>
      <Text style={styles.para}>Number 6 in Vedic numerology relates to the planet, Venus. This planet is also known as the morning star and it is the most radiant planet in the eastern sky before sunrise. It is a feminine and watery planet which also signifies all the beautiful and luxurious things in this world. Being a feminine planet it also relates to feminism and associations with women.</Text>
      <Text style={styles.para}>The appearance of number 6 shows a mystical creature with a flat curved head and bottom rolled up. This shows their diverted mind and rolled bottom shows need for satisfaction is very high. A person who can go to any extent to satisfy his needs and there is a strong desire to achieve anything.</Text>
      <Text style={styles.para}>Those who are born on 6, 15 or 24 of any month or if their date of birth reduces to 6 are number 6 people. They are full of life and very enthusiastic. They are fond of fashionable clothes. They stay away from untidy things and show a lot of interest in artistic things. Number 6 is loving, gentle, beautiful and peaceful. Their affections often lean towards the ideal and their romance involves exaltation of the soul. The gratification of sexual urges is less important to these people.</Text>
      <Text style={styles.para}>Men of this number have an attraction for beautiful ladies. They can be really handsome and perfect in appearance. Women of this number make the body somewhat well set and fleshy. They can have a round face, lovely complexion, rolling eyes, well-shaped, dimple face, sweet voice, fond of music, love, and romance. They can be the perfect creatures we come across and can be irresistible also.</Text>
      </>
      )}
      <Text style={styles.title} onPress={PositiveTraitstoggleParaVisibility}>Positive Traits</Text>
      {isPositiveTraitsParaVisible && (
        <>
      <Text style={styles.para}>Individuals with the numerology number 6 are characterized by a host of positive traits that make them stand out in various aspects of life. They are known for their nurturing and caring nature, often taking on the role of caregivers for their family and loved ones. Harmony and balance are at the core of their values, and they work tirelessly to create peaceful environments in both their relationships and surroundings. Compassion and empathy flow naturally from them, and they are quick to offer support to those in need, engaging in acts of kindness and charity.</Text>
      <Text style={styles.para}>Number 6 individuals make excellent friends and partners due to their unwavering support and loyalty. They are known for their dependability and reliability, taking their responsibilities seriously and always fulfilling their commitments. Creative talents often shine through in their lives, with many excelling in artistic and creative pursuits like music, art, writing, or design. Their adaptability is a valuable trait, allowing them to navigate life's changes with grace and resourcefulness.</Text>
      <Text style={styles.para}>Home and family are central to their lives, and they take pride in creating warm and inviting home environments. A strong sense of duty guides their actions, and they willingly embrace obligations, performing their duties with unwavering dedication. They have an inherent appreciation for beauty and aesthetics, often displaying a keen sense of style and surrounding themselves with beautiful things.</Text>
      <Text style={styles.para}>In summary, individuals with the numerology number 6 are compassionate, nurturing, responsible, and creatively inclined. They excel in building harmonious relationships and are driven by a sense of duty and love for family and home. Their ability to create beauty and balance in their lives is truly admirable, making them valued friends and companions.</Text>
      </>
      )}
      <Text style={styles.title} onPress={NegativeTraitstoggleParaVisibility}> Negative Traits</Text>
      {isNegativeTraitsParaVisible && (
        <>
      <Text style={styles.para}>Individuals with the numerology number 6, while possessing numerous positive qualities, may exhibit negative traits as well. One common challenge they face is their strong nurturing tendencies, which can sometimes lead to over-nurturing and intrusiveness in the lives of their loved ones. They have a strong desire to care for and protect those around them, but this inclination may become intrusive, as they struggle to strike a balance between offering support and allowing others to make their own decisions. Their tendency to smother loved ones may inadvertently hinder personal growth and create tension in relationships.</Text>
      <Text style={styles.para}>The pursuit of harmony and balance, which is a central value for those with the numerology number 6, can sometimes lead to codependency. They may find it difficult to differentiate their needs from the needs of others and may sacrifice their own well-being for the sake of maintaining peace. This can result in unhealthy relationships where they lose their sense of self.</Text>
      <Text style={styles.para}>In their quest for perfection and harmony, individuals with the number 6 can become overly critical, both of themselves and those around them. They may set high standards and struggle with accepting imperfections. This critical nature can strain relationships and lead to unnecessary conflicts, as they may have difficulty letting go of perceived shortcomings.</Text>
      <Text style={styles.para}>The desire for stability and a reluctance to embrace change can make them inflexible in certain situations. When confronted with unexpected challenges or changes, they may experience discomfort and resistance, struggling to adapt and find new solutions. This resistance to change can hinder personal growth and limit their ability to handle unforeseen circumstances effectively.</Text>
      <Text style={styles.para}>Moreover, the strong sense of duty that defines them may lead to feelings of being overburdened. They willingly take on responsibilities, sometimes more than they can reasonably manage, resulting in stress and burnout. In their efforts to fulfill their obligations, they might neglect self-care, which is essential for their well-being.</Text>
      <Text style={styles.para}>In summary, individuals with the numerology number 6, while demonstrating admirable qualities, should be aware of these potential negative traits. They may need to strike a balance between nurturing and allowing, overcome critical tendencies, embrace change, set healthy boundaries, and avoid overburdening themselves. Recognizing these potential challenges is the first step towards personal growth and achieving a harmonious and balanced life.</Text>
      </>
      )}
      <Text style={styles.title} onPress={CharactertoggleParaVisibility}>Character</Text>
      {isCharacterParaVisible && (
        <>
      <Text style={styles.para}>Caring, Nurturing, Responsibility, Compassion, Harmony and Balance, Creativity, Adaptability, Strong Sense of Duty, Love for Home and Family</Text>
      </>
      )}
      <Text style={styles.title} onPress={RelationshipstoggleParaVisibility}>Relationships</Text>
      {isRelationshipsParaVisible && (
        <>
      <Text style={styles.para}>Individuals with the numerology number 6 bring a unique set of qualities to their relationships. At the core of their character is a deep sense of nurturing and support. They naturally take on the role of caregivers, whether in romantic partnerships, friendships, or family relationships. They are the ones who offer a shoulder to lean on, a listening ear, and unwavering emotional support. This nurturing nature creates a strong foundation of trust and comfort in their relationships.</Text>
      <Text style={styles.para}>Harmony and balance are essential values in the relationships of those with the numerology number 6. They actively seek to create harmonious and peaceful bonds with their loved ones. Their unique ability to defuse conflicts and foster understanding makes them valuable peacemakers in their social circles. When disagreements arise, they are often the ones who can find common ground and help restore serenity.</Text>
      <Text style={styles.para}>Family holds a special place in their hearts, and they are deeply committed to their family relationships. They go to great lengths to ensure the well-being and happiness of their loved ones, often making personal sacrifices for the greater good of the family unit. This deep connection to family creates a sense of unity and support that is cherished by all involved.</Text>
      <Text style={styles.para}>Loyalty and dependability are hallmarks of their relationships. They stand firmly by the side of their partners, friends, and family members, offering unwavering support and commitment. In times of need, they are the ones who can be counted on without question. This loyalty creates a sense of security and trust that strengthens their relationships.</Text>
      <Text style={styles.para}>Their relationships are marked by caring and compassion. They possess a quick understanding and empathetic nature, allowing them to connect deeply with the emotions and struggles of those they care about. Acts of kindness and service are central to their relationship dynamics, creating an atmosphere of love and support.</Text>
      </>
      )}
      <Text style={styles.title} onPress={ParenthoodtoggleParaVisibility}>Parenthood</Text>
      {isParenthoodParaVisible && (
        <>
      <Text style={styles.para}>Individuals with the numerology number 6 make loving and dedicated parents. They approach parenthood with a strong sense of responsibility and a deep desire to create a harmonious and nurturing home for their children. Their unwavering support, care, and emotional guidance contribute to a stable and loving family environment. These parents are loyal and dependable, always standing by their children's side and providing a strong sense of security. Their compassionate and empathetic nature allows them to connect with their children on a deep emotional level, teaching valuable life lessons in kindness, respect, and harmony. Parenthood is a role they wholeheartedly embrace, offering their children a loving and secure foundation for growth and development.</Text>
      <Text style={styles.para}>In their approach to parenthood, individuals with the numerology number 6 emphasize love, harmony, and responsibility. They are caring and dedicated parents who work tirelessly to provide a nurturing and balanced family environment. Their loyalty and dependability create a sense of security for their children, ensuring that they feel loved and supported. Through their compassionate and empathetic nature, they teach important life values and lessons, fostering an atmosphere of kindness and respect. Parenthood is a role they wholeheartedly embrace, offering their children a loving and stable foundation for their journey through life.</Text>
      </>
      )}
      <Text style={styles.title} onPress={HometoggleParaVisibility}>Home and Leisure</Text>
      {isHomeParaVisible && (
        <>
      <Text style={styles.para}>Home is not just a place but a sanctuary for those with the numerology number 6. They take immense pride in creating warm and inviting home environments where their nurturing and caring nature can flourish. Their homes are filled with love, and they go to great lengths to ensure the comfort and happiness of their loved ones. Whether it's through thoughtful interior design, delicious homemade meals, or a welcoming atmosphere, they turn their homes into havens of tranquility and harmony. They often take on the role of caregivers in their families, providing unwavering support and love. Home is a place where they can express their creativity and aesthetic sensibilities, and they often use their artistic talents to decorate and beautify their living spaces.</Text>
      <Text style={styles.para}>Leisure for those with the numerology number 6 is a time for relaxation, creativity, and bonding with loved ones. They find joy in various leisure activities that promote balance and harmony. Whether it's through music, art, gardening, or cooking, they use their creative talents to unwind and express themselves. They also appreciate outdoor activities that allow them to connect with nature and find solace in its beauty. Family plays a central role in their leisure activities, as they enjoy spending quality time with loved ones. Be it game nights, family gatherings, or simply sharing a meal, they prioritize the togetherness that leisure time can bring. Leisure is not just a break from routine; it's an opportunity to foster deeper connections and create lasting memories with those they hold dear.</Text>
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
        <Text style={styles.listContent}>Friday, Saturday</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Stone:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Diamond</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Colour:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>Bright White</Text>
      </View>
    </View>
    <View style={styles.listRow}>
      <View style={styles.listCell}>
        <Text style={styles.listLabel}>Friendly:</Text>
      </View>
      <View style={styles.listCell}>
        <Text style={styles.listContent}>2, 3, 6</Text>
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
        <Text style={styles.listContent}>2, 3, 4, 6, 9</Text>
      </View>
    </View>
    <Text style={styles.para}>Numerology views the number 6 as a symbol of responsibility, family, and nurturing. People with this number often play a central role in their families and communities, providing support, care, and guidance. They contribute to the well-being and harmony of those around them and are valued for their compassionate and dependable nature.</Text>
    </View>
    </>
      )}
    <Text style={styles.title} onPress={CareertoggleParaVisibility}>Career</Text>
    {isCareerParaVisible && (
      <>
    <Text style={styles.para}>•	Professions that suit you are musician, singer, painter, jeweller, beautician or models etc.</Text>
    <Text style={styles.para}>•	You usually earn a lot of money in your lives but are not able to save much.</Text>
    <Text style={styles.para}>•	Your spending habits are terrible which may also put them into difficult financial conditions.</Text>
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
        // borderColor: 'violet',
        // borderWidth: 2,
        // borderRadius: 10,
        padding: 10,
        marginTop:10
      },
      subcontainer:{
        borderColor:'indigo',
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
      title1: {
        fontSize: 26,
        marginBottom:5,
        color:'blue'  
      },
      title: {
        textAlign:'center',
        fontSize:30,
         backgroundColor:'indigo',
         color:'white',
         marginBottom:10
        //  borderColor:'black',
        //  borderWidth:1
        
      },
      para:{
        fontSize: 20,
        marginBottom: 7,
      },
      para1:{
        fontSize: 20,
        marginBottom: 7,
        fontWeight:"bold"
      },
      image: {
        width: 230,
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

export default Number6