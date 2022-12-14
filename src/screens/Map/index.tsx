import { useCallback, useLayoutEffect, useState } from "react"
import { Alert } from "react-native"
import { MapPressEvent, Marker, Region } from "react-native-maps"
import { StackScreenProps } from '@react-navigation/stack';

// Types
import { TLocation } from "../../models/Place/index.d"
import { RootStackParamList } from "../../routes/types";
// Styles
import * as S from './styles'
// Components
import IconButton from "../../components/ui/IconButton";

type Props = StackScreenProps<RootStackParamList, 'Map'>;


const Map = ({ navigation, route }: Props) => {
    const initialLocation: TLocation | null = route.params?.initialLocation || null

    const [ selectedLocation, setSelectedLocation ] = useState<TLocation | null>(initialLocation)

    const region: Region = {
        latitude: initialLocation?.latitude || 37.78,
        longitude: initialLocation?.longitude || -122.43,
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
    }, [navigation, selectedLocation, initialLocation])

    useLayoutEffect(() => {
        if(initialLocation) {
            return
        }

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
        if(initialLocation) {
            return
        }
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