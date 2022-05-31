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
        Container3,
        Text4,
        Text5,      
        Container4,
        Text6,
        Text7,
        Container5,
        Container6,
        Container7,
        Text8,
        Text9,
    }  
from './styles';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function SleepTrackerScreen ({navigation,route}) {
    const item = route.params;
    return(
        <ScrollView style={{background: '#FFFFFF'}}>
            <Container>
                <HeaderButtonLeft>
                    <Ionicons name="chevron-back" size={20} color={"black"} onPress={navigation.goBack} />
                </HeaderButtonLeft>
                <HeaderButtonRight>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Sleep Schedule')}>
                        <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
                    </TouchableOpacity>
                </HeaderButtonRight>
                <Title>Sleep Tracker</Title>
                <Image source={require('../SleepTracker/Graph-Section.png')}
                    style={{position: 'absolute',
                        width: 306,
                        height: 172,
                        left: 35,
                        top: 102
                    }}
                />
                <Container1></Container1>
                <Text1>Daily Sleep Schedule</Text1>
                <Container2>
                    <Text2>Check</Text2>
                </Container2>
                <Text3>Today Schedule</Text3>
                <Container3></Container3>
                <Text4>Bedtime, 09:00pm</Text4>
                <Text5>in 6hours 22minutes</Text5>
                <Image source={require('../SleepTracker/Toggle-Bg.png')}
                    style={{position: 'absolute',
                        width: 44,
                        height: 24,
                        left: 286,
                        top: 657
                    }}
                />
                <Image source={require('../SleepTracker/bed.png')}
                    style={{position: 'absolute',
                        width: 30,
                        height: 30,
                        left: 45,
                        top: 640
                    }}
                />
                <Image source={require('../SleepTracker/Icon-More.png')}
                    style={{position: 'absolute',
                        width: 14,
                        height: 14,
                        left: 316,
                        top: 623
                    }}
                />
                <Container4></Container4>
                <Text6>Alarm, 05:10am</Text6>
                <Text7>in 14hours 30minutes</Text7>
                <Image source={require('../SleepTracker/Toggle-Bg.png')}
                    style={{position: 'absolute',
                        width: 44,
                        height: 24,
                        left: 286,
                        top: 765
                    }}
                />
                <Image source={require('../SleepTracker/Icon-Alaarm.png')}
                    style={{position: 'absolute',
                        width: 30,
                        height: 30,
                        left: 45,
                        top: 748
                    }}
                />
                <Image source={require('../SleepTracker/Icon-More.png')}
                    style={{position: 'absolute',
                        width: 14,
                        height: 14,
                        left: 316,
                        top: 731
                    }}
                />
                <Container5></Container5>
                <Container6></Container6>
                <Container7></Container7>
                <Text8>Last Night Sleep</Text8>
                <Text9>8h 20m</Text9>
                <Image source={require('../SleepTracker/Sleep-Graph.png')}
                    style={{position: 'absolute',
                        width: 315,
                        height: 78,
                        left: 30,
                        top: 374
                    }}
                />
            </Container>
        </ScrollView>
    );
}
export default SleepTrackerScreen;