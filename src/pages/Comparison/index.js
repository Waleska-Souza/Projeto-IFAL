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
        Text4,
        Button1,
        Title1,        
    } 
from './styles';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function ComparisonScreen ({navigation,route}) {
    const item = route.params;
    return(
        <ScrollView style={{background: '#FFFFFF'}}>
            <Container>
                <HeaderButtonLeft>
                    <Ionicons name="chevron-back" size={20} color={"black"} onPress={navigation.goBack} />
                </HeaderButtonLeft>
                <HeaderButtonRight>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Result')}>
                        <Entypo name="dots-two-horizontal" size={20} color="#1D1617" />
                    </TouchableOpacity>
                </HeaderButtonRight>
                <Title>Comparison</Title>
                <Container1></Container1>
                <Text1>Select Month 1</Text1>
                <Text2>May</Text2>
                <Image source={require('../Comparison/Icon-Calendar.png')}
                    style={{position: 'absolute',
                        width: 18,
                        height: 18,
                        left: 45,
                        top: 117
                    }}
                />
                <Image source={require('../Comparison/Stroke 1.png')}
                    style={{position: 'absolute',
                        width: 10,
                        height: 10,
                        left: 318.38,
                        top: 120.75
                    }}
                />
                <Container2></Container2>
                <Text3>Select Month 2</Text3>
                <Text4>Select Month</Text4>
                <Image source={require('../Comparison/Icon-Calendar.png')}
                    style={{position: 'absolute',
                        width: 18,
                        height: 18,
                        left: 45,
                        top: 175
                    }}
                />
                <Image source={require('../Comparison/Stroke 1.png')}
                    style={{position: 'absolute',
                        width: 10,
                        height: 10,
                        left: 318.38,
                        top: 178.75
                    }}
                />
                <Button1>
                    <Title1>Compare</Title1>
                </Button1>
            </Container>
        </ScrollView>
    );
}
export default ComparisonScreen;