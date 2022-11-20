import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import { useEffect, useState } from 'react'
import { useController } from 'react-hook-form'
import { Alert, Text } from 'react-native'

import { getMapPreview } from '../../../helpers/location'
import { RootStackParamList } from '../../../routes/types'
import Button from '../Button'
import * as S from './styles'

type TUseRoute = RouteProp<RootStackParamList, 'AddPlace'>
type TUseNavigation = StackNavigationProp<RootStackParamList, 'AddPlace'>

type Props = {
    control: any;
    name: string;
}

const LocationPicker = ({
    control,
    name
}: Props) => {
    const navigation = useNavigation<TUseNavigation>()
    const { params } = useRoute<TUseRoute>()

    const { field } = useController({
        name,
        control
    })

    const [pickedLocation, setPickedLocation] = useState('')

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

    const mapPickedLocation = params && params.pickedLocation;

    useEffect(() => {
        if (mapPickedLocation) {
            field.onChange(getMapPreview(mapPickedLocation))
            setPickedLocation(getMapPreview(mapPickedLocation))
        }
    }, [mapPickedLocation])

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

        field.onChange(getMapPreview({
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
                <Button     
                    outline 
                    icon='location' 
                    onPress={getLocationHandler}
                >
                    Locate User
                </Button>
                <Button 
                    outline
                    icon='map' onPress={pickOnMapHandler}
                >
                    Pick on Map
                </Button>
            </S.Buttons>
        </S.Wrapper>
    )
}

export default LocationPicker