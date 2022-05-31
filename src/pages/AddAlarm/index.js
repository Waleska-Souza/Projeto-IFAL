import * as React from 'react';
import {Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { 
        Container,
        Title,
        HeaderButtonLeft,
        HeaderButtonRight,
        Container1,
        Container2,
        Container3,
        Container4,
        Text1,
        Text2,
        Text3,
        Text4,
        Title1,
        Button1,
        Container5,
        Circulo,
        Text5,
        Text6,
        Text7
    } 
from './styles';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function AddAlarmScreen({navigation,route}) {
    const item = route.params;
    return(
        <ScrollView style={{background: '#FFFFFF'}}>
            <Container>
                <HeaderButtonLeft>
                    <Ionicons name="chevron-back" size={20} color={"black"} onPress={navigation.goBack} />
                </HeaderButtonLeft>
                <HeaderButtonRight>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Progress Photo')}>
                        <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
                    </TouchableOpacity>
                </HeaderButtonRight>
                <Title>Add Alarm</Title>
                <Container1> 
                </Container1>
                <Text1>Bedtime</Text1>
                <Text5>09:00 PM</Text5>
                <Image source={require('../AddAlarm/Vector13.png')}
                    style={{position: 'absolute',
                    width: 19.38,
                    height: 13.75,
                    left: 45.31,
                    top: 120.12
                    }}
                />
                <Image source={require('../AddAlarm/Stroke 1.png')}
                    style={{position: 'absolute',
                    width: 10,
                    height: 10,
                    left: 317.08,
                    top: 121.17
                    }}
                />
                <Container2>
                </Container2>
                <Text2>Hours of sleep</Text2>
                <Text6>8hours 30minutes</Text6>
                <Image source={require('../AddAlarm/Time Circle.png')}
                    style={{position: 'absolute',
                    width: 15.42,
                    height: 15.42,
                    left: 47.29,
                    top: 179.29
                    }}
                />
                <Image source={require('../AddAlarm/Stroke 1.png')}
                    style={{position: 'absolute',
                    width: 10,
                    height: 10,
                    left: 317.08,
                    top: 181.17
                    }}
                />
                <Container3>
                </Container3>
                <Text3>Repeat</Text3>
                <Text7>Mon to Fri</Text7>
                <Image source={require('../AddAlarm/repeat.png')}
                    style={{position: 'absolute',
                    width: 20,
                    height: 20,
                    left: 45,
                    top: 237
                    }}
                />
                <Image source={require('../AddAlarm/Stroke 1.png')}
                    style={{position: 'absolute',
                    width: 10,
                    height: 10,
                    left: 317.08,
                    top: 241.17
                    }}
                />
                <Container4>
                    <Container5></Container5>
                    <Circulo></Circulo>
                </Container4>
                <Text4>vibrate When Alarm Sound</Text4>
                <Image source={require('../AddAlarm/Group.png')}
                    style={{position: 'absolute',
                    width: 20,
                    height: 20,
                    left: 45,
                    top: 297
                    }}
                />              
                <Button1>               
                    <Title1>Add</Title1>
                </Button1>
            </Container>
        </ScrollView>       
    );
};


export default AddAlarmScreen;