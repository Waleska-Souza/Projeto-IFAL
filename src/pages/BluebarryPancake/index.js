import * as React from 'react';
import {Image,ImageBackground,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import {Header,
        Container,
        HeaderButtonLeft,
        HeaderButtonRight,
        Container1,
        Text1,
        Text2,
        Text3,
        Container2,
        Text4,
        Container3,
        Text5,
        Container4,
        Text6,
        Container5,
        Text7,
        Text8,
        Text9,
        Text10,
        Container6,
        Text11,
        Text12,
        Container7,
        Text13,
        Text14,
        Container8,
        Text15,
        Text16,
        Container9,
        Text17,
        Text18,
        Text19,
        Text20,
        Text21,
        Text22,
        Text23,
        Text24,
        Text25,
        Text26,
        Text27,
        Text28,
        Text29,
        Text30,
        Text31,
        Text32,
        Text33,
        Button1,
        Title1 
      } 
from './styles';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


function BluebarryPancakeScreen({navigation,route}) {
  const item = route.params;
  return (
    <ScrollView style={{background: '#FFFFFF'}}>
      <Container>
        <Header>
          <HeaderButtonLeft>
            <Ionicons name="chevron-back" size={20} color={"black"} onPress={navigation.goBack} />
          </HeaderButtonLeft>
          <HeaderButtonRight>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Meal Schedule')}>
              <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
            </TouchableOpacity>
          </HeaderButtonRight>
        </Header>
        <ImageBackground source={require ('../BluebarryPancake/Vector.png')} 
          style={{position: 'absolute', 
            width: 289,
            height: 288,
            left: 43,
            top: 122
          }}
        />
        <Container1></Container1>
        <Image source={require('../BluebarryPancake/Swap-Details.png')}
          style={{position: 'absolute',
            width: 50,
            height: 5,
            left: 163,
            top: 356
          }}
        />
        <Text1>Blueberry Pancake</Text1>
        <Text2>by James Ruth</Text2>
        <Image source={require('../BluebarryPancake/Love-Bg.png')}
          style={{position: 'absolute',
            width: 32,
            height: 32,
            left: 313,
            top: 394
          }}
        />
        <Image source={require('../BluebarryPancake/Icon.png')}
          style={{position: 'absolute',
            width: 16,
            height: 16,
            left: 321,
            top: 402
          }}
        />
        <Text3>Nutrition</Text3>
        <Container2></Container2>
        <Text4>180kCal</Text4>
        <Image source={require('../BluebarryPancake/Calories-Icon.png')}
          style={{position: 'absolute',
            width: 18,
            height: 18,
            left: 40,
            top: 512
          }}
        />
        <Container3></Container3>
        <Text5>30g fats</Text5>
        <Image source={require('../BluebarryPancake/Fat-Icon.png')}
          style={{position: 'absolute',
            width: 18,
            height: 18,
            left: 136,
            top: 512
          }}
        />
        <Container4></Container4>
        <Text6>20g proteins</Text6>
        <Image source={require('../BluebarryPancake/Proteins-Icon.png')}
          style={{position: 'absolute',
            width: 18,
            height: 18,
            left: 235,
            top: 512
          }}
        />
        <Container5></Container5>
        <Image source={require('../BluebarryPancake/Carbo-Icon.png')}
          style={{position: 'absolute',
            width: 18,
            height: 18,
            left: 356,
            top: 512
          }}
        />
        <Text7>Descriptions</Text7>
        <Text8>Pancakes are some people's favorite breakfast, 
          who doesn't like pancakes? 
          Especially with the real honey splash on 
          top of the pancakes, of course 
          everyone loves that! besides being Read More...
        </Text8>
        <Text9>Ingredients That You Will Need</Text9>
        <Text10>6 items</Text10>
        <Container6></Container6>
        <Image source={require('../BluebarryPancake/flour.png')}
          style={{position: 'absolute',
            width: 41,
            height: 46,
            left: 50,
            top: 791
          }}
        />
        <Text11>Wheat Flour</Text11>
        <Text12>100gr</Text12>
        <Container7></Container7>
        <Image source={require('../BluebarryPancake/Sugar-Icon.png')}
          style={{position: 'absolute',
            width: 40,
            height: 43,
            left: 145,
            top: 793
          }}
        />
        <Text13>Sugar</Text13>
        <Text14>3 tbsp</Text14>
        <Container8></Container8>
        <Image source={require('../BluebarryPancake/BakingSoda-Icon.png')}
          style={{position: 'absolute',
            width: 36,
            height: 43,
            left: 242,
            top: 793
          }}
        />
        <Text15>Baking Soda</Text15>
        <Text16>2 tsp</Text16>
        <Container9></Container9>
        <Image source={require('../BluebarryPancake/Eggs-Icon.png')}
          style={{position: 'absolute',
            width: 46,
            height: 40.87,
            left: 332,
            top: 794
          }}
        />
        <Text17>Eggs</Text17>
        <Text18>2 items</Text18>
        <Text19>Step by Step</Text19>
        <Text20>8 Steps</Text20>
        <Image source={require('../BluebarryPancake/Circle-1.png')}
          style={{position: 'absolute',
            width: 20,
            height: 20,
            left: 57,
            top: 964
          }}
        />
        <Image source={require('../BluebarryPancake/Line.png')}
          style={{position: 'absolute',
            width: 1,
            height: 44,
            left: 67,
            top: 989
          }}
        />
        <Text21>Step 1</Text21>
        <Text22>Prepare all of the ingredients that needed</Text22>
        <Text23>01</Text23>
        <Image source={require('../BluebarryPancake/Circle-2.png')}
          style={{position: 'absolute',
            width: 20,
            height: 20,
            left: 57,
            top: 1038
          }}
        />
        <Image source={require('../BluebarryPancake/Line.png')}
          style={{position: 'absolute',
            width: 1,
            height: 44,
            left: 67,
            top: 1063
          }}
        />
        <Text24>Step 2</Text24>
        <Text25>Mix flour, sugar, salt, and baking powders</Text25>
        <Text26>02</Text26>
        <Image source={require('../BluebarryPancake/Circle-2.png')}
          style={{position: 'absolute',
            width: 20,
            height: 20,
            left: 57,
            top: 1112
          }}
        />
        <Image source={require('../BluebarryPancake/Line.png')}
          style={{position: 'absolute',
            width: 1,
            height: 62,
            left: 67,
            top: 1137
          }}
        />
        <Text27>Step 3</Text27>
        <Text28>In a seperate place, mix the eggs and liquid milk until blended</Text28>
        <Text29>03</Text29>
        <Image source={require('../BluebarryPancake/Circle-2.png')}
          style={{position: 'absolute',
            width: 20,
            height: 20,
            left: 57,
            top: 1204
          }}
        />
        <Image source={require('../BluebarryPancake/Line.png')}
          style={{position: 'absolute',
            width: 1,
            height: 62,
            left: 67,
            top: 1229
          }}
        />
        <Text30>Step 4</Text30>
        <Text31>04</Text31>
        <Image source={require('../BluebarryPancake/Circle-2.png')}
          style={{position: 'absolute',
            width: 20,
            height: 20,
            left: 57,
            top: 1296
          }}
        />
        <Text32>Step 5</Text32>
        <Text33>05</Text33>
        <Button1>
          <Title1>Add to Breakfast Meal</Title1>
        </Button1>
      </Container>
    </ScrollView> 
  );
}

export default BluebarryPancakeScreen;