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
        Text3,
        Container2,
        Text4,
        Text5,
        Container3,
        Text6,
        Text7,
        Container4,
        Text8,
        Text9,
        Container5,
        Text10,
        Text11,
        Container6,
        Text12,
        Text13,
        Container7,
        Text14,
        Text15,
        Container8,
        Text16,
        Text17,
        Container9,
        Container10,
        Text18,
        Text19,
        Container11,
        Container12,
        Text20,
        Container14,
        Text21,
        Container15,
        Container16,
        Text22
    } 
from './styles';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function SleepScheduleScreen ({navigation,route}) {
    const item = route.params;
    return(
        <ScrollView style={{background: '#FFFFFF'}}>
            <Container>
                <HeaderButtonLeft>
                    <Ionicons name="chevron-back" size={20} color={"black"} onPress={navigation.goBack} />
                </HeaderButtonLeft>
                <HeaderButtonRight>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Add Alarm')}>
                        <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
                    </TouchableOpacity>
                </HeaderButtonRight>
                <Title>Sleep Schedule</Title>
                <Container1></Container1>
                <Text1>Ideal Hours for Sleep</Text1>
                <Text2>8hours 30minutes</Text2>
                <Container16></Container16>
                <Text22>Learn More</Text22>
                <Image source={require('../SleepSchedule/Vector17.png')}
                    style={{position: 'absolute',
                        width: 118,
                        height: 100,
                        left: 206.99,
                        top: 122
                    }}
                />
                <Text3>Your Schedule</Text3>
                <Container2></Container2>
                <Text4>Tue</Text4>
                <Text5>11</Text5>
                <Container3></Container3>
                <Text6>Wed</Text6>
                <Text7>12</Text7>
                <Container4></Container4>
                <Text8>Thus</Text8>
                <Text9>13</Text9>
                <Container5></Container5>
                <Text10>Fri</Text10>
                <Text11>14</Text11>
                <Container6></Container6>
                <Text12>Sat</Text12>
                <Text13>15</Text13>
                <Container7></Container7>
                <Text14>Sun</Text14>
                <Text15>16</Text15>
                <Container8></Container8>
                <Text16>Bedtime, 09:00pm</Text16>
                <Text17>in 6hours 22minutes</Text17>
                <Image source={require('../SleepSchedule/bed.png')}
                    style={{position: 'absolute',
                        width: 30,
                        height: 30,
                        left: 45,
                        top: 453
                    }}
                />
                <Image source={require('../SleepSchedule/Icon-More.png')}
                    style={{position: 'absolute',
                        width: 14,
                        height: 14,
                        left: 316,
                        top: 436
                    }}
                />
                <Image source={require('../SleepSchedule/Toggle-Bg.png')}
                    style={{position: 'absolute',
                        width: 44,
                        height: 24,
                        left: 286,
                        top: 470
                    }}
                />
                <Container9></Container9>
                <Container10></Container10>
                <Text18>Alarm, 05:10am</Text18>
                <Text19>in 14hours 30minutes</Text19>
                <Image source={require('../SleepSchedule/Icon-Alaarm.png')}
                    style={{position: 'absolute',
                        width: 30,
                        height: 30,
                        left: 45,
                        top: 561
                    }}
                />
                <Image source={require('../SleepSchedule/Icon-More.png')}
                    style={{position: 'absolute',
                        width: 14,
                        height: 14,
                        left: 316,
                        top: 544
                    }}
                />
                <Image source={require('../SleepSchedule/Toggle-Bg.png')}
                    style={{position: 'absolute',
                        width: 44,
                        height: 24,
                        left: 286,
                        top: 578
                    }}
                />
                <Container11></Container11>
                <Container12></Container12>
                <Text20>You will get 8hours 10minutes for tonight</Text20>
                <Container14></Container14>
                <Text21>96%</Text21>
                <Container15></Container15>
                <Image source={require('../SleepSchedule/Vector12.png')}
                    style={{position: 'absolute',
                        width: 11.08,
                        height: 11.08,
                        left: 309.46,
                        top: 736.46
                    }}
                />
            </Container>
        </ScrollView>
    );
}
export default SleepScheduleScreen;