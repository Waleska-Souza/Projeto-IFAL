import * as React from 'react';
import {Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import {  
          Container,
          HeaderButtonLeft,
          HeaderButtonRight,
          Container1,
          Text1,
          Text2,
          Container2,
          Text3,
          Text4,
          Container3,
          Text5,
          Text6,
          Container4,
          Text7,
          Text8,
          Container5,
          Text9,
          Text10,
          Container6,
          Text11,
          Text12,
          Text13,
          Text14,
          Text15,
          Container7,
          Text16,
          Text17,
          Container8,
          Text18,
          Text19,
          Text20,
          Text21,
          Container9,
          Text22,
          Text23,
          Container10,
          Text24,
          Text25,
          Text26,
          Text27,
          Container11,
          Text28,
          Text29,
          Container12,
          Text30,
          Text31,
          Text32,
          Text33,
          Container13,
          Text34,
          Text35,
          Container14,
          Text36,
          Text37,
          Text38,
          Container15,
          Text39,
          Text40,
          Container16,
          Container17,
          Container18,
          Container19,
          Container20,
          Text41,
          Text42,
          Container21,
          Container22,
          Container23,
          Text43,
          Container24,
          Title
        } 
from './styles';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


function MealScheduleScreen({navigation,route}) {
  const item = route.params;
  return (
    <ScrollView style={{background: '#FFFFFF'}}>
      <Container>
          <HeaderButtonLeft>
            <Ionicons name="chevron-back" size={20} color={"black"} onPress={navigation.goBack} />
          </HeaderButtonLeft>
          <HeaderButtonRight>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Sleep Tracker')}>
              <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
            </TouchableOpacity>
          </HeaderButtonRight>
          <Title>Meal Schedule</Title>
          <Container1></Container1>
          <Text1>Fri</Text1>
          <Text2>14</Text2>
          <Container2></Container2>
          <Text3>Sat</Text3>
          <Text4>15</Text4>
          <Container3></Container3>
          <Text5>Sun</Text5>
          <Text6>16</Text6>
          <Container4></Container4>
          <Text7>Thus</Text7>
          <Text8>13</Text8>
          <Container5></Container5>
          <Text9>Wed</Text9>
          <Text10>12</Text10>
          <Container6></Container6>
          <Text11>Tue</Text11>
          <Text12>11</Text12>
          <Text13>May 2021</Text13>
          <Image
            source={require('../MealSchedule/Stroke 1.png')}
            style={{
              position: 'absolute',
              width: 10,
              height: 10,
              left: 256.79,
              top: 106.58
            }}
          />
          <Image
            source={require('../MealSchedule/Stroke 2.png')}
            style={{
              position: 'absolute',
              width: 10,
              height: 10,
              left: 111.79,
              top: 106.58,
              right: 256.79
            }}
          />
          <Text14>Breakfast</Text14>
          <Text15>2 meals | 230 calories</Text15>
          <Container7></Container7>
          <Text16>Honey Pancake</Text16>
          <Text17>07:00am</Text17>
          <Image
            source={require('../MealSchedule/Vector10.png')}
            style={{
              position: 'absolute',
              width: 43.5,
              height: 30,
              left: 38.25,
              top: 303
            }}
          />
          <Image
            source={require('../MealSchedule/Arrow - Right Circle.png')}
            style={{
              position: 'absolute',
              width: 18.5,
              height: 18.5,
              left: 323.75,
              top: 308.75
            }}
          />
          <Container8></Container8>
          <Text18>Coffee</Text18>
          <Text19>07:30am</Text19>
          <Image
            source={require('../MealSchedule/coffee.png')}
            style={{
              position: 'absolute',
              width: 38,
              height: 33,
              left: 40,
              top: 373
            }}
          />
          <Image
            source={require('../MealSchedule/Arrow - Right Circle.png')}
            style={{
              position: 'absolute',
              width: 18.5,
              height: 18.5,
              left: 323.75,
              top: 378.75
            }}
          />
          <Text20>Lunch</Text20>
          <Text21>2 meals | 500 calories</Text21>
          <Container9></Container9>
          <Text22>Chicken Steak</Text22>
          <Text23>01:00pm</Text23>
          <Image
            source={require('../MealSchedule/chicken steak.png')}
            style={{
              position: 'absolute',
              width: 46,
              height: 19,
              left: 37,
              top: 498
            }}
          />
          <Image
            source={require('../MealSchedule/Arrow - Right Circle.png')}
            style={{
              position: 'absolute',
              width: 18.5,
              height: 18.5,
              left: 323.75,
              top: 497.75
            }}
          />
          <Container10></Container10>
          <Text24>Milk</Text24>
          <Text25>01:20pm</Text25>
          <Image
            source={require('../MealSchedule/glass-of-milk 1.png')}
            style={{
              position: 'absolute',
              width: 36,
              height: 34,
              left: 42,
              top: 560
            }}
          />
          <Image
            source={require('../MealSchedule/Arrow - Right Circle.png')}
            style={{
              position: 'absolute',
              width: 18.5,
              height: 18.5,
              left: 323.75,
              top: 567.75
            }}
          />
          <Text26>Snacks</Text26>       
          <Text27>2 meals | 140 calories</Text27>
          <Container11></Container11>
          <Text28>Orange</Text28>
          <Text29>04:30pm</Text29>
          <Image
            source={require('../MealSchedule/Vector11.png')}
            style={{
              position: 'absolute',
              width: 39,
              height: 29.64,
              left: 41,
              top: 681.68
            }}
          />
          <Image
            source={require('../MealSchedule/Arrow - Right Circle.png')}
            style={{
              position: 'absolute',
              width: 18.5,
              height: 18.5,
              left: 323.75,
              top: 686.75
            }}
          />
          <Container12></Container12>
          <Text30>Apple Pie</Text30>
          <Text31>04:40pm</Text31>
          <Image
            source={require('../MealSchedule/apple pie.png')}
            style={{
              position: 'absolute',
              width: 42,
              height: 24,
              left: 39,
              top: 754
            }}
          />
          <Image
            source={require('../MealSchedule/Arrow - Right Circle.png')}
            style={{
              position: 'absolute',
              width: 18.5,
              height: 18.5,
              left: 323.75,
              top: 756.75
            }}
          />
          <Text32>Dinner</Text32>
          <Text33>2 meals | 120 calories</Text33>
          <Container13></Container13>
          <Text34>Salad</Text34>
          <Text35>07:10pm</Text35>
          <Image
            source={require('../MealSchedule/salad.png')}
            style={{
              position: 'absolute',
              width: 42,
              height: 32,
              left: 39,
              top: 869
            }}
          />
          <Image
            source={require('../MealSchedule/Arrow - Right Circle.png')}
            style={{
              position: 'absolute',
              width: 18.5,
              height: 18.5,
              left: 323.75,
              top: 875.75
            }}
          />
          <Container14></Container14>
          <Text36>Oatmeal</Text36>
          <Text37>08:10pm</Text37>
          <Image
            source={require('../MealSchedule/oatmeal.png')}
            style={{
              position: 'absolute',
              width: 37,
              height: 38,
              left: 42,
              top: 937
            }}
          />
          <Image
            source={require('../MealSchedule/Arrow - Right Circle.png')}
            style={{
              position: 'absolute',
              width: 18.5,
              height: 18.5,
              left: 323.75,
              top: 945.75
            }}
          />
          <Text38>Today Meal Nutritions</Text38>
          <Container15></Container15>
          <Text39>Calories</Text39>
          <Text40>320 kCal</Text40>
          <Container16></Container16>
          <Container17></Container17>
          <Image
            source={require('../MealSchedule/calories.png')}
            style={{
              position: 'absolute',
              width: 18,
              height: 18,
              left: 100,
              top: 1069
            }}
          />
          <Container18></Container18>
          <Container19></Container19>
          <Container20></Container20>
          <Text41>Proteins</Text41>
          <Text42>300g</Text42>
          <Image
            source={require('../MealSchedule/protein 1.png')}
            style={{
              position: 'absolute',
              width: 18,
              height: 18,
              left: 99,
              top: 1147
            }}
          />
          <Container21></Container21>
          <Container22></Container22>
          <Container23></Container23>
          <Text43>Fats</Text43>
          <Image
            source={require('../MealSchedule/trans-fat.png')}
            style={{
              position: 'absolute',
              width: 18,
              height: 18,
              left: 76,
              top: 1225
            }}
          />
          <Container24></Container24>
          <Image
            source={require('../MealSchedule/Vector12.png')}
            style={{
              position: 'absolute',
              width: 11.08,
              height: 11.08,
              left: 309.46,
              top: 1237.46
            }}
          />
      </Container>
    </ScrollView>
  );
}
export default MealScheduleScreen;