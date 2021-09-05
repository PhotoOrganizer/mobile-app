import React from 'react'
import { View, Text } from 'react-native';
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
    left: 20
}

function Header() {
    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']}>
            <View style={header}>
                <GoogleLogo style={{ marginRight: 85 }} />
            </View>
            <View style={{ ...header, left: 50, paddingTop: 0, top: -3 }}>
                <Text style={{ fontSize: 26, fontWeight: '600', color: '#636466' }}>
                    Photos
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Header
