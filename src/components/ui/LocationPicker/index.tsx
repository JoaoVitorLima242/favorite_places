import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import { useState } from 'react'
import { Alert, Text } from 'react-native'
import { getMapPreview } from '../../../helpers/location'

import Button from '../Button'
import * as S from './styles'

const LocationPicker = () => {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

    const [pickedLocation, setPickedLocation] = useState('')

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

        const { coords } = await getCurrentPositionAsync()

        setPickedLocation(getMapPreview({
            lat: coords.latitude,
            lng: coords.longitude
        }))
    }

    const pickOnMapHandler = async () => {
        const hasPermission = await verifyPermission()
        if(!hasPermission) {
            return
        }
    }
    console.log()

    return (
        <S.Wrapper>
            <S.MapPreview>
            {
                pickedLocation 
                ? <S.PickedImage source={{uri: pickedLocation}}/>
                : <Text>No image taken yet.</Text>
                }
            </S.MapPreview>
            <S.Buttons>
                <Button icon='location' onPress={getLocationHandler}>Locate User</Button>
                <Button icon='map' onPress={pickOnMapHandler}>Pick on Map</Button>
            </S.Buttons>
        </S.Wrapper>
    )
}

export default LocationPicker