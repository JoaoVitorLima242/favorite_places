import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import { Alert } from 'react-native'

import Button from '../Button'
import * as S from './styles'

const LocationPicker = () => {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

    const verifyPermission = async () => {
        if (locationPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
            return await requestPermission()
        }

        if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant location permissions to use this app.'
            )

            return false
        }

        return true
    }
    
    const getLocationHandler = async () => {
        const hasPermission = await verifyPermission()
        if(!hasPermission) {
            return
        }

        const location = await getCurrentPositionAsync()

        console.log(location)
    }

    const pickOnMapHandler = async () => {
        const hasPermission = await verifyPermission()
        if(!hasPermission) {
            return
        }
    }

    return (
        <S.Wrapper>
            <S.MapPreview>

            </S.MapPreview>
            <S.Buttons>
                <Button icon='location' onPress={getLocationHandler}>Locate User</Button>
                <Button icon='map' onPress={pickOnMapHandler}>Pick on Map</Button>
            </S.Buttons>
        </S.Wrapper>
    )
}

export default LocationPicker