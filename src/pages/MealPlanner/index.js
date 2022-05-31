import * as React from 'react';
import { Image,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import {  Container,        
          HeaderButtonLeft,
          HeaderButtonRight,
          Title,
          Text1,
          Container1,
          Text2,
          Container2,
          Text3,
          Container3,
          Text4,
          Text5,
          Container4,
          Text6,
          Container5,
          Text7,
          Text8,
          Container6,
          Text9,
          Text10,
          Text11,
          Container7,
          Text12,
          Text13,
          Container8,
          Text14,
          Container9,
          Text15,
          Text16,         
          Container10,
          Text17,
          Container11,
          Container12,
        } 
from './styles';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function MealPlannerScreen({navigation}) { 
  return (
    <ScrollView style={{background: '#FFFFFF'}}>
    <Container>
      <HeaderButtonLeft>
        <Ionicons name="chevron-back" size={20} color="black" />
      </HeaderButtonLeft>
      <HeaderButtonRight>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Breakfast')}>
          <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
        </TouchableOpacity>
      </HeaderButtonRight>
      <Title>Meal Planner</Title>
      <Text1>Meal Nutritions</Text1>
      <Container1>
        <Text2>Weekly</Text2>
      </Container1>
      <Image
        source={require('../MealPlanner/Stroke 1.png')}
        style={{
          position: 'absolute',
          width: 8.75,
          height: 4.38,
          left: 323.12,
          top: 115.31
        }}
      /> 
      <Container2>
      </Container2>
      <Text3>Daily Meal Schedule</Text3>
      <Container3>
        <Text4>Check</Text4>
      </Container3>
      <Text5>Today Meals</Text5>
      <Container4>
        <Text6>Breakfast</Text6>
      </Container4>
      <Image
        source={require('../MealPlanner/Stroke 1.png')}
        style={{
          position: 'absolute',
          width: 8.75,
          height: 4.38,
          left: 323.12,
          top: 449.31
        }}
      />
      <Container5>
        <Text7>Salmon Nigiri</Text7>
        <Text8>Today | 7am</Text8>
      </Container5>
      <Image 
        source={require('../MealPlanner/Vector.png')}
        style={{position: 'absolute',
          width: 90,
          height: 80,
          left: 30,
          top: 481 
        }}
      />
      <Container11></Container11>
      <Image
        source={require('../MealPlanner/Icon-Bell.png')}
        style={{position: 'absolute',
          width: 16,
          height: 16,
          left: 309,
          top: 513
        }}
      />
      <Container6>
        <Text9>Lowfat Milk</Text9>
        <Text10>Today | 8am</Text10>
      </Container6>
      <Image
        source={require('../MealPlanner/Layer 2.png')}
        style={{position: 'absolute',
          width: 43,
          height: 41,
          left: 54,
          top: 596
        }}
      />
      <Container12></Container12>
      <Image
        source={require('../MealPlanner/Reminders.png')}
        style={{position: 'absolute',
          width: 26,
          height: 26,
          left: 304,
          top: 603,
        }}
      />
      <Text11>Find Something to Eat</Text11>
      <Container7>
      </Container7>
      <Text12>Breakfast</Text12>
      <Text13>120+ Foods</Text13>
      <Container8>
      </Container8>
      <Text14>Select</Text14>
      <Image
        source={require('../MealPlanner/Vector2.png')}
        style={{
          position: 'absolute',
          width: 118,
          height: 74,
          left: 101,
          top: 733
        }}
      />
      <Container9></Container9>
      <Text15>Lunch</Text15>
      <Text16>130+ Foods</Text16>
      <Container10>
      </Container10>
      <Text17>Select</Text17>
      <Image
        source={require('../MealPlanner/Vector3.png')}
        style={{
          position: 'absolute',
          width: 60,
          height: 74,
          left: 314,
          top: 732
        }}
      />
      <Image
        source={require('../MealPlanner/Graph.png')}
        style={{
          position: 'absolute',
          width: 300,
          height: 184,
          left: 30,
          top: 135,
          bottom: 646
        }}
      />
    </Container>
    </ScrollView>
  );
}

export default MealPlannerScreen;
