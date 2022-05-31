import * as React from 'react';
import { Image,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import {Container,
        Title,
        Text2,
        HeaderButtonLeft,
        HeaderButtonRight,
        Container1,
        Text1,
        Container2,
        Text3,
        Container3,
        Text4,
        Container4,
        Text5,
        Container5,
        Text6,
        Text7,
        Container6,
        Container7,
        Text8,
        Text9,
        Text10,
        Container8,
        Text11,
        Text12,
        Text13,
        Text14,
        Container9,
        Container10,
        Text15,
        Text16,
        Text17,
        Text18,
      } 
from './styles';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function BreakfastScreen({navigation,route}) {
  const item = route.params;
  return (
    <ScrollView style={{background: '#FFFFFF'}}>
    <Container>
      <HeaderButtonLeft>
        <Ionicons name="chevron-back" size={20} color={"black"} onPress={navigation.goBack} />
      </HeaderButtonLeft>
      <HeaderButtonRight>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Bluebarry Pancake')}>
          <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
        </TouchableOpacity>
      </HeaderButtonRight>
      <Title>Breakfast</Title>
      <Container1>
      </Container1>
      <Text1>Search Pancake</Text1>
      <Image source={require('../Breakfast/Search.png')}
        style={{position: 'absolute',
          width: 15.64,
          height: 16.02,
          left: 47.31,
          top: 119.31
        }}
      />
      <Image source={require('../Breakfast/Filter.png')}
        style={{position: 'absolute',
          width: 20,
          height: 20,
          left: 310,
          top: 117,
        }}
      />
      <Text2>Category</Text2>
      <Container2>
      </Container2>
      <Text3>Salad</Text3>
      <Container3>         
      </Container3>
      <Image source={require('../Breakfast/Pic.png')}
        style={{position: 'absolute',
          width: 40,
          height: 41,
          left: 50,
          top: 236,
        }}
      />
      <Text4>Cake</Text4>
      <Container4></Container4>
      <Image source={require('../Breakfast/Ellipse 129.png')}
        style={{position: 'absolute',
          width: 40,
          height: 41,
          left: 145,
          top: 236
        }}
      />
      <Image source={require('../Breakfast/Vector8.png')}
        style={{position: 'absolute',
          width: 24,
          height: 16,
          left: 153,
          top: 249
        }}
      />
      <Text5>Pie</Text5>
      <Container5></Container5>
      <Image source={require('../Breakfast/Ellipse 129.png')}
        style={{position: 'absolute',
          width: 40,
          height: 41,
          left: 241,
          top: 236
        }}
      />
      <Image source={require('../Breakfast/Layer 2.png')}
        style={{position: 'absolute',
          width: 26,
          height: 16.25,
          left: 248,
          top: 249
        }}
      />
      <Text6>Smoothies</Text6>
      <Text7>Recommendation for Diet</Text7>
      <Container6>
      </Container6>
      <Image source={require('../Breakfast/Ellipse 129.png')}
        style={{position: 'absolute',
          width: 40,
          height: 41,
          left: 335,
          top: 236
        }}
      />
      <Image source={require('../Breakfast/Vector9.png')}
        style={{position: 'absolute',
          width: 25,
          height: 19,
          left: 343,
          top: 247
         }}
      />
      <Container7>
      </Container7>
      <Text8>View</Text8>
      <Text9>Honey Pancake</Text9>
      <Text10>Easy | 30mins | 180kCal</Text10>
      <Image source={require('../Breakfast/Vector4.png')}
        style={{position: 'absolute',
          width: 116,
          height: 80,
          left: 72,
          top: 444
        }}
      />
      <Container8></Container8>
      <Text11>View</Text11>
      <Text12>Easy | 20mins | 230kCal</Text12>
      <Text13>Canai Bread</Text13>
      <Image source={require('../Breakfast/Vector5.png')}
        style={{position: 'absolute',
          width: 99,
          height: 80,
          left: 280,
          top: 444
        }}
      />
      <Text14>Popular</Text14>
      <Container9></Container9>
      <Text15>Blueberry Pancake</Text15>
      <Text16>Medium | 30mins | 230kCal</Text16>
      <Image source={require('../Breakfast/Vector6.png')}
        style={{position: 'absolute',
          width: 90,
          height: 80,
          left: 30,
          top: 722
        }}
      />
      <Image source={require('../Breakfast/Ellipse.png')}
        style={{position: 'absolute',
          width: 24,
          height: 24,
          left: 306,
          top: 750
        }}
      />
      <Image source={require('../Breakfast/Icon-Arrow.png')}
        style={{position: 'absolute',
          width: 14,
          height: 14,
          left: 311,
          top: 755
        }}
      />
      <Container10></Container10>
      <Text17>Salmon Nigiri</Text17>
      <Text18>Medium | 20mins | 120kCal</Text18>
      <Image source={require('../Breakfast/Vector7.png')}
        style={{position: 'absolute',
          width: 90,
          height: 80,
          left: 30,
          top: 817
        }}
      />
      <Image source={require('../Breakfast/Ellipse.png')}
        style={{position: 'absolute',
          width: 24,
          height: 24,
          left: 306,
          top: 845
        }}
      />
      <Image source={require('../Breakfast/Icon-Arrow.png')}
        style={{position: 'absolute',
          width: 14,
          height: 14,
          left: 311,
          top: 850
        }}
      />
    </Container>
    </ScrollView>
  );
}
export default BreakfastScreen;
