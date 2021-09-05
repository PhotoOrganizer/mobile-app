import React from 'react'
import { View } from 'react-native';
import GoogleLogo from '../../assets/google-logo.svg';
import { SafeAreaView } from 'react-native-safe-area-context';

const header: any = {
    backgroundColor: 'white',
    color: '#636466',
    width: '100%',
    display: 'flex',
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
}

function Header() {
    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']}>
            <View style={header}>
                <GoogleLogo />
            </View>
        </SafeAreaView>
    )
}

export default Header
