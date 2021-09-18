import React from 'react'
import { View } from 'react-native';
import GoogleLogo from '../../assets/google-logo.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-elements';

const header: any = {
    backgroundColor: 'white',
    color: '#636466',
    width: '100%',
    display: 'flex',
    flex: 1,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}

const logo: any = {
    flex: 1,
    left: 15,
    top: 5
}

const avatar: any = {
    left: 85
}

interface Props {
    user: {
        photoURL?: string,
        name: string
    }
}

function Header({ user: { photoURL, name } }: Props) {
    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']}>
            <View style={header}>
                <GoogleLogo style={logo} />
                <Avatar
                    containerStyle={avatar}
                    rounded
                    source={{
                        uri:
                            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                    }}
                    title='DM'
                />
            </View>
        </SafeAreaView>
    )
}

export default Header
