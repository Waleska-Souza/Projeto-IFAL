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
    Container3,
    Container4,
    Text5,
    Text6,
    Text7,
    Text8,
    Text9,
    Text10,
    Text11,
    Button1,
    Title1,
    } 
from './styles';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function ResultScreen ({navigation,route}) {
    const item = route.params;
    return(
        <ScrollView style={{background: '#FFFFFF'}}>
            <Container>
                <HeaderButtonLeft>
                    <Ionicons name="chevron-back" size={20} color={"black"} onPress={navigation.goBack} />
                </HeaderButtonLeft>
                <HeaderButtonRight>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Result1')}>
                        <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
                    </TouchableOpacity>
                </HeaderButtonRight>
                <Title>Result</Title>
                <Image source={require('../Result/Share-Navs.png')}
                    style={{position: 'absolute',
                        width: 32,
                        height: 32,
                        left: 266,
                        top: 16
                    }}
                />
                <Container1></Container1>
                <Text1>Statistic</Text1>
                <Container2></Container2>
                <Text2>Photo</Text2>
                <Text3>Average Progress</Text3>
                <Text4>Good</Text4>
                <Container3></Container3>
                <Container4></Container4>
                <Text5>62%</Text5>
                <Text6>May</Text6>
                <Text7>June</Text7>
                <Text8>Front Facing</Text8>
                <Image source={require('../Result/Rectangle 5909.png')}
                    style={{position: 'absolute',
                        width: 150,
                        height: 150,
                        left: 30,
                        top: 356
                    }}
                />
                <Image source={require('../Result/Rectangle 5910.png')}
                    style={{position: 'absolute',
                        width: 150,
                        height: 150,
                        left: 195,
                        top: 356
                    }}
                />
                <Text9>Back Facing</Text9>
                <Image source={require('../Result/Rectangle 5911.png')}
                    style={{position: 'absolute',
                        width: 150,
                        height: 150,
                        left: 30,
                        top: 557
                    }}
                />
                <Image source={require('../Result/Rectangle 5912.png')}
                    style={{position: 'absolute',
                        width: 150,
                        height: 150,
                        left: 195,
                        top: 557
                    }}
                />
                <Text10>Left Facing</Text10>
                <Image source={require('../Result/Rectangle 5913.png')}
                    style={{position: 'absolute',
                        width: 150,
                        height: 150,
                        left: 30,
                        top: 758
                    }}
                />
                <Image source={require('../Result/Rectangle 5914.png')}
                    style={{position: 'absolute',
                        width: 150,
                        height: 150,
                        left: 195,
                        top: 758
                    }}
                />
                <Text11>Right Facing</Text11>
                <Image source={require('../Result/Rectangle 5915.png')}
                    style={{position: 'absolute',
                        width: 150,
                        height: 150,
                        left: 30,
                        top: 959
                    }}
                />
                <Image source={require('../Result/Rectangle 5916.png')}
                    style={{position: 'absolute',
                        width: 150,
                        height: 150,
                        left: 195,
                        top: 959
                    }}
                />
                <Button1>
                    <Title1>Back to Home</Title1>
                </Button1>
            </Container>
        </ScrollView>
    );
}
export default ResultScreen;