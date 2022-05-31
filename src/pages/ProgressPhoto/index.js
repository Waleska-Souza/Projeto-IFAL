import * as React from 'react';
import {Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import {Container,
        HeaderButtonLeft,
        HeaderButtonRight,
        Title,
        Container1,
        Text1,
        Text2,
        Container2,
        Text3,
        Container3,
        Text4,
        Container4,
        Text5,
        Container5,
        Text6,
        Text7,
        Text8,
        Text9,
        Text10
    } 
from './styles';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function ProgressPhotoScreen ({navigation,route}) {
    const item = route.params;
    return(
        <ScrollView style={{background: '#FFFFFF'}}>
            <Container>
                <HeaderButtonLeft>
                    <Ionicons name="chevron-back" size={20} color={"black"} onPress={navigation.goBack} />
                </HeaderButtonLeft>
                <HeaderButtonRight>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Comparison')}>
                        <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
                    </TouchableOpacity>
                </HeaderButtonRight>
                <Title>Progress Photo</Title>
                <Container1></Container1>
                <Text1>Reminder!</Text1>
                <Text2>Next Photos Fall On July 08</Text2>
                <Image source={require('../ProgressPhoto/Vector18.png')}
                    style={{position: 'absolute',
                        width: 60,
                        height: 60,
                        left: 45,
                        top: 117
                    }}
                />
                <Image source={require('../ProgressPhoto/x-icon.png')}
                    style={{position: 'absolute',
                        width: 16,
                        height: 16,
                        left: 314,
                        top: 117
                    }}
                />
                <Container2></Container2>
                <Text3>Track Your Progress Each Month With Photo</Text3>
                <Container3></Container3>
                <Text4>Learn More</Text4>
                <Image source={require('../ProgressPhoto/Frame1.png')}
                    style={{position: 'absolute',
                        width: 116,
                        height: 76,
                        left: 210,
                        top: 242
                    }}
                />
                <Container4></Container4>
                <Text5>Compare my Photo</Text5>
                <Container5></Container5>
                <Text6>Compare</Text6>
                <Text7>Gallery</Text7>
                <Text8>See more</Text8>
                <Text9>2 June</Text9>
                <Image source={require('../ProgressPhoto/Rectangle 5834.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 30,
                        top: 533
                    }}
                />
                <Image source={require('../ProgressPhoto/Rectangle 5836.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 140,
                        top: 533
                    }}
                />
                <Image source={require('../ProgressPhoto/Rectangle 5835.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 250,
                        top: 533
                    }}
                />
                <Image source={require('../ProgressPhoto/Rectangle 5837.png')}
                    style={{position: 'absolute',
                        width: 10,
                        height: 100,
                        left: 360,
                        top: 533,
                        borderRadius: 14
                    }}
                />
                <Text10>5 May</Text10>
                <Image source={require('../ProgressPhoto/Rectangle 5838.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 30,
                        top: 676
                    }}
                />
                <Image source={require('../ProgressPhoto/Rectangle 5841.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 140,
                        top: 676
                    }}
                />
                <Image source={require('../ProgressPhoto/Rectangle 5839.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 250,
                        top: 676
                    }}
                />
                <Image source={require('../ProgressPhoto/Rectangle 5840.png')}
                    style={{position: 'absolute',
                        width: 15,
                        height: 100,
                        left: 360,
                        top: 676,
                        borderRadius: 14
                    }}
                />
                <Image source={require('../ProgressPhoto/Navbar-Bg.png')}
                    style={{position: 'absolute',
                        width: 375,
                        height: 80,
                        top: 816
                    }}
                />
                <Image source={require('../ProgressPhoto/Button.png')}
                    style={{position: 'absolute',
                        width: 100,
                        height: 100,
                        left: 285,
                        top: 726
                    }}
                />
            </Container>
        </ScrollView>
    );
}
export default ProgressPhotoScreen;