import { useNavigation } from '@react-navigation/native'
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import { useState } from 'react'
import { Alert, Text } from 'react-native'

import { NavigationProps } from '../../../routes/types'
import { getMapPreview } from '../../../helpers/location'
import Button from '../Button'
import * as S from './styles'

const LocationPicker = () => {
    const navigation = useNavigation<NavigationProps>()
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

        const response = await getCurrentPositionAsync()

        const {latitude, longitude} = response.coords

        setPickedLocation(getMapPreview({
            latitude,
            longitude
        }))
    }

    const pickOnMapHandler = async () => {
        navigation.navigate('Map')
    }

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