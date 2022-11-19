import { useCallback, useLayoutEffect, useState } from "react"
import { Alert } from "react-native"
import { MapPressEvent, Marker, Region } from "react-native-maps"
import { StackScreenProps } from '@react-navigation/stack';


import { TLocation } from "../../helpers/location"

import * as S from './styles'
import { RootStackParamList } from "../../routes/types";
import IconButton from "../../components/ui/IconButton";

type Props = StackScreenProps<RootStackParamList, 'Map'>;


const Map = ({ navigation }: Props) => {
    const [ selectedLocation, setSelectedLocation ] = useState<TLocation | null>(null)

    const region: Region = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    const savePickedLocationHandler = useCallback(() => {
        if(!selectedLocation) {
            Alert.alert(
                'No location picked!',
                'You have to pick a location (by tapping on the map) first!'
            )
            return
        }

        navigation.navigate('AddPlace', {
            pickedLocation: selectedLocation
        })
    }, [navigation, selectedLocation])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: 
            ({tintColor}) => (
                <IconButton 
                    color={tintColor as string}
                    icon='save'
                    size={24}
                    onPress={savePickedLocationHandler}
                />
            )
        })
    }, [navigation, savePickedLocationHandler])

    const selectLoactionHandler = (event: MapPressEvent) => {
        const { latitude, longitude } = event.nativeEvent.coordinate

        setSelectedLocation({latitude, longitude})
    }

    return (
        <S.CustomMap 
            initialRegion={region} 
            onPress={selectLoactionHandler}
        >
            {
                selectedLocation &&
                <Marker 
                    title="Picked Location"
                    coordinate={selectedLocation}
                />
            }
        </S.CustomMap>
    )
}

export default Map