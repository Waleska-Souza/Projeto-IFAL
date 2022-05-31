import * as React from 'react';
import {Container,
        Container2,
        Container3,
        Container4,
        Container5,
        Container6,
        Container7
    } 
from './styles';
import { ScrollView,ImageBackground,Image} from 'react-native';

function Tela6Screen({navigation,route}) {
    const item = route.params;
    return(
        <ScrollView>
            <Container>
                <ImageBackground source={require ('../Tela6/Frame.png')} 
                    style={{height: 488.72,
                        width: 167.19,
                        left: 3.7,
                        top: 61.18,
                        borderRadius: 0,
                        left: 105.7,
                        right: 102.12,
                        bottom: 0.02,
                        position: 'absolute'
                    }}
                />
                <Container2></Container2>
                <Container3></Container3>
                <Image source={require('../Tela6/Camera.png')}
                    style={{position: 'absolute',
                    width: 18.5,
                    height: 16.32,
                    left:273.75,
                    top: 614.75
                    }}
                />
                <Image source={require('../Tela6/Camera1.png')}
                    style={{position: 'absolute',
                    width: 18.5,
                    height: 16.32,
                    left:178.75,
                    top: 614.75
                    }}
                />
                <Image source={require('../Tela6/zap-off 1.png')}
                    style={{position: 'absolute',
                    width: 24,
                    height: 24,
                    left: 80,
                    top: 611
                    }}
                />
                <Container4></Container4>
                <Image source={require('../Tela6/Group1.png')}
                    style={{position: 'absolute',
                    width: 18.58,
                    height: 55,
                    left: 55,
                    top: 712
                    }}
                />
                <Container5></Container5>
                <Image source={require('../Tela6/Vector14.png')}
                    style={{position: 'absolute',
                    width: 14,
                    height: 46,
                    left: 144,
                    top: 717
                    }}
                />
                <Container6></Container6>
                <Image source={require('../Tela6/Vector15.png')}
                    style={{position: 'absolute',
                    width: 15,
                    height: 46,
                    left: 221,
                    top: 717
                    }}
                />
                <Container7></Container7>
                <Image source={require('../Tela6/Vector16.png')}
                    style={{position: 'absolute',
                    width: 14,
                    height: 46,
                    left: 305,
                    top: 717
                    }}
                />
            </Container>
        </ScrollView>
        
    );
}
export default Tela6Screen; 