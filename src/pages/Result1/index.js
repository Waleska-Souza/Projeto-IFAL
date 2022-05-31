import * as React from 'react';
import {Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import {Container,
    HeaderButtonLeft,
    HeaderButtonRight,
    Title,
    Container1,
    Text1,
    Container2,
    Text2,
    Text3,
    Text4,
    Text5,
    Text6,
    Text7,
    Text8,
    Container3,
    Container4,
    Text9,
    Text10,
    Text11,
    Text12,
    Text13,
    Text14,
    Text15,
    Text16,             
    Button1,
    Title1,                  
    } 
from './styles';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Result1Screen ({navigation,route}) {
    const item = route.params;
    return(
        <ScrollView style={{background: '#FFFFFF'}}>
            <Container>
                <HeaderButtonLeft>
                    <Ionicons name="chevron-back" size={20} color={"black"} onPress={navigation.goBack} />
                </HeaderButtonLeft>
                <HeaderButtonRight>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Tela 6')}>
                        <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
                    </TouchableOpacity>
                </HeaderButtonRight>
                <Title>Result</Title>
                <Image source={require('../Result1/Share-Navs.png')}
                    style={{position: 'absolute',
                        width: 32,
                        height: 32,
                        left: 266,
                        top: 16
                    }}
                />
                <Container1></Container1>
                <Text1>Photo</Text1>
                <Container2></Container2>
                <Text2>Statistic</Text2>
                <Image source={require('../Result1/Graph.png')}
                    style={{position: 'absolute',
                        width: 315,
                        height: 172,
                        left: 30,
                        top: 192
                    }}
                />
                <Image source={require('../Result1/Graphics - Modal.png')}
                    style={{position: 'absolute',
                        width: 98,
                        height: 35,
                        left: 152,
                        top: 204
                    }}
                />
                <Text3>May</Text3>
                <Text4>June</Text4>
                <Text5>Lose Weight</Text5>
                <Image source={require('../Result1/Group 10177.png')}
                    style={{position: 'absolute',
                        width: 243,
                        height: 10,
                        left: 66,
                        top: 468
                    }}
                />
                <Text6>33%</Text6>
                <Text7>67%</Text7>
                <Text8>Height Increase</Text8>
                <Container3></Container3>
                <Container4></Container4>
                <Text9>88%</Text9>
                <Text10>12%</Text10>
                <Text11>Muscle Mass Increase</Text11>
                <Image source={require('../Result1/Group 10179.png')}
                    style={{position: 'absolute',
                        width: 243,
                        height: 10,
                        left: 66,
                        top: 606
                    }}
                />
                <Text12>57%</Text12>
                <Text13>43%</Text13>
                <Text14>Abs</Text14>
                <Image source={require('../Result1/Group 10180.png')}
                    style={{position: 'absolute',
                        width: 244,
                        height: 10,
                        left: 65,
                        top: 675
                    }}
                />
                <Text15>89%</Text15>
                <Text16>11%</Text16>
                <Button1>
                    <Title1>Back to Home</Title1>
                </Button1>
            </Container>
        </ScrollView>
    );
}
export default Result1Screen;